import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture, Text, Billboard } from "@react-three/drei";
import * as THREE from "three";

/** Animated Earth */
function EarthSphere() {
  const ref = useRef();
  const [colorMap, bumpMap, specularMap] = useTexture([
    "/textures/earth_daymap.jpg",
    "/textures/earth_bump.jpg",
    "/textures/earth_specular.jpg",
  ]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.06; // gentle spin
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshPhongMaterial
        map={colorMap}
        bumpMap={bumpMap}
        bumpScale={0.05}
        specularMap={specularMap}
        shininess={20}
        specular={"#333"}
      />
    </mesh>
  );
}

/** Subtle atmosphere glow */
function Atmosphere() {
  return (
    <mesh>
      <sphereGeometry args={[2.08, 64, 64]} />
      <meshBasicMaterial
        color={"#60a5fa"}
        transparent
        opacity={0.18}
        blending={THREE.AdditiveBlending}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

/** Small labeled orb that orbits the Earth (optionally clickable) */
function SkillOrb({
  label,
  url, // optional: open in new tab when clicked
  radius = 3,
  speed = 0.5,
  offset = 0,
  yAmplitude = 0.4,
  color = "#38bdf8",
}) {
  const ref = useRef();
  const { gl } = useThree();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    const x = Math.cos(t) * radius;
    const z = Math.sin(t) * radius;
    const y = Math.sin(t * 0.75) * yAmplitude;
    if (ref.current) {
      ref.current.position.set(x, y, z);
      ref.current.rotation.y += 0.02;
    }
  });

  const clickable = Boolean(url);

  return (
    <group
      ref={ref}
      onClick={() => clickable && window.open(url, "_blank", "noopener,noreferrer")}
      onPointerOver={() => (gl.domElement.style.cursor = clickable ? "pointer" : "grab")}
      onPointerOut={() => (gl.domElement.style.cursor = "grab")}
    >
      <mesh>
        <icosahedronGeometry args={[0.22, 0]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <Billboard position={[0, 0.55, 0]}>
        <Text
          fontSize={0.28}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.005}
          outlineColor="black"
        >
          {label}
        </Text>
      </Billboard>
    </group>
  );
}

export default function Earth() {
  // Map orbs to your repos (make some immediately useful)
  const projectLinks = {
    AWS: "https://github.com/coolharry1976/smart-productivity-assistant",
    JavaScript: "https://github.com/coolharry1976/pokemon-search",
    SQL: "https://github.com/coolharry1976/weather-dashboard",
  };

  // Final curated set: Python, Java, C++, JavaScript, SQL, AWS
  const skills = [
    { label: "Python",     color: "#22c55e", radius: 3.1, speed: 0.50, offset: 0.0 },
    { label: "Java",       color: "#f59e0b", radius: 3.3, speed: 0.62, offset: 1.2 },
    { label: "C++",        color: "#60a5fa", radius: 2.9, speed: 0.52, offset: 2.4 },
    { label: "JavaScript", color: "#eab308", radius: 3.2, speed: 0.55, offset: 3.6, url: projectLinks.JavaScript },
    { label: "SQL",        color: "#a78bfa", radius: 3.4, speed: 0.44, offset: 4.8, url: projectLinks.SQL },
    { label: "AWS",        color: "#f97316", radius: 3.0, speed: 0.70, offset: 6.0, url: projectLinks.AWS },
  ];

  return (
    <Canvas camera={{ position: [0, 0, 6] }} className="cursor-grab">
      {/* lights + bg */}
      <ambientLight intensity={0.35} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <Stars radius={100} depth={50} count={5000} factor={4} />

      {/* earth + effects */}
      <EarthSphere />
      <Atmosphere />

      {/* name above earth */}
      <Billboard position={[0, 3.0, 0]}>
        <Text
          fontSize={0.5}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.008}
          outlineColor="black"
        >
          Desmond Harry Adebowale
        </Text>
      </Billboard>

      {/* orbiting skills (some clickable) */}
      {skills.map((s, i) => (
        <SkillOrb key={i} {...s} />
      ))}

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
