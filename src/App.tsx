import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import About from "./components/About";
import Hero from "./components/Hero";
import AboutMe from './pages/AboutMe';
import Experiences from './pages/Experiences';
import Project from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
// Import NewPage component or any other new components you create
// Ensure you create a corresponding NewPage.tsx in your components folder
// import NewPage from "./components/NewPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <ContactForm />
            <Footer />
          </>
        } />
        <Route path="/about" element={<AboutMe/>} />
        <Route path='/experiences' element={<Experiences/>} />
        <Route path='/projects' element={<Project/>}/>
        <Route path='/resume' element={<Resume/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes> 
    </Router>
  );
}

export default App;
