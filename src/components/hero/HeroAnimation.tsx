import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const FloatingPrint = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <mesh ref={meshRef} castShadow>
        <torusGeometry args={[1.5, 0.4, 16, 100]} />
        <meshStandardMaterial
          color="#6366F1"
          roughness={0.5}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const HeroAnimation = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="h-full"
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <FloatingPrint />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default HeroAnimation;