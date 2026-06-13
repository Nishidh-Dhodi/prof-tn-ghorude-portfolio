import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../data/portfolioData';
import './Navbar.css';
import profileImage from "../../assets/Prof-Dr-T-N-profile.jpg";

export default function Navbar({ theme, onToggle }) {
  const [scrolled,       setScrolled]       = useState(false);
  const [drawerOpen,     setDrawerOpen]     = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(null);
  const navigate  = useNavigate();
  const location  = useLocation();

  /* ── Scroll listener ─────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Close drawer on route change ────────────────────────── */
  useEffect(() => {
    setDrawerOpen(false);
    setOpenMobileMenu(null);
  }, [location.pathname]);

  /* ── Trap body scroll when drawer is open ────────────────── */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const goTo = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  const isActive    = (path) => location.pathname === path;
  const isParentActive = (link) => {
    if (!link.dropdown) return location.pathname === link.path;
    return link.dropdown.some(d => location.pathname === d.path);
  };

  const toggleMobile = (label) =>
    setOpenMobileMenu(prev => (prev === label ? null : label));

  const isLight = theme === 'light';

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="navbar-inner">
          {/* ── Brand ─────────────────────────────────────────── */}
          <a className="navbar-brand" onClick={() => goTo('/')} aria-label="Home">
            <div className="navbar-brand-icon" aria-hidden="true">
              {profileImage ? <img src={profileImage} alt="Profile" /> : "TG"}
            </div>
            <div className="navbar-brand-text">
              <span className="navbar-brand-name">Prof. Dr. T. N. Ghorude</span>
              <span className="navbar-brand-title">Principal</span>
            </div>
          </a>

          {/* ── Desktop Nav ─────────────────────────────────── */}
          <ul className="navbar-nav" role="navigation" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="nav-item">
                {link.dropdown ? (
                  <>
                    <button
                      className={`nav-link${isParentActive(link) ? ' active' : ''}`}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown className="nav-chevron" size={14} />
                    </button>

                    <div className="dropdown" role="menu">
                      {link.dropdown.map((item) => (
                        <button
                          key={item.label}
                          className={`dropdown-link${isActive(item.path) ? ' active' : ''}`}
                          onClick={() => goTo(item.path)}
                          role="menuitem"
                        >
                          <span className="dropdown-dot" aria-hidden="true" />
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <button
                    className={`nav-link${isActive(link.path) ? ' active' : ''}`}
                    onClick={() => goTo(link.path)}
                  >
                    {link.label}
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* ── Right Utilities ─────────────────────────────── */}
          <div className="navbar-utils">
            {/* Theme Toggle */}
            <button
              id="navbar-theme-toggle"
              className={`navbar-theme-btn${isLight ? ' light' : ''}`}
              onClick={onToggle}
              aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
              title={isLight ? 'Dark mode' : 'Light mode'}
            >
              <span className="theme-track">
                <span className="theme-thumb">
                  {isLight ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                  )}
                </span>
              </span>
              <span className="theme-label">{isLight ? 'Light' : 'Dark'}</span>
            </button>

            {/* Register Now CTA */}
            <button
              id="navbar-register-btn"
              className="navbar-cta-btn"
              onClick={() => goTo('/contact')}
            >
              Contact Me
            </button>

            {/* Hamburger */}
            <button
              id="hamburger-btn"
              className={`hamburger${drawerOpen ? ' open' : ''}`}
              aria-label="Toggle navigation"
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen(p => !p)}
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Overlay ──────────────────────────────────── */}
      <div
        className={`mobile-overlay${drawerOpen ? ' open' : ''}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* ── Mobile Drawer ────────────────────────────────────── */}
      <aside
        id="mobile-drawer"
        className={`mobile-drawer${drawerOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
      >
        <div className="mobile-drawer-header">
          <div className="navbar-brand" style={{ cursor: 'default' }}>
            <div className="navbar-brand-icon" aria-hidden="true">
              {profileImage ? <img src={profileImage} alt="Profile" /> : "TG"}
            </div>
            <div className="navbar-brand-text">
              <span className="navbar-brand-name">Dr. T. N. Ghorude</span>
              <span className="navbar-brand-title">Principal</span>
            </div>
          </div>
          <button
            className="mobile-drawer-close"
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        <nav className="mobile-nav">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="mobile-nav-item">
              {link.dropdown ? (
                <>
                  <button
                    className={`mobile-nav-link${isParentActive(link) ? ' active' : ''}`}
                    onClick={() => toggleMobile(link.label)}
                    aria-expanded={openMobileMenu === link.label}
                  >
                    {link.label}
                    <ChevronDown
                      className={`mobile-chevron${openMobileMenu === link.label ? ' open' : ''}`}
                      size={14}
                    />
                  </button>

                  <div className={`mobile-dropdown${openMobileMenu === link.label ? ' open' : ''}`}>
                    <div className="mobile-dropdown-inner">
                      {link.dropdown.map((item) => (
                        <button
                          key={item.label}
                          className={`mobile-sub-link${isActive(item.path) ? ' active' : ''}`}
                          onClick={() => goTo(item.path)}
                        >
                          <span className="mobile-dot" />
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <button
                  className={`mobile-nav-link${isActive(link.path) ? ' active' : ''}`}
                  onClick={() => goTo(link.path)}
                >
                  {link.label}
                </button>
              )}
            </div>
          ))}
        </nav>

        <div className="mobile-nav-footer">
          <button className="mobile-register-btn" onClick={() => goTo('/contact')}>
            Contact Me
          </button>
          <p>© {new Date().getFullYear()} Prof. Dr. T. N. Ghorude</p>
        </div>
      </aside>
    </>
  );
}
