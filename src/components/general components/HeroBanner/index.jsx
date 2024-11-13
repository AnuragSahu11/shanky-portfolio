import { Canvas } from "@react-three/fiber";
import TextScramble from "../TextScramble";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { useRef } from "react";

const styles = {
  linearTextGradient: {
    background:
      "linear-gradient(90deg, rgba(125,173,255,1) 0%, rgba(210,29,83,1) 100%)",
    "-webkit-background-clip": "text",
    "background-clip": "text",
    color: "transparent",
  },
};

const My3DModel = ({ model }) => {
  const modelRef = useRef();

  // Function to handle mouse movement
  const handleMouseMove = (event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1; // Normalize x to [-1, 1]
    const y = -(event.clientY / window.innerHeight) * 2 + 1; // Normalize y to [-1, 1]

    // Calculate rotation based on mouse position
    const rotationX = (y * Math.PI) / 10; // Adjust sensitivity as needed
    const rotationY = (x * Math.PI) / 10; // Adjust sensitivity as needed

    if (modelRef.current) {
      modelRef.current.rotation.x = rotationX;
      modelRef.current.rotation.y = rotationY;
    }
  };

  useEffect(() => {
    // Add event listener for mouse movement
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <primitive ref={modelRef} object={model.scene} scale={1.5} />;
};
export const HeroBanner = () => {
  const { linearTextGradient } = styles;
  const model = useGLTF("./3d-model/scene.gltf");

  return (
    <div className=" flex flex-col items-center justify-center text-center gap-y-10 bg-transparent bg-transparent  font-bold w-full  relative	">
      <div className="text-center">
        <p className="text-5xl ">
          Hello! I’m <span style={linearTextGradient}>Shubhanshu</span>{" "}
        </p>
        <p className="text-5xl">
          I <span className="italic font-thin">design</span> <TextScramble />
        </p>
      </div>
      <div className="w-1/2">
        <p className="font-thin">
          A master’s student of Immersive Media Design from MITID Pune brings 4
          years of combined experience as a graphic designer and UI/UX designer.
          Additionally, I hold a certification in 3D animation and possess a
          strong command of AI, adeptly creating and generating content using
          Gen AI.
        </p>
      </div>
      <div className="mt-10 text-2xl absolute bottom-4">
        <SvgComponent />
        <p className="pt-1 font-thin text-sm">Scroll</p>
        <span className="iconify animate-bounce  mdi--chevron-double-down"></span>
      </div>
      <div
        style={{
          height: "2000px",
        }}
      >
        <Canvas
          frameloop="demand"
          camera={{ position: [-1, 3, 6], fov: 45, near: 0.1, far: 10 }}
        >
          <My3DModel model={model} />
          <OrbitControls
            autoRotate={true}
            enableZoom={false}
            enableRotate={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            enablePan={false}
            autoRotateSpeed={1}
          />
          <ambientLight intensity={3} />
        </Canvas>
      </div>
    </div>
  );
};

function SvgComponent(props) {
  return (
    <svg
      viewBox="0 0 34 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity={0.7} fillRule="evenodd" clipRule="evenodd" fill="#fff">
        <path d="M16.85 2.66c-7.837 0-14.19 6.353-14.19 14.19v13.3c0 7.837 6.353 14.19 14.19 14.19 7.835 0 14.188-6.353 14.188-14.19v-13.3c0-7.837-6.353-14.19-14.189-14.19zM0 16.85C0 7.543 7.544 0 16.85 0c9.305 0 16.848 7.544 16.848 16.85v13.3c0 9.306-7.544 16.85-16.849 16.85S0 39.456 0 30.15v-13.3z" />
        <path d="M16.85 6.584c.77 0 1.396.626 1.396 1.397v6.651a1.397 1.397 0 11-2.794 0v-6.65c0-.772.626-1.398 1.397-1.398z" />
      </g>
    </svg>
  );
}

export default SvgComponent;
