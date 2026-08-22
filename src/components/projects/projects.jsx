import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import githubImage from '../../images/GitHub.png';
import BSImage1 from '../../images/Projects/bazar_sol_1.png';
import BSImage2 from '../../images/Projects/bazar_sol_2.png';
import BSImage3 from '../../images/Projects/bazar_sol_3.png';
import RZImage1 from '../../images/Projects/rentazac1.png';
import RZImage2 from '../../images/Projects/rentazac2.png';
import RZImage3 from '../../images/Projects/rentazac3.png';
import cargasI1 from '../../images/Projects/cargas1.png';
import cargasI2 from '../../images/Projects/cargas2.png';
import cargasI3 from '../../images/Projects/cargas3.png';
import cosiap1 from '../../images/Projects/COSIAP1.png';
import cosiap2 from '../../images/Projects/COSIAP2.png';
import cosiap3 from '../../images/Projects/COSIAP3.png';
import cosiap4 from '../../images/Projects/COSIAP4.png';
import pbienestar1 from '../../images/Projects/PuntoBienestar1.jpeg';
import pbienestar2 from '../../images/Projects/PuntoBienestar2.jpeg';
import pbienestar3 from '../../images/Projects/PuntoBienestar3.jpeg';

const SWIPE_THRESHOLD = 50;

const ChevronIcon = ({ direction }) => (
  <svg className="chevron-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d={direction === 'left' ? 'M15 5 8 12l7 7' : 'M9 5l7 7-7 7'} />
  </svg>
);

const CloseIcon = () => (
  <svg className="close-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M6 6l12 12" />
    <path d="M18 6 6 18" />
  </svg>
);

const ExpandIcon = () => (
  <svg className="close-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M9 3H3v6" />
    <path d="M15 21h6v-6" />
    <path d="M3 3l7 7" />
    <path d="M21 21l-7-7" />
  </svg>
);

const CollapseIcon = () => (
  <svg className="close-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M3 9h6V3" />
    <path d="M21 15h-6v6" />
    <path d="M10 10L3 3" />
    <path d="M14 14l7 7" />
  </svg>
);

