import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      year: "2025",
      role: "Full Stack Developer",
      project: "Hospital Queue Management System (MVP)",
      type: "Academic Project",
      desc: "Developed a full stack web application (MVP) to manage hospital queues, focusing on efficient patient flow and responsive user experience.",
      techstack: "React, Node.js, MongoDB",
    },
    {
      year: "2025",
      role: "Web Developer & Deep Learning Engineer",
      project: "Skinalyze (MVP)",
      type: "Academic Project",
      desc: "Built a web-based application for facial skin problem analysis by integrating deep learning models with a web system. Implemented CNN models with a transfer learning approach and enhanced analysis using an LLM.",
      techstack:
        "HTML, CSS, Bootstrap, Flask, CNN, Transfer Learning, Gemini LLM, MongoDB, Google Search API, Linux Server",
    },
    {
      year: "2026",
      role: "Web Developer & AI Engineer",
      project: "AI-Powered Company Assistant Chatbot (MVP)",
      type: "Personal Project",
      desc: "Developed an AI-powered company assistant chatbot using a Retrieval-Augmented Generation (RAG) approach with local LLM inference.",
      techstack: "React, FastAPI, Ollama, Qwen, RAG, PostgreSQL",
    },
  ];

  return (
    <section className="experience-section">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <span className="section-number">( 02 )</span>
      </div>

      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            {/* Sisi Kiri: Tahun & Role */}
            <div className="timeline-left">
              <h3 className="exp-year">{exp.year}</h3>
              <p className="exp-role">{exp.role}</p>
            </div>

            {/* Tengah: Garis & Dot */}
            <div className="timeline-middle">
              <div className="dot-outer">
                <div className="dot-inner"></div>
              </div>
              {index !== experiences.length - 1 && <div className="line"></div>}
            </div>

            {/* Sisi Kanan: Detail Perusahaan */}
            <div className="timeline-right">
              <div className="company-info">
                <h4 className="exp-company">{exp.project}</h4>
                <span className="exp-type">{exp.type}</span>
              </div>
              <p className="exp-desc">{exp.desc}</p>
              <p className="exp-desc">Tech Stack: {exp.techstack}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
