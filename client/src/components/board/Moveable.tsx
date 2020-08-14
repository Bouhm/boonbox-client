import Moveable, { OnDrag, OnScale, OnRotate } from 'react-moveable';
import React, { useRef } from 'react';

export type MoveableProps = {
  target: HTMLElement | SVGElement | undefined;
};

const _Moveable = ({ target }: MoveableProps) => {
  const ref = useRef() as React.MutableRefObject<Moveable>;

  return (
    <Moveable
      ref={ref}
      target={target}
      container={null}
      origin={true}
      /* Resize event edges */
      edge={false}
      /* draggable */
      draggable={true}
      throttleDrag={0}
      onDragStart={({ target, clientX, clientY }) => {
        console.log('onDragStart', target);
      }}
      onDrag={({
        target,
        beforeDelta,
        beforeDist,
        left,
        top,
        right,
        bottom,
        delta,
        dist,
        transform,
        clientX,
        clientY,
      }: OnDrag) => {
        // target!.style.left = `${left}px`;
        // target!.style.top = `${top}px`;
        target!.style.transform = transform;
      }}
      onDragEnd={({ target, isDrag, clientX, clientY }) => { }}
      /* When resize or scale, keeps a ratio of the width, height. */
      keepRatio={false}
      /* scalable */
      /* Only one of resizable, scalable, warpable can be used. */
      scalable={true}
      throttleScale={0}
      onScaleStart={({ target, clientX, clientY }) => { }}
      onScale={({ target, scale, dist, delta, transform, clientX, clientY }: OnScale) => {
        target!.style.transform = transform;
      }}
      onScaleEnd={({ target, isDrag, clientX, clientY }) => { }}
      /* rotatable */
      rotatable={true}
      throttleRotate={0}
      onRotateStart={({ target, clientX, clientY }) => { }}
      onRotate={({ target, delta, dist, transform, clientX, clientY }: OnRotate) => {
        target!.style.transform = transform;
      }}
      onRotateEnd={({ target, isDrag, clientX, clientY }) => { }}
      // Enabling pinchable lets you use events that
      // can be used in draggable, resizable, scalable, and rotateable.
      pinchable={true}
      onPinchStart={({ target, clientX, clientY, datas }) => {
        // pinchStart event occur before dragStart, rotateStart, scaleStart, resizeStart
      }}
      onPinch={({ target, clientX, clientY, datas }) => {
        // pinch event occur before drag, rotate, scale, resize
      }}
      onPinchEnd={({ isDrag, target, clientX, clientY, datas }) => {
        // pinchEnd event occur before dragEnd, rotateEnd, scaleEnd, resizeEnd
      }}
    />
  );
};

export default _Moveable;
