import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      id="header-wrapper"
      className="bg-[#000000] 3xl:h-[100px] 2xl:h-[100px] xl:h-[100px] lg:h-[100px] sm:h-[90px] "
    >
      <div id="nav" className="flex w-full justify-between">
        <Link to={"/"}>
          <img
            src="https://svgshare.com/i/14RR.svg"
            alt="logo"
            className="sm:h-[32px] sm:w-[90px] sm:ml-[55px] sm:mt-[55px] 2xl:h-[50px] 2xl:w-[211px] 2xl:ml-[450px]
           2xl:mt-[30px] 3xl:h-[46px] 3xl:w-[163px] 3xl:ml-[650px] 3xl:mt-[30px] xl:h-[46px] xl:w-[163px] xl:ml-[300px]
           xl:mt-[30px] lg:h-[46px] lg:w-[163px] lg:ml-[200px] lg:mt-[30px] md:h-[46px] md:w-[163px] md:ml-[50px] md:mt-[30px]
           cursor-pointer"
          />
        </Link>

        <Link to={"/about"}>
          <a
            className="hidden md:inline-block text-white mt-[46px] h-[19px] w-[79px] mac:w-[120px] ultrawide:w-[120px] px-[5px] text-[16px] 
            font-karla mac:text-[24px]"
            href=""
          >
            About Me
          </a>
        </Link>
        <Link to={"/experiences"}>
          <a
            className="hidden md:inline-block text-white mt-[46px] h-[19px] w-[79px] px-[5px]text-[16px] font-karla mac:text-[24px]"
            href=""
          >
            Experience
          </a>
        </Link>

        <Link to={"/projects"}>
          <a
            className="hidden md:inline-block text-white mt-[46px] h-[19px] w-[79px] px-[5px] text-[16px] font-karla mac:text-[24px]"
            href=""
          >
            Projects
          </a>
        </Link>

        <Link to={"/resume"}>
          <a
            className="hidden md:inline-block text-white mt-[46px] h-[19px] w-[79px] px-[5px] text-[16px] font-karla mac:text-[24px]"
            href=""
          >
            Resume
          </a>
        </Link>

        <Link to={"/contact"}>
          <button
            className="hidden md:flex justify-center items-center 2xl:mr-[346px] w-[188px] h-[44px] p-[10px] gap-[10px] mt-[31px] 
           font-sora text-center 3xl:mr-[460px] xl:mr-[250px] lg:mr-[150px] md:mr-[15px] cursor-pointer text-red 
           hover:before:bg-redborder-[#648e71] relative overflow-hidden  bg-[#4E6E58] px-3 text-white shadow-2xl transition-all 
           before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#648e71] 
           before:transition-all before:duration-500 hover:text-white hover:shadow-[#648e71] hover:before:left-0 hover:before:w-full
            mac:h-[64px] mac:w-[288px] mac:text-[24px] "
          >
            <span className="relative z-10">Hire Me</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
