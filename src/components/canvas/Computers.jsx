import { Suspense, useEffect, useState, useRef, Component } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import * as THREE from 'three';
import CanvasLoader from '../Loader';

// Custom Error Boundary Component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('3D Canvas Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <ErrorFallback error={this.state.error} resetErrorBoundary={() => this.setState({ hasError: false, error: null })} />;
    }

    return this.props.children;
  }
}

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="flex items-center justify-center h-full w-full">
    <div className="text-center p-8">
      <h2 className="text-white text-xl mb-4">3D Model Loading Error</h2>
      <p className="text-gray-300 mb-4 text-sm">
        {error?.message || 'Model contains invalid geometry data'}
      </p>
      <button 
        onClick={resetErrorBoundary}
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-colors"
      >
        Try Again
      </button>
    </div>
  </div>
);

// Animated fallback computer model
const FallbackComputer = ({ isMobile }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Monitor */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 2, 0.1]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
      
      {/* Screen */}
      <mesh position={[0, 0, 0.06]}>
        <boxGeometry args={[2.7, 1.7, 0.01]} />
        <meshStandardMaterial color="#915EFF" emissive="#915EFF" emissiveIntensity={0.3} />
      </mesh>
      
      {/* Base */}
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.3, 8]} />
        <meshStandardMaterial color="#3a3a3a" />
      </mesh>
      
      {/* Stand */}
      <mesh position={[0, -1.05, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.8, 8]} />
        <meshStandardMaterial color="#4a4a4a" />
      </mesh>
      
      {/* Keyboard */}
      <mesh position={[0, -1.8, 0.8]}>
        <boxGeometry args={[2, 0.1, 0.8]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
    </group>
  );
};

// Safe GLTF Loader Component
const SafeGLTFModel = ({ isMobile }) => {
  const [model, setModel] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loader = new GLTFLoader();
    
    loader.load(
      '/desktop_pc/scene.gltf',
      (gltf) => {
        try {
          // Validate and clean the model
          const scene = gltf.scene.clone();
          let hasValidGeometry = true;
          
          scene.traverse((child) => {
            if (child.isMesh && child.geometry) {
              // Check for position attribute
              const positionAttribute = child.geometry.attributes.position;
              if (positionAttribute && positionAttribute.array) {
                const positions = positionAttribute.array;
                
                // Check for NaN or invalid values
                for (let i = 0; i < positions.length; i++) {
                  if (!isFinite(positions[i]) || isNaN(positions[i])) {
                    console.warn('Invalid geometry found, removing mesh:', child.name);
                    hasValidGeometry = false;
                    if (child.parent) {
                      child.parent.remove(child);
                    }
                    break;
                  }
                }
                
                if (hasValidGeometry) {
                  // Safely compute bounding sphere
                  try {
                    child.geometry.computeBoundingBox();
                    child.geometry.computeBoundingSphere();
                    child.castShadow = true;
                    child.receiveShadow = true;
                  } catch (error) {
                    console.warn('Geometry computation failed:', error);
                    if (child.parent) {
                      child.parent.remove(child);
                    }
                  }
                }
              }
            }
          });
          
          if (hasValidGeometry && scene.children.length > 0) {
            setModel(scene);
            setHasError(false);
          } else {
            console.warn('Model has no valid geometry, using fallback');
            setHasError(true);
          }
        } catch (error) {
          console.error('Error processing GLTF model:', error);
          setHasError(true);
        } finally {
          setIsLoading(false);
        }
      },
      (progress) => {
        console.log('Loading progress:', (progress.loaded / progress.total) * 100 + '%');
      },
      (error) => {
        console.error('Error loading GLTF model:', error);
        setHasError(true);
        setIsLoading(false);
      }
    );
  }, []);

  if (isLoading) {
    return <CanvasLoader />;
  }

  if (hasError || !model) {
    return <FallbackComputer isMobile={isMobile} />;
  }

  return (
    <primitive
      object={model}
      scale={isMobile ? 0.7 : 0.75}
      position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
    />
  );
};

const Computers = ({ isMobile }) => {
  return (
    <group>
      <ambientLight intensity={0.3} />
      <directionalLight 
        position={[5, 10, 5]} 
        intensity={1.2} 
        castShadow 
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <spotLight 
        position={[0, 15, 0]} 
        angle={0.3} 
        penumbra={1} 
        intensity={0.8} 
        castShadow 
      />
      <Environment preset="city" />
      <SafeGLTFModel isMobile={isMobile} />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hasError, setHasError] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);
    
    const handleChange = (e) => setIsMobile(e.matches);
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (hasError) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        <div className="text-center">
          <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <div className="text-white text-4xl">💻</div>
          </div>
          <p className="text-gray-300 text-sm">3D Model Unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary 
      fallback={<ErrorFallback error={null} resetErrorBoundary={() => setHasError(false)} />}
    >
      <div ref={canvasRef} className="w-full h-full">
        <Canvas
          shadows
          frameloop="demand"
          dpr={[1, 1.5]}
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ 
            preserveDrawingBuffer: true,
            antialias: false,
            alpha: true,
            powerPreference: "high-performance"
          }}
          onCreated={({ gl }) => {
            gl.domElement.style.position = 'absolute';
            gl.domElement.style.top = '0';
            gl.domElement.style.left = '0';
            gl.domElement.style.pointerEvents = 'auto';
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              enableRotate={!isMobile}
              maxPolarAngle={Math.PI / 2} 
              minPolarAngle={Math.PI / 2}
              enableDamping={true}
              dampingFactor={0.05}
            />
            <Computers isMobile={isMobile} />
          </Suspense>
        </Canvas>
      </div>
    </ErrorBoundary>
  );
};

export default ComputersCanvas;