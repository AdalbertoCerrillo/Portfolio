import '../../App.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    // manejaremos la navegacion mediante navigate.
    const navigate = useNavigate();
    const location = useLocation();


    return (
        <nav className="navbar">
            <div className="logo">My Portfolio</div>
            <ul className="nav-links">
                <li className={location.pathname === "/" ? "active" : ""} onClick={() => navigate('/')}>About Me</li> 
                <li className={location.pathname === "/projects" ? "active" : ""} onClick={() => navigate('/projects')}>Projects</li> 
                <li className={location.pathname === "/experience" ? "active" : ""} onClick={() => navigate('/experience')}>Experience</li>  
            </ul>
            <div className="hamburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    );
};

export default Navbar;
