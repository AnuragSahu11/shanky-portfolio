import HoverEffectWrapper from "../HoverEffectWrapper/HoverEffectWrapper";
import TextScramble from "../TextScramble";

const styles = {
  linearTextGradient: {
    background:
      "linear-gradient(90deg, rgba(125,173,255,1) 0%, rgba(210,29,83,1) 100%)",
    "-webkit-background-clip": "text",
    "background-clip": "text",
    color: "transparent",
  },
};
export const HeroBanner = () => {
  const { linearTextGradient } = styles;

  return (
    <div className="h-dvh flex flex-col items-center justify-center text-center gap-y-10 bg-transparent bg-transparent  font-bold w-full  relative	">
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
            A master’s student of Immersive Media Design from MITID Pune brings
            4 years of combined experience as a graphic designer and UI/UX
            designer. Additionally, I hold a certification in 3D animation and
            possess a strong command of AI, adeptly creating and generating
            content using Gen AI.
          </p>
        </div>
      <div className="mt-10 text-2xl absolute bottom-4">
        <SvgComponent />
        <p className="pt-1 font-thin text-sm">Scroll</p>
        <span className="iconify animate-bounce  mdi--chevron-double-down"></span>
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
