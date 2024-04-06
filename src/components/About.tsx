const About = () => {
  return (
    <div
      id="about-wrapper"
      className="bg-[#000000] 3xl:h-[50vh] 2xl:h-[50vh] xl:h-[50vh] lg:h-[50vh] md:h-[50vh] sm:h-[50vh] 
      smx:h-[50vh] text-center "
    >
      {/* LABEL */}
      <p
        className="absolute text-white font-bigs 2xl:text-[140px] 2xl:ml-[770.11px] 2xl:mt-[110px] sm:mt-[370px] 
      sm:text-[64px] sm:ml-[45px] smx:mt-[240px] smx:text-[64px] smx:ml-[45px]  "
      >
        ABOUT ME
      </p>
      {/* TEXT */}
      <p
        className="absolute text-white font-karla text-[16px] 2xl:text-center 2xl:ml-[609px] 2xl:mt-[319px] 2xl:w-[668px] 
      sm:mt-[470px] sm:w-[284px] sm:ml-[45px] smx:mt-[370px] smx:w-[284px] smx:ml-[45px] text-left "
      >
        I AM RADOJICA POPOVIC, A SEASONED SOFTWARE ENGINEER. WHILE I AM ADEPT AT
        HANDLING EVERY ASPECT OF DEVELOPMENT CYCLE, MY SPECIALTY LIES IN{" "}
        <span className="text-[#4E6E58]"> FRONT END DEVELOPMENT, </span>
        PARTICULARLY WITH THE USE OF REACT IN CONJUNCTION WITH TYPESCRIPT.
      </p>
      {/* VECTOR */}
      <img
        src="https://svgshare.com/i/150f.svg"
        alt="vector"
        className="absolute 2xl:ml-[1346px] 2xl:mt-[-20px] sm:hidden smx:hidden"
      />
      <img
        src="https://svgshare.com/i/1574.svg"
        alt=""
        className="hidden sm:block smx:block absolute sm:ml-[190px] sm:mt-[330px] smx:ml-[190px] smx:mt-[200px] 2xl:hidden"
      />
    </div>
  );
};

export default About;
