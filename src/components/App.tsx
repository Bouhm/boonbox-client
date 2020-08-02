import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { setBoard, setCanvas } from "../store/actions";
import { initialState } from "../store/reducers";
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
      <Canvas {...initialState.canvas} />
      <Board {...initialState.board} />
    </div>
  );
};

export default connect(undefined, { setBoard, setCanvas })(App);
