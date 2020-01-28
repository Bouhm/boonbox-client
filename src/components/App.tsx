import React from 'react';

import Board from './board/Board';
import Canvas from './board/Canvas';
import Background from './board/Background';

const App: React.FC = () => {
  return (
    <div className="App">
      <Background bgImgUrl={'https://designshack.net/wp-content/uploads/placeholder-image.png'} />
      <Canvas />
    </div>
  );
};

export default App;
