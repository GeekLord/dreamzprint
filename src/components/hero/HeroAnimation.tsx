import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return null; // Render nothing if there's an error
    }
    return this.props.children;
  }
}

const FloatingPrint = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <mesh 
      ref={meshRef}
      position={[0, 0, 0]}
    >
      <torusGeometry args={[1.5, 0.4, 16, 100]} />
      <meshStandardMaterial
        color="#6366F1"
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
      <group>
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
      <ErrorBoundary>
        <Canvas
          camera={{ 
            position: [0, 0, 5], 
            fov: 75,
            near: 0.1,
            far: 1000
          }}
          className="h-full w-full"
          gl={{ 
            antialias: true,
            alpha: true,
            powerPreference: "default"
          }}
          dpr={window.devicePixelRatio}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

export default HeroAnimation;