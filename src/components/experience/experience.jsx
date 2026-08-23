import labsolLogo from '../../images/Labsol.png'
import freelance from '../../images/freelance.png'
import radii from '../../images/radii.png'
import { useTranslation } from '../../i18n/I18nProvider'

const Experience = () =>{
    const { t } = useTranslation();

    const labsolLink = 'https://labsol.cozcyt.gob.mx/';

    const radiiLink = 'https://www.radii.com.mx/es';

    return (
        <div className="main-card">
            <div className="experience-header">
                <span className="experience-badge">{t('experience.badge')}</span>
            </div>
        <div className="info-card">
                <h3>{`${t('experience.radii.company')} ${t('experience.radii.period')}`}</h3>
                <h4>{t('experience.radii.title')}</h4>
                <p>{t('experience.radii.body')}</p>
                <a href={radiiLink} target="_blank" rel="noopener noreferrer"><img className='education-image' src={radii} alt='Radii logo'></img></a>
            </div>
            <div className="info-card">
                <h3>{`${t('experience.freelance.company')} ${t('experience.freelance.period')}`}</h3>
                <h4>{t('experience.freelance.title')}</h4>
                <p>{t('experience.freelance.body')}</p>
                <img className='education-image' src={freelance} alt='Freelance img'></img>
            </div>
            <div className="info-card">
                <h3>{`${t('experience.labsol.company')} ${t('experience.labsol.period')}`}</h3>
                <h4>{t('experience.labsol.title')}</h4>
                <p>{t('experience.labsol.body')}</p>
                <a href={labsolLink} target="_blank" rel="noopener noreferrer"><img className='education-image' src={labsolLogo} alt='Labsol Logo'></img></a>
            </div>
        </div>
    );
};

export default Experience;