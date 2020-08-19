import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { setBoard } from '../store/board/actions';
import { setCanvas } from '../store/canvas/actions';
import Board, { BoardProps } from './board/Board';
import Canvas, { CanvasProps } from './canvas/Canvas';
import Sidebar, { SidebarProps } from './sidebar/Sidebar';

export type AppState = {
  board: BoardProps;
  canvas: CanvasProps;
  sidebar: SidebarProps;
};

const App: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <div className="app">
      <Sidebar />
      <Canvas />
      <Board />
    </div>
  );
};

export default connect(undefined, { setBoard, setCanvas })(App);
