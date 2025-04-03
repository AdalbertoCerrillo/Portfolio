import labsolLogo from '../../images/Labsol.png'
import freelance from '../../images/freelance.png'

const Experience = () =>{
    const infoLabsol = `
        I was part of the Free Software Laboratory (COZCyT) team from September 2023 to November 2024. During my time at LABSOL, I was the leader of two projects carried out for Autonomous University of Zacatecas and The Zacatecan Council of Science, Technology and Innovation. Through the execution of these two projects, I significantly strengthened my knowledge of full-stack web development, requirements analysis, software design, software testing, project management, and teamwork.
    `;

    const infoFreelance = `I am always looking for development projects to provide my clients and employers with high-quality service. I strive to ensure that the products I deliver meet the highest standards. Since January 2025, I have been working on several projects, offering my services as a freelance programmer.
    `;

    const labsolLink = 'https://labsol.cozcyt.gob.mx/';

    return (
        <div className="main-card">
            <div className="info-card">
                <h3>Labsol Network (Sep 2023 - Nov 2024)</h3>
                <p>{infoLabsol}</p>
                <a href={labsolLink} target="_blank" rel="noopener noreferrer"><img className='education-image' src={labsolLogo} alt='Labsol Logo'></img></a>
            </div>
            <div className="info-card">
                <h3>Freelance Programmer (Jan 2025 - now)</h3>
                <p>{infoFreelance}</p>
                <img className='education-image' src={freelance} alt='Freelance img'></img>
            </div>
        </div>
    );
};

export default Experience;