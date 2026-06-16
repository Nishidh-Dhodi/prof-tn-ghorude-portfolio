import { Link } from 'react-router-dom';
import {
  BookOpen, Award, Users, Atom, FlaskConical,
  Mail, FileText, ChevronRight, Star, Microscope
} from 'lucide-react';
import {
  PROFESSOR, KEY_STATS, RESEARCH_AREAS, PHD_SCHOLARS, JOURNAL_PUBLICATIONS
} from '../../data/portfolioData';
import './HomePage.css';
import profileImage from "../../assets/Prof-Dr-T-N-profile.jpg";

// Atom icon map for research areas
const AREA_ICONS = [
  <Atom size={18} />, <FlaskConical size={18} />, <Microscope size={18} />,
  <Star size={18} />, <Atom size={18} />, <FlaskConical size={18} />,
  <Microscope size={18} />, <Star size={18} />, <Atom size={18} />,
  <FlaskConical size={18} />, <Microscope size={18} />, <Star size={18} />,
];

export default function HomePage() {
  return (
    <main>
      {/* ── Promo Banner ─────────────────────────────────────── */}
      {/* <div className="promo-banner" role="alert">
        <p>🎓 {PROFESSOR.promoBanner}</p>
        <Link to={PROFESSOR.promoLink}>{PROFESSOR.promoLinkText}</Link>
      </div> */}

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero" id="home">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content animate-fadeInUp">
              <div className="hero-status">
                <span className="status-dot" />
                Principal · St. Joseph College
              </div>

              <h1 className="hero-title">
                Prof. Dr. T. N.<br />
                <span className="gradient-text">Ghorude</span>
              </h1>

              <p className="hero-subtitle">
                {PROFESSOR.intro}
              </p>

              <div className="hero-actions">
                <Link to="/publications" className="btn btn-primary" id="hero-view-pubs-btn">
                  <BookOpen size={16} />
                  View Publications
                </Link>
                <Link to="/phd-scholars" className="btn btn-outline" id="hero-scholars-btn">
                  <Users size={16} />
                  Ph.D. Scholars
                </Link>
              </div>

              <div className="hero-stats">
                {KEY_STATS.map((stat, i) => (
                  <div className="stat-item" key={i}>
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Avatar / Badge Side */}
            <div className="hero-avatar-wrap animate-fadeInUp animate-delay-2">
              <div className="hero-avatar-glow" />
              <div className="hero-avatar-ring">
                <div className="hero-avatar-inner">
                  <div className="hero-avatar-initials">{profileImage ? <img src={profileImage} alt="Profile" /> : "TG"}</div> {/* update with actual image if available */}
                </div>
              </div>
              <div className="hero-badge-floating">
                <div className="badge-icon">🔬</div>
                <div className="badge-text">
                  <strong>Ph.D. Guide</strong>
                  <span>University of Mumbai</span>
                </div>
              </div>
              <div className="hero-badge-floating-2">
                <div className="badge-icon">🏛️</div>
                <div className="badge-text">
                  <strong>Principal</strong>
                  <span>St. Joseph College, Virar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Snapshot ────────────────────────────────────── */}
      <section className="section about-snapshot" id="about">
        <div className="container">
          <div className="section-header">
            <div className="section-label">About</div>
            <h2 className="section-title">
              Dedicated to <span className="gradient-text">Physics & Research</span>
            </h2>
          </div>

          <div className="about-snap-grid">
            <div className="about-snap-left animate-fadeInUp">
              <div className="about-highlight-box">
                <p>
                  "A committed academician with over 32 years of teaching experience,
                  leading physics research in polymer composites, gas sensors, and
                  colorimetry — mentoring the next generation of scientists."
                </p>
              </div>
              <p className="about-bio">{PROFESSOR.bio}</p>
              <div className="about-badges">
                <span className="badge">Ph.D. — Physics</span>
                <span className="badge badge-teal">7 Ph.D. Scholars</span>
                <span className="badge badge-gold">32+ Years Teaching</span>
              </div>
              <Link to="/about" className="btn btn-outline snap-cta">
                Full Profile <ChevronRight size={14} />
              </Link>
            </div>

            <div className="about-snap-right animate-fadeInUp animate-delay-2">
              <div className="snap-cards-grid">
                <div className="snap-card">
                  <div className="snap-card-icon"><BookOpen size={22} /></div>
                  <div className="snap-card-number">20+</div>
                  <div className="snap-card-label">Research Papers</div>
                </div>
                <div className="snap-card">
                  <div className="snap-card-icon"><Users size={22} /></div>
                  <div className="snap-card-number">7</div>
                  <div className="snap-card-label">Ph.D. Scholars</div>
                </div>
                <div className="snap-card">
                  <div className="snap-card-icon"><Award size={22} /></div>
                  <div className="snap-card-number">5+</div>
                  <div className="snap-card-label">Funded Projects</div>
                </div>
                <div className="snap-card">
                  <div className="snap-card-icon"><Atom size={22} /></div>
                  <div className="snap-card-number">32+</div>
                  <div className="snap-card-label">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider container" />

      {/* ── Research Areas ─────────────────────────────────────── */}
      <section className="section research-areas-section" id="research">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Research Focus</div>
            <h2 className="section-title">
              Areas of <span className="gradient-text">Specialisation</span>
            </h2>
            <p className="section-desc">
              Cutting-edge research spanning polymer composites, gas sensor technology,
              nanocomposites, and optical colorimetry with bio-medical applications.
            </p>
          </div>
          <div className="research-areas-grid">
            {RESEARCH_AREAS.map((area, i) => (
              <div
                key={area}
                className={`research-area-card animate-fadeInUp animate-delay-${(i % 5) + 1}`}
              >
                <div className="ra-icon">{AREA_ICONS[i % AREA_ICONS.length]}</div>
                <span className="ra-label">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider container" />

      {/* ── Publications Preview ───────────────────────────────── */}
      <section className="section publications-preview-section" id="publications">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Research Output</div>
            <h2 className="section-title">
              Recent <span className="gradient-text">Publications</span>
            </h2>
          </div>
          <div className="pub-preview-list">
            {JOURNAL_PUBLICATIONS.slice(0, 4).map((pub, i) => (
              <div key={pub.id} className={`pub-preview-card animate-fadeInUp animate-delay-${i + 1}`}>
                <div className="pub-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="pub-preview-content">
                  <div className="pub-preview-title">{pub.title}</div>
                  <div className="pub-preview-meta">
                    <span className="pub-journal">{pub.journal}</span>
                    <span className="badge">{pub.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta-wrap">
            <Link to="/publications" className="btn btn-primary" id="home-all-pubs-btn">
              <FileText size={16} />
              View All Publications
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <div className="divider container" />

      {/* ── Ph.D. Scholars Preview ─────────────────────────────── */}
      <section className="section scholars-preview-section" id="scholars">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Research Guidance</div>
            <h2 className="section-title">
              Ph.D. Scholars <span className="gradient-text">Supervised</span>
            </h2>
            <p className="section-desc">
              Seven research scholars have successfully completed their doctoral degrees
              under the guidance of Prof. Dr. T. N. Ghorude.
            </p>
          </div>
          <div className="scholars-preview-grid">
            {PHD_SCHOLARS.slice(0, 3).map((scholar, i) => (
              <div key={scholar.srNo} className={`scholar-preview-card animate-fadeInUp animate-delay-${i + 1}`}>
                <div className="scholar-num">#{scholar.srNo}</div>
                <div className="scholar-preview-name">{scholar.name}</div>
                <p className="scholar-preview-topic">{scholar.topic}</p>
                <span className="badge badge-teal">{scholar.status}</span>
              </div>
            ))}
          </div>
          <div className="section-cta-wrap">
            <Link to="/phd-scholars" className="btn btn-outline" id="home-all-scholars-btn">
              <Users size={16} />
              View All 7 Scholars
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ────────────────────────────────────────── */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <div className="section-label" style={{ justifyContent: 'center' }}>
              Get in Touch
            </div>
            <h2>
              Collaborate or <span className="gradient-text">Connect</span>
            </h2>
            <p>
              Whether you're a research scholar seeking Ph.D. guidance, a fellow
              researcher looking to collaborate, or an institution seeking an expert
              in polymer physics — reach out today.
            </p>
            <div className="cta-actions">
              <a
                href="mailto:ghorude@rajivgandhicollege.ac.in"
                className="btn btn-primary"
                id="cta-email-btn"
              >
                <Mail size={16} />
                Send an Email
              </a>
              <Link to="/research-projects" className="btn btn-outline" id="cta-projects-btn">
                <FlaskConical size={16} />
                Research Projects
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
