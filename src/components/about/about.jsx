import '../../App.css'
import image from '../../images/AboutMe.jpeg'
import pythonLogo from '../../images/python.png'
import JavaLogo from '../../images/java.png'
import JavascriptLogo from '../../images/javascript.png'
import DjangoLogo from '../../images/Django.png'
import restFrameworkLogo from '../../images/rest-framework.png'
import ReactLogo from '../../images/react.png'
import cssLogo from '../../images/css.jpg'
import tailwindLogo from '../../images/tailwind.png'
import bootstrapLogo from '../../images/boostrap.png'
import dockerLogo from '../../images/docker.jpg'
import gitLogo from '../../images/git.jpg'
import LinuxLogo from '../../images/linux.png'
import UAZLogo from '../../images/UAZ.jpg'
import someceImage from '../../images/Achievements/constancia1.png';
import ICPImage from '../../images/Achievements/constancia2.png';
import { useState } from 'react'


const About = () => {
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

    const biografia = `
        Software Engineer with a solid academic background and a proactive attitude for joining work teams aimed at developing innovative and high-quality solutions. I possess outstanding knowledge in backend development, frontend development, software design, and requirements analysis. During my studies, I was an excellent student driven by a commitment to continually improve my knowledge of cutting-edge technologies. I am known for my creative spirit and problem-solving approach, effectively using software to achieve solutions.
    `;

    const nombre = 'Adalberto Cerrillo Vázquez';

    const universidad = 'Universidad Autónoma de Zacatecas';
    const infoUniversidad = `
        I obtained my academic training as a Software Engineer at the Academic Unit of Electrical Engineering at "Universidad Autónoma de Zacatecas". It was there that I nurtured my curiosity and creativity in software system development, in addition to acquiring solid knowledge for developing high-quality solutions, always supported by best practices.
    `;

    return (
        <div className='main-card'>
            <div className="info-card">
                <h3>About Me:</h3>
                <h2>{nombre}</h2>
                <p>{biografia}</p>
                <img src={image} alt='About Me' className='about-image' />
            </div>
    
            <div className="info-card">
                <h3>Skills</h3>
                <br></br>
                <br></br>
                <br></br>
                <div className="skills-grid">
                    <p className='icon-text'> Python <img src={pythonLogo} alt="Python" className="logo-image"/></p>
                    <p className='icon-text'> Java<img src={JavaLogo} alt="Java" className="logo-image" /></p>
                    <p className='icon-text'> JavaScript<img src={JavascriptLogo} alt="JavaScript" className="logo-image" /></p>
                    <p className='icon-text'> Django<img src={DjangoLogo} alt="Django" className="logo-image" /></p>
                    <p className='icon-text'> Rest-Framework<img src={restFrameworkLogo} alt="Django Rest Framework" className="logo-image" /></p>
                    <p className='icon-text'> React<img src={ReactLogo} alt="React" className="logo-image" /></p>
                    <p className='icon-text'> CSS<img src={cssLogo} alt="CSS" className="logo-image" /></p>
                    <p className='icon-text'> Tailwind CSS<img src={tailwindLogo} alt="Tailwind CSS" className="logo-image" /></p>
                    <p className='icon-text'> Bootstrap<img src={bootstrapLogo} alt="Bootstrap" className="logo-image" /></p>
                    <p className='icon-text'> Docker<img src={dockerLogo} alt="Docker" className="logo-image" /></p>
                    <p className='icon-text'> Git<img src={gitLogo} alt="Git" className="logo-image" /></p>
                    <p className='icon-text'> Linux OS<img src={LinuxLogo} alt="Linux" className="logo-image" /></p>
                </div>
            </div>
    
            <div className="info-card">
                <h3>Education:</h3>
                <h2>{universidad}</h2>
                <p>{infoUniversidad}</p>
                <img className="education-image" src={UAZLogo} alt='UAZ'></img>
            </div>
    
            <div className="info-card">
                <h3>Certifications & Achievements:</h3>
                <h4>Internet Computer Certification (2023)</h4>
                <div className="carousel-container">
                  <img
                    className="carousel-image"
                    onClick={() => handleImageClick(ICPImage)}
                    src={ICPImage}
                    alt="ICP"
                    style={{ maxWidth: '100%', height: 'auto' }} 
                  />
                </div>
                <h4>INTERNATIONAL CONGRESS SOMECE 2024</h4>
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
            {isFullScreen && (
                <div className="fullscreen-overlay" onClick={closeFullScreen}>
                    <img src={activeImage} alt="Enlarged project" className="fullscreen-image" />
                </div>
            )}
        </div>
    );    
};

export default About;