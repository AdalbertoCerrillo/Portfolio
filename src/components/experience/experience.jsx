import labsolLogo from '../../images/Labsol.png'

const Experience = () =>{
    const infoLabsol = `
        I was part of the Free Software Laboratory (COZCyT) team from September 2023 to November 2024. During my time at LABSOL, I was the leader of two projects carried out for "Universidad Autónoma de Zacatecas" and "Consejo Zacatecano de Ciencia, Tecnología e Innovación". Through the execution of these two projects, I significantly strengthened my knowledge of full-stack web development, requirements analysis, software design, software testing, project management, and teamwork.
    `;

    const labsolLink = 'https://labsol.cozcyt.gob.mx/';

    return (
        <div className="main-card">
            <div className="info-card">
                <h3>Labsol Network (COZCyT)</h3>
                <p>{infoLabsol}</p>
                <a href={labsolLink} target="_blank" rel="noopener noreferrer"><img src={labsolLogo} alt='Labsol Logo'></img></a>
            </div>
        </div>
    );
};

export default Experience;