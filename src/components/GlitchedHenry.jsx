import React from "react";

/**
 * Glitched Henry mascot: mismatched eyes, a spark where the antenna ball should
 * be, and stars orbiting the head. Vendored from the henry-mascot brand repo
 * (portfolio-blue theme). Inline, deterministic SVG so it needs no network
 * fetch (it renders in content-load error states) and hydrates cleanly.
 */
const GlitchedHenry = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 192 136"
    className={className}
    role="img"
    aria-label="A glitched robot"
  >
    <circle cx="80" cy="20" r="13" fill="#1890ff" opacity="0.22" />
    <polygon points="84,6 73,22 79,22 76,34 87,17 81,17" fill="#1890ff" />
    <rect x="76.5" y="28" width="7" height="24" rx="3" fill="#555555" />
    <rect x="28" y="54.5" width="104" height="73" rx="17.5" fill="#ffffff" stroke="#555555" strokeWidth="5" />
    <circle cx="61.5" cy="91" r="5.5" fill="#1890ff" />
    <circle cx="98.5" cy="91" r="11" fill="#1890ff" />
    <path d="M 0 -9 Q 2 -2 9 0 Q 2 2 0 9 Q -2 2 -9 0 Q -2 -2 0 -9 Z" transform="translate(32 30) scale(0.55)" fill="#40a9ff" />
    <path d="M 0 -9 Q 2 -2 9 0 Q 2 2 0 9 Q -2 2 -9 0 Q -2 -2 0 -9 Z" transform="translate(120 16) scale(0.8)" fill="#1890ff" />
    <path d="M 0 -9 Q 2 -2 9 0 Q 2 2 0 9 Q -2 2 -9 0 Q -2 -2 0 -9 Z" transform="translate(154 46) scale(0.6)" fill="#40a9ff" />
  </svg>
);

export default GlitchedHenry;
