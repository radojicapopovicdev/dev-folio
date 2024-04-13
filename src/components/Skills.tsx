const Skills = () => {
  return (
    <div
      id="skills-wrapper"
      className=" bg-[#000000] 3xl:h-[80vh] 2xl:h-[80vh] xl:h-[80vh] lg:h-[80vh] md:h-[130vh] sm:h-[150vh] smx:h-[150vh] 2xl:mt-[-100px]   "
    >
      {/* LABEL */}
      <p
        className="text-white 2xl:text-[140px] 2xl:pt-[-250px] 2xl:ml-[840px] font-bigs sm:text-[64px] smx:text-[64px] sm:ml-[140px] 
      sm:mt-[520px] smx:ml-[125px] smx:mt-[450px] 3xl:ml-[1200px] 3xl:mt-[140px] 2xl:mt-[300px] "
      >
        SKILLS
      </p>
      {/* SKILLS */}
      <img
        src="https://svgshare.com/i/14pQ.svg "
        alt="skills"
        className="2xl:ml-[491px] pt-[30px] sm:hidden smx:hidden 3xl:block 2xl:block xl:block  ultrawide:block mac:block lg:block md:block 3xl:ml-[850px] "
      />
      <img
        src="https://svgshare.com/i/1501.svg"
        alt=""
        className="absolute 2xl:ml-[465.11px] 2xl:mt-[-850px] sm:hidden smx:hidden 3xl:block 2xl:block xl:block  ultrawide:block mac:block lg:block md:block 3xl:ml-[850px]"
      />
      <img
        src="https://svgshare.com/i/1513.svg"
        alt=""
        className="absolute 2xl:ml-[1138.2px] 2xl:mt-[-320px] sm:hidden smx:hidden 3xl:block 2xl:block xl:block  ultrawide:block mac:block lg:block md:block "
      />

      <img
        src="https://svgshare.com/i/155j.svg"
        alt=""
        className="absolute 2xl:hidden sm:block smx:block sm:ml-[117px] sm:mt-[45px] smx:ml-[100px] smx:mt-[45px]"
      />
      <img
        src="https://svgshare.com/i/157Y.svg"
        alt=""
        className="absolute 3xl:hidden 2xl:hidden xl:hidden 
       ultrawide:hidden mac:hidden lg:hidden md:hidden sm:block smx:block smx:mt-[-350px] smx:ml-[175px] sm:mt-[-350px] sm:ml-[195px]"
      />
    </div>
  );
};

export default Skills;
