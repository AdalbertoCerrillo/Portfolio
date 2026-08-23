// Inline rather than an <img> so the wordmark can follow the theme through
// currentColor. The brand red is fixed — it reads on both grounds.
const RestFrameworkLogo = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 600 262"
    role="img"
    aria-label="Django REST Framework"
    fontFamily="Inter, 'Segoe UI', Roboto, system-ui, -apple-system, sans-serif"
  >
    <g fill="currentColor">
      <text x="88" y="54" fontSize="54" fontWeight="500" textLength="168" lengthAdjust="spacingAndGlyphs">django</text>
      <text x="252" y="256" fontSize="54" fontWeight="600" textLength="272" lengthAdjust="spacingAndGlyphs">framework</text>
    </g>
    <text
      x="78" y="208" fontSize="205" fontWeight="500"
      textLength="448" lengthAdjust="spacingAndGlyphs"
      fill="none" stroke="#f0554d" strokeWidth="9" strokeLinejoin="round"
    >REST</text>
  </svg>
);

export default RestFrameworkLogo;
