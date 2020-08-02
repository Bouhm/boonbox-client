import "./Board.css";

import React, { useState } from "react";
import { connect } from "react-redux";

import { removePiece, updatePiece } from "../../store/actions";
import { AppState } from "../App";
import _Moveable from "./Moveable";
import { IObjectPiece } from "./ObjectPiece";

export type BoardProps = {
  pieces: IObjectPiece[];
};

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

  const renderObjectPiece = (piece: IObjectPiece) => {
    switch (piece.type) {
      case 'image':
        return (
          <div className="text moveable" onClick={handleClickTarget} onBlur={handleLoseFocus}>
            <img src={piece.data} />
          </div>
        );
      case 'text':
        return (
          <div className="text moveable" onClick={handleClickTarget} onBlur={handleLoseFocus}>
            {piece.data}
          </div>
        );
    }
  };

  return (
    <div>
      {targets[0] && <_Moveable target={document.querySelector(`${targets[0]}`) as HTMLElement} />}
      {pieces.map(renderObjectPiece)}
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    board: state.board,
  };
};

export default connect(mapStateToProps, { updatePiece, removePiece })(Board);
