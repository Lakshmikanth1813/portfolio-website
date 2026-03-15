import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Points, 
  PointMaterial, 
  Stars, 
  PerspectiveCamera, 
  Float,
  Sphere
} from '@react-three/drei';
import * as THREE from 'three';

// --- SIMPLE FLOATING PARTICLES ---
function FloatingParticles({ count = 2000 }) {
  const pointsRef = useRef();
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    // Very gentle rotation
    pointsRef.current.rotation.y += 0.0002;
    // Subtle mouse parallax
    const x = (state.mouse.x * 0.05);
    const y = (state.mouse.y * 0.05);
    pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, x, 0.05);
    pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, y, 0.05);
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#d2f15d"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// --- SOFT NEBULA CLOUDS ---
function NebulaClouds() {
  const groupRef = useRef();
  
  useFrame((state) => {
    groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* Blue Glow */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere args={[5, 16, 16]} position={[-5, 2, -10]}>
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.03} />
        </Sphere>
      </Float>
      
      {/* Purple Glow */}
      <Float speed={2} rotationIntensity={0.8} floatIntensity={0.8}>
        <Sphere args={[6, 16, 16]} position={[5, -2, -12]}>
          <meshBasicMaterial color="#a855f7" transparent opacity={0.03} />
        </Sphere>
      </Float>
    </group>
  );
}

const CosmosBackground = () => {
  return (
    <div className="fixed inset-0 -z-20 bg-[#0a0a0c]">
      <Canvas dpr={[1, 1.5]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={60} />
        
        <Stars 
          radius={100} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1} 
        />
        
        <FloatingParticles />
        <NebulaClouds />
        
        <ambientLight intensity={0.5} />
      </Canvas>

      {/* Finishing Gradients for the "Cloud" look */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(210,241,93,0.03)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.03)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />
    </div>
  );
};

export default CosmosBackground;
