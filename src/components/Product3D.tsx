import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import * as THREE from 'three';

interface Product3DProps {
  color?: string;
  autoRotate?: boolean;
}

function ProductBox({ color = '#3498db', autoRotate = false }: Product3DProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Box ref={meshRef} args={[2, 2, 2]}>
      <meshStandardMaterial color={color} metalness={0.4} roughness={0.2} />
    </Box>
  );
}

export const Product3D = ({ color, autoRotate = true }: Product3DProps) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <ProductBox color={color} autoRotate={autoRotate} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};
