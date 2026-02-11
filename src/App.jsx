import "./App.css";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import AboutMe from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import EducationSkills from "./components/EduSkill.jsx";
import LatestWorks from "./components/LatestWork.jsx";
import ContactMe from "./components/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <EducationSkills />
      <LatestWorks />
      <ContactMe />
    </>
  );
}

export default App;
