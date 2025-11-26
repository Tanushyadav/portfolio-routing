import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    fontWeight: isActive ? "700" : "400",
    textDecoration: "none",
    marginRight: "16px",
    color: isActive ? "#1d4ed8" : "#111827",
  });

  return (
    <nav style={{ padding: "12px 20px", borderBottom: "1px solid #e5e7eb" }}>
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/projects" style={linkStyle}>Projects</NavLink>
      <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
    </nav>
  );
}
