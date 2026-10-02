import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function OrbitalForms() {
  const group = useRef<THREE.Group>(null);
  const knot = useRef<THREE.Mesh>(null);
  const rings = useRef<THREE.Group>(null);
  const shards = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        position: [
          Math.sin(index * 2.4) * (3.4 + (index % 3)),
          Math.cos(index * 1.7) * 2.8,
          -2 - (index % 5),
        ] as [number, number, number],
        rotation: [index * 0.31, index * 0.57, index * 0.23] as [number, number, number],
        scale: 0.08 + (index % 4) * 0.025,
      })),
    [],
  );

  useFrame(({ pointer }, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    if (group.current) {
      group.current.rotation.y += delta * 0.08;
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, pointer.y * 0.1, 1 - Math.exp(-2 * delta));
      group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, pointer.x * 0.6, 1 - Math.exp(-2 * delta));
    }
    if (knot.current) {
      knot.current.rotation.x += delta * 0.1;
      knot.current.rotation.z -= delta * 0.08;
    }
    if (rings.current) rings.current.rotation.z += delta * 0.045;
  });

  return (
    <group ref={group} position={[1.15, 0.15, -1.8]}>
      <mesh ref={knot} scale={1.45}>
        <torusKnotGeometry args={[1.35, 0.16, 180, 24, 2, 5]} />
        <meshPhysicalMaterial color="#6f5b2d" emissive="#163b40" emissiveIntensity={0.34} metalness={0.98} roughness={0.14} clearcoat={1} clearcoatRoughness={0.1} />
      </mesh>
      <group ref={rings} rotation={[1.1, 0.3, 0.2]}>
        <mesh>
          <torusGeometry args={[2.35, 0.012, 8, 180]} />
          <meshBasicMaterial color="#c9a85b" transparent opacity={0.75} />
        </mesh>
        <mesh rotation={[0.8, 0.3, 0.8]}>
          <torusGeometry args={[2.8, 0.008, 8, 180]} />
          <meshBasicMaterial color="#28d7e5" transparent opacity={0.5} />
        </mesh>
      </group>
      {shards.map((shard, index) => (
        <mesh key={index} position={shard.position} rotation={shard.rotation} scale={shard.scale}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color={index % 3 === 0 ? "#d1b56b" : "#55e7ee"}
            emissive={index % 3 === 0 ? "#6f561d" : "#0e6870"}
            emissiveIntensity={0.45}
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function PortfolioScene() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 8], fov: 48 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.42} color="#637783" />
      <pointLight position={[3, 4, 4]} intensity={30} color="#d4b768" distance={14} />
      <pointLight position={[-4, -1, 3]} intensity={22} color="#30dce6" distance={12} />
      <Sparkles count={70} scale={[14, 8, 8]} size={1.2} speed={0.12} opacity={0.45} color="#c9dadd" />
      <OrbitalForms />
      <Environment resolution={64}>
        <Lightformer intensity={3} color="#d7be76" position={[4, 4, 2]} scale={[3, 3, 1]} />
        <Lightformer intensity={2} color="#42d7df" position={[-4, -1, 1]} rotation-y={Math.PI / 2} scale={[6, 1, 1]} />
      </Environment>
    </Canvas>
  );
}
