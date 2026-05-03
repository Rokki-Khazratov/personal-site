import { personal } from '../data.js';

export default function Footer({ weatherTemp }) {
  return (
    <footer>
      <div className="footer-left">
        {/* Signature SVG — replace paths with real handwriting + stroke-dasharray animation */}
        <svg className="footer-sig-svg" viewBox="0 0 180 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 52 C14 18, 22 12, 30 36 C34 50, 36 54, 40 38 C44 22, 46 16, 54 34 C58 46, 60 52, 66 32 C70 16, 76 14, 80 34 C82 46, 84 52, 90 42 C96 30, 100 22, 106 38 C110 50, 112 56, 118 36 C122 20, 128 16, 134 36 C138 50, 140 54, 148 42 C156 28, 160 22, 166 40 C170 52, 172 54, 176 44"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
          />
          <path d="M8 58 L40 58" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        </svg>
        <div className="footer-copy">
          © 2026 {personal.name.first} {personal.name.last}<br />
          {personal.location}
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-links">
          <a href={personal.github} target="_blank" rel="noreferrer" className="footer-link">
            <span className="footer-link-label">GitHub</span>
            {personal.githubHandle}
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="footer-link">
            <span className="footer-link-label">LinkedIn</span>
            {personal.linkedinHandle}
          </a>
          <a href={`mailto:${personal.email}`} className="footer-link">
            <span className="footer-link-label">Email</span>
            {personal.email}
          </a>
        </div>
        <div className="footer-meta">
          <span className="footer-meta-item">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            Vienna
          </span>
          <span className="footer-meta-sep">·</span>
          <span className="footer-meta-item">{weatherTemp}</span>
        </div>
      </div>
    </footer>
  );
}
