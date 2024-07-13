import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls } from "@react-three/drei";
import { EffectComposer } from "@react-three/postprocessing";
import { Noise } from "lamina";
import { Overlay } from "./components/Overlay";
import { usePlay } from "./contexts/Play";

function App() {
  const { play, end } = usePlay();

  return (
    <>
      <Canvas>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls
          pages={play && !end ? 20 : 0}
          damping={0.5}
          styles={{
            top: "10px",
            left: "0px",
            bottom: "10px",
            right: "10px",
            width: "auto",
            height: "auto",
            transition: "opacity 1.4s ease-in-out",
            opacity: play ? 1 : 0,
          }}
        >
          <Experience />
        </ScrollControls>
      </Canvas>
      <Overlay />
    </>
  );
}

export default App;
