import Marquee from "react-fast-marquee";

const SoftwareLabel = () => {
  return (
    <div
      className="bg-[#000000] 3xl:h-[50vh] 2xl:h-[50vh] xl:h-[50vh] lg:h-[50vh] md:h-[50vh] sm:h-[50vh] text-center 
     overflow-hidden 2xl:mt-[-130px]"
    >
      <Marquee speed={150} gradient={false}>
        <p
          className="text-[192px] font-gridular"
          style={{
            background:
              "radial-gradient(56.31% 35.93% at 50% 50%, #4E6E58 0%, #000000 98.72%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          SOFTWARE ENGINEER
        </p>
      </Marquee>
      <img
        src="https://svgshare.com/i/156n.svg"
        alt=""
        className="absolute 2xl:ml-[599.5px]"
      />
      <p className="absolute text-white/70 2xl:w-[521.14px] 2xl:ml-[346px] font-karla text-left 2xl:mt-[150px] ">
        WHILE I AM ADEPT AT HANDLING EVERY ASPECT OF THE DEVELOPMENT CYCLE, MY
        SPECIALTY LIES IN FRONT END DEVELOPMENT, PARTICULARLY WITH THE USE OF
        REACT IN CONJUNCTION WITH TYPESCRIPT.{" "}
      </p>
      <p className="absolute text-white/70 2xl:w-[521.14px] 2xl:ml-[1079px] font-karla text-left 2xl:mt-[150px] ">
        I AM A CREATIVE PROBLEM SOLVER WITH A STRONG ANALYTICAL PROWESS, AND A
        TEAM PLAYER WHO PRIDES HIMSELF ON ATTENTION TO DETAIL.{" "}
      </p>
      <img
        src="https://svgshare.com/i/157z.svg"
        alt=""
        className="absolute 2xl:ml-[929.63px] 2xl:mt-[180px] "
      />
      <img
        src="https://svgshare.com/i/1577.svg"
        alt=""
        className="absolute 2xl:ml-[940px] 2xl:mt-[180px] "
      />
    </div>
  );
};

export default SoftwareLabel;
