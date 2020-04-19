import React from 'react';
import _Moveable from './Moveable';
import './Board.css';

export type BoardProps = {};

const Board = (props: BoardProps) => {
  const target = document.querySelector<HTMLImageElement>('.moveable') as HTMLElement;

  return (
    <div>
      <_Moveable target={target} />
      <div className="moveable">
        <span>HENLO</span>
      </div>
    </div>
  );
};

export default Board;
