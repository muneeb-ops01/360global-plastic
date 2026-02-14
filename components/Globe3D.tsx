
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber';
import { Sphere, Stars, PerspectiveCamera, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Fix: Augment the global JSX namespace to include Three.js intrinsic elements. 
// This resolves the "Property does not exist on type 'JSX.IntrinsicElements'" errors.
declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {
      group: any;
      meshPhongMaterial: any;
      ambientLight: any;
      pointLight: any;
      spotLight: any;
    }
  }
  namespace React {
    namespace JSX {
      interface IntrinsicElements extends ThreeElements {
        group: any;
        meshPhongMaterial: any;
        ambientLight: any;
        pointLight: any;
        spotLight: any;
      }
    }
  }
}

const ParticleField = () => {
  const points = useMemo(() => {
    const p = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      const distance = 1.5 + Math.random() * 0.5;
      p[i * 3] = distance * Math.sin(theta) * Math.cos(phi);
      p[i * 3 + 1] = distance * Math.sin(theta) * Math.sin(phi);
      p[i * 3 + 2] = distance * Math.cos(theta);
    }
    return p;
  }, []);

  const ref = useRef<THREE.Points>(null!);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
      ref.current.rotation.x += 0.0005;
    }
  });

  return (
    <Points ref={ref} positions={points} stride={3}>
      <PointMaterial
        transparent
        color="#34d399"
        size={0.005}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
};

const Earth = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const glowRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0025;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y -= 0.001;
    }
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <meshPhongMaterial
          color="#10b981"
          wireframe
          transparent
          opacity={0.15}
          emissive="#064e3b"
          emissiveIntensity={1}
        />
      </Sphere>
      <Sphere ref={glowRef} args={[0.98, 64, 64]}>
        <meshPhongMaterial
          color="#022c22"
          transparent
          opacity={0.8}
          shininess={100}
        />
      </Sphere>
      <ParticleField />
    </group>
  );
};

const Globe3D: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 3]} fov={45} />
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#10b981" />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#3b82f6" />
        <spotLight position={[0, 10, 0]} angle={0.15} penumbra={1} intensity={2} />
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        <Earth />
      </Canvas>
    </div>
  );
};

export default Globe3D;
