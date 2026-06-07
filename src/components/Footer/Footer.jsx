import { useNavigate } from 'react-router-dom';
import { GraduationCap, Mail } from 'lucide-react';
import { NAV_LINKS, PROFESSOR } from '../../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* ── Brand ─────────────────────────────────────── */}
          <div className="footer-brand">
            <div className="footer-brand-logo">
              <div className="footer-brand-icon">
                <GraduationCap size={18} />
              </div>
              <span className="footer-brand-name">Prof. Hasan Phudinawala</span>
            </div>
            <p className="footer-bio">
              Assistant Professor in Computer Science &amp; IT with 7+ years of
              experience in teaching, research, and mentoring students across
              Mumbai University affiliated colleges.
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
              {NAV_LINKS.map((link) => (
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

          {/* ── Quick Links ───────────────────────────────── */}
          <div>
            <div className="footer-col-title">Quick Resources</div>
            <div className="footer-links">
              <button className="footer-link" onClick={() => navigate('/category/cs/tycs/sem-vi')}>TYCS Sem VI</button>
              <button className="footer-link" onClick={() => navigate('/category/cs/tycs/sem-v')}>TYCS Sem V</button>
              <button className="footer-link" onClick={() => navigate('/category/cs/sycs/sem-iv')}>SYCS Sem IV</button>
              <button className="footer-link" onClick={() => navigate('/category/it/syit/sem-iv')}>SYIT Sem IV</button>
              <button className="footer-link" onClick={() => navigate('/publications')}>All Publications</button>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ────────────────────────────────────── */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {year} Prof. Hasan Phudinawala. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="mailto:hasanphudinawala@gmail.com">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
