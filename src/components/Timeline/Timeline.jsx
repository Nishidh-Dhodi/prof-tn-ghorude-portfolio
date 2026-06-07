import './Timeline.css';

/* ── Exact data scraped from hasanphudinawala.com/profile/ ──────── */
const TIMELINE_MILESTONES = [
  {
    year: '2019',
    label: 'Journey Begins',
    title: 'Career Inception',
    institution: '',
    role: '',
    description: 'Embarked on an academic teaching career, laying the foundation for a decade of education, research, and student mentorship.',
    type: 'milestone',
    color: 'teal',
  },
  {
    year: '2020',
    label: 'Full-Time Faculty',
    title: 'B.Sc. Computer Science',
    institution: 'Nagindas Khandwala College (Autonomous), Malad',
    role: 'Full Time Faculty',
    description: 'Joined as a Full Time Faculty member for the B.Sc. Computer Science program at an autonomous institution.',
    type: 'fulltime',
    color: 'blue',
  },
  {
    year: '2021',
    label: 'Full-Time Faculty',
    title: 'B.Sc. Information Technology',
    institution: 'Niranjan Majithia College of Commerce, Kandivali',
    role: 'Full Time Faculty',
    description: 'Continued full-time engagement teaching B.Sc. I.T. students; also served as Guest Speaker on Augmented & Virtual Reality at Royal College and conducted Add-On Certificate Course on Programming Logic Building at L.S. Raheja College.',
    type: 'fulltime',
    color: 'blue',
  },
  {
    year: '2022',
    label: 'Multi-Role Engagement',
    title: 'Full-Time + Visiting Faculty',
    institution: 'Niranjan Majithia College · Prahladrai Dalmia Lions College · Lords Universal College',
    role: 'Full Time & Visiting Faculty',
    description: 'Full Time Faculty (B.Sc. I.T.) at Niranjan Majithia College. Visiting Faculty (T.Y.B.Sc. I.T.) at both Prahladrai Dalmia Lions College and Lords Universal College. Also received AMP Certificate of Appreciation, ranked 47 in Top 50.',
    type: 'fulltime',
    color: 'purple',
  },
  {
    year: '2023',
    label: 'Research & Publishing',
    title: 'Visiting Faculty + Authored Textbooks',
    institution: 'R.D. & S.H. National College · G.D. Jalan College · Royal College',
    role: 'Visiting Faculty & Full-Time Faculty',
    description: 'Visiting Faculty (M.Sc. Data Science) at R.D. & S.H. National College; Visiting Faculty (F.Y.B.Sc. I.T.) at G.D. Jalan College; Full Time Faculty (B.Sc. C.S.) at Royal College. Published Computer Networks textbooks for S.Y.B.Sc. C.S. and S.Y.B.Sc. I.T.',
    type: 'milestone',
    color: 'gold',
  },
  {
    year: '2024',
    label: 'Present Role',
    title: 'Full-Time Faculty · B.Sc. Computer Science',
    institution: 'Royal College of Arts, Science & Commerce',
    role: 'Full Time Faculty',
    description: 'Currently serving as Full Time Faculty for the B.Sc. Computer Science program. Published Artificial Intelligence and Data Mining & Warehousing textbooks through Tech-Neo Publications.',
    type: 'current',
    color: 'teal',
  },
];

/* ── Color map ──────────────────────────────────────────────────── */
const COLOR_MAP = {
  teal:   { node: 'var(--clr-teal)',     glow: 'rgba(0,212,170,0.25)' },
  blue:   { node: 'var(--clr-accent)',   glow: 'rgba(90,156,248,0.25)' },
  purple: { node: 'var(--clr-accent-2)', glow: 'rgba(139,109,253,0.25)' },
  gold:   { node: 'var(--clr-gold)',     glow: 'rgba(240,180,41,0.25)' },
};

/* ── Type badge map ─────────────────────────────────────────────── */
const TYPE_BADGE = {
  fulltime:  { label: 'Full-Time',  cls: 'badge-blue' },
  milestone: { label: 'Milestone',  cls: 'badge-purple' },
  current:   { label: 'Current',    cls: 'badge-teal' },
};

export default function Timeline() {
  return (
    <section className="timeline-section section" id="career-timeline">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">Career Path</div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-desc">
            A chronological overview of academic milestones, teaching roles, and research achievements from 2019 to present.
          </p>
        </div>

        {/* ── Desktop: Horizontal Track ────────────────────────── */}
        <div className="timeline-track" aria-label="Career timeline">
          {/* Connector line */}
          <div className="timeline-axis" aria-hidden="true" />

          {TIMELINE_MILESTONES.map((m, i) => {
            const colors = COLOR_MAP[m.color];
            const badge  = TYPE_BADGE[m.type];
            const isEven = i % 2 === 0;

            return (
              <div
                key={m.year}
                className={`timeline-item${isEven ? ' item-above' : ' item-below'}`}
                style={{ '--node-color': colors.node, '--node-glow': colors.glow }}
              >
                {/* Card (above or below line) */}
                <div className="timeline-card">
                  <div className="tl-card-top">
                    <span className={`tl-badge ${badge.cls}`}>{badge.label}</span>
                    <span className="tl-year-chip">{m.year}</span>
                  </div>
                  <div className="tl-label">{m.label}</div>
                  <div className="tl-title">{m.title}</div>
                  {m.institution && (
                    <div className="tl-institution">{m.institution}</div>
                  )}
                  <p className="tl-desc">{m.description}</p>
                </div>

                {/* Connector stem */}
                <div className="timeline-stem" aria-hidden="true" />

                {/* Node dot */}
                <div className="timeline-node" aria-hidden="true">
                  <div className="node-ring" />
                  <div className="node-core" />
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Mobile: Vertical Stack (CSS media query handles layout) */}
        <div className="timeline-mobile" aria-label="Career timeline (mobile)">
          <div className="timeline-mobile-line" aria-hidden="true" />
          {TIMELINE_MILESTONES.map((m, i) => {
            const colors = COLOR_MAP[m.color];
            const badge  = TYPE_BADGE[m.type];
            return (
              <div
                key={`mob-${m.year}`}
                className="timeline-mobile-item"
                style={{ '--node-color': colors.node, '--node-glow': colors.glow }}
              >
                <div className="tm-node-wrap" aria-hidden="true">
                  <div className="tm-node-ring" />
                  <div className="tm-node-core" />
                </div>
                <div className="timeline-card tm-card">
                  <div className="tl-card-top">
                    <span className={`tl-badge ${badge.cls}`}>{badge.label}</span>
                    <span className="tl-year-chip">{m.year}</span>
                  </div>
                  <div className="tl-label">{m.label}</div>
                  <div className="tl-title">{m.title}</div>
                  {m.institution && (
                    <div className="tl-institution">{m.institution}</div>
                  )}
                  <p className="tl-desc">{m.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
