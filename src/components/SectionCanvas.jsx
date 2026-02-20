/**
 * SectionCanvas.jsx
 * Lightweight Three.js animated particle cloud used as
 * a subtle background accent inside individual sections.
 */
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";

function ParticleCloud({ count = 120, spread = 10, color = "#8b5cf6" }) {
  const ref = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * spread;
      arr[i * 3 + 1] = (Math.random() - 0.5) * spread;
      arr[i * 3 + 2] = (Math.random() - 0.5) * spread * 0.4;
    }
    return arr;
  }, [count, spread]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.04;
    ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.02) * 0.08;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color={color}
        sizeAttenuation
        transparent
        opacity={0.6}
        depthWrite={false}
      />
    </points>
  );
}

/**
 * SectionCanvas — drop-in for any section.
 * @prop {string}  color   — particle colour (default violet)
 * @prop {number}  count   — particle count (default 120)
 */
export const SectionCanvas = ({ color = "#8b5cf6", count = 120 }) => (
  <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      gl={{ antialias: false, alpha: true }}
      dpr={[1, 1.2]}
    >
      <Suspense fallback={null}>
        <ParticleCloud count={count} spread={14} color={color} />
      </Suspense>
    </Canvas>
  </div>
);
