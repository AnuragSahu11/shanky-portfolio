import HoverEffectWrapper from "../../general components/HoverEffectWrapper/HoverEffectWrapper";

const styleObj = {
  firstImg: {
    transform: "translate(-50%,0%)",
  },
};

const WorkSection = () => {
  const { firstImg } = styleObj;

  const imgArr = [
    {
      link: "https://res.cloudinary.com/dym0xfe7y/image/upload/v1726318779/Boxing_Training_in_VR.png",
    },
    {
      link: "https://res.cloudinary.com/dym0xfe7y/image/upload/v1726318779/RGZP__Motion_Graphics.png",
    },
    {
      link: "https://res.cloudinary.com/dym0xfe7y/image/upload/v1726318779/Ethnographic_Research__Carpenter.png",
    },
    {
      link: "https://res.cloudinary.com/dym0xfe7y/image/upload/v1726318779/Shubhi__An_AI_Robot.png",
    },
  ];

  return (
    <div className="w-full py-20 flex flex-col items-center">
      <div className="w-4/5	flex flex-col items-center">
        <div className="flex flex-col w-full justify-start">
          <p className="font-casanova text-4xl ">Work</p>
          <p>Selected Projects</p>
        </div>
        <div className="flex flex-col">
          {/* <div className="flex translate-x-[-20vw]"> */}
          <HoverEffectWrapper
            childClassName={"flex"}
            className="flex translate-x-[-20vw]"
          >
            <div
              // style={{
              //   transform: "translateZ(42px)",
              // }}
              className="z-10 translate-z-[70px] translate-x-[90px] flex flex-col justify-end bottom-0 text-3xl font-semibold pr-5"
            >
              <p className="">
                Boxing
                <br></br>
                Training
                <br></br>
                in VR
              </p>
              <div className="w-32	h-0.5 bg-white	my-1"></div>
              <div className="flex items-center">
                <p className="text-sm">Case Study </p>
                <span className="ml-2 text-lg iconify mdi--arrow-right"></span>
              </div>
            </div>
            <div>
              <img
                src={
                  "https://res.cloudinary.com/dym0xfe7y/image/upload/v1726318779/Boxing_Training_in_VR.png"
                }
              />
            </div>
          </HoverEffectWrapper>
          {/* </div> */}
          <HoverEffectWrapper
            childClassName={"flex"}
            className="flex translate-x-[20vw]"
          >
            <div className="z-10 translate-x-[60px] flex flex-col justify-end bottom-0 text-3xl font-semibold pr-5">
              <p className="">
                Shubhi:
                <br></br>
                An Ai
                <br></br>
                Robot
              </p>
            </div>
            <div>
              <img
                src={
                  "https://res.cloudinary.com/dym0xfe7y/image/upload/v1726318779/Shubhi__An_AI_Robot.png"
                }
              />
            </div>
          </HoverEffectWrapper>
          {/* <div className="flex translate-x-[20vw]">
            <div className="z-10 translate-x-[60px] flex flex-col justify-end bottom-0 text-3xl font-semibold pr-5">
              <p className="">
                Shubhi:
                <br></br>
                An Ai
                <br></br>
                Robot
              </p>
            </div>
            <div>
              <img
                src={
                  "https://res.cloudinary.com/dym0xfe7y/image/upload/v1726318779/Shubhi__An_AI_Robot.png"
                }
              />
            </div>
          </div> */}
          <HoverEffectWrapper
            className="flex translate-x-[-23vw]"
            childClassName={"flex"}
          >
            {" "}
            <div className="z-10 translate-x-[60px] flex flex-col justify-end bottom-0 text-3xl font-semibold pr-5">
              <p className="">
                Shubhi:
                <br></br>
                An Ai
                <br></br>
                Robot
              </p>
            </div>
            <div>
              <img
                src={
                  "https://res.cloudinary.com/dym0xfe7y/image/upload/v1726318779/RGZP__Motion_Graphics.png"
                }
              />
            </div>
          </HoverEffectWrapper>
          <HoverEffectWrapper
            className="flex translate-x-[15vw]"
            childClassName={"flex"}
          >
            {" "}
            <div className="z-10 translate-x-[60px] flex flex-col justify-end bottom-0 text-3xl font-semibold pr-5">
              <p className="">
                Shubhi:
                <br></br>
                An Ai
                <br></br>
                Robot
              </p>
            </div>
            <div>
              <img
                src={
                  "https://res.cloudinary.com/dym0xfe7y/image/upload/v1726318779/Ethnographic_Research__Carpenter.png"
                }
              />
            </div>
          </HoverEffectWrapper>
          {/* <div className="flex translate-x-[-23vw]">
            <div className="z-10 translate-x-[60px] flex flex-col justify-end bottom-0 text-3xl font-semibold pr-5">
              <p className="">
                Shubhi:
                <br></br>
                An Ai
                <br></br>
                Robot
              </p>
            </div>
            <div>
              <img
                src={
                  "https://res.cloudinary.com/dym0xfe7y/image/upload/v1726318779/RGZP__Motion_Graphics.png"
                }
              />
            </div>
          </div> */}
          {/* <div className="flex translate-x-[15vw]">
            <div className="z-10 translate-x-[60px] flex flex-col justify-end bottom-0 text-3xl font-semibold pr-5">
              <p className="">
                Shubhi:
                <br></br>
                An Ai
                <br></br>
                Robot
              </p>
            </div>
            <div>
              <img
                src={
                  "https://res.cloudinary.com/dym0xfe7y/image/upload/v1726318779/Ethnographic_Research__Carpenter.png"
                }
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
