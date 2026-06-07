import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Menu, X, GraduationCap } from 'lucide-react';
import { NAV_LINKS } from '../../data/portfolioData';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const drawerRef = useRef(null);

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

  const isActive = (path) => location.pathname === path;

  const toggleMobile = (label) =>
    setOpenMobileMenu(prev => (prev === label ? null : label));

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="navbar-inner">
          {/* ── Brand ─────────────────────────────────────── */}
          <a className="navbar-brand" onClick={() => goTo('/')} aria-label="Home">
            <div className="navbar-brand-icon">
              <GraduationCap size={18} />
            </div>
            <div className="navbar-brand-text">
              <span className="navbar-brand-name">Prof. H. Phudinawala</span>
              <span className="navbar-brand-title">CS &amp; IT Educator</span>
            </div>
          </a>

          {/* ── Desktop Nav ───────────────────────────────── */}
          <ul className="navbar-nav" role="navigation" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                {link.dropdown ? (
                  <>
                    <button
                      className={`nav-link${location.pathname.startsWith(link.path) ? ' active' : ''}`}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown className="nav-chevron" size={14} />
                    </button>

                    <div className="dropdown" role="menu">
                      {link.dropdown.map((group) => (
                        <div key={group.label} className="dropdown-item">
                          <button
                            className="dropdown-link"
                            onClick={() => goTo(group.path)}
                            role="menuitem"
                          >
                            {group.label}
                            {group.sub && (
                              <ChevronRight className="dropdown-chevron" size={12} />
                            )}
                          </button>

                          {group.sub && (
                            <div className="submenu" role="menu">
                              {group.sub.map((s) => (
                                <button
                                  key={s.label}
                                  className="submenu-link"
                                  onClick={() => goTo(s.path)}
                                  role="menuitem"
                                >
                                  <span className="submenu-dot" />
                                  {s.label}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
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

          {/* ── Hamburger ─────────────────────────────────── */}
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
      </nav>

      {/* ── Mobile Overlay ────────────────────────────────── */}
      <div
        className={`mobile-overlay${drawerOpen ? ' open' : ''}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* ── Mobile Drawer ─────────────────────────────────── */}
      <aside
        ref={drawerRef}
        id="mobile-drawer"
        className={`mobile-drawer${drawerOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
      >
        <div className="mobile-drawer-header">
          <div className="navbar-brand">
            <div className="navbar-brand-icon">
              <GraduationCap size={16} />
            </div>
            <div className="navbar-brand-text">
              <span className="navbar-brand-name">H. Phudinawala</span>
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
                    className={`mobile-nav-link${location.pathname.startsWith(link.path) ? ' active' : ''}`}
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
                      {link.dropdown.map((group) => (
                        <div key={group.label}>
                          <div className="mobile-dropdown-label">{group.label}</div>
                          {group.sub?.map((s) => (
                            <button
                              key={s.label}
                              className="mobile-sub-link"
                              onClick={() => goTo(s.path)}
                            >
                              <span className="mobile-dot" />
                              {s.label}
                            </button>
                          ))}
                        </div>
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
          <p>Prof. Hasan Phudinawala © 2024</p>
        </div>
      </aside>
    </>
  );
}