const ProjectCard = ({ title, link, description, images, label, onExpand }) => {
  const [index, setIndex] = useState(0);

  const step = (delta) =>
    setIndex((previous) => (previous + delta + images.length) % images.length);

  return (
    <div className="info-card">
      <div className="header-container">
        <h3>{title}</h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} source repository`}
          >
            <img className="logo-image" src={githubImage} alt="GitHub" />
          </a>
        )}
      </div>
      <p>{description}</p>
      <div className="carousel-container">
        {images.length > 1 && (
          <button
            className="carousel-button left"
            onClick={() => step(-1)}
            aria-label={`Previous ${label} screenshot`}
          >
            <ChevronIcon direction="left" />
          </button>
        )}
        <img
          className="carousel-image"
          onClick={() => onExpand({ images, index, setIndex, label })}
          src={images[index]}
          alt={`${label} ${index + 1}`}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        {images.length > 1 && (
          <button
            className="carousel-button right"
            onClick={() => step(1)}
            aria-label={`Next ${label} screenshot`}
          >
            <ChevronIcon direction="right" />
          </button>
        )}
      </div>
    </div>
  );
};

const MyProjects = () => {
  // Holds the whole slide list, not a single image, so the expanded view can be
  // navigated without closing it. `setIndex` belongs to the card that opened
  // the view, so its inline carousel stays on whatever slide you leave on.
  const [lightbox, setLightbox] = useState(null);
  // These are ~1920x890 desktop screenshots. Fitted to a portrait phone they
  // come out around a fifth of the screen height, which is unreadable, so the
  // expanded view can switch from fit-the-whole-thing to fill-the-height and
  // pan sideways.
  const [zoomed, setZoomed] = useState(false);
  const [canZoom, setCanZoom] = useState(false);
  const touchStartX = useRef(null);
  const viewportRef = useRef(null);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    setZoomed(false);
  }, []);

  const stepLightbox = useCallback((delta) => {
    setZoomed(false);
    setLightbox((current) => {
      if (!current) return current;
      const nextIndex =
        (current.index + delta + current.images.length) % current.images.length;
      return { ...current, index: nextIndex };
    });
  }, []);

  // Whether filling the height would actually buy anything on this screen.
  const measureFit = (event) => {
    const img = event.currentTarget;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const narrow = vw <= 768;
    const availableW = Math.min(1200, vw * (narrow ? 0.94 : 0.88));
    const availableH = vh * (narrow ? 0.68 : 0.78);
    const fittedH = Math.min(availableH, availableW / (img.naturalWidth / img.naturalHeight));
    setCanZoom(fittedH < vh * 0.6);
  };

  // Start a zoom in the middle of the shot rather than at its left edge.
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || !zoomed) return;
    viewport.scrollLeft = (viewport.scrollWidth - viewport.clientWidth) / 2;
  }, [zoomed]);

  // Mirror the expanded slide back onto the card that opened it.
  useEffect(() => {
    if (!lightbox) return;
    lightbox.setIndex(lightbox.index);
  }, [lightbox]);

  // Keyed on open/closed rather than on `lightbox` itself, so stepping through
  // slides doesn't tear the scroll lock down and put it back on every press.
  const isOpen = lightbox !== null;

  useEffect(() => {
    if (!isOpen) return undefined;

    // Hiding the overflow takes the scrollbar away, which widens the viewport
    // and makes the fixed navbar and every centred element jump sideways on
    // open and back again on close. Hold the width it freed while locked.
    const gutter = window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;

    document.body.style.overflow = 'hidden';
    if (gutter > 0) {
      document.body.style.paddingRight = `${gutter}px`;
      document.documentElement.style.setProperty('--scroll-lock-gutter', `${gutter}px`);
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
      document.documentElement.style.removeProperty('--scroll-lock-gutter');
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowRight') stepLightbox(1);
      if (event.key === 'ArrowLeft') stepLightbox(-1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeLightbox, stepLightbox]);

  const handleTouchStart = (event) => {
    // While zoomed a drag pans the image, so it must not also change slide.
    touchStartX.current = zoomed ? null : event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const travelled = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(travelled) < SWIPE_THRESHOLD) return;
    stepLightbox(travelled < 0 ? 1 : -1);
  };

  const bazar_sol_description = `
    School project inspired by a modern e-commerce site. In this site, the main idea is to give the administrator the
    possibility of having control of the stock for a clothing store. The admin can upload new products to stock and adjust the prices and descriptions of each product.
    The customer user can see all the products in the catalog, and add their favorite products to a private favorites list. Additionally, they can add products to a shopping cart and reserve them for later.
  `;

  const bazar_Sol_link = 'https://github.com/AdalbertoCV/Bazar_Sol';

  const bazarSolImages = [BSImage1, BSImage2, BSImage3];

  const rentaZac_description = `
    School project for the student community of the city of Zacatecas. The main idea of the website is to give an alternative to landlords and students to see and
    post houses for rent on a trusted site instead of creating ads on social media. This website is offered as a good solution to the problem of thousands of students looking for a place to rent to continue their studies.
  `;

  const rentazac_link = 'https://github.com/Viky-Gomez/RentaZac';

  const RentaZacImages = [RZImage1, RZImage2, RZImage3];

  const cargas_description = `
    This website was developed as part of my social service in the LABSOL Network. The platform is designed to assist academic program coordinators at the Faculty of Electrical Engineering of Universidad Autónoma de Zacatecas in managing semester schedules, assigning professors, and organizing comprehensive course information. Its primary goal is to prevent scheduling conflicts between professors and class groups, as well as to streamline the process, making schedule management more efficient and automated.
  `;

  const cargas_link = 'https://labsol.cozcyt.gob.mx/git/devops-lab/sistema-de-cargas-uaie';

  const CargasImages = [cargasI1, cargasI2, cargasI3];

  const cosiap_description = `
    As an Intern Developer at LABSOL Network, my team was tasked with developing a project for the Consejo Zacatecano de Ciencia, Tecnología e Innovación (COZCYT). This platform enables administrators to efficiently manage applications for economic grants submitted by students, researchers, professors, and entrepreneurs in Zacatecas City. Prior to the development of this system, the application process was cumbersome and manual, requiring applicants to submit all documentation in paper form. The new platform automates this process, streamlining the workflow and allowing applicants to upload their documents digitally, making the application process more convenient and accessible.
  `;

  const cosiap_link = 'https://labsol.cozcyt.gob.mx/git/RafaUC/cosiap';

  const CosiapImages = [cosiap1, cosiap2, cosiap3, cosiap4];

  const pbienestar_description = `This project consists of an appointment scheduling system for a professional psychological care clinic. It enables administrators to manage specialists' profile status and review appointment details for informed decision-making, ensuring optimal patient care. Additionally, the system automates email notifications for patients, specialists, and administrators, providing real-time updates on appointment changes. It also integrates with the Google Calendar API, allowing users to save appointments to their accounts and receive automated reminders. The system features secure authentication using JSON Web Token (JWT), ensuring protected access to user accounts and sensitive information.
  `;

  const pbienestarImages = [pbienestar1, pbienestar2, pbienestar3];

  const hasMultiple = lightbox && lightbox.images.length > 1;

  return (
    <div className="main-card">
      <div className="experience-header">
        <span className="experience-badge">Featured Projects & Portfolio</span>
      </div>

      <ProjectCard
        title="Appointment Scheduling System"
        description={pbienestar_description}
        images={pbienestarImages}
        label="Punto Bienestar"
        onExpand={setLightbox}
      />

      <ProjectCard
        title="Sistema de Apoyos COZCyT"
        link={cosiap_link}
        description={cosiap_description}
        images={CosiapImages}
        label="Cosiap"
        onExpand={setLightbox}
      />

      <ProjectCard
        title="Sistema de Cargas UAIE"
        link={cargas_link}
        description={cargas_description}
        images={CargasImages}
        label="Cargas"
        onExpand={setLightbox}
      />

      <ProjectCard
        title="Bazar Sol"
        link={bazar_Sol_link}
        description={bazar_sol_description}
        images={bazarSolImages}
        label="Bazar Sol"
        onExpand={setLightbox}
      />

      <ProjectCard
        title="RentaZac"
        link={rentazac_link}
        description={rentaZac_description}
        images={RentaZacImages}
        label="RentaZac"
        onExpand={setLightbox}
      />

      {/* Portalled to <body>: `.main-card` is `position: relative; z-index: 2`,
          so it traps a nested overlay in its stacking context and the fixed
          navbar (z-index 1000) paints over the whole thing. */}
      {lightbox && createPortal(
        <div
          className="fullscreen-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`${lightbox.label} screenshots`}
        >
          <button className="fullscreen-close" onClick={closeLightbox} aria-label="Close">
            <CloseIcon />
          </button>

          {canZoom && (
            <button
              className="fullscreen-zoom"
              onClick={(event) => {
                event.stopPropagation();
                setZoomed((current) => !current);
              }}
              aria-pressed={zoomed}
              aria-label={zoomed ? 'Fit image to screen' : 'Fill screen height'}
            >
              {zoomed ? <CollapseIcon /> : <ExpandIcon />}
            </button>
          )}

          {hasMultiple && (
            <button
              className="fullscreen-nav left"
              onClick={(event) => {
                event.stopPropagation();
                stepLightbox(-1);
              }}
              aria-label="Previous screenshot"
            >
              <ChevronIcon direction="left" />
            </button>
          )}

          <figure
            className={`fullscreen-figure${zoomed ? ' is-zoomed' : ''}`}
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className="fullscreen-viewport"
              ref={viewportRef}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={lightbox.images[lightbox.index]}
                alt={`${lightbox.label} ${lightbox.index + 1} of ${lightbox.images.length}`}
                className="fullscreen-image"
                onLoad={measureFit}
                onClick={canZoom ? () => setZoomed((current) => !current) : undefined}
                style={canZoom ? { cursor: zoomed ? 'zoom-out' : 'zoom-in' } : undefined}
              />
            </div>
            <figcaption className="fullscreen-counter">
              {lightbox.label}
              {hasMultiple && (
                <>
                  <span aria-hidden="true">·</span>
                  <strong>{lightbox.index + 1}</strong> / {lightbox.images.length}
                </>
              )}
              {canZoom && (
                <span className="fullscreen-hint">
                  {zoomed ? 'Drag to explore' : 'Tap image to zoom'}
                </span>
              )}
            </figcaption>
          </figure>

          {hasMultiple && (
            <button
              className="fullscreen-nav right"
              onClick={(event) => {
                event.stopPropagation();
                stepLightbox(1);
              }}
              aria-label="Next screenshot"
            >
              <ChevronIcon direction="right" />
            </button>
          )}
        </div>,
        document.body
      )}
    </div>
  );
};

export default MyProjects;
