import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import About from "./components/About";
import Hero from "./components/Hero";
import Experiences from "./pages/Experiences";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import HeroAbout from "./components/HeroAbout";
import SoftwareLabel from "./components/SoftwareLabel";
import Employments from "./components/Employments";
import HProjects from "./pages/HProjects";

function App() {
  return (
    <Router>
      <div className="2xl:pl-[-40px] 3xl:pl-[-100px] xl:pl-[-50px] mac:pl-[-100px] ultrawide:pl-[-100px] md:pl-[-50px] lg:pl-[-50px] sm:pl-[-20px] smx:pl-[-20px] sm:pr-[-15px] sm:pt-[50px]">
        <Header />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className=" 2xl:mr-[0px] 3xl:mr-[0px] xl:mr-[0px] ultrawide:mr-[0px] mac:mr-[0px] 2xl:mr-[0px]sm:mr-[-25px] smx:mr-[-15px]">
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <ContactForm />
                <Footer />
              </div>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <HeroAbout />
              <SoftwareLabel />
              <Employments />
              <ContactForm />
            </>
          }
        />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/projects" element={<HProjects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
