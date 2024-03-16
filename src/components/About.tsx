import { motion } from 'framer-motion';

const About = () => {
  // Define the animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
      }
    },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 1.0, // Duration of the animation
      }
    },
  };

  return (
    <motion.div
      id="about-wrapper"
      className="bg-[#6B422A] 3xl:h-[50vh] 2xl:h-[50vh] xl:h-[50vh] lg:h-[50vh] md:h-[50vh] sm:h-[50vh]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p
        className="text-white font-karla 2xl:text-[14px] 2xl:pt-[106px] 2xl:ml-[450px]"
        variants={childVariants}
      >
        A FEW WORDS ABOUT ME
      </motion.p>
      <motion.p
        className="text-white font-karla 2xl:text-[36px] 2xl:w-[708px] 2xl:ml-[970px]"
        variants={childVariants}
      >
        I AM RADOJICA POPOVIC, A SEASONED
      </motion.p>
      <motion.p
        className="text-white font-karla 2xl:text-[36px] 2xl:w-[1124px] 2xl:ml-[450px]"
        variants={childVariants}
      >
        SOFTWARE ENGINEER. WHILE I AM ADEPT AT HANDLING EVERY ASPECT OF
        DEVELOPMENT CYCLE, MY SPECIALTY LIES IN <span className="text-[#EB905C] font-karla">FRONT END DEVELOPMENT</span>, PARTICULARLY WITH THE USE OF REACT IN CONJUNCTION WITH TYPESCRIPT.
      </motion.p>
    </motion.div>
  );
};

export default About;
