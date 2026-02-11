import "./LatestWork.css";

const LatestWorks = () => {
  const projects = [
    {
      id: 1,
      title: "FluxPatient",
      subtitle: "Web Development",
      image: "public/assets/project3.png",
      category: "Web Application",
      link: "https://github.com/faithasalia/FluxPatient.git",
    },
    {
      id: 2,
      title: "Skinalyze",
      subtitle: "Web Development & Deep Learning",
      image: "public/assets/project2.png",
      category: "Web Application",
      link: "https://github.com/faithasalia/Skinalyze.git",
    },
    {
      id: 3,
      title: "ChatBot AI",
      subtitle: "Web Development & RAG",
      image: "public/assets/project1.png",
      category: "Web Application",
      link: "",
    },
  ];

  return (
    <section className="works-section">
      <div className="section-header">
        <h2 className="section-title">Latest Works</h2>
        <span className="section-number">( 04 )</span>
      </div>

      <div className="works-grid">
        {projects.map((project) => (
          <div className="work-card" key={project.id}>
            <div className="work-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="work-image"
              />

              {/* Overlay yang muncul saat hover */}
              <div className="work-overlay">
                {project.link ? (
                  // Jika ada link, tampilkan tombol panah
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-button"
                    style={{
                      display: "inline-block",
                      background: "none",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                  >
                    <div className="arrow-icon">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </div>
                  </a>
                ) : (
                  // Jika link kosong (seperti pada ChatBot AI), tampilkan teks ini
                  <div className="private-message">Private Project</div>
                )}
              </div>

              {/* Tag Label di pojok gambar */}
              <div className="work-tag">{project.category}</div>
            </div>

            <div className="work-info">
              <h3 className="work-title">{project.title}</h3>
              <p className="work-subtitle">{project.subtitle}</p>
            </div>

            <a
              href={project.link}
              className="work-link"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestWorks;
