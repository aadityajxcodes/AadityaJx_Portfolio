import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      name: "LeetCode Daily Coding Challenge Badge",
      platform: "LeetCode",
      description: "Successfully completed daily coding challenges, demonstrating consistent problem-solving skills and algorithmic thinking.",
      link: "https://leetcode.com/aadityaj5689",
      credential: "https://leetcode.com/aadityaj5689",
      icon: '/logos/leetcode-logo.png'
    },
    {
      name: "NPTEL Certification – Python for Data Science Elite Certification (75%)",
      platform: "IIT Madras | April 2025",
      description: "Topics: Python fundamentals, NumPy, Pandas, data handling, visualization.",
      link: "https://nptel.ac.in/",
      credential: "https://internalapp.nptel.ac.in/NOC/NOC25/SEM1/Ecertificates/106/noc25-cs60/Course/NPTEL25CS60S33900000501227368.pdf",
      icon: '/logos/nptel-logo.jpg'
    },
    {
      name: "MERN Stack Development Course | Apna College by Shradha Khapra",
      platform: "Apna College",
      description: "Comprehensive training in MongoDB, Express.js, React.js, and Node.js for full-stack web development. Gained hands-on experience in building full-stack applications, developing RESTful APIs, managing data and creating dynamic front-end interfaces.",
      link: "https://www.apnacollege.in/",
      credential: "https://www.apnacollege.in/certificate_v2/656c99c46d04c6b398053bca/user/647098d21c89234263020d4e",
      icon: '/logos/apna-college-logo.png'
    },
    {
      name: "GEN AI Cloud Badges – Google Cloud",
      platform: "Google Cloud",
      description: "Earned 17 skill badges by completing hands-on labs and assessments on Google Cloud's Generative AI tools and technologies. Covered topics such as Generative AI Fundamentals, Introduction to Large Language Models, Responsible AI, and Prompt Design. Demonstrated practical skills in developing and deploying GenAI models using tools like Vertex AI and other Google Cloud services.",
      link: "https://cloud.google.com/",
      credential: "https://www.credly.com/users/aaditya-jaiswal.7809d43c",
      icon: '/logos/google-cloud-logo.png'
    },
    {
      name: "Base Builder Series Bootcamp – STIC Techno Club",
      platform: "STIC Techno Club",
      description: "Covered UI/UX, Web/App development, AI & ML, and Blockchain technology.",
      link: "#"
    },
    {
      name: "ChatGPT Prompt Engineering for Developers | OpenAI & DeepLearning.AI",
      platform: "OpenAI & DeepLearning.AI",
      description: "Mastered techniques for optimizing AI-generated responses and enhancing AI-human interaction.",
      link: "https://learn.deeplearning.ai/courses/chatgpt-prompt-eng"
    }
  ];

  const cardColors = ['#A78BFA', '#FCD34D', '#6EE7B7', '#F87171', '#93C5FD'];

  return (
    <section id="certifications" className="py-5" style={{ paddingTop: '80px' }}>
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          <span className="code-bracket">&lt;</span>
          Certifications & Badges
          <span className="code-bracket">/&gt;</span>
        </h2>
        <div className="row">
          {certifications.map((cert, index) => (
            <div key={cert.name} className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div 
                className="certification-card p-4"
                style={{
                  backgroundColor: cardColors[index % cardColors.length],
                  color: '#1F2937',
                  borderRadius: '15px',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                <div style={{ flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                     <h3 className="h5 mb-0" style={{ color: '#1F2937', fontSize: '1.25rem' }}>
                      {cert.link ? (
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ color: '#1F2937', textDecoration: 'underline' }}>{cert.name}</a>
                      ) : cert.name}
                    </h3>
                    {cert.icon ? (
                      <img 
                        src={cert.icon} 
                        alt={cert.platform} 
                        style={{ height: '30px', marginLeft: '10px', objectFit: 'contain' }}
                      />
                    ) : (
                      <FaAward style={{ fontSize: '2rem', color: 'rgba(31, 41, 55, 0.2)' }} />
                    )}
                  </div>
                  <p className="mb-1" style={{ color: '#374151', fontWeight: 500, fontSize: '0.95rem' }}>{cert.platform}</p>
                  <p className="mb-2" style={{ color: '#4B5563', fontSize: '0.9rem' }}>{cert.description}</p>
                </div>
                {cert.credential && (
                  <div style={{ marginTop: '15px' }}>
                    <a href={cert.credential} target="_blank" rel="noopener noreferrer" 
                       style={{
                         display: 'inline-flex',
                         alignItems: 'center',
                         backgroundColor: 'rgba(255,255,255,0.2)',
                         color: '#1F2937',
                         padding: '8px 15px',
                         borderRadius: '20px',
                         textDecoration: 'none',
                         fontWeight: 'bold',
                         fontSize: '0.9rem',
                         transition: 'all 0.3s ease-in-out'
                       }}
                       onMouseOver={(e) => {
                         e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.4)';
                       }}
                        onMouseOut={(e) => {
                         e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)';
                       }}
                    >
                      Credential Link <FaExternalLinkAlt style={{ marginLeft: '5px', fontSize: '0.8em' }} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 