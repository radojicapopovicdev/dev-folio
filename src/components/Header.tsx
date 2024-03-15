const Header = () => {
  return (
    <div
      id="header-wrapper"
      className="bg-[#141414] 3xl:h-[100px] 2xl:h-[100px] xl:h-[100px] lg:h-[100px] sm:h-[90px] flex"
    >
      <div id="nav" className="flex w-full justify-between">
        <img
          src="https://svgshare.com/i/14RR.svg"
          alt="logo"
          className="sm:h-[23px] sm:w-[82px] sm:ml-[55px] sm:mt-[55px] 2xl:h-[46px] 2xl:w-[163px] 2xl:ml-[450px]
         2xl:mt-[30px] 3xl:h-[46px] 3xl:w-[163px] 3xl:ml-[650px] 3xl:mt-[30px] xl:h-[46px] xl:w-[163px] xl:ml-[300px]
          xl:mt-[30px] lg:h-[46px] lg:w-[163px] lg:ml-[200px] lg:mt-[30px] md:h-[46px] md:w-[163px] md:ml-[50px] md:mt-[30px]"
        />
        <a
          className="hidden md:inline-block text-white mt-[46px] h-[19px] w-[43px] px-[5px] text-[16px] font-karla"
          href=""
        >
          Lorem
        </a>
        <a
          className="hidden md:inline-block text-white mt-[46px] h-[19px] w-[43px] px-[5px]text-[16px] font-karla"
          href=""
        >
          Lorem
        </a>
        <a
          className="hidden md:inline-block text-white mt-[46px] h-[19px] w-[43px] px-[5px] text-[16px] font-karla"
          href=""
        >
          Lorem
        </a>
        <a
          className="hidden md:inline-block text-white mt-[46px] h-[19px] w-[43px] px-[5px] text-[16px] font-karla"
          href=""
        >
          Lorem
        </a>
        <div
          id="hire-me"
          className="hidden md:flex justify-center items-center 2xl:mr-[346px] w-[188px] h-[44px] p-[10px] gap-[10px] mt-[31px] 
          bg-[#4E6E58] text-white font-sora text-center 3xl:mr-[460px] xl:mr-[250px] lg:mr-[150px] md:mr-[15px]"
        >
          Hire Me
        </div>
      </div>
    </div>
  );
};

export default Header;
