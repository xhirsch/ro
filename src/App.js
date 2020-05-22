import React, { Suspense } from 'react';
import styled from 'styled-components';

import { Canvas } from 'react-three-fiber';
import { OrbitControls, PositionalAudio } from 'drei';

import Box from './components/Box';

const StyledApp = styled.div`
  background: cornflowerblue;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <StyledApp>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
        <OrbitControls enablePan={true} enableRotate={true} zoomSpeed={0.5} />
      </Canvas>
    </StyledApp>
  );
}

export default App;
