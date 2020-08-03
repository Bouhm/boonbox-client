import './Board.css';

import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { removePiece, updatePiece } from '../../store/board/actions';
import { AppState } from '../App';
import _Moveable from './Moveable';
import { IObjectPiece } from './ObjectPiece';

export type BoardProps = {
  pieces: IObjectPiece[];
};

type Props = BoardProps & ConnectedProps<typeof connector>;

const Board = ({ pieces, updatePiece, removePiece }: Props) => {
  const [target, setTarget] = useState<string>('');

  const handleClickTarget = (e: React.MouseEvent) => {
    setTarget(`#${e.currentTarget.id}`);
  };

  const handleLoseFocus = () => {
    setTarget('');
  };

  const renderObjectPiece = (piece: IObjectPiece) => {
    let content = <>{piece.data}</>;

    switch (piece.type) {
      case 'image':
        content = <img src={piece.data} />;
        break;
    }

    return (
      <div
        key={piece.key}
        id={piece.key}
        className="moveable"
        tabIndex={0}
        onClick={handleClickTarget}
        onBlur={handleLoseFocus}
      >
        {content}
      </div>
    );
  };

  return (
    <div>
      {target.length > 0 && <_Moveable target={document.querySelector(`${target}`) as HTMLElement} />}
      {pieces && pieces.map(renderObjectPiece)}
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return { ...state.board };
};

const connector = connect(mapStateToProps, { updatePiece, removePiece });

export default connector(Board);
