import { Link } from "react-router-dom";

function Navbar() {
  return (
    style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#333",
        padding: "10px",
      }}
      
    <nav style={{ backgroundColor: "#333", padding: "10px" }}>
      <Link to="/" style={{ color: "white", marginRight: "10px", display: c}}>Home</Link>
      <Link to="/about" style={{ color: "white", marginRight: "10px" }}>About</Link>
      <Link to="/services" style={{ color: "white", marginRight: "10px" }}>Services</Link>
      <Link to="/contact" style={{ color: "white" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
