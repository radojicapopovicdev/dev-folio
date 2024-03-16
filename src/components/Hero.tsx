import { motion } from "framer-motion";

const svgVariants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 0.8 } },
};

const Hero = () => {
  return (
    <div
      id="hero-wrapper"
      className="3xl:h-[100vh] 2xl:h-[100vh] xl:h-[100vh] lg:h-[100vh] sm:h-[60vh] md:h-[80vh] bg-[#141414]"
    >
      <p
        className="text-white 2xl:text-[272px] font-pathway 2xl:ml-[450px] 3xl:ml-[860px] xl:text-[180px] 
         xl:ml-[300px] sm:text-[80px] sm:ml-[55px] sm:pt-[100px] md:text-[100px] md:ml-[120px] lg:ml-[300px]
         mac:text-[350px] mac:ml-[750px] ultrawide:ml-[1200px]"
      >
        SOFTWARE
      </p>
      <motion.img
        src="https://svgshare.com/i/14PN.svg"
        alt="line1"
        className="absolute 2xl:h-[313px] 2xl:ml-[505px] 2xl:mt-[-75px] 3xl:ml-[905px] xl:h-[200px] xl:ml-[330px]
        xl:mt-[-30px] sm:h-[157px] sm:ml-[71px] md:h-[197px] md:ml-[140px] lg:ml-[320px] mac:h-[440px] mac:ml-[830px]  
        ultrawide:ml-[1280px] ultrawide:h-[640px] ultrawide:mt-[-100px]"
        initial="hidden"
        animate="visible"
        variants={svgVariants}
        style={{ originY: 0 }} // Animate scale from the top
      />
      <p
        className="text-white 2xl:text-[272px] 2xl:mt-[-150px] 2xl:ml-[764px] font-pathway 3xl:ml-[1164px] xl:text-[180px]
         xl:ml-[500px] xl:mt-[-300px] sm:text-[80px] sm:ml-[130px] sm:mt-[-20px] md:text-[100px] md:ml-[250px] lg:ml-[420px]
         lg:mt-[-230px] mac:text-[350px] mac:ml-[1150px] mac:mt-[-200px] ultrawide:ml-[1700px]  "
      >
        ENGINEER
      </p>
      <motion.img
        src="https://svgshare.com/i/14PP.svg"
        alt="line 2"
        className="absolute 2xl:h-[63.5px] 2xl:ml-[816px] 2xl:mt-[-75px] 3xl:ml-[1316px] xl:h-[50px] xl:ml-[530px] xl:mt-[-40px]
        sm:h-[65px] sm:ml-[144px] md:h-[85px] md:ml-[265px] lg:ml-[440px] mac:ml-[1210px] mac:h-[150px] ultrawide:ml-[1780px]"
        initial="hidden"
        animate="visible"
        variants={svgVariants}
        style={{ originY: 0 }} // Animate scale from the top
      />
      <p
        className="text-white 2xl:text-[16px] font-karla 2xl:w-[396px] 2xl:ml-[1178px] 2xl:mt-[-50px] 3xl:ml-[1578px] xl:text-[12px]
         xl:w-[300px] xl:ml-[750px] xl:mt-[-40px] sm:text-[14px] sm:w-[206px] sm:ml-[162px] sm:mt-[-5px] md:ml-[295px] lg:ml-[500px] 
         mac:ml-[1800px] mac:text-[20px]  "
      >
        LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EGET MATTIS ELEMENTUM ADIPISCING
        TURPIS ALIQUET A IN.
      </p>
    </div>
  );
};

export default Hero;
