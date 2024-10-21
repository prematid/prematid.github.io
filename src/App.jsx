// src/App.jsx
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import DarkModeToggle from './components/DarkModeToggle';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
      {/* <DarkModeToggle /> */}
    </div>
  );
};

export default App;
