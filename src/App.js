import React from 'react';
import styled from 'styled-components';

import { Canvas } from 'react-three-fiber';
import { OrbitControls } from 'drei';

import Box from './components/Box';

const StyledApp = styled.div`
  background: cornflowerblue;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <StyledApp>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[1, 1, 1]} />
        <OrbitControls />
      </Canvas>
    </StyledApp>
  );
}

export default App;
