import { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (cursor) {
      cursor.style.animation = 'blink 1s infinite';
    }
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="hero-content">
              <p className="hero-greeting">Hi, my name is</p>
              <h1 className="hero-title">
                <span className="code-bracket">&lt;</span>
                Aaditya
                <span className="code-bracket">/&gt;</span>
              </h1>
              <h2 className="hero-subtitle">
                I'm a{' '}
                <TypeAnimation
                  sequence={[
                    'Front-End Developer',
                    1000,
                    'Full Stack Developer',
                    1000,
                    'DSA Enthusiast',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
                <span ref={cursorRef} className="typing-cursor">|</span>
              </h2>
              <p className="hero-description">
              I build things for the web.
              </p>
              <div className="hero-cta">
                <a href="#projects" className="btn btn-primary me-3">
                  View My Work
                </a>
                <a href="#contact" className="btn btn-outline">
                  Let's Connect
                </a>
                <FaArrowDown className="cta-arrow" />
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="hero-image">
              <div className="code-window">
                <div className="window-header">
                  <div className="window-buttons">
                    <span className="window-button red"></span>
                    <span className="window-button yellow"></span>
                    <span className="window-button green"></span>
                  </div>
                  <div className="window-title">portfolio.js</div>
                </div>
                <div className="window-content">
                  <pre>
                    <code>
                      {`class Developer {
  constructor() {
    this.name = "Aaditya";
    this.role = "Full Stack Developer";
    this.skills = ["React", "MongoDB", "Node.js"];
  }

  code() {
    return "Building amazing things...";
  }

  learn() {
    return "Always learning new tech!";
  }
}`}
                    </code>
                  </pre>
                  <div style={{ marginTop: '20px', color: '#A9B7C6' }}>
                    <TypeAnimation
                      sequence={[
                        '> ',
                        1000,
                        '> developer.code()',
                        1000,
                        '\n> Building amazing things...',
                        2000,
                        '\n> ',
                        1000,
                        '> developer.learn()',
                        1000,
                        '\n> Always learning new tech!',
                        2000,
                        '\n> '
                      ]}
                      wrapper="pre"
                      speed={50}
                      repeat={Infinity}
                      cursor={false}
                    />
                    <span ref={cursorRef} className="typing-cursor">|</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div>
          <span className="scroll-arrow">
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero; 