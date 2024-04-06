const Skills = () => {
  return (
    <div
      id="skills-wrapper"
      className=" bg-[#000000] 3xl:h-[80vh] 2xl:h-[80vh] xl:h-[80vh] lg:h-[80vh] md:h-[130vh] sm:h-[150vh] smx:h-[150vh] 2xl:mt-[-100px]   "
    >
      {/* LABEL */}
      <p
        className="text-white 2xl:text-[140px] 2xl:pt-[-250px] 2xl:ml-[840px] font-bigs sm:text-[64px] smx:text-[64px] sm:ml-[140px] 
      sm:mt-[320px] smx:ml-[125px] smx:mt-[250px] "
      >
        SKILLS
      </p>
      {/* SKILLS */}
      <img
        src="https://svgshare.com/i/14pQ.svg "
        alt="skills"
        className="2xl:ml-[491px] pt-[30px] sm:hidden smx:hidden 2xl:block "
      />
      <img
        src="https://svgshare.com/i/1501.svg"
        alt=""
        className="absolute 2xl:ml-[465.11px] 2xl:mt-[-850px] sm:hidden smx:hidden 2xl:block"
      />
      <img
        src="https://svgshare.com/i/1513.svg"
        alt=""
        className="absolute 2xl:ml-[1138.2px] 2xl:mt-[-320px] sm:hidden smx:hidden 2xl:block "
      />

      <img
        src="https://svgshare.com/i/155j.svg"
        alt=""
        className="absolute 2xl:hidden sm:block smx:block sm:ml-[117px] sm:mt-[45px] smx:ml-[100px] smx:mt-[45px]"
      />
    </div>
  );
};

export default Skills;
