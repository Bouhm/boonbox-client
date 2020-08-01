import React, { useEffect, useState } from 'react';
import { IObjectPiece } from "./ObjectPiece";
import _Moveable from './Moveable';
import './Board.css';

export type BoardProps = {
  pieces: IObjectPiece[];
}

const Board = ({ pieces }: BoardProps) => {
  const [targets, setTargets] = useState<string[]>([]);

  const handleClickTarget = (e: React.MouseEvent) => {
    const classList = e.currentTarget.classList;
    let className = '';

    for (let i = 0; i < classList.length; i++) {
      className += `.${classList[i]}`;
    }

    setTargets([className]);
  };

  const handleLoseFocus = () => {
    setTargets([]);
  };

  return (
    <div>
      {targets[0] && <_Moveable target={document.querySelector(`${targets[0]}`) as HTMLElement} />}
      <div tabIndex={0} className="text moveable" onClick={handleClickTarget} onBlur={handleLoseFocus}>
        HENLO
      </div>
    </div>
  );
};

export default Board;
