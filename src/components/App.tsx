import React from 'react';
import styled from 'styled-components';

import Board from './board/Board';
import Canvas from './board/Canvas';

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Canvas bgImgUrl={'https://designshack.net/wp-content/uploads/placeholder-image.png'} />
    </AppContainer>
  );
};

export default App;
