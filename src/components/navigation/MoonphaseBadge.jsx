import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from '../../i18n/I18nProvider';

// Crescent drawn as one filled circle with a second circle punched out of it,
// so it keeps a clean edge at any size. The mask id is generated per instance
// (useId) rather than hardcoded: the icon renders twice at once - once in the
// button, once in the popover - and two elements sharing one id is invalid
// HTML that also lets either <mask> reference resolve to the wrong instance.
const MoonIcon = ({ className }) => {
  const maskId = useId();
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <defs>
        <mask id={maskId}>
          <rect width="24" height="24" fill="black" />
          <circle cx="12" cy="12" r="9" fill="white" />
          <circle cx="16.5" cy="9.5" r="8" fill="black" />
        </mask>
      </defs>
      <circle cx="12" cy="12" r="9" fill="currentColor" mask={`url(#${maskId})`} />
    </svg>
  );
};

const MoonphaseBadge = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const popoverRef = useRef(null);
  const buttonRef = useRef(null);
  // Only opening the popover should hand focus back to the button on close.
  // Without this guard the button would steal focus on first mount too.
  const openedRef = useRef(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return undefined;
    openedRef.current = true;
    const onKeyDown = (event) => event.key === 'Escape' && close();
    // The popover is portalled to <body>, so it is no longer a DOM descendant
    // of the wrapper - it must be checked as its own "inside" or the mousedown
    // that opened it (or any later click inside it) would immediately close it.
    const onPointerDown = (event) => {
      const target = event.target;
      if (wrapperRef.current?.contains(target)) return;
      if (popoverRef.current?.contains(target)) return;
      close();
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

  // Runs after the popover has unmounted (separate from the effect above, so
  // it fires on close rather than on every open). Skipped on first mount -
  // openedRef only flips true once the popover has actually been opened once.
  useEffect(() => {
    if (open || !openedRef.current) return;
    buttonRef.current?.focus();
  }, [open]);

  return (
    <div className="moonphase" ref={wrapperRef}>
      <button
        type="button"
        ref={buttonRef}
        className="navbar-control"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-label={t('common.moonphaseLabel')}
      >
        <MoonIcon className="control-icon" />
      </button>

      {/* Portalled to <body>, same as the projects and about lightboxes: the
          popover is `position: fixed`, and `.navbar` sets `backdrop-filter`,
          which establishes a containing block for fixed descendants. Left
          inside the navbar, the popover would anchor to the navbar's box
          rather than the viewport wherever an engine honors that rule. */}
      {open && createPortal(
        <div className="moonphase-popover" ref={popoverRef} tabIndex={-1} role="dialog"
             aria-label={t('common.moonphaseLabel')}>
          <MoonIcon className="moonphase-popover-icon" />
          <p className="moonphase-name">{t('common.moonphaseLabel')}</p>
          <p className="moonphase-soon">{t('common.comingSoon')}</p>
        </div>,
        document.body
      )}
    </div>
  );
};

export default MoonphaseBadge;
