import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Environment, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function Crystal() {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.x = time * 0.1
    meshRef.current.rotation.y = time * 0.15
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={1.5}>
        <MeshDistortMaterial
          color="#ffffff"
          speed={3}
          distort={0.4}
          radius={1}
          metalness={0.9}
          roughness={0.1}
        />
      </Sphere>
    </Float>
  )
}

function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={['#000000']} />
      
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      <Crystal />

      <Environment preset="city" />
      
      {/* Subtle Star Particles */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <sphereGeometry args={[10, 64, 64]} />
        <meshBasicMaterial color="#ffffff" side={THREE.BackSide} transparent opacity={0.05} wireframe />
      </mesh>
    </Canvas>
  )
}

export default Scene
