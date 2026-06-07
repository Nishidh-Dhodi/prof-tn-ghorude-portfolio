import { Link } from 'react-router-dom';
import {
  BookOpen, Award, Users, Cpu, Globe, Database,
  Shield, Brain, Code, Network, Layers,
  Mail, FileText, ChevronRight
} from 'lucide-react';
import {
  PROFESSOR, EXPERTISE, ACTIVITIES, ACHIEVEMENTS, EXPERIENCE, BOOKS
} from '../../data/portfolioData';
import Timeline from '../../components/Timeline/Timeline';
import './HomePage.css';

/* ── Icon map for expertise skills ─────────────────────────────── */
const ICON_MAP = {
  code:     <Code size={20} />,
  python:   <Layers size={20} />,
  java:     <Cpu size={20} />,
  network:  <Network size={20} />,
  brain:    <Brain size={20} />,
  database: <Database size={20} />,
  shield:   <Shield size={20} />,
  cpu:      <Cpu size={20} />,
  globe:    <Globe size={20} />,
};

export default function HomePage() {
  return (
    <main>
      {/* ── Promo Banner ─────────────────────────────────────── */}
      <div className="promo-banner" role="alert">
        <p>🐍 {PROFESSOR.promoBanner}</p>
        <Link to={PROFESSOR.promoLink}>{PROFESSOR.promoLinkText}</Link>
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content animate-fadeInUp">
              <div className="hero-status">
                <span className="status-dot" />
                Full-Time Faculty · Royal College
              </div>

              <h1 className="hero-title">
                Prof. Hasan<br />
                <span className="gradient-text">Phudinawala</span>
              </h1>

              <p className="hero-subtitle">
                {PROFESSOR.intro}
              </p>

              <div className="hero-actions">
                <Link to="/publications" className="btn btn-primary" id="hero-view-pubs-btn">
                  <BookOpen size={16} />
                  View Publications
                </Link>
                <Link to="/category/cs/tycs/sem-v" className="btn btn-outline" id="hero-resources-btn">
                  <FileText size={16} />
                  Study Resources
                </Link>
              </div>

              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Research Papers</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">7+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Textbooks</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Students Taught</span>
                </div>
              </div>
            </div>

            {/* Avatar */}
            <div className="hero-avatar-wrap animate-fadeInUp animate-delay-2">
              <div className="hero-avatar-glow" />
              <div className="hero-avatar-ring">
                <div className="hero-avatar-inner">HP</div>
              </div>
              <div className="hero-badge-floating">
                <div className="badge-icon">📚</div>
                <div className="badge-text">
                  <strong>Published Author</strong>
                  <span>Tech-Neo Publications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Section ────────────────────────────────────── */}
      <section className="section about-section" id="about">
        <div className="container">
          <div className="section-header">
            <div className="section-label">About Me</div>
            <h2 className="section-title">
              A Passionate Engineer &amp; <span className="gradient-text">Mentor</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-left animate-fadeInUp">
              <div className="about-highlight-box">
                <p>
                  "I firmly believe in Ethics &amp; Principles. My commitment is to quality
                  teaching, student development, mentoring &amp; research activities."
                </p>
              </div>
              <p className="about-bio">{PROFESSOR.bio}</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span className="badge">M.E. Computer Engineering</span>
                <span className="badge badge-teal">10+ Publications</span>
                <span className="badge badge-gold">Published Author</span>
              </div>
            </div>

            <div className="about-right animate-fadeInUp animate-delay-2">
              <p className="about-roles-title">Roles &amp; Activities</p>
              <div className="about-roles-grid">
                {ACTIVITIES.map((a) => (
                  <div key={a} className="role-chip">{a}</div>
                ))}
              </div>

              <p className="about-roles-title" style={{ marginTop: 'var(--space-2xl)' }}>
                Professional Journey
              </p>
              <div className="experience-timeline">
                {EXPERIENCE.slice(0, 5).map((exp, i) => (
                  <div className="timeline-item-small" key={i}>
                    <span className="timeline-year-small">{exp.year}</span>
                    <div>
                      <div className="timeline-role">{exp.role}</div>
                      <div className="timeline-inst">{exp.institution}</div>
                      <div className="timeline-dept">{exp.dept}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Career Timeline ───────────────────────────────────── */}
      <Timeline />

      <div className="divider container" />

      {/* ── Expertise Section ─────────────────────────────────── */}
      <section className="section expertise-section" id="expertise">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Skills</div>
            <h2 className="section-title">
              Areas of <span className="gradient-text">Expertise</span>
            </h2>
            <p className="section-desc">
              Technical proficiencies spanning computer science fundamentals through
              cutting-edge AI/ML domains.
            </p>
          </div>
          <div className="expertise-grid">
            {EXPERTISE.map((skill, i) => (
              <div
                key={skill.label}
                className={`expertise-card animate-fadeInUp animate-delay-${(i % 5) + 1}`}
              >
                <div className="expertise-icon">
                  {ICON_MAP[skill.icon] || <Code size={20} />}
                </div>
                <span className="expertise-label">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider container" />

      {/* ── Books / Textbooks ─────────────────────────────────── */}
      <section className="section books-section" id="books">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Published Works</div>
            <h2 className="section-title">
              Authored <span className="gradient-text">Textbooks</span>
            </h2>
            <p className="section-desc">
              University-curriculum textbooks authored and published through Tech-Neo Publications
              for B.Sc. Computer Science and Information Technology students.
            </p>
          </div>
          <div className="books-grid">
            {BOOKS.map((book, i) => (
              <div
                key={book.id}
                className={`book-card animate-fadeInUp animate-delay-${(i % 3) + 1}`}
              >
                <div className="book-spine">
                  {book.title.split(' ').slice(0, 2).join('\n')}
                </div>
                <div className="book-info">
                  <div className="book-title">{book.title}</div>
                  <div className="book-subtitle">{book.subtitle}</div>
                  <p className="book-desc">{book.description}</p>
                  <div className="book-meta">
                    <span className="badge">{book.year}</span>
                    <span className="badge badge-purple">{book.publisher}</span>
                    {book.coAuthor && (
                      <span className="badge badge-teal">Co-authored</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider container" />

      {/* ── Achievements ──────────────────────────────────────── */}
      <section className="section achievements-section" id="achievements">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Accomplishments</div>
            <h2 className="section-title">
              Achievements &amp; <span className="gradient-text">Recognitions</span>
            </h2>
          </div>
          <div className="achievements-grid">
            {ACHIEVEMENTS.map((ach, i) => (
              <div
                key={ach.id}
                className={`achievement-card animate-fadeInUp animate-delay-${(i % 4) + 1}`}
              >
                <span className="achievement-year">{ach.year}</span>
                <div className="achievement-title">{ach.title}</div>
                <p className="achievement-desc">{ach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
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
              Whether you're a student seeking guidance, a fellow researcher
              looking to collaborate, or an institution seeking a resource person —
              feel free to reach out.
            </p>
            <div className="cta-actions">
              <a
                href="mailto:hasanphudinawala@gmail.com"
                className="btn btn-primary"
                id="cta-email-btn"
              >
                <Mail size={16} />
                Send an Email
              </a>
              <Link to="/publications" className="btn btn-outline" id="cta-pubs-btn">
                <BookOpen size={16} />
                View All Publications
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
