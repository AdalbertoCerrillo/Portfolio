import '../../App.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    // manejaremos la navegacion mediante navigate.
    const navigate = useNavigate();


    return (
        <nav className="navbar">
            <div className="logo">My Portfolio</div>
            <ul className="nav-links">
                <li onClick={() => navigate('/')}>About Me</li> 
                <li onClick={() => navigate('/projects')}>Projects</li> 
                <li onClick={() => navigate('/experience')}>Experience</li> 
                <li onClick={() => navigate('/contact')}>Contact</li> 
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
