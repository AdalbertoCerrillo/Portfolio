import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from '../../i18n/I18nProvider';

// Crescent drawn as one filled circle with a second circle punched out of it,
// so it keeps a clean edge at any size.
const MoonIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <defs>
      <mask id="moonphase-crescent">
        <rect width="24" height="24" fill="black" />
        <circle cx="12" cy="12" r="9" fill="white" />
        <circle cx="16.5" cy="9.5" r="8" fill="black" />
      </mask>
    </defs>
    <circle cx="12" cy="12" r="9" fill="currentColor" mask="url(#moonphase-crescent)" />
  </svg>
);

const MoonphaseBadge = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const popoverRef = useRef(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => event.key === 'Escape' && close();
    const onPointerDown = (event) => {
      if (!wrapperRef.current?.contains(event.target)) close();
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    popoverRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
    };
  }, [open, close]);

  return (
    <div className="moonphase" ref={wrapperRef}>
      <button
        type="button"
        className="navbar-control"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-label={t('common.moonphaseLabel')}
      >
        <MoonIcon className="control-icon" />
      </button>

      {open && (
        <div className="moonphase-popover" ref={popoverRef} tabIndex={-1} role="dialog"
             aria-label={t('common.moonphaseLabel')}>
          <MoonIcon className="moonphase-popover-icon" />
          <p className="moonphase-name">{t('common.moonphaseLabel')}</p>
          <p className="moonphase-soon">{t('common.comingSoon')}</p>
        </div>
      )}
    </div>
  );
};

export default MoonphaseBadge;
