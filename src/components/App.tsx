import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { setBoard } from '../store/board/actions';
import { setCanvas } from '../store/canvas/actions';
import Board, { BoardProps } from './board/Board';
import Canvas, { CanvasProps } from './canvas/Canvas';
import Tools, { ToolsProps } from './sidebar/Tools';

export type AppState = {
  board: BoardProps;
  canvas: CanvasProps;
  toolbar: ToolsProps;
};

const App: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <div className="app">
      <Tools />
      <Canvas />
      <Board />
    </div>
  );
};

export default connect(undefined, { setBoard, setCanvas })(App);
