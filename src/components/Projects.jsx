// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaSpotify, FaTv, FaSuitcase } from 'react-icons/fa';
import { useState } from 'react';

const ReadMore = ({ text, maxLength = 150, theme }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  if (text.length <= maxLength) {
    return <p className="project-description" style={{ color: theme.secondaryTextColor, marginBottom: '15px', fontSize: '0.9rem', lineHeight: '1.4' }}>{text}</p>;
  }

  return (
    <div>
      <p className="project-description" style={{ color: theme.secondaryTextColor, marginBottom: '15px', fontSize: '0.9rem', lineHeight: '1.4' }}>
        {isExpanded ? text : `${text.slice(0, maxLength)}...`}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          background: 'none',
          border: 'none',
          color: theme.textColor,
          cursor: 'pointer',
          fontSize: '0.8rem',
          padding: '0',
          textDecoration: 'underline',
          marginTop: '-10px',
          marginBottom: '10px'
        }}
      >
        {isExpanded ? 'Show Less' : 'Read More'}
      </button>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "My personal portfolio website showcasing my skills and projects. Built with React and styled components for a modern and responsive design.",
      technologies: ["React", "Styled Components", "CSS", "HTML", "JavaScript"],
      github: "https://github.com/aadityajxcodes/aadityajxPortfolio/tree/main", // Corrected GitHub repo link
      // Add any other relevant properties like live demo link or icon
    },
    {
      title: "LiveHire",
      description: "Built a MERN-based platform that enables tech companies to hire freelance interviewers, featuring coding and video interview capabilities. Integrated Monaco Editor API for an in-browser code editor and configured WebRTC for live video calls. Designed secure user flows for authentication, interview scheduling, and data handling. Gained hands-on experience in frontend development, API integration, WebRTC setup, and building responsive user interfaces.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Bootstrap", "WebRTC", "Monaco API", "JWT"],
      github: "https://github.com/aadityajxcodes/LiveHire",
    },
    {
      title: "Netflix Frontend Clone",
      description: "A responsive Netflix clone built with modern web technologies, featuring a sleek UI and smooth animations.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      github: "https://github.com/aadityajxcodes/netflix-frontend-clone",
    },
    {
      title: "Spotify UI Clone",
      description: "Designed a responsive Spotify UI clone using HTML5, CSS3, and optionally Tailwind CSS. Emphasized design accuracy, responsiveness, and seamless user interaction.",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/aadityajxcodes/spotify_UI_Clone",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Define themes for specific projects
  const projectThemes = {
    "Spotify UI Clone": {
      backgroundColor: '#1ED760', // Spotify Green
      textColor: '#191414', // Spotify Black
      secondaryTextColor: '#404040', // Darker grey for description
      tagBackgroundColor: 'rgba(0,0,0,0.1)',
      tagTextColor: '#191414',
      iconBackgroundColor: 'rgba(0,0,0,0.2)',
      iconColor: 'white',
      iconHoverBackgroundColor: 'rgba(0,0,0,0.3)'
    },
    "Netflix Frontend Clone": {
      backgroundColor: '#E50914', // Netflix Red
      textColor: '#FFFFFF', // White
      secondaryTextColor: '#E5E5E5', // Light grey for description
      tagBackgroundColor: 'rgba(255,255,255,0.1)',
      tagTextColor: '#FFFFFF',
      iconBackgroundColor: 'rgba(255,255,255,0.2)',
      iconColor: 'white',
      iconHoverBackgroundColor: 'rgba(255,255,255,0.3)'
    },
    "LiveHire": {
      backgroundColor: '#2196F3', // Professional Blue (can adjust if you have a specific blue in mind)
      textColor: '#FFFFFF', // White
      secondaryTextColor: '#E3F2FD', // Very light blue for description
      tagBackgroundColor: 'rgba(255,255,255,0.1)',
      tagTextColor: '#FFFFFF',
      iconBackgroundColor: 'rgba(255,255,255,0.2)',
      iconColor: 'white',
      iconHoverBackgroundColor: 'rgba(255,255,255,0.3)'
    }
  };

  const defaultTheme = {
    backgroundColor: '#FFFFFF', // Default white background
    textColor: '#212121', // Default dark text
    secondaryTextColor: '#424242', // Default medium dark text
    tagBackgroundColor: 'rgba(0,0,0,0.1)',
    tagTextColor: '212121',
    iconBackgroundColor: 'rgba(0,0,0,0.2)',
    iconColor: 'white',
    iconHoverBackgroundColor: 'rgba(0,0,0,0.3)'
  };

  // Define icons for specific projects
  const projectIcons = [
    { title: "Spotify UI Clone", icon: <FaSpotify /> },
    { title: "Netflix Frontend Clone", icon: <FaTv /> },
    { title: "LiveHire", icon: <FaSuitcase /> },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            <span className="code-bracket">&lt;</span>
            Projects
            <span className="code-bracket">/&gt;</span>
          </h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => {
            const theme = projectThemes[project.title] || defaultTheme;
            const projectIcon = projectIcons.find(item => item.title === project.title)?.icon;

            return (
              <motion.div 
                key={project.title}
                className="project-card"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  backgroundColor: theme.backgroundColor,
                  color: theme.textColor,
                  borderRadius: '15px',
                  padding: '15px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  maxWidth: '280px',
                  margin: '0 auto'
                }}
              >
                <div className="project-content" style={{ flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    {project.github ? (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-title-link"
                        style={{
                          color: theme.textColor,
                          margin: 0,
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          textDecoration: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        {project.title}
                      </a>
                    ) : (
                       <h3 className="project-title" style={{ color: theme.textColor, margin: 0, fontSize: '1.1rem' }}>{project.title}</h3>
                    )}

                    {projectIcon && (
                      <div style={{ color: theme.textColor, fontSize: '1.3rem' }}>
                        {projectIcon}
                      </div>
                    )}
                  </div>
                  <ReadMore text={project.description} maxLength={120} theme={theme} />
                  <div className="project-tech" style={{ marginBottom: '8px' }}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag" style={{
                        backgroundColor: theme.tagBackgroundColor,
                        color: theme.tagTextColor,
                        padding: '2px 6px',
                        borderRadius: '4px',
                        marginRight: '4px',
                        marginBottom: '4px',
                        fontSize: '0.7em',
                        fontWeight: 'bold',
                        display: 'inline-block'
                      }}>{tech}</span>
                    ))}
                  </div>
                </div>
                {project.github && (
                  <div className="project-links mt-3" style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    width: '100%',
                    marginTop: '10px'
                  }}>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="GitHub Repository"
                      title="View on GitHub"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: theme.iconColor,
                        fontSize: '1.1rem',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        padding: '6px',
                        borderRadius: '50%',
                        backgroundColor: theme.iconBackgroundColor,
                        width: '35px',
                        height: '35px',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                        gap: '8px'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, '_blank');
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = theme.iconHoverBackgroundColor;
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = theme.iconBackgroundColor;
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
                      }}
                    >
                      <FaGithub />
                      <FaExternalLinkAlt style={{ fontSize: '0.6em' }} />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 