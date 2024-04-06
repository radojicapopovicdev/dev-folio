import "./Projects.css";

const Projects = () => {
  const projects = [
    { name: "BRAINWAVE", imageUrl: "https://i.imgur.com/13Ztu5z.png" },
    { name: "BIZWISE", imageUrl: "https://i.imgur.com/13Ztu5z.png" },
    { name: "Project Gamma", imageUrl: "https://i.imgur.com/13Ztu5z.png" },
    { name: "Project Delta", imageUrl: "https://i.imgur.com/13Ztu5z.png" },
    { name: "Project Epsilon", imageUrl: "https://i.imgur.com/13Ztu5z.png" },
    { name: "Project Zeta", imageUrl: "https://i.imgur.com/13Ztu5z.png" },
    { name: "Project Eta", imageUrl: "https://i.imgur.com/13Ztu5z.png" },
  ];
  return (
    <div
      id="projects-wrapper"
      className="bg-[#000000] 3xl:h-[90vh] 2xl:h-[120vh] xl:h-[90vh] lg:h-[90vh] md:h-[90vh] sm:h-[320vh] smx:h-[320vh]"
    >
      <img
        src="https://svgshare.com/i/158W.svg"
        alt=""
        className="absolute sm:ml-[247.98px] sm:mt-[-80px] smx:ml-[247.98px]
       smx:mt-[-80px] 3xl:hidden 2xl:hidden xl:hidden mac:hidden ultrawide:hidden lg:hidden md:hidden"
      />
      {/* MOBILE */}

      <p
        className="absolute 3xl:hidden 2xl:hidden xl:hidden ultrawide:hidden mac:hidden lg:hidden md:hidden sm:block smx:block
       text-[#FBFBFB] sm:text-[48px] smx:text-[48px] sm:ml-[45px] smx:ml-[45px] sm:mt-[200px] smx:mt-[200px] font-pathway"
      >
        BRAINWAVE
      </p>
      <img src="https://i.imgur.com/gUgTJZT.png" alt="Project 1" className="absolute sm:ml-[45px] smx:ml-[45px] sm:mt-[350px] smx:mt-[350px]
        3xl:hidden 2xl:hidden xl:hidden ultrawide:hidden mac:hidden lg:hidden md:hidden sm:block smx:block" />
      <p
        className="absolute 3xl:hidden 2xl:hidden xl:hidden ultrawide:hidden mac:hidden lg:hidden md:hidden sm:block smx:block
       text-[#FBFBFB] sm:text-[48px] smx:text-[48px] sm:ml-[110px] smx:ml-[110px] sm:mt-[550px] smx:mt-[550px] font-pathway "
      >
        BIZWISE
      </p>
      <img src="https://i.imgur.com/gUgTJZT.png" alt="Project 2" className="absolute sm:ml-[110px] smx:ml-[110px] sm:mt-[700px] smx:mt-[700px]
        3xl:hidden 2xl:hidden xl:hidden ultrawide:hidden mac:hidden lg:hidden md:hidden sm:block smx:block" />
      <p
        className="absolute 3xl:hidden 2xl:hidden xl:hidden ultrawide:hidden mac:hidden lg:hidden md:hidden sm:block smx:block
       text-[#FBFBFB] sm:text-[48px] smx:text-[48px] sm:ml-[45px] smx:ml-[45px] sm:mt-[850px] smx:mt-[850px] font-pathway "
      >
        Project Gamma
      </p>
      <img src="https://i.imgur.com/gUgTJZT.png" alt="Project 3" className="absolute sm:ml-[45px] smx:ml-[45px] sm:mt-[1000px] smx:mt-[1000px]
        3xl:hidden 2xl:hidden xl:hidden ultrawide:hidden mac:hidden lg:hidden md:hidden sm:block smx:block" />
      <p
        className="absolute 3xl:hidden 2xl:hidden xl:hidden ultrawide:hidden mac:hidden lg:hidden md:hidden sm:block smx:block
       text-[#FBFBFB] sm:text-[48px] smx:text-[48px] sm:ml-[110px] smx:ml-[110px] sm:mt-[1150px] smx:mt-[1150px] font-pathway "
      >
        Project Delta
      </p>
      <img src="https://i.imgur.com/gUgTJZT.png" alt="Project 4" className="absolute sm:ml-[110px] smx:ml-[110px] sm:mt-[1300px] smx:mt-[1300px]
        3xl:hidden 2xl:hidden xl:hidden ultrawide:hidden mac:hidden lg:hidden md:hidden sm:block smx:block" />
      <p
        className="absolute 3xl:hidden 2xl:hidden xl:hidden ultrawide:hidden mac:hidden lg:hidden md:hidden sm:block smx:block
       text-[#FBFBFB] sm:text-[48px] smx:text-[48px] sm:ml-[45px] smx:ml-[45px] sm:mt-[1450px] smx:mt-[1450px] font-pathway "
      >
        Project Epsilon
      </p>
      <img src="https://i.imgur.com/gUgTJZT.png" alt="Project 5" className="absolute sm:ml-[45px] smx:ml-[45px] sm:mt-[1600px] smx:mt-[1600px]
        3xl:hidden 2xl:hidden xl:hidden ultrawide:hidden mac:hidden lg:hidden md:hidden sm:block smx:block" />
      <p
        className="absolute 3xl:hidden 2xl:hidden xl:hidden ultrawide:hidden mac:hidden lg:hidden md:hidden sm:block smx:block
       text-[#FBFBFB] sm:text-[48px] smx:text-[48px] sm:ml-[110px] smx:ml-[110px] sm:mt-[1750px] smx:mt-[1750px] font-pathway "
      >
        Project Zeta
      </p>
      <img src="https://i.imgur.com/gUgTJZT.png" alt="Project 6" className="absolute sm:ml-[110px] smx:ml-[110px] sm:mt-[1900px] smx:mt-[1900px]
        3xl:hidden 2xl:hidden xl:hidden ultrawide:hidden mac:hidden lg:hidden md:hidden sm:block smx:block" />
      <p
        className="absolute 3xl:hidden 2xl:hidden xl:hidden ultrawide:hidden mac:hidden lg:hidden md:hidden sm:block smx:block
       text-[#FBFBFB] sm:text-[48px] smx:text-[48px] sm:ml-[45px] smx:ml-[45px] sm:mt-[2050px] smx:mt-[2050px] font-pathway "
      >
        Project Eta
      </p>
      <img src="https://i.imgur.com/gUgTJZT.png" alt="Project 7" className="absolute sm:ml-[45px] smx:ml-[45px] sm:mt-[2200px] smx:mt-[2200px]
        3xl:hidden 2xl:hidden xl:hidden ultrawide:hidden mac:hidden lg:hidden md:hidden sm:block smx:block" />

      {/* DESKTOP */}
      <p className="absolute 2xl:ml-[400px] font-bigs 2xl:text-[100px] text-white 2xl:mt-[141px] sm:text-[64px] sm:ml-[45px] sm:mt-[80px] ">
        PROJECTS
      </p>
      <img
        src="https://svgshare.com/i/151D.svg"
        alt=""
        className="absolute 2xl:ml-[438.87px] 2xl:mt-[-100px] sm:hidden  smx:hidden 2xl:block"
      />
      <img
        src="https://svgshare.com/i/156U.svg"
        alt=""
        className="absolute 2xl:ml-[700px] 2xl:mt-[220px] sm:hidden  smx:hidden 2xl:block"
      />
      {projects.map((project, i) => (
        <p
          key={i}
          className="project-item absolute text-[#FBFBFB]/10 text-[62px] sm:text-[48px] smx:text-[48px] font-bigs 2xl:ml-[870px]
           sm:hidden smx:hidden 3xl:block 2xl:block xl:block ultrawide:block mac:block lg:block md:block "
          style={{ marginTop: `${180 + i * 100}px` }}
        >
          {project.name}
          <span
            className="preview-window"
            style={{ backgroundImage: `url(${project.imageUrl})` }}
          ></span>
        </p>
      ))}
    </div>
  );
};

export default Projects;
