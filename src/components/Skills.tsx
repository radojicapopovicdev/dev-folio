const Skills = () => {
  return (
    <div
      id="skills-wrapper"
      className=" bg-[#000000] 3xl:h-[80vh] 2xl:h-[80vh] xl:h-[80vh] lg:h-[80vh] md:h-[130vh] sm:h-[130vh]  "
    >
      {/* LABEL */}
      <p className="text-white text-[140px] 2xl:pt-[218.5px] 2xl:ml-[840px] font-bigs ">
        SKILLS
      </p>
      {/* SKILLS */}
      <img
        src="https://svgshare.com/i/14pQ.svg "
        alt="skills"
        className="2xl:ml-[491px] pt-[30px]  "
      />
      <img src="https://svgshare.com/i/1501.svg" alt="" className="absolute 2xl:ml-[465.11px] 2xl:mt-[-850px]" />
      <img src="https://svgshare.com/i/1513.svg" alt="" className="absolute 2xl:ml-[1138.2px] 2xl:mt-[-320px] " />
    </div>
  );
};

export default Skills;
