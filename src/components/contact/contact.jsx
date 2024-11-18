import linkedinLogo from '../../images/linkedin.png'
import mailLogo from '../../images/Mail.jpg'
import GitHubLogo from '../../images/GitHub.png'
import YoutubeLogo from '../../images/Youtube.png'


const Contact = () => {
    const email = 'adalc3488@gmail.com';
    const linkedinLink = 'https://www.linkedin.com/in/adalberto-cerrillo-vázquez-a3870628a';
    const GitHubLink = 'https://github.com/AdalbertoCV';
    const YoutubeLink = 'https://www.youtube.com/@acerrillosoftware';

    return (
        <div className="main-card">
            <div className="contact-card">
                <h3>Contact Me!</h3>

                <div className="contact-item">
                    <img src={mailLogo} alt="Mail" className="logo-image" />
                    <a href={`mailto:${email}`} className="email-link">{email} </a>
                </div>

                <div className="contact-item">
                    <img src={linkedinLogo} alt="LinkedIn" className="logo-image" />
                    <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                        {linkedinLink}
                    </a>
                </div>

                <div className="contact-item">
                    <img src={GitHubLogo} alt="GitHub" className="logo-image" />
                    <a href={GitHubLink} target="_blank" rel="noopener noreferrer">
                        {GitHubLink}
                    </a>
                </div>

                <div className="contact-item">
                    <img src={YoutubeLogo} alt="GitHub" className="logo-image" />
                    <a href={YoutubeLink} target="_blank" rel="noopener noreferrer">
                        {YoutubeLink}
                    </a>
                </div>

            </div>
        </div>
    );

};

export default Contact;