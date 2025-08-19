import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture, Text, Billboard } from "@react-three/drei";
import * as THREE from "three";

const BASE = import.meta.env.BASE_URL;

/** Earth body */
function EarthSphere() {
  const ref = useRef();
  const [colorMap, bumpMap, specularMap] = useTexture([
    `${BASE}textures/earth_daymap.jpg`,
    `${BASE}textures/earth_bump.jpg`,
    `${BASE}textures/earth_specular.jpg`,
  ]);

  useFrame((_, d) => ref.current && (ref.current.rotation.y += d * 0.06));

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshPhongMaterial
        map={colorMap}
        bumpMap={bumpMap}
        bumpScale={0.06}
        specularMap={specularMap}
        shininess={35}
        specular={"#555"}
      />
    </mesh>
  );
}

/** Soft atmospheric glow */
function Atmosphere() {
  return (
    <mesh>
      <sphereGeometry args={[2.08, 64, 64]} />
      <meshBasicMaterial
        color={"#7cc3ff"}
        transparent
        opacity={0.16}
        blending={THREE.AdditiveBlending}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

/** Very light cloud shell (no texture needed) */
function Clouds() {
  const ref = useRef();
  useFrame((_, d) => ref.current && (ref.current.rotation.y -= d * 0.01));
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[2.05, 64, 64]} />
      <meshStandardMaterial color="#ffffff" transparent opacity={0.06} roughness={1} metalness={0} />
    </mesh>
  );
}

/** Orbiting labeled skill (clickable if url present) */
function SkillOrb({ label, url, radius=3, speed=0.5, offset=0, yAmp=0.4, color="#38bdf8" }) {
  const ref = useRef();
  const { gl } = useThree();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    const x = Math.cos(t) * radius;
    const z = Math.sin(t) * radius;
    const y = Math.sin(t * 0.75) * yAmp;
    ref.current.position.set(x, y, z);
    ref.current.rotation.y += 0.02;
  });
  const clickable = !!url;
  return (
    <group
      ref={ref}
      onClick={() => clickable && window.open(url, "_blank", "noopener,noreferrer")}
      onPointerOver={() => (gl.domElement.style.cursor = clickable ? "pointer" : "grab")}
      onPointerOut={() => (gl.domElement.style.cursor = "grab")}
    >
      <mesh>
        <icosahedronGeometry args={[0.22, 0]} />
        <meshStandardMaterial color={color} metalness={0.2} roughness={0.35} />
      </mesh>
      <Billboard position={[0, 0.55, 0]}>
        <Text fontSize={0.28} color="white" anchorX="center" anchorY="middle" outlineWidth={0.005} outlineColor="black">
          {label}
        </Text>
      </Billboard>
    </group>
  );
}

export default function Earth() {
  const projectLinks = {
    AWS: "https://github.com/coolharry1976/smart-productivity-assistant",
    JavaScript: "https://github.com/coolharry1976/pokemon-search",
    SQL: "https://github.com/coolharry1976/weather-dashboard",
    React: "https://github.com/coolharry1976/portfolio-planet"
  };

  const skills = [
    { label: "Python",     color: "#22c55e", radius: 3.1, speed: 0.50, offset: 0.0 },
    { label: "Java",       color: "#f59e0b", radius: 3.3, speed: 0.62, offset: 1.2 },
    { label: "React",      color: "#06b6d4", radius: 3.0, speed: 0.58, offset: 2.4, url: projectLinks.React },
    { label: "JavaScript", color: "#eab308", radius: 3.2, speed: 0.55, offset: 3.6, url: projectLinks.JavaScript },
    { label: "SQL",        color: "#a78bfa", radius: 3.4, speed: 0.44, offset: 4.8, url: projectLinks.SQL },
    { label: "AWS",        color: "#f97316", radius: 3.0, speed: 0.70, offset: 6.0, url: projectLinks.AWS },
  ];

  // Reduced motion?
  const prefersReduced = typeof window !== "undefined" &&
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const Sun = () => {
    const light = useRef();
    useFrame(({ clock }) => {
      if (!light.current) return;
      const t = clock.getElapsedTime() * 0.25;
      light.current.position.set(Math.cos(t) * 6, 3, Math.sin(t) * 6);
    });
    return <directionalLight ref={light} intensity={1.6} castShadow />;
  };

  return (
    <Canvas
      camera={{ position: [0, 0, 6] }}
      className="cursor-grab"
      gl={{ toneMapping: THREE.ACESFilmicToneMapping }}
      onCreated={({ gl }) => { gl.toneMappingExposure = 1.25; }}
    >
      <ambientLight intensity={0.55} />
      <hemisphereLight skyColor={"#88caff"} groundColor={"#222"} intensity={0.35} />
      <Sun />
      <Stars radius={100} depth={50} count={prefersReduced ? 800 : 5000} factor={4} />

      <EarthSphere />
      <Clouds />
      <Atmosphere />

      <Billboard position={[0, 3.0, 0]}>
        <Text fontSize={0.5} color="white" anchorX="center" anchorY="middle" outlineWidth={0.008} outlineColor="black">
          Desmond Harry Adebowale
        </Text>
      </Billboard>

      {skills.map((s, i) => (<SkillOrb key={i} {...s} />))}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
