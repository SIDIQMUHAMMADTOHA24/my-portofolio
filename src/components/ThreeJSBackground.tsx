import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Advanced particle system with physics simulation
function AnimatedSphere() {
  const ref = useRef<THREE.Points>(null!);
  const { viewport } = useThree();
  
  // Generate complex particle positions with mathematical patterns
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    const colors = new Float32Array(5000 * 3);
    
    for (let i = 0; i < 5000; i++) {
      // Create sphere distribution with some noise
      const radius = Math.random() * 2 + 1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      // Convert spherical to cartesian with some distortion
      const x = radius * Math.sin(phi) * Math.cos(theta) + (Math.random() - 0.5) * 0.5;
      const y = radius * Math.sin(phi) * Math.sin(theta) + (Math.random() - 0.5) * 0.5;
      const z = radius * Math.cos(phi) + (Math.random() - 0.5) * 0.5;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      // Create color gradient based on position
      const distance = Math.sqrt(x * x + y * y + z * z);
      colors[i * 3] = Math.sin(distance * 0.5 + theta) * 0.5 + 0.5; // R
      colors[i * 3 + 1] = Math.sin(distance * 0.3 + phi) * 0.5 + 0.5; // G  
      colors[i * 3 + 2] = Math.sin(distance * 0.7 + theta + phi) * 0.5 + 0.5; // B
    }
    
    return [positions, colors];
  }, []);

  // Complex animation with multiple wave functions
  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime();
      
      // Rotate the entire particle system
      ref.current.rotation.x = time * 0.1;
      ref.current.rotation.y = time * 0.15;
      
      // Animate individual particles
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      const colors = ref.current.geometry.attributes.color.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        const z = positions[i + 2];
        
        // Create wave distortion
        const wave = Math.sin(time * 0.5 + x * 0.3) * Math.cos(time * 0.3 + y * 0.2) * 0.1;
        positions[i + 2] = z + wave;
        
        // Animate colors
        const distance = Math.sqrt(x * x + y * y + z * z);
        colors[i] = Math.sin(time * 0.8 + distance * 0.5) * 0.3 + 0.7;
        colors[i + 1] = Math.sin(time * 0.6 + distance * 0.3) * 0.3 + 0.5;
        colors[i + 2] = Math.sin(time * 1.2 + distance * 0.7) * 0.3 + 0.8;
      }
      
      ref.current.geometry.attributes.position.needsUpdate = true;
      ref.current.geometry.attributes.color.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Morphing geometric shapes
function MorphingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  const geometries = useMemo(() => {
    return [
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.OctahedronGeometry(1, 0),
      new THREE.TetrahedronGeometry(1, 0),
      new THREE.DodecahedronGeometry(1, 0),
    ];
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Smooth morphing between geometries
      const morphProgress = (Math.sin(time * 0.3) + 1) / 2;
      const currentGeom = Math.floor(morphProgress * (geometries.length - 1));
      const nextGeom = (currentGeom + 1) % geometries.length;
      const alpha = (morphProgress * (geometries.length - 1)) % 1;
      
      // Rotate with complex pattern
      meshRef.current.rotation.x = time * 0.2 + Math.sin(time * 0.1) * 0.3;
      meshRef.current.rotation.y = time * 0.3 + Math.cos(time * 0.15) * 0.2;
      meshRef.current.rotation.z = time * 0.1;
      
      // Scale pulsing
      const scale = 1 + Math.sin(time * 0.8) * 0.2;
      meshRef.current.scale.setScalar(scale);
      
      // Position floating
      meshRef.current.position.y = Math.sin(time * 0.4) * 0.5;
      meshRef.current.position.x = Math.cos(time * 0.3) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#8b5cf6"
        transparent
        opacity={0.6}
        roughness={0.1}
        metalness={0.8}
        envMapIntensity={1}
      />
    </mesh>
  );
}

// Interactive mouse-following light
function InteractiveLight() {
  const lightRef = useRef<THREE.PointLight>(null!);
  
  useFrame((state) => {
    if (lightRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Follow mouse with smooth interpolation
      const mouse = state.mouse;
      lightRef.current.position.x = THREE.MathUtils.lerp(lightRef.current.position.x, mouse.x * 3, 0.02);
      lightRef.current.position.y = THREE.MathUtils.lerp(lightRef.current.position.y, mouse.y * 3, 0.02);
      
      // Animate intensity
      lightRef.current.intensity = 2 + Math.sin(time * 0.5) * 0.5;
      
      // Color animation
      const hue = (time * 0.1) % 1;
      lightRef.current.color.setHSL(hue, 0.8, 0.6);
    }
  });

  return <pointLight ref={lightRef} position={[0, 0, 2]} intensity={2} distance={8} />;
}

// Main Three.js Background Component
export function ThreeJSBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        {/* Ambient lighting */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        
        {/* Interactive elements */}
        <InteractiveLight />
        
        {/* Complex animated components */}
        <AnimatedSphere />
        <MorphingGeometry />
        
        {/* Subtle camera controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.2}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}