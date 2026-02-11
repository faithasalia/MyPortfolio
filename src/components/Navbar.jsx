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

      <button className="btn-resume">Download PDF Resume</button>
    </nav>
  );
};

export default Navbar;
