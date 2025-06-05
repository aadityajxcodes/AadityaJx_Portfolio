// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

const Skills = () => {
  const techIconsRef = useRef(null);

  useEffect(() => {
    const container = techIconsRef.current;
    if (!container) return;

    const icons = container.querySelectorAll('.tech-icon');
    const numIcons = icons.length;

    const updateIconPositions = () => {
      // Calculate radius based on container size, adjusted for icon size
      const containerSize = Math.min(container.offsetWidth, container.offsetHeight);
      // Adjust the divisor (e.g., 2.5, 3) based on how close to the edge you want the icons
      const radius = (containerSize / 2) * 0.8; // Use 80% of half the smaller dimension as radius

      const centerX = container.offsetWidth / 2;
      const centerY = container.offsetHeight / 2;

      icons.forEach((icon, index) => {
        const angle = (index / numIcons) * 2 * Math.PI;
        const x = centerX + radius * Math.cos(angle) - icon.offsetWidth / 2;
        const y = centerY + radius * Math.sin(angle) - icon.offsetHeight / 2;

        icon.style.position = 'absolute';
        icon.style.left = `${x}px`;
        icon.style.top = `${y}px`;
      });
    };

    // Initial positioning
    updateIconPositions();

    // Update positions on resize
    const handleResize = () => {
      updateIconPositions();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML5", level: 90 },
        { name: "CSS", level: 85 },
        { name: "Bootstrap", level: 80 },
        { name: "Tailwind CSS", level: 80 },
        { name: "UI/UX Design", level: 80 },
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 85 },
       
        { name: "Java", level: 75 },
        { name: "Express", level: 80 },
      ]
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", level: 85 },
        { name: "SQL", level: 80 },
      ]
    },
    ,
    {
      category: "Programming Languages",
      items: [
        { name: "C++", level: 85 },
        { name: "Python", level: 70 },
        { name: "R", level: 80 },
        { name: "C", level: 80 },
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git & GitHub", level: 90 },
        { name: "Git Bash", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Figma", level: 80 },
        { name: "Terminal", level: 80 },
      
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            <span className="code-bracket">&lt;</span>
            Skills
            <span className="code-bracket">/&gt;</span>
          </h2>
          <p className="section-subtitle">My technical expertise</p>
        </div>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((category, index) => (
            <motion.div 
              key={category.category}
              className="skill-category"
              variants={itemVariants}
            >
              <h3 className="category-title">
                <span className="category-icon">0{index + 1}.</span>
                {category.category}
              </h3>
              <div className="skills-list">
                {category.items.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="tech-stack" data-aos="fade-up">
          <h3 className="tech-stack-title">Tech Stack</h3>
          <div className="tech-icons" ref={techIconsRef}>
            {[
              "react", "javascript", "html5", "css3", "bootstrap", "tailwind",
              "nodejs", "python", "express",
              "mongodb", "sql",
              "git", "github", "vscode", "terminal",
               "cplusplus", "r",
              // Note: 'Prompt Engineering' is not typically represented by a single icon.
            ].map((tech) => (
              <div key={tech} className="tech-icon">
                <img 
                  src={`/tech-icons/${tech}.svg`} 
                  alt={tech}
                  className="tech-icon-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 