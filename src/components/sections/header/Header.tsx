import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <i className="fa-brands fa-accusoft"></i>
          <span>CourseOnline</span>
        </div>

        <nav className="navbar">
          <ul className="nav-links">
            <li className="nav-link">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/Offers">Offers</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/About">About</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        <div className="links">
          <Link to="/cart">
            <i className="fa-solid fa-bag-shopping"></i>
          </Link>
          <Link to="/my">
            <i className="fa-solid fa-circle-user"></i>
          </Link>
        </div>
      </div>

      <li className="nav-link">
      <NavLink to="/admin" style={({ isActive }) => ({ color: isActive ? 'red' : 'inherit' })}>
        Admin
      </NavLink>
      </li>
      
    </header>
  );
};

export default Header;
