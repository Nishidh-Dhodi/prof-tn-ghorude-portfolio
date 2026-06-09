import { useNavigate } from 'react-router-dom';
import { Mail, Atom } from 'lucide-react';
import { NAV_LINKS, PROFESSOR } from '../../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  // Flatten nav links for footer
  const flatLinks = NAV_LINKS.reduce((acc, link) => {
    acc.push({ label: link.label, path: link.path });
    if (link.dropdown) {
      link.dropdown.forEach(d => acc.push({ label: d.label, path: d.path }));
    }
    return acc;
  }, []);

  const primaryLinks = NAV_LINKS.map(l => ({ label: l.label, path: l.path }));
  const researchLinks = [
    { label: 'Publications',              path: '/publications' },
    { label: 'Ph.D. Scholars Supervised', path: '/phd-scholars' },
    { label: 'Research Projects',         path: '/research-projects' },
    { label: 'Patents',                   path: '/publications' },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* ── Brand ─────────────────────────────────────── */}
          <div className="footer-brand">
            <div className="footer-brand-logo">
              <div className="footer-brand-icon">TG</div>
              <span className="footer-brand-name">Prof. Dr. T. N. Ghorude</span>
            </div>
            <p className="footer-bio">
              Vice-Principal &amp; Head, Department of Physics at Rajiv Gandhi College
              of Arts, Science &amp; Commerce, Mumbai. Dedicated to advancing physics
              research in polymer composites, gas sensors, and colorimetry.
            </p>
            <a
              href={`mailto:${PROFESSOR.email}`}
              className="footer-email-link"
              aria-label="Send an email"
            >
              <Mail size={14} />
              {PROFESSOR.email}
            </a>
          </div>

          {/* ── Navigation ────────────────────────────────── */}
          <div>
            <div className="footer-col-title">Navigation</div>
            <div className="footer-links">
              {primaryLinks.map((link) => (
                <button
                  key={link.label}
                  className="footer-link"
                  onClick={() => navigate(link.path)}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* ── Research Links ─────────────────────────────── */}
          <div>
            <div className="footer-col-title">Research</div>
            <div className="footer-links">
              {researchLinks.map((link) => (
                <button
                  key={link.label}
                  className="footer-link"
                  onClick={() => navigate(link.path)}
                >
                  {link.label}
                </button>
              ))}
              <button className="footer-link" onClick={() => navigate('/career-timeline')}>
                Career Timeline
              </button>
              <button className="footer-link" onClick={() => navigate('/contact')}>
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ────────────────────────────────────── */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {year} Prof. Dr. T. N. Ghorude · Rajiv Gandhi College of Arts, Science &amp; Commerce, Mumbai
          </p>
          <div className="footer-bottom-links">
            <a href={`mailto:${PROFESSOR.email}`}>Contact</a>
            <button onClick={() => navigate('/phd-scholars')}>Ph.D. Scholars</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
