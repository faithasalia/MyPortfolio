import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>Home</li>
        <li>Experience</li>
        <li>Skills</li>
        <li>Project</li>
      </ul>

      <a
        href="/CV_Faithza.pdf"
        download="CV_Faithza_Mandolang.pdf"
        className="btn-resume"
        style={{ textDecoration: "none", display: "inline-block" }}
      >
        Download PDF Resume
      </a>
    </nav>
  );
};

export default Navbar;
