import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Earth from "./components/Earth";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="w-screen h-screen bg-black text-white">
      {/* Planet Background */}
      <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <Stars />
        <Earth />
        <OrbitControls enableZoom={false} />
      </Canvas>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center pointer-events-none text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Desmond Harry Adebowale
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Hi, I’m Desmond — a computer science graduate passionate about software, cloud, 
          and data-driven solutions. I build projects that simplify life and I’m eager to 
          keep growing while making an impact in tech.
        </p>
      </div>

      {/* Sections */}
      <div className="absolute top-0 left-0 w-full mt-[100vh] bg-gray-900">
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
