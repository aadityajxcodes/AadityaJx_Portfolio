const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            <span className="code-bracket">&lt;</span>
            About Me
            <span className="code-bracket">/&gt;</span>
          </h2>
          <p className="section-subtitle">Here's a little about my journey</p>
        </div>

        <div className="row">
          <div className="col-lg-10 mx-auto" data-aos="fade-up" data-aos-delay="100">
            <p className="lead" style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
              <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>Final-year Computer Science student</span> specializing in <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>Frontend Web Development</span>, with solid knowledge of <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>Full Stack (MERN)</span> technologies and actively building expertise in it. Skilled in creating responsive, user-friendly interfaces using Bootstrap and Tailwind CSS. Currently learning <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>Next.js</span> to deepen my frontend capabilities. Passionate about AI tools and committed to building smart, future-ready tech solutions. Eager to contribute, learn, and grow through <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>meaningful internship or work opportunities</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 