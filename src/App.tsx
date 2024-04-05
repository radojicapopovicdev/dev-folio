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
      <div className="2xl:ml-[-40px] 3xl:ml-[-100px] xl:ml-[-50px] mac:ml-[-100px] ultrawide:ml-[-100px] md:ml-[-50px] lg:ml-[-50px] sm:ml-[-20px]">
        <Header />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div >
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
