import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <nav>
      <div className="nav-links">
        <NavLink to="/about" 
          className={({ isActive }) => isActive ? 'active' : ''}>
          About
        </NavLink>
        <NavLink to="/experience"
          className={({ isActive }) => isActive ? 'active' : ''}>
          Experience
        </NavLink>
        <NavLink to="/education"
          className={({ isActive }) => isActive ? 'active' : ''}>
          Education
        </NavLink>
        <NavLink to="/skills"
          className={({ isActive }) => isActive ? 'active' : ''}>
          Skills
        </NavLink>
        <NavLink to="/contact"
          className={({ isActive }) => isActive ? 'active' : ''}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Header; 