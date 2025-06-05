// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/aadityajxcodes', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/aaditya-jaiswal-8079a1251', label: 'LinkedIn' },
    { icon: <SiLeetcode />, url: 'https://leetcode.com/aadityaj5689', label: 'LeetCode' },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            <span className="code-bracket">&lt;</span>
            Contact
            <span className="code-bracket">/&gt;</span>
          </h2>
          <p className="section-subtitle">Let's connect and build something amazing</p>
        </div>

        <div className="contact-content-single">
          <motion.div 
            className="contact-info-expanded"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact-card">
              <h3 style={{ color: '#06b6d4' }}>Get in Touch</h3>
              <p style={{ color: '#424242' }}>
              I am currently seeking freelance opportunities as well as full-time roles. If you believe there's potential for collaboration, feel free to reach out!
              </p>
              
              <div className="contact-details">
                 <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <span style={{ color: '#06b6d4' }}>aadityajaiswalofficial@gmail.com</span>
                 </div>
                 <div className="contact-item">
                    <FaPhoneAlt className="contact-icon" />
                    <span style={{ color: '#06b6d4' }}>+91 8602264797</span>
                 </div>
              </div>

              <div className="social-links mt-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 