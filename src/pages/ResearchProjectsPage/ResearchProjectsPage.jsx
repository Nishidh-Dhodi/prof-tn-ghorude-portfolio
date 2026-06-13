import { FlaskConical, DollarSign, Calendar, CheckCircle } from 'lucide-react';
import { RESEARCH_PROJECTS } from '../../data/portfolioData';
import './ResearchProjectsPage.css';

const TYPE_COLORS = {
  'Minor Research Project': { cls: 'type-minor', badge: 'badge' },
  'Major Research Project': { cls: 'type-major', badge: 'badge badge-gold' },
};

export default function ResearchProjectsPage() {
  const minor = RESEARCH_PROJECTS.filter(p => p.type === 'Minor Research Project');
  const major = RESEARCH_PROJECTS.filter(p => p.type === 'Major Research Project');

  return (
    <main className="research-projects-page page-enter">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="rp-hero">
        <div className="container animate-fadeInUp">
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
            Funded Research
          </div>
          <h1>Research <span className="gradient-text">Projects</span></h1>
          <p>
            Minor and Major research projects funded by BCUD (University of Mumbai) and
            UGC, spanning gas sensors, polymer composites, and colorimetry.
          </p>
          <div className="rp-hero-stats">
            <div className="rp-stat">
              <span className="rp-stat-num">{minor.length}</span>
              <span className="rp-stat-label">Minor Projects</span>
            </div>
            <div className="rp-stat">
              <span className="rp-stat-num">{major.length}</span>
              <span className="rp-stat-label">Major Projects</span>
            </div>
            <div className="rp-stat">
              <span className="rp-stat-num">100%</span>
              <span className="rp-stat-label">Completion Rate</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* ── Major Projects ────────────────────────────────── */}
          {major.length > 0 && (
            <>
              <div className="section-header">
                <div className="section-label">UGC Funded</div>
                <h2 className="section-title">
                  Major Research <span className="gradient-text">Projects</span>
                </h2>
              </div>
              <div className="rp-grid animate-fadeInUp">
                {major.map((proj) => (
                  <div key={proj.id} className="rp-card rp-card-major">
                    <div className="rp-card-header">
                      <span className={TYPE_COLORS[proj.type]?.badge || 'badge badge-gold'}>
                        {proj.type}
                      </span>
                      <span className="rp-status-badge">
                        <CheckCircle size={12} /> {proj.status}
                      </span>
                    </div>
                    <h3 className="rp-title">{proj.title}</h3>
                    <div className="rp-meta">
                      <div className="rp-meta-item">
                        <FlaskConical size={14} />
                        <span>{proj.fundedBy}</span>
                      </div>
                      {/* <div className="rp-meta-item">
                        <DollarSign size={14} />
                        <span>{proj.amount}</span>
                      </div>
                      <div className="rp-meta-item">
                        <Calendar size={14} />
                        <span>{proj.duration}</span>
                      </div> */}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ── Minor Projects ────────────────────────────────── */}
          <div className="section-header" style={{ marginTop: major.length ? 'var(--space-4xl)' : 0 }}>
            <div className="section-label">BCUD Funded</div>
            <h2 className="section-title">
              Minor Research <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <div className="rp-grid animate-fadeInUp">
            {minor.map((proj, i) => (
              <div key={proj.id} className={`rp-card animate-delay-${(i % 5) + 1}`}>
                <div className="rp-card-header">
                  <span className={TYPE_COLORS[proj.type]?.badge || 'badge'}>
                    {proj.type}
                  </span>
                  <span className="rp-status-badge">
                    <CheckCircle size={12} /> {proj.status}
                  </span>
                </div>
                <h3 className="rp-title">{proj.title}</h3>
                <div className="rp-meta">
                  <div className="rp-meta-item">
                    <FlaskConical size={14} />
                    <span>{proj.fundedBy}</span>
                  </div>
                  {/* <div className="rp-meta-item">
                    <DollarSign size={14} />
                    <span>{proj.amount}</span>
                  </div>
                  <div className="rp-meta-item">
                    <Calendar size={14} />
                    <span>{proj.duration}</span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
