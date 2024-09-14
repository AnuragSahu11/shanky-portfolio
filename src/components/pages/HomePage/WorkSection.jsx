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
        <div className="flex w-full justify-start">
          <p className="text-4xl font-bold">Work</p>
        </div>
        <div className="flex flex-col">
          <div className="flex translate-x-[-20vw]">
            <div className="z-10 translate-x-[60px] flex flex-col justify-end bottom-0 text-3xl font-semibold pr-5">
              <p className="">
                Boxing
                <br></br>
                Training
                <br></br>
                in VR
              </p>
            </div>
            <div>
              <img
                src={
                  "https://res.cloudinary.com/dym0xfe7y/image/upload/v1726318779/Boxing_Training_in_VR.png"
                }
              />
            </div>
          </div>
          <div className="flex translate-x-[20vw]">
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
          </div>
          <div className="flex translate-x-[-23vw]">
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
          </div>
          <div className="flex translate-x-[15vw]">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
