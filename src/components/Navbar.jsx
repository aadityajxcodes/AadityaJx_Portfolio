import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/aadityajxcodes', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/aaditya-jaiswal-8079a1251', label: 'LinkedIn' },
    { icon: <SiLeetcode />, url: 'https://leetcode.com/aadityaj5689', label: 'LeetCode' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  return (
    <nav 
      className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}
      style={{
        boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.2)' : 'none',
        transition: 'box-shadow 0.3s ease-in-out',
        zIndex: 100,
      }}
    >
      <div className="container">
        <Link to="hero" className="navbar-brand" smooth={true} duration={500}>
          <span className="code-bracket">&lt;</span>
          <span className="brand-name" style={{ color: 'white' }}>Aaditya Jaiswal</span>
          <span className="code-bracket">/&gt;</span>
        </Link>

        <button 
          className={`navbar-toggler ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto" style={{ cursor: 'pointer' }}>
            {['about', 'skills', 'projects', 'certifications', 'contact'].map((item) => (
              <li className="nav-item mx-2" key={item}>
                <Link
                  to={item}
                  className="nav-link"
                  smooth={true}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
            <li className="nav-item ms-lg-3">
              <div className="social-links-nav d-flex align-items-center">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-nav mx-2"
                    aria-label={link.label}
                    style={{
                      color: 'white',
                      fontSize: '1.5rem',
                      transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.color = 'var(--accent)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.color = 'white';
                    }}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </li>
            <li className="nav-item ms-lg-3">
              <a 
                href="/resume.pdf" 
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 