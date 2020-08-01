import React from 'react';
import { setBoard, setCanvas } from '../store/actions'
import Board, { BoardProps } from './board/Board';
import Canvas, { CanvasProps } from './board/Canvas';
import Toolbar, { ToolbarProps } from './toolbar/Toolbar';
import { connect } from 'react-redux';

export type AppState = {
  board: BoardProps,
  canvas: CanvasProps,
  toolbar: ToolbarProps
}

const App: React.FC = () => {
  return (
    <div className="app">
      <Toolbar isOpen={true} />
      <Board pieces={[]} />
      <Canvas bgImgUrl={""} color={""} />
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    data: {
      board: state.board,
      canvas: state.canvas,
    }
  };
};

export default connect(
  mapStateToProps,
  { setBoard, setCanvas }
)(App);