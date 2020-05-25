import React, { useRef, Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { PositionalAudio, OrbitControls } from 'drei';

function AUDIO(...props) {
  const mesh = useRef();
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <mesh>
          <sphereBufferGeometry
            attach="geometry"
            widthSegments={32}
            heightSegments={32}
          />
          <meshStandardMaterial attach="material" color="hotpink" />
          <PositionalAudio
            url="/2020_26_web.mp3"
            distance={5}
            loop
            {...props}
          />
        </mesh>
      </Suspense>
      <OrbitControls enablePan={true} enableRotate={true} zoomSpeed={0.5} />
    </Canvas>
  );
}

export default AUDIO;
