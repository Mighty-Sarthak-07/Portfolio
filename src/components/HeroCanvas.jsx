/**
 * HeroCanvas.jsx
 * Full-screen Three.js animated background for the Hero section.
 * Features:
 *  - Glowing torus knot (central piece)
 *  - 3 floating icosahedra with distort material
 *  - Animated particle field (Points)
 *  - Soft purple / violet lighting to match portfolio palette
 *  - Entirely pointer-events-none so it never blocks UI
 */
import {
    Float,
    MeshDistortMaterial,
    MeshWobbleMaterial,
    Sparkles,
    Stars,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";

/* ─────────────────────────────────
   Central glowing torus knot
───────────────────────────────── */
function TorusKnotMesh() {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = clock.elapsedTime * 0.18;
    ref.current.rotation.y = clock.elapsedTime * 0.24;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} position={[2.8, 0, -2]} castShadow>
        <torusKnotGeometry args={[1.1, 0.38, 160, 20, 2, 3]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          distort={0.35}
          speed={2.5}
          roughness={0.05}
          metalness={0.9}
          emissive="#5b21b6"
          emissiveIntensity={0.45}
        />
      </mesh>
    </Float>
  );
}

/* ─────────────────────────────────
   Floating wireframe icosahedra
───────────────────────────────── */
function Icosahedron({ position, color, scale = 1, speed = 1 }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = clock.elapsedTime * 0.3 * speed;
    ref.current.rotation.z = clock.elapsedTime * 0.2 * speed;
  });
  return (
    <Float speed={speed * 1.2} rotationIntensity={0.8} floatIntensity={1.6}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshWobbleMaterial
          color={color}
          factor={0.25}
          speed={1.5}
          roughness={0.1}
          metalness={0.8}
          wireframe
        />
      </mesh>
    </Float>
  );
}

/* ─────────────────────────────────
   Floating rings
───────────────────────────────── */
function Ring({ position, color, scale = 1 }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.4) * 0.8;
    ref.current.rotation.y = clock.elapsedTime * 0.3;
  });
  return (
    <Float speed={1.0} rotationIntensity={0.5} floatIntensity={1.0}>
      <mesh ref={ref} position={position} scale={scale}>
        <torusGeometry args={[1, 0.12, 16, 60]} />
        <meshStandardMaterial
          color={color}
          roughness={0.1}
          metalness={0.95}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

/* ─────────────────────────────────
   Main canvas export
───────────────────────────────── */
export const HeroCanvas = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        {/* ── Lighting ── */}
        <ambientLight intensity={0.3} />
        <pointLight position={[4, 6, 4]} intensity={2.5} color="#8b5cf6" />
        <pointLight position={[-4, -4, 2]} intensity={1.5} color="#a78bfa" />
        <pointLight position={[0, 0, 6]} intensity={0.8} color="#ec4899" />

        <Suspense fallback={null}>
          {/* Stars field in the background */}
          <Stars
            radius={80}
            depth={50}
            count={2500}
            factor={3}
            saturation={0}
            fade
            speed={0.6}
          />

          {/* Sparkles effect */}
          <Sparkles
            count={80}
            scale={12}
            size={1.5}
            speed={0.5}
            color="#a78bfa"
            opacity={0.7}
          />

          {/* Central torus knot — hero centerpiece */}
          <TorusKnotMesh />

          {/* Floating icosahedra */}
          <Icosahedron position={[-4.5, 1.8, -1]} color="#c084fc" scale={0.7} speed={0.9} />
          <Icosahedron position={[4, -2.5, -1.5]} color="#818cf8" scale={0.55} speed={1.2} />
          <Icosahedron position={[-2, -3, -2.5]} color="#f472b6" scale={0.45} speed={1.4} />

          {/* Floating rings */}
          <Ring position={[-4, 2.5, -3]} color="#7c3aed" scale={0.8} />
          <Ring position={[3.5, 2, -4]} color="#6d28d9" scale={0.55} />
        </Suspense>
      </Canvas>
    </div>
  );
};
