import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float, Html, Text } from "@react-three/drei";
import * as THREE from "three";

/* --------- 3D Laptop (left) --------- */
function Laptop({ position = [-1.5, -0.2, 0], rotation = [0, 0.25, 0] }) {
  return (
    <group position={position} rotation={rotation}>
      {/* Base */}
      <mesh castShadow receiveShadow position={[0, -0.15, 0]}>
        <boxGeometry args={[1.4, 0.12, 1]} />
        <meshStandardMaterial color="#e8edf5" metalness={0.35} roughness={0.25} />
      </mesh>

      {/* Trackpad */}
      <mesh castShadow receiveShadow position={[0, -0.085, 0.2]}>
        <boxGeometry args={[0.45, 0.01, 0.28]} />
        <meshStandardMaterial color="#cfd6e3" metalness={0.2} roughness={0.35} />
      </mesh>

      {/* Keyboard area */}
      <mesh castShadow receiveShadow position={[0, -0.085, -0.1]}>
        <boxGeometry args={[1.1, 0.01, 0.55]} />
        <meshStandardMaterial color="#d9deea" metalness={0.2} roughness={0.35} />
      </mesh>

      {/* Screen hinge + screen */}
      <group position={[0, 0.35, -0.45]} rotation={[-0.9, 0, 0]}>
        {/* Screen panel */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.4, 0.95, 0.06]} />
          <meshStandardMaterial color="#eef2f8" metalness={0.25} roughness={0.2} />
        </mesh>

        {/* Screen glow */}
        <mesh position={[0, 0, 0.04]}>
          <boxGeometry args={[1.25, 0.82, 0.01]} />
          <meshStandardMaterial
            color="#0b1220"
            metalness={0.1}
            roughness={0.05}
            emissive="#1b2a4a"
            emissiveIntensity={0.85}
          />
        </mesh>
      </group>
    </group>
  );
}

/* --------- 3D Book + Pen (right) --------- */
function BookWithPen({
  position = [1.45, -0.35, 0],
  rotation = [0, 0, 0],
  label = "sweetyseleena",
}) {
  return (
    <group position={position} rotation={rotation}>
      {/* Book cover */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.15, 0.14, 0.85]} />
        <meshStandardMaterial color="#f2f4f8" metalness={0.05} roughness={0.65} />
      </mesh>

      {/* Pages */}
      <mesh castShadow receiveShadow position={[0.02, 0.02, 0]}>
        <boxGeometry args={[1.08, 0.12, 0.78]} />
        <meshStandardMaterial color="#ffffff" metalness={0} roughness={0.9} />
      </mesh>

      {/* Spine accent */}
      <mesh castShadow receiveShadow position={[-0.56, 0, 0]}>
        <boxGeometry args={[0.05, 0.15, 0.85]} />
        <meshStandardMaterial color="#d7dcea" metalness={0.05} roughness={0.7} />
      </mesh>

      {/* TEXT on book cover */}
      <Text
        position={[0, 0.082, 0]}   // slightly above the cover
        rotation={[-Math.PI / 2, 0, 0]} // lay flat on the cover
        fontSize={0.12}
        color="#0b1220"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
{/* Pen placed flat on top-right side (not piercing) */}
<group
  position={[0.35, 0.16, 0.12]}          // x:right, y:above cover, z:front
  rotation={[Math.PI / 2, 0.25, 0.15]}   // ✅ lay flat (important)
>
  {/* Pen body */}
  <mesh castShadow receiveShadow>
    <cylinderGeometry args={[0.035, 0.035, 1.05, 24]} />
    <meshStandardMaterial color="#0b1220" metalness={0.6} roughness={0.25} />
  </mesh>

  {/* Pen tip */}
  <mesh castShadow receiveShadow position={[0, 0.55, 0]}>
    <coneGeometry args={[0.04, 0.11, 24]} />
    <meshStandardMaterial color="#c9cedb" metalness={0.7} roughness={0.3} />
  </mesh>

  {/* Clip */}
  <mesh castShadow receiveShadow position={[0.05, -0.1, 0]} rotation={[0, 0, 0.35]}>
    <boxGeometry args={[0.02, 0.22, 0.06]} />
    <meshStandardMaterial color="#c9cedb" metalness={0.7} roughness={0.35} />
  </mesh>
</group>

    </group>
  );
}

/* --------- Ground --------- */
function Ground() {
  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, -1.2, 0]} receiveShadow>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial color="#070b16" roughness={1} metalness={0} />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0.4, 5.2], fov: 45 }}
      gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 6, 2]} intensity={1.2} castShadow />
      <spotLight position={[-4, 4, 3]} intensity={0.8} angle={0.35} penumbra={0.6} castShadow />
      <Environment preset="city" />

      <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.35}>
        <Laptop />
        <BookWithPen label="Sweety" />
      </Float>

      <Ground />

      

      <OrbitControls enablePan={false} minDistance={3.5} maxDistance={8} />
    </Canvas>
  );
}
