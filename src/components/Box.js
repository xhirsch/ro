import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { PositionalAudio } from 'drei';

function Box(...props) {
  const mesh = useRef();
  return (
    <mesh>
      <sphereBufferGeometry
        attach="geometry"
        widthSegments={32}
        heightSegments={32}
      />
      <meshStandardMaterial attach="material" color="hotpink" />
      <PositionalAudio url="/2020_26_web.mp3" distance={5} />
    </mesh>
  );
}

export default Box;
