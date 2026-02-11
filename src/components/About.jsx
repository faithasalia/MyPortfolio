import "./About.css";

const AboutMe = () => {
  return (
    <section className="about-section">
      <div className="about-header">
        <h2 className="section-title">About Me</h2>
        <span className="section-number">( 01 )</span>
      </div>

      <div className="about-container">
        <div className="about-content">
          <p className="about-desc">
            I’m a Computer Science graduate who loves building Web applications
            and exploring how machine learning and deep learning can bring
            intelligence into digital products. For me, web development is more
            than layout and logic — it’s about creating systems that can learn,
            adapt, and deliver value.
            <br />
            <br />I enjoy experimenting with AI models, integrating them into
            web-based systems, and continuously improving my technical skills
            through real projects.
          </p>

          <div className="stats-grid">
            <div className="stat-item">
              <h3>1+</h3>
              <p>Years of learning & practice</p>
            </div>
            <div className="stat-item">
              <h3>5+</h3>
              <p>Projects & Experiments</p>
            </div>
            <div className="stat-item">
              <h3>10+</h3>
              <p>Technologies/Skills</p>
            </div>
          </div>

          <div className="language-tags">
            <span className="lang-label">
              <span className="icon">🌐</span> Language
            </span>
            <span className="tag">Indonesia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
