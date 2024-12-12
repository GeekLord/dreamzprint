import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const FloatingPrint = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <mesh 
      ref={meshRef} 
      castShadow
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    >
      <torusGeometry args={[1.5, 0.4, 16, 100]} />
      <meshStandardMaterial
        color={new THREE.Color("#6366F1")}
        roughness={0.5}
        metalness={0.8}
      />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <group position={[0, 0, 0]}>
        <FloatingPrint />
      </group>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
};

const HeroAnimation = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ 
          position: [0, 0, 5], 
          fov: 75,
          near: 0.1,
          far: 1000
        }}
        className="h-full"
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default HeroAnimation;