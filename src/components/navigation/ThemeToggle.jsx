import { useTheme } from '../../theme/ThemeProvider';
import { useTranslation } from '../../i18n/I18nProvider';

// A half-filled circle, not a sun/moon pair: the Moonphase mark next to it is
// a moon, and two moons in one navbar makes neither of them legible.
const ContrastIcon = () => (
  <svg className="control-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" stroke="none" />
  </svg>
);

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const label = theme === 'dark' ? t('common.themeToLight') : t('common.themeToDark');

  return (
    <button type="button" className="navbar-control" onClick={toggleTheme} aria-label={label} title={label}>
      <ContrastIcon />
    </button>
  );
};

export default ThemeToggle;
