import { Component, Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, useGLTF, useProgress } from "@react-three/drei";
import * as THREE from "three";
import modelUrl from "../assets/humordome-fairytale-3324.glb?url";
import "../styles/CursorCharacter.css";

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const FRONT_FACING_YAW = -Math.PI / 2;

function Avatar() {
  const { scene } = useGLTF(modelUrl);
  const avatarRef = useRef(null);
  const target = useRef({ yaw: 0, pitch: 0 });
  const current = useRef({ yaw: 0, pitch: 0 });
  const prefersReducedMotion = useRef(false);
  const { gl } = useThree();

  useEffect(() => {
    const canvas = gl.domElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = reducedMotion.matches;
    if (reducedMotion.matches) return undefined;

    const updateTarget = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = clamp((event.clientX - rect.left) / rect.width, 0, 1);
      const y = clamp((event.clientY - rect.top) / rect.height, 0, 1);
      target.current.yaw = (x * 2 - 1) * THREE.MathUtils.degToRad(12);
      target.current.pitch = (0.5 - y) * 2 * THREE.MathUtils.degToRad(7);
    };

    const handlePointerMove = (event) => updateTarget(event);
    const handlePointerDown = (event) => updateTarget(event);

    const resetTarget = () => {
      target.current.yaw = 0;
      target.current.pitch = 0;
    };

    canvas.addEventListener("pointerdown", handlePointerDown, {
      passive: true,
    });
    canvas.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    canvas.addEventListener("pointerleave", resetTarget);
    canvas.addEventListener("pointercancel", resetTarget);
    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", resetTarget);
      canvas.removeEventListener("pointercancel", resetTarget);
    };
  }, [gl]);

  useFrame((state, delta) => {
    const easing = 1 - Math.exp(-delta * 6);
    current.current.yaw += (target.current.yaw - current.current.yaw) * easing;
    current.current.pitch +=
      (target.current.pitch - current.current.pitch) * easing;

    if (avatarRef.current) {
      const idleFloat = prefersReducedMotion.current
        ? 0
        : Math.sin(state.clock.elapsedTime * 1.2) * 0.004;
      avatarRef.current.position.y = idleFloat;
      avatarRef.current.rotation.set(
        current.current.pitch,
        FRONT_FACING_YAW + current.current.yaw,
        -current.current.yaw * 0.04,
      );
    }
  });

  return (
    <group ref={avatarRef}>
      <group position={[0, -0.5, 0]} scale={1.15}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

function LoadingAvatar() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div
        className="cursor-character__loader"
        role="status"
        aria-live="polite"
      >
        <span className="cursor-character__loader-spinner" aria-hidden="true" />
        Loading avatar {Math.round(progress)}%
      </div>
    </Html>
  );
}

class AvatarErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="cursor-character__error" role="status">
          The 3D avatar could not be loaded.
        </div>
      );
    }
    return this.props.children;
  }
}

const CursorCharacter = () => (
  <section
    className="cursor-character"
    aria-labelledby="cursor-character-title"
  >
    <div className="cursor-character__inner">
      <div className="cursor-character__copy">
        <span className="cursor-character__eyebrow">
          A little more about me
        </span>
        <h2 id="cursor-character-title">Say hello to my digital twin</h2>
        <p>Move your cursor around and I’ll follow along.</p>
      </div>
      <div className="cursor-character__stage">
        <div className="cursor-character__halo" aria-hidden="true" />
        <AvatarErrorBoundary>
          <Canvas
            className="cursor-character__canvas"
            camera={{ position: [0, 0, 2.4], fov: 32, near: 0.1, far: 100 }}
            dpr={[1, 1.5]}
            gl={{ alpha: true, antialias: true }}
            fallback={
              <div className="cursor-character__error" role="status">
                A WebGL capable browser is needed to show the 3D avatar.
              </div>
            }
          >
            <ambientLight intensity={1.1} />
            <hemisphereLight args={["#fff8fc", "#c8a9b8", 1.35]} />
            <directionalLight
              position={[2.5, 3.5, 4]}
              intensity={2.6}
              color="#fff5fa"
            />
            <directionalLight
              position={[-3, 1.5, 1]}
              intensity={1.1}
              color="#f4cfe0"
            />
            <pointLight
              position={[0.5, 2.6, -2]}
              intensity={12}
              color="#f7c4dc"
            />
            <Suspense fallback={<LoadingAvatar />}>
              <Avatar />
            </Suspense>
          </Canvas>
        </AvatarErrorBoundary>
        <span
          className="cursor-character__spark cursor-character__spark--one"
          aria-hidden="true"
        >
          ✦
        </span>
        <span
          className="cursor-character__spark cursor-character__spark--two"
          aria-hidden="true"
        >
          ✧
        </span>
      </div>
    </div>
  </section>
);

export default CursorCharacter;
