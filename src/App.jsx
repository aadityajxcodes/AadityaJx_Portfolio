import { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Styles
import './styles/main.css';
import './styles/hero.css';
import './styles/skills.css';
import './styles/projects.css';
import './styles/contact.css';

// Components
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      disable: false // Force AOS to run on all devices
    });

    // Hide the loader when the React app is ready (not just window load)
    const hideLoader = () => {
      const loader = document.getElementById('loader-container');
      if (loader) {
        loader.style.display = 'none';
      }
    };

    // Hide loader after a short delay to ensure React is mounted
    setTimeout(hideLoader, 800);

    return () => {};
  }, []);

  return (
    <>
      <CustomCursor />
      <div id="loader-container">
        <div className="loader"></div>
      </div>
      <motion.div 
        className="App"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <main style={{ paddingLeft: '0.5rem' }}>
          <Intro />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <footer className="footer">
          <div className="container">
            <p className="footer-text">
              <span className="code-bracket">&lt;</span>
              Built with React and ❤️ by aadityajxcodes⚡
              <span className="code-bracket">/&gt;</span>
            </p>
          </div>
        </footer>
      </motion.div>
    </>
  );
}

export default App;
