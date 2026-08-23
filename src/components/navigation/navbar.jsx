import { useEffect, useRef } from 'react';
import '../../App.css';
import img from '../../images/logonavbar.png';
import { useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useTranslation } from '../../i18n/I18nProvider';

const Navbar = () => {
    // manejaremos la navegacion mediante navigate.
    const navigate = useNavigate();
    const location = useLocation();
    const navRef = useRef(null);
    const { t } = useTranslation();

    useEffect(() => {
        const node = navRef.current;
        if (!node) return undefined;

        // The navbar wraps to two or three rows depending on width and on how many
        // controls it holds, so the clearance below it cannot be a fixed number.
        const publish = () => {
            document.documentElement.style.setProperty(
                '--navbar-h',
                `${Math.ceil(node.getBoundingClientRect().height)}px`
            );
        };
        publish();

        if (typeof ResizeObserver === 'undefined') {
            window.addEventListener('resize', publish);
            return () => window.removeEventListener('resize', publish);
        }
        const observer = new ResizeObserver(publish);
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <nav className="navbar" ref={navRef}>
            <img src={img} className="navbar-logo" alt="Logo"></img>
            <ul className="nav-links">
                <li className={location.pathname === "/" ? "active" : ""} onClick={() => navigate('/')}>{t('nav.about')}</li>
                <li className={location.pathname === "/projects" ? "active" : ""} onClick={() => navigate('/projects')}>{t('nav.projects')}</li>
                <li className={location.pathname === "/experience" ? "active" : ""} onClick={() => navigate('/experience')}>{t('nav.experience')}</li>
            </ul>
            <div className="navbar-controls">
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
