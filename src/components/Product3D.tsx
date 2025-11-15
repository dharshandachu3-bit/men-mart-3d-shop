import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface Product3DProps {
  color?: string;
  autoRotate?: boolean;
}

function Mannequin({ color = '#3498db', autoRotate = false }: Product3DProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.5, 0]}>
      {/* Head */}
      <mesh position={[0, 2.4, 0]} castShadow>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#d4a574" roughness={0.5} />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 2.0, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.3, 16]} />
        <meshStandardMaterial color="#d4a574" roughness={0.5} />
      </mesh>

      {/* Torso (Shirt/Jacket) */}
      <mesh position={[0, 1.2, 0]} castShadow>
        <boxGeometry args={[0.9, 1.4, 0.5]} />
        <meshStandardMaterial color={color} metalness={0.1} roughness={0.6} />
      </mesh>

      {/* Left Shoulder */}
      <mesh position={[-0.5, 1.8, 0]} castShadow>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color={color} metalness={0.1} roughness={0.6} />
      </mesh>

      {/* Right Shoulder */}
      <mesh position={[0.5, 1.8, 0]} castShadow>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color={color} metalness={0.1} roughness={0.6} />
      </mesh>

      {/* Left Arm */}
      <mesh position={[-0.5, 1.2, 0]} rotation={[0, 0, 0.1]} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 0.9, 16]} />
        <meshStandardMaterial color={color} metalness={0.1} roughness={0.6} />
      </mesh>

      {/* Right Arm */}
      <mesh position={[0.5, 1.2, 0]} rotation={[0, 0, -0.1]} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 0.9, 16]} />
        <meshStandardMaterial color={color} metalness={0.1} roughness={0.6} />
      </mesh>

      {/* Left Hand */}
      <mesh position={[-0.55, 0.65, 0]} castShadow>
        <sphereGeometry args={[0.13, 16, 16]} />
        <meshStandardMaterial color="#d4a574" roughness={0.5} />
      </mesh>

      {/* Right Hand */}
      <mesh position={[0.55, 0.65, 0]} castShadow>
        <sphereGeometry args={[0.13, 16, 16]} />
        <meshStandardMaterial color="#d4a574" roughness={0.5} />
      </mesh>

      {/* Waist/Belt Area */}
      <mesh position={[0, 0.45, 0]} castShadow>
        <cylinderGeometry args={[0.35, 0.38, 0.15, 32]} />
        <meshStandardMaterial color="#2c2c2c" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Left Leg (Pants) */}
      <mesh position={[-0.22, -0.3, 0]} castShadow>
        <cylinderGeometry args={[0.18, 0.16, 1.5, 16]} />
        <meshStandardMaterial color="#2c5aa0" metalness={0.1} roughness={0.7} />
      </mesh>

      {/* Right Leg (Pants) */}
      <mesh position={[0.22, -0.3, 0]} castShadow>
        <cylinderGeometry args={[0.18, 0.16, 1.5, 16]} />
        <meshStandardMaterial color="#2c5aa0" metalness={0.1} roughness={0.7} />
      </mesh>

      {/* Left Shoe */}
      <mesh position={[-0.22, -1.15, 0.1]} castShadow>
        <boxGeometry args={[0.25, 0.15, 0.4]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.2} roughness={0.8} />
      </mesh>

      {/* Right Shoe */}
      <mesh position={[0.22, -1.15, 0.1]} castShadow>
        <boxGeometry args={[0.25, 0.15, 0.4]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.2} roughness={0.8} />
      </mesh>
    </group>
  );
}

export const Product3D = ({ color, autoRotate = true }: Product3DProps) => {
  return (
    <Canvas
      camera={{ position: [0, 1, 6], fov: 50 }}
      style={{ background: 'transparent' }}
      shadows
    >
      <ambientLight intensity={0.6} />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={1} 
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <spotLight 
        position={[-5, 5, 5]} 
        angle={0.3} 
        penumbra={1} 
        intensity={0.5} 
        castShadow
      />
      <pointLight position={[0, 2, -5]} intensity={0.3} />
      
      {/* Ground plane for shadow */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.8, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <shadowMaterial opacity={0.2} />
      </mesh>
      
      <Mannequin color={color} autoRotate={autoRotate} />
      <OrbitControls 
        enableZoom={true} 
        enablePan={false} 
        minDistance={4}
        maxDistance={10}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 4}
      />
    </Canvas>
  );
};
