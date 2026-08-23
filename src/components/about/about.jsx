import '../../App.css'
import image from '../../images/AboutMe.jpg'
import linkedinLogo from '../../images/linkedin.png'
import mailLogo from '../../images/Mail.jpg'
import GitHubLogo from '../../images/GitHub.png'
import YoutubeLogo from '../../images/Youtube.png'
import pythonLogo from '../../images/python.png'
import JavaLogo from '../../images/java.png'
import JavascriptLogo from '../../images/javascript.png'
import DjangoLogo from '../../images/Django.png'
import RestFrameworkLogo from '../icons/RestFrameworkLogo'
import ReactLogo from '../../images/react.png'
import cssLogo from '../../images/css.jpg'
import dockerLogo from '../../images/docker.jpg'
import gitLogo from '../../images/git.jpg'
import LinuxLogo from '../../images/linux.png'
import oracle from '../../images/oracle.png'
import mysql from '../../images/mysql.png'
import miro from '../../images/miro.png'
import springboot from '../../images/springboot.png'
import sqlite from '../../images/sqlite.jpg'
import html from '../../images/html.png'
import postman from '../../images/postman.png'
import UAZLogo from '../../images/UAZ.jpg'
import jwt from '../../images/jwt.png'
import someceImage from '../../images/Achievements/constancia1.png';
import ICPImage from '../../images/Achievements/constancia2.png';
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from '../../i18n/I18nProvider'


const About = () => {
    const { t } = useTranslation();
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [activeImage, setActiveImage] = useState(null);

    const handleImageClick = (image) =>{
        setActiveImage(image);
        setIsFullScreen(true);
    };

    const closeFullScreen = () =>{
        setIsFullScreen(false);
        setActiveImage(null);
    };

    const email = 'adalc3488@gmail.com';
    const linkedinLink = 'https://www.linkedin.com/in/adalberto-cerrillo-vázquez-a3870628a';
    const GitHubLink = 'https://github.com/AdalbertoCV';
    const YoutubeLink = 'https://www.youtube.com/@acerrillosoftware';

    return (
        <div className='main-card'>
            <div className="experience-header">
                <span className="experience-badge">{t('about.badge')}</span>
            </div>
            <div className="info-card">
                <div className='header-container'>
                <h3>{t('about.heading')}</h3>
                <a href={`mailto:${email}`} className="email-link"><img src={mailLogo} alt="Mail" className="logo-image" /></a>
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} alt="LinkedIn" className="logo-image" /></a>
                <a href={GitHubLink} target="_blank" rel="noopener noreferrer"><img src={GitHubLogo} alt="GitHub" className="logo-image" /></a>
                <a href={YoutubeLink} target="_blank" rel="noopener noreferrer"><img src={YoutubeLogo} alt="GitHub" className="logo-image" /></a>
                </div>
                <h2>{`${t('about.name')} - ${t('about.role')}`}</h2>
                <p>{t('about.bio')}</p>
                <div className="cv-actions">
                    <a
                        className="cv-button"
                        href={`${process.env.PUBLIC_URL}/CV.pdf`}
                        download="Adalberto-Cerrillo-CV.pdf"
                    >
                        <svg className="cv-button-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <path d="M12 3v12" />
                            <path d="M7 10l5 5 5-5" />
                            <path d="M4 20h16" />
                        </svg>
                        {t('about.downloadCv')}
                        <span className="cv-button-meta">{t('about.cvFormat')}</span>
                    </a>
                    <a
                        className="cv-link"
                        href={`${process.env.PUBLIC_URL}/CV.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t('about.openInBrowser')}
                    </a>
                </div>
                <div className="about-image-container">
                    <img src={image} alt={t('about.photoAlt')} className='about-image' />
                </div>
            </div>

            <div className="info-card">
                <h3>{t('skills.heading')}</h3>
                <h2>{t('skills.subheading')}</h2>
                <div className="skills-grid">
                    <p className='icon-text'> Python <img src={pythonLogo} alt="Python" className="logo-image"/></p>
                    <p className='icon-text'> Java<img src={JavaLogo} alt="Java" className="logo-image" /></p>
                    <p className='icon-text'> JavaScript<img src={JavascriptLogo} alt="JavaScript" className="logo-image" /></p>
                    <p className='icon-text'> Django<img src={DjangoLogo} alt="Django" className="logo-image" /></p>
                    <p className='icon-text'> SpringBoot<img src={springboot} alt="spring" className="logo-image" /></p>
                    <p className='icon-text'> Rest-Framework<RestFrameworkLogo className="logo-image" /></p>
                    <p className='icon-text'> Postman<img src={postman} alt="Postman" className="logo-image" /></p>
                    <p className='icon-text'> React<img src={ReactLogo} alt="React" className="logo-image" /></p>
                    <p className='icon-text'> CSS<img src={cssLogo} alt="CSS" className="logo-image" /></p>
                    <p className='icon-text'> HTML<img src={html} alt="HTML" className="logo-image" /></p>
                    <p className='icon-text'> Docker<img src={dockerLogo} alt="Docker" className="logo-image" /></p>
                    <p className='icon-text'> Git<img src={gitLogo} alt="Git" className="logo-image" /></p>
                    <p className='icon-text'> Linux OS<img src={LinuxLogo} alt="Linux" className="logo-image" /></p>
                    <p className='icon-text'> MySQL<img src={mysql} alt="mysql" className="logo-image" /></p>
                    <p className='icon-text'> SQLite<img src={sqlite} alt="sqlite" className="logo-image" /></p>
                    <p className='icon-text'> Oracle DB<img src={oracle} alt="oracle" className="logo-image" /></p>
                    <p className='icon-text'> Miro<img src={miro} alt="miro" className="logo-image" /></p>
                    <p className='icon-text'> JWT<img src={jwt} alt="jwt" className="logo-image" /></p>
                </div>
            </div>
    
            <div className="info-card">
                <h3>{t('education.heading')}</h3>
                <div className='info-card-text'>
                <h2>{`${t('education.university')} ${t('education.years')}`}</h2>
                <p>{t('education.body')}</p>
                <p>{t('education.description')}</p>
                </div>
                <img className="education-image" src={UAZLogo} alt='UAZ'></img>
            </div>

            <div className="info-card">
                <h3>{t('certifications.heading')}</h3>
                <h4>{t('certifications.icp')}</h4>
                <div className="carousel-container">
                  <img
                    className="carousel-image"
                    onClick={() => handleImageClick(ICPImage)}
                    src={ICPImage}
                    alt="ICP"
                    style={{ maxWidth: '100%', height: 'auto' }} 
                  />
                </div>
                <h4>{t('certifications.somece')}</h4>
                <div className="carousel-container">
                  <img
                    className="carousel-image"
                    onClick={() => handleImageClick(someceImage)}
                    src={someceImage}
                    alt="SOMECE"
                    style={{ maxWidth: '100%', height: 'auto' }} 
                  />
                </div>
            </div>
            {/* Portalled for the same reason as the projects lightbox: `.main-card`
                is a stacking context, so a nested overlay renders under the navbar. */}
            {isFullScreen && createPortal(
                <div className="fullscreen-overlay" onClick={closeFullScreen}>
                    <img src={activeImage} alt={t('common.enlargedImage')} className="fullscreen-image" />
                </div>,
                document.body
            )}
        </div>
    );    
};

export default About;