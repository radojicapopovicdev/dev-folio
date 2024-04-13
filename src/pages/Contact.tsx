const Contact = () => {
  return (
    <div
      id="contact-wrapper"
      className="3xl:h-[100vh] 2xl:h-[100vh] xl:h-[100vh] lg:h-[100vh] md:h-[100vh] sm:h-[120vh] smx:h-[120vh] bg-[#4E6E58]"
    >
      <p
        className="absolute font-bigs 2xl:text-[100px] text-white 2xl:w-[812px] 2xl:mt-[152px] 2xl:ml-[554px] sm:text-[48px]
        smx:text-[48px] sm:w-[314px] smx:w-[314px] sm:ml-[45px] sm:mt-[76px] smx:ml-[45px] smx:mt-[76px] "
      >
        GET IN TOUCH FOR A CODE-FUELED WORK DISCUSSION
      </p>
      <p
        className="absolute font-karla 2xl:text-[16px] text-white 2xl:w-[604px] 2xl:mt-[450px] 2xl:ml-[600px] sm:text-[12px] 
      sm:w-[284px] sm:ml-[45px] sm:mt-[295.4px] smx:text-[12px] smx:w-[284px] smx:ml-[45px] smx:mt-[295.4px] "
      >
        WHETHER YOU HAVE CODING QUERIES, PROJECT PROPOSALS, OR JUST WANT TO GEEK
        OUT ABOUT TECH, SHOOT ME AN EMAIL! YOUR MESSAGES ARE MY FAVORITE KIND OF
        NOTIFICATIONS, I'LL REPLY FASTER THAN A WELL-OPTIMIZED ALGORITHM.
      </p>
      <input
        placeholder="EMAIL"
        type="text"
        className=" 2xl:w-[604px] 2xl:h-[52px] 2xl:mt-[550px] 2xl:ml-[600px] border border-white border-opacity-40
        bg-transparent font-karla text-[14px] pl-[18px] sm:ml-[45px] sm:w-[303px] sm:h-[44px] sm:mt-[440px] "
      />
      <input
        placeholder="SUBJECT"
        type="text"
        className=" 2xl:w-[604px] 2xl:h-[52px] 2xl:mt-[12px] 2xl:ml-[600px] border border-white border-opacity-40
        bg-transparent font-karla text-[14px] pl-[18px] sm:ml-[45px] sm:w-[303px] sm:h-[44px] "
      />
      <input
        placeholder="SHARE YOUR THOUGHTS OR IDEAS—I'M HERE TO LISTEN. YOUR MESSAGE IS IMPORTANT AND WILL BE HANDLED WITH CARE."
        type="text"
        className=" 2xl:w-[604px] 2xl:h-[248px] 2xl:mt-[12px] 2xl:ml-[600px] border border-white border-opacity-40 
        bg-transparent font-karla text-[14px] pl-[18px] sm:ml-[45px] sm:w-[303px] sm:h-[248px]  "
      />
      <button
        className="hidden md:flex justify-center items-center 2xl:mr-[346px] 2xl:w-[604px] h-[52px] p-[10px] gap-[10px] 
             mt-[31px] 2xl:ml-[600px] font-sora text-center 3xl:mr-[460px] xl:mr-[250px] lg:mr-[150px] md:mr-[15px] 
             cursor-pointer text-red hover:before:bg-redborder-[#648e71] relative overflow-hidden  bg-[#FEFAE0] px-3 
             transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 
           before:bg-[#FFFFEB] before:transition-all before:duration-500 hover:text-black hover:shadow-[#FFFFEB] 
             hover:before:left-0 hover:before:w-full mac:h-[64px] mac:w-[288px] mac:text-[24px] text-black shadow-2xl 
             sm:ml-[45px] sm:w-[303px] sm:block "
      >
        <span className="relative z-10 font-karla">SEND ME AN EMAIL</span>
      </button>
    </div>
  );
};

export default Contact;
