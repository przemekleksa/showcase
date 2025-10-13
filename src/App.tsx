import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Courses from './components/Courses/Courses';
import HeroSection from './components/HeroSection/HeroSection';
import Languages from './components/Languages/Languages';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="app">
      <HeroSection />
      <Projects />
      <Skills />
      <About />
      <Courses />
      <Languages />
      <Contact />
    </div>
  );
}

export default App;
