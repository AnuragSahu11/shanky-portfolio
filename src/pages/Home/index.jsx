import { HeroBanner } from "../../components/general components/HeroBanner";
import NavBar from "../../components/NavBar/NavBar";
import WorkSection from "../../components/pages/HomePage/WorkSection";

const styles = {
  gradientCircleOne: {
    background:
      "linear-gradient(90deg, rgba(24,103,237,1) 0%, rgba(210,29,83,0.9671743697478987) 100%)",
    transform: "translate(-30%,-30%) rotate(45deg)",
  },
  gradientCircleTwo: {
    right: "0px",
    top: "100vh",
    background:
      "linear-gradient(90deg, rgba(24,103,237,1) 0%, rgba(210,29,83,0.9671743697478987) 100%)",
    transform: "translate(30%,-80%) rotate(45deg)",
  },
  gradientCircleThree: {
    left: "0px",
    bottom: "20vh",
    background:
      "linear-gradient(90deg, rgba(24,103,237,1) 0%, rgba(210,29,83,0.9671743697478987) 100%)",
    transform: "translate(-56%,0%) rotate(45deg)",
  },
};

const HomePage = () => {
  const { gradientCircleOne, gradientCircleTwo, gradientCircleThree } = styles;

  return (
    <div className="w-full overflow-hidden relative bg-stone-950 text-white">
      <NavBar />
      <div
        style={gradientCircleOne}
        className="w-[30rem] h-[30rem] rounded-full blur-3xl opacity-30 absolute	"
      ></div>
      <div
        style={gradientCircleTwo}
        className="w-[50rem] h-[50rem] rounded-full blur-3xl opacity-20 absolute	"
      ></div>
      <div
        style={gradientCircleThree}
        className="w-[50rem] h-[50rem] rounded-full blur-3xl opacity-20 absolute	"
      ></div>
      
      <HeroBanner />
      <WorkSection />
    </div>
  );
};

export default HomePage;
