import { CAREER_TIMELINE } from '../../data/portfolioData';
import './CareerTimelinePage.css';

const COLOR_MAP = {
  teal:   { node: 'var(--clr-teal)',     glow: 'rgba(0,212,170,0.25)' },
  blue:   { node: 'var(--clr-accent)',   glow: 'rgba(90,156,248,0.25)' },
  purple: { node: 'var(--clr-accent-2)', glow: 'rgba(139,109,253,0.25)' },
  gold:   { node: 'var(--clr-gold)',     glow: 'rgba(240,180,41,0.25)' },
};

const TYPE_BADGE = {
  fulltime:  { label: 'Full-Time',  cls: 'badge' },
  milestone: { label: 'Milestone',  cls: 'badge badge-purple' },
  current:   { label: 'Current',    cls: 'badge badge-teal' },
};

export default function CareerTimelinePage() {
  return (
    <main className="career-timeline-page page-enter">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="ct-hero">
        <div className="container animate-fadeInUp">
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
            Professional Milestones
          </div>
          <h1>Career <span className="gradient-text">Timeline</span></h1>
          <p>
            A chronological journey through three decades of dedicated academic service,
            research leadership, and institutional administration since 1992.
          </p>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="ct-vertical-timeline">
            {/* Vertical line */}
            <div className="ct-axis" aria-hidden="true" />

            {CAREER_TIMELINE.map((m, i) => {
              const colors = COLOR_MAP[m.color] || COLOR_MAP.blue;
              const badge  = TYPE_BADGE[m.type] || TYPE_BADGE.fulltime;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={m.year}
                  className={`ct-item${isLeft ? ' ct-left' : ' ct-right'}`}
                  style={{ '--node-color': colors.node, '--node-glow': colors.glow }}
                >
                  {/* Node */}
                  <div className="ct-node" aria-hidden="true">
                    <div className="ct-node-ring" />
                    <div className="ct-node-core" />
                  </div>

                  {/* Card */}
                  <div className="ct-card">
                    <div className="ct-card-top">
                      <span className={badge.cls}>{badge.label}</span>
                      <span className="ct-year-chip">{m.year}</span>
                    </div>
                    <div className="ct-label">{m.label}</div>
                    <div className="ct-title">{m.title}</div>
                    {m.institution && (
                      <div className="ct-institution">{m.institution}</div>
                    )}
                    <p className="ct-desc">{m.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Mobile: Vertical Stack ────────────────────────── */}
          <div className="ct-mobile-list">
            <div className="ct-mobile-line" aria-hidden="true" />
            {CAREER_TIMELINE.map((m) => {
              const colors = COLOR_MAP[m.color] || COLOR_MAP.blue;
              const badge  = TYPE_BADGE[m.type] || TYPE_BADGE.fulltime;
              return (
                <div
                  key={`mob-${m.year}`}
                  className="ct-mobile-item"
                  style={{ '--node-color': colors.node, '--node-glow': colors.glow }}
                >
                  <div className="ctm-node-wrap" aria-hidden="true">
                    <div className="ctm-node-ring" />
                    <div className="ctm-node-core" />
                  </div>
                  <div className="ct-card ctm-card">
                    <div className="ct-card-top">
                      <span className={badge.cls}>{badge.label}</span>
                      <span className="ct-year-chip">{m.year}</span>
                    </div>
                    <div className="ct-label">{m.label}</div>
                    <div className="ct-title">{m.title}</div>
                    {m.institution && (
                      <div className="ct-institution">{m.institution}</div>
                    )}
                    <p className="ct-desc">{m.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
