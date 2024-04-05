const ContactForm = () => {
  return (
    <div
      id="contact-wrapper"
      className="3xl:h-[100vh] 2xl:h-[100vh] xl:h-[100vh] lg:h-[100vh] md:h-[100vh] sm:h-[100vh] bg-[#4E6E58]"
    >
      <p className="absolute font-bigs text-[100px] text-white 2xl:w-[812px] 2xl:mt-[152px] 2xl:ml-[554px]  ">
        GET IN TOUCH FOR A CODE-FUELED WORK DISCUSSION
      </p>
      <p className="absolute font-karla text-[16px] text-white 2xl:w-[604px] 2xl:mt-[450px] 2xl:ml-[600px]">
        WHETHER YOU HAVE CODING QUERIES, PROJECT PROPOSALS, OR JUST WANT TO GEEK
        OUT ABOUT TECH, SHOOT ME AN EMAIL! YOUR MESSAGES ARE MY FAVORITE KIND OF
        NOTIFICATIONS, I'LL REPLY FASTER THAN A WELL-OPTIMIZED ALGORITHM.
      </p>
      <input
        placeholder="EMAIL"
        type="text"
        className=" 2xl:w-[604px] 2xl:h-[52px] 2xl:mt-[550px] 2xl:ml-[600px] border border-white border-opacity-40 bg-transparent font-karla text-[14px] pl-[18px] "
      />
      <input
        placeholder="SUBJECT"
        type="text"
        className=" 2xl:w-[604px] 2xl:h-[52px] 2xl:mt-[12px] 2xl:ml-[600px] border border-white border-opacity-40 bg-transparent font-karla text-[14px] pl-[18px]  "
      />
      <input
        placeholder="SHARE YOUR THOUGHTS OR IDEAS—I'M HERE TO LISTEN. YOUR MESSAGE IS IMPORTANT AND WILL BE HANDLED WITH CARE."
        type="text"
        className=" 2xl:w-[604px] 2xl:h-[248px] 2xl:mt-[12px] 2xl:ml-[600px] border border-white border-opacity-40 bg-transparent font-karla text-[14px] pl-[18px]   "
      />
      <button
        className="hidden md:flex justify-center items-center 2xl:mr-[346px] w-[604px] h-[52px] p-[10px] gap-[10px] mt-[31px] 2xl:ml-[600px]
           font-sora text-center 3xl:mr-[460px] xl:mr-[250px] lg:mr-[150px] md:mr-[15px] cursor-pointer text-red 
           hover:before:bg-redborder-[#648e71] relative overflow-hidden  bg-[#FEFAE0] px-3 text-black shadow-2xl transition-all 
           before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#FFFFEB] 
           before:transition-all before:duration-500 hover:text-black hover:shadow-[#FFFFEB] hover:before:left-0 hover:before:w-full
           mac:h-[64px] mac:w-[288px] mac:text-[24px] "
      >
        <span className="relative z-10">Hire Me</span>
      </button>
    </div>
  );
};

export default ContactForm;
