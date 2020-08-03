import React, { useCallback, useEffect, useRef, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../App';

import { Position } from './ObjectPiece';
import { selectColor, changeBackground } from '../../store/canvas/actions';

export type CanvasProps = {
  bgImgUrl?: string;
  color?: string;
};

type Props = CanvasProps & ConnectedProps<typeof connector>;

const Canvas = ({ bgImgUrl, color = '#000' }: CanvasProps) => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPainting, setIsPainting] = useState(false);
  const [mousePosition, setMousePosition] = useState<Position | undefined>(undefined);

  const startPaint = useCallback((event: MouseEvent) => {
    const coordinates = getCoordinates(event);
    if (coordinates) {
      setMousePosition(coordinates);
      setIsPainting(true);
    }
  }, []);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener('mousedown', startPaint);
    return () => {
      canvas.removeEventListener('mousedown', startPaint);
    };
  }, [startPaint]);

  const paint = useCallback(
    (event: MouseEvent) => {
      if (isPainting) {
        const endMousePosition = getCoordinates(event);
        if (mousePosition && endMousePosition) {
          drawLine(mousePosition, endMousePosition);
          setMousePosition(endMousePosition);
        }
      }
    },
    [isPainting, mousePosition]
  );

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener('mousemove', paint);
    return () => {
      canvas.removeEventListener('mousemove', paint);
    };
  }, [paint]);

  const endPaint = useCallback(() => {
    setIsPainting(false);
    setMousePosition(undefined);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener('mouseup', endPaint);
    canvas.addEventListener('mouseleave', endPaint);

    return () => {
      canvas.removeEventListener('mouseup', endPaint);
      canvas.removeEventListener('mouseleave', endPaint);
    };
  }, [endPaint]);

  const getCoordinates = (event: MouseEvent): Position | undefined => {
    if (!canvasRef.current) {
      return;
    }

    const canvas: HTMLCanvasElement = canvasRef.current;
    return { x: event.pageX - canvas.offsetLeft, y: event.pageY - canvas.offsetTop };
  };

  const drawLine = (startMousePosition: Position, endMousePosition: Position) => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    const context = canvas.getContext('2d');

    if (context) {
      context.strokeStyle = color;
      context.lineJoin = 'round';
      context.lineWidth = 5;

      context.beginPath();
      context.moveTo(startMousePosition.x, startMousePosition.y);
      context.lineTo(endMousePosition.x, endMousePosition.y);
      context.closePath();
      context.stroke();
    }
  };

  return <canvas ref={canvasRef} height={height} width={width} />;
};

const mapStateToProps = (state: AppState) => {
  return { ...state.canvas };
};

const connector = connect(mapStateToProps, { selectColor, changeBackground });

export default connector(Canvas);
