
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { VRHeadset } from './VRHeadset';
import { useState, useEffect } from 'react';

export function VRScene() {
  const [scrollY, setScrollY] = useState(0);
  
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <VRHeadset scrollY={scrollY} />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate rotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
