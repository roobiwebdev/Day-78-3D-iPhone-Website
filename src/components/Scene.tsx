import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';  // Adjust the import path if needed

function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls />
      <Model item={{ img: '/path/to/your/texture.jpg', color: ['#ffffff'] }} />
    </Canvas>
  );
}

export default Scene;
