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
      <Header />
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
