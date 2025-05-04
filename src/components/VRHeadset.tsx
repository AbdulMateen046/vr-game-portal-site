
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function VRHeadset({ scrollY }: { scrollY: number }) {
  // Use a more specific type for the mesh ref
  const mesh = useRef<THREE.Mesh>(null);
  
  // Use scrollY to control rotation
  useFrame(() => {
    if (mesh.current) {
      // Smooth rotation based on scroll position
      mesh.current.rotation.y = scrollY * 0.1;
      mesh.current.rotation.x = scrollY * 0.05;
    }
  });

  // Simple 3D box as a placeholder for VR headset
  return (
    <mesh ref={mesh} scale={[1.5, 1.5, 1.5]} position={[0, 0, 0]}>
      <boxGeometry args={[1, 0.6, 0.8]} />
      <meshStandardMaterial color="#9b87f5" metalness={0.6} roughness={0.2} />
    </mesh>
  );
}
