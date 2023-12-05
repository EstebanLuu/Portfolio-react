import {
  OrbitControls,
  Stars
} from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import { TextureLoader } from 'three'; // Import DirectionalLight from three
import Textura from '../models/textures/Material__50_baseColor.jpeg';

const Scenes = () => {
  const mesh = useRef();
  const texture = useLoader(TextureLoader, Textura);

  useEffect(() => {
    if (mesh.current) {
      mesh.current.rotation.y = 0.5;
    }
  }, []);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.005;
    }
  });

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.2} />

      {/* Use DirectionalLight from three */}
      <directionalLight color='white' intensity={2} position={[20, -15, 20]} />

      <mesh ref={mesh}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial
          envMapIntensity={10}
          roughness={3}
          metalness={0}
          map={texture}
          color={'#f3f3F3'}
        />
      </mesh>
      <Stars
        radius={200}
        depth={50}
        count={5000}
        factor={20}
        saturation={0}
        fade
        speed={1}
      />
    </>
  );
};

export default Scenes;
