// …imports unchanged
export default function Earth() {
  // …links + skills unchanged

  const Sun = () => {
    const light = useRef();
    useFrame(({ clock }) => {
      if (!light.current) return;
      const t = clock.getElapsedTime() * 0.28;
      light.current.position.set(Math.cos(t) * 7, 3.5, Math.sin(t) * 7);
    });
    return <directionalLight ref={light} intensity={1.9} castShadow />;
  };

  const Fill = () => <pointLight position={[-6, -2, -3]} intensity={0.4} color={"#a6d0ff"} />;

  return (
    <Canvas
      camera={{ position: [0, 0, 6] }}
      className="cursor-grab"
      gl={{ toneMapping: THREE.ACESFilmicToneMapping }}
      onCreated={({ gl }) => { gl.toneMappingExposure = 1.45; }}  // ↑ was 1.25
    >
      <ambientLight intensity={0.65} />                             {/* ↑ was 0.55 */}
      <hemisphereLight skyColor={"#9ad1ff"} groundColor={"#222"} intensity={0.4} />
      <Sun />
      <Fill />
      <Stars radius={100} depth={50} count={5000} factor={4} />

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
