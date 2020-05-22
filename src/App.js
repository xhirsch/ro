import React from 'react';
import './App.css';
import { Canvas } from 'react-three-fiber';
import Box from './components/Box';
import { OrbitControls } from 'drei';

function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[1, 1, 1]} />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
