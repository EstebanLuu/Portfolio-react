import React from 'react';
import { Canvas } from '@react-three/fiber';
import Scenes from './scenes';
import './index.scss';

const Index = () => {
  return (
    <div className='landingContainer'>
      <div className='heroLanding'>
        <a className='landingDirectioner' href='/portfolio'>
          Enter 🚀
        </a>
        <h3>Nicolás Esteban Luna - Full-Stack Developer</h3>
      </div>
      <Canvas className='canvas'>
        <Scenes />
      </Canvas>
    </div>
  );
};

export default Index;
