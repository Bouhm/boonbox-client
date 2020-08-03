import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { initialState } from "../store";
import { setBoard } from "../store/board/actions";
import { setCanvas } from "../store/canvas/actions/actions";
import Board, { BoardProps } from "./board/Board";
import Canvas, { CanvasProps } from "./board/Canvas";
import Toolbar, { ToolbarProps } from "./toolbar/Toolbar";

export type AppState = {
  board: BoardProps;
  canvas: CanvasProps;
  toolbar: ToolbarProps;
};

const App: React.FC = () => {
  useEffect(() => {
    setBoard(initialState.board);
    setCanvas(initialState.canvas);
  }, []);

  return (
    <div className="app">
      <Toolbar />
      <Canvas />
      <Board />
    </div>
  );
};

export default connect(undefined, { setBoard, setCanvas })(App);
