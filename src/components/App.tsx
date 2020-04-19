import React from 'react';
import Board from './board/Board';
import Canvas from './board/Canvas';

const App: React.FC = () => {
  return (
    <div className="app">
      <Board />
      <Canvas bgImgUrl={''} />
    </div>
  );
};

export default App;
