import React from 'react';

import Board from './board/Board';
import Canvas from './board/Canvas';



const App: React.FC = () => {
  return (
    <div>
      <Canvas bgImgUrl={'https://designshack.net/wp-content/uploads/placeholder-image.png'} />
    </div>
  );
};

export default App;
