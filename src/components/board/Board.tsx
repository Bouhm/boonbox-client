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
    const classList = e.currentTarget.classList;
    let className = 'moveable';

    for (let i = 0; i < classList.length; i++) {
      className += `.${classList[i]}`;
    }

    setTarget(className);
  };

  const handleLoseFocus = () => {
    setTarget('');
  };

  const renderObjectPiece = (piece: IObjectPiece, idx: number) => {
    switch (piece.type) {
      case 'image':
        return (
          <div key={idx} tabIndex={0} onClick={handleClickTarget} onBlur={handleLoseFocus}>
            <img src={piece.data} />
          </div>
        );
      case 'text':
        return (
          <div key={idx} tabIndex={0} onClick={handleClickTarget} onBlur={handleLoseFocus}>
            {piece.data}
          </div>
        );
    }
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
