import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-text-container">
        <div className="hero-title">
          <h1>
            I'm Faithza Mandolang <span className="hand-wave">👋</span>
          </h1>
          <h3 className="hero-role">
            Full Stack Developer & Deep Learning Engineer
          </h3>
        </div>

        <p className="hero-desc">
          I build high-performance web applications and intelligent systems.
          Focused on delivering clean code and innovative user experiences.
        </p>

        <div className="hero-footer">
          <div className="footer-item">
            <span className="footer-icon">📧</span>
            <span className="footer-label">faithzaazalia@gmail.com</span>
          </div>
          <div className="footer-item">
            <span className="footer-icon">📞</span>
            <span className="footer-label">+62 853-3901-7033</span>
          </div>
        </div>
      </div>

      <div className="hero-image-container">
        <div className="image-wrapper">
          <img src="assets/profile.jpeg" alt="Faithza Mandolang" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
