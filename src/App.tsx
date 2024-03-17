import "./index.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import About from "./components/About";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <img
        src="https://svgshare.com/i/14Rb.svg"
        alt="numbers"
        className="absolute 2xl:h-[590vh] 2xl:ml-[346px] 2xl:mt-[50px] sm:h-[640vh] sm:ml-[16px] sm:mt-[62px] md:h-[580vh] lg:ml-[150px] 3xl:ml-[460px]"
      />
      <Header  />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;