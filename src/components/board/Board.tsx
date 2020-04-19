import React, { useEffect, useState } from 'react';
import _Moveable from './Moveable';
import './Board.css';

export type BoardProps = {};

const Board = (props: BoardProps) => {
  const [target, setTarget] = useState<HTMLElement>();

  useEffect(() => {
    setTarget(document.querySelector('.moveable') as HTMLElement);
  }, []);

  return (
    <div>
      <_Moveable target={target} />
      <div className="moveable">HENLO</div>
    </div>
  );
};

export default Board;
