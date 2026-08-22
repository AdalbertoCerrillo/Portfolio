import '../../App.css';
import img from '../../images/logonavbar.png';
import { useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    // manejaremos la navegacion mediante navigate.
    const navigate = useNavigate();
    const location = useLocation();


    return (
        <nav className="navbar">
            <img src={img} className="navbar-logo" alt="Logo"></img>
            <ul className="nav-links">
                <li className={location.pathname === "/" ? "active" : ""} onClick={() => navigate('/')}>About Me</li> 
                <li className={location.pathname === "/projects" ? "active" : ""} onClick={() => navigate('/projects')}>Projects</li> 
                <li className={location.pathname === "/experience" ? "active" : ""} onClick={() => navigate('/experience')}>Experience</li>  
            </ul>
            <div className="navbar-controls">
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
