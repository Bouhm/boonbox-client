import React from 'react';
import Board from './board/Board';
import Canvas from './board/Canvas';
import Toolbar from './toolbar/Toolbar';

const App: React.FC = () => {
  return (
    <div className="app">
      <Toolbar isOpen={true} />
      <Board />
      <Canvas bgImgUrl={''} />
    </div>
  );
};

export default App;
