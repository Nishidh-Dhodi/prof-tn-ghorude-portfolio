import { Link } from 'react-router-dom';
import {
  Atom, BookOpen, Users, Award, Microscope, FlaskConical, ChevronRight
} from 'lucide-react';
import {
  PROFESSOR, RESEARCH_AREAS, KEY_STATS, INSTITUTIONAL_ROLES
} from '../../data/portfolioData';
import './AboutPage.css';
import profileImage from "../../assets/Prof-Dr-T-N-profile.jpg";

const AREA_ICONS = [
  <Atom size={16} />, <FlaskConical size={16} />, <Microscope size={16} />,
  <Award size={16} />, <Atom size={16} />, <FlaskConical size={16} />,
  <Microscope size={16} />, <Award size={16} />, <Atom size={16} />,
  <FlaskConical size={16} />, <Microscope size={16} />, <Award size={16} />,
];

export default function AboutPage() {
  return (
    <main className="about-page page-enter">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container animate-fadeInUp">
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
            Profile
          </div>
          <h1>About <span className="gradient-text">Prof. Dr. T. N. Ghorude</span></h1>
          <p>
            Principal — Dnyandeep Mandal's St. Joseph College of Arts and Commerce, Virar (West)
          </p>
        </div>
      </section>

      {/* ── About Body ────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="about-main-grid">
            {/* ── Left — Avatar + Quick Info ─── */}
            <div className="about-sidebar animate-fadeInUp">
              <div className="about-avatar-card">
                <div className="about-avatar-circle">
                  {profileImage ? <img src={profileImage} alt="Profile" /> : "TG"}
                  </div>
                <h2 className="about-avatar-name">{PROFESSOR.name}</h2>
                <p className="about-avatar-title">{PROFESSOR.title}</p>
                <p className="about-avatar-inst">{PROFESSOR.institution}</p>
                <div className="about-avatar-stats">
                  {KEY_STATS.map((s, i) => (
                    <div className="aas-item" key={i}>
                      <span className="aas-num">{s.number}</span>
                      <span className="aas-label">{s.label}</span>
                    </div>
                  ))}
                </div>
                <a href={`mailto:${PROFESSOR.email}`} className="btn btn-primary about-email-btn">
                  Contact Professor
                </a>
              </div>
            </div>

            {/* ── Right — Bio + Areas ─────────── */}
            <div className="about-main-content animate-fadeInUp animate-delay-2">
              <div className="about-quote">
                <blockquote>
                  "{PROFESSOR.tagline}"
                </blockquote>
              </div>

              <div className="about-section-block">
                <h3>Biography</h3>
                <p>{PROFESSOR.bio}</p>
              </div>

              <div className="about-section-block">
                <h3>Research Focus Areas</h3>
                <div className="about-areas-grid">
                  {RESEARCH_AREAS.map((area, i) => (
                    <div key={area} className="about-area-chip">
                      <span className="area-chip-icon">{AREA_ICONS[i % AREA_ICONS.length]}</span>
                      {area}
                    </div>
                  ))}
                </div>
              </div>

              <div className="about-links-row">
                <Link to="/credentials" className="btn btn-outline" id="about-creds-btn">
                  Academic Credentials <ChevronRight size={14} />
                </Link>
                <Link to="/institutional-roles" className="btn btn-outline" id="about-roles-btn">
                  Institutional Roles <ChevronRight size={14} />
                </Link>
                <Link to="/publications" className="btn btn-outline" id="about-pubs-btn">
                  Publications <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
