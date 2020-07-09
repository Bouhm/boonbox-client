import React, { useEffect, useState } from 'react';
import _Moveable from './Moveable';
import './Board.css';

export type BoardProps = {};

const Board = (props: BoardProps) => {
  const [target, setTarget] = useState<string>();

  const handleClickTarget = (e: React.MouseEvent) => {
    const classList = e.currentTarget.classList;
    let className = '';

    for (let i = 0; i < classList.length; i++) {
      className += `.${classList[i]}`;
    }

    setTarget(className);
  };

  const handleLoseFocus = () => {
    setTarget('');
  };

  return (
    <div>
      {target && <_Moveable target={document.querySelector(`${target}`) as HTMLElement} />}
      <div tabIndex={0} className="text moveable" onClick={handleClickTarget} onBlur={handleLoseFocus}>
        HENLO
      </div>
    </div>
  );
};

export default Board;
