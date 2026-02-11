import "./EduSkill.css";

const EducationSkills = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Universitas Klabat",
      year: "2022-2025",
      desc: "Graduated from informatics major with a GPA 3.94/4.00. Completed an undergraduate thesis on 'Implementation of Transfer Learning and LLM for facial skin problem identification and skincare recommendation' through a web-based application.",
    },
  ];

  const skills = [
    {
      name: "React",
      rating: 4,
      icon: "https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg",
    },
    {
      name: "Node.js",
      rating: 3,
      icon: "https://www.svgrepo.com/show/452075/node-js.svg",
    },
    {
      name: "JavaScript",
      rating: 4,
      icon: "https://www.svgrepo.com/show/349419/javascript.svg",
    },
    {
      name: "Python",
      rating: 4,
      icon: "https://www.svgrepo.com/show/452091/python.svg",
    },
    {
      name: "Flask",
      rating: 4,
      icon: "https://icon.icepanel.io/Technology/png-shadow-512/Flask.png",
    },
    {
      name: "FastAPI",
      rating: 3,
      icon: "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg",
    },
    {
      name: "TensorFlow",
      rating: 4,
      icon: "https://www.svgrepo.com/show/354440/tensorflow.svg",
    },
    {
      name: "PostgreSQL",
      rating: 2,
      icon: "https://www.svgrepo.com/show/303301/postgresql-logo.svg",
    },
    {
      name: "MongoDB",
      rating: 4,
      icon: "https://www.svgrepo.com/show/331488/mongodb.svg",
    },
  ];

  return (
    <section className="edu-skills-section">
      <div className="section-header">
        <h2 className="section-title">Education & Skills</h2>
        <span className="section-number">( 03 )</span>
      </div>

      <div className="edu-skills-container">
        {/* Sisi Kiri: Education */}
        <div className="education-list">
          {education.map((item, index) => (
            <div className="edu-item" key={index}>
              <div className="edu-dot-container">
                <div className="edu-dot"></div>
              </div>
              <div className="edu-info">
                <h3 className="edu-name">
                  {item.institution} - {item.year}
                </h3>
                <h4 className="edu-degree">{item.degree}</h4>
                <p className="edu-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sisi Kanan: Skills Grid */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon-box">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <h4 className="skill-name">{skill.name}</h4>
              <div className="skill-rating">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`rating-dot ${i < skill.rating ? "active" : ""}`}
                  ></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
