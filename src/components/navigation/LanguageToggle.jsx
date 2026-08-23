import { useTranslation } from '../../i18n/I18nProvider';

// Two visible segments rather than a globe icon: a globe needs a menu and
// still doesn't say which language you are about to get.
const LanguageToggle = () => {
  const { lang, setLang, t } = useTranslation();

  return (
    <div className="language-toggle" role="group" aria-label={t('common.languageLabel')}>
      {['es', 'en'].map((code) => (
        <button
          key={code}
          type="button"
          className={`language-option${lang === code ? ' is-active' : ''}`}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
