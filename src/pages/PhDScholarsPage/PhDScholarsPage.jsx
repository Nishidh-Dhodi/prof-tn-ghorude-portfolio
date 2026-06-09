import { Users, Atom, CheckCircle } from 'lucide-react';
import { PHD_SCHOLARS, PROFESSOR } from '../../data/portfolioData';
import './PhDScholarsPage.css';

export default function PhDScholarsPage() {
  return (
    <main className="phd-page page-enter">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="phd-hero">
        <div className="container animate-fadeInUp">
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
            Research Guidance
          </div>
          <h1>Ph.D. Scholars <span className="gradient-text">Supervised</span></h1>
          <p>
            Seven research scholars have been awarded their doctoral degrees under the
            mentorship of Prof. Dr. T. N. Ghorude, spanning polymer composites,
            gas sensors, colorimetry, and nanocomposites.
          </p>
          <div className="phd-hero-stats">
            <div className="phd-stat">
              <span className="phd-stat-num">{PHD_SCHOLARS.length}</span>
              <span className="phd-stat-label">Ph.D. Scholars</span>
            </div>
            <div className="phd-stat">
              <span className="phd-stat-num">100%</span>
              <span className="phd-stat-label">Completion Rate</span>
            </div>
            <div className="phd-stat">
              <span className="phd-stat-num">4</span>
              <span className="phd-stat-label">Research Domains</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Scholars Table / Cards ─────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Ph.D. Registry</div>
            <h2 className="section-title">
              Doctoral Research <span className="gradient-text">Scholars</span>
            </h2>
            <p className="section-desc">
              All scholars listed below were registered under the University of Mumbai
              and supervised by Prof. Dr. T. N. Ghorude, Dept. of Physics.
            </p>
          </div>

          {/* ── Desktop Table ────────────────────────────────── */}
          <div className="scholars-table-wrap animate-fadeInUp">
            <table className="scholars-table">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Name of Candidate</th>
                  <th>Research Topic Approved</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {PHD_SCHOLARS.map((scholar) => (
                  <tr key={scholar.srNo}>
                    <td className="scholar-srno">{scholar.srNo}</td>
                    <td>
                      <div className="scholar-name-wrap">
                        <div className="scholar-avatar">
                          {scholar.name.charAt(scholar.name.lastIndexOf(' ') + 1).toUpperCase()}
                        </div>
                        <span className="scholar-name">{scholar.name}</span>
                      </div>
                    </td>
                    <td className="scholar-topic">{scholar.topic}</td>
                    <td>
                      <span className="scholar-status-badge">
                        <CheckCircle size={13} />
                        {scholar.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Mobile Cards ─────────────────────────────────── */}
          <div className="scholars-cards-mobile">
            {PHD_SCHOLARS.map((scholar, i) => (
              <div key={scholar.srNo} className={`scholar-card animate-fadeInUp animate-delay-${(i % 5) + 1}`}>
                <div className="scholar-card-top">
                  <div className="scholar-card-avatar">
                    {scholar.name.charAt(scholar.name.lastIndexOf(' ') + 1).toUpperCase()}
                  </div>
                  <div>
                    <div className="scholar-card-num">Scholar #{scholar.srNo}</div>
                    <div className="scholar-card-name">{scholar.name}</div>
                  </div>
                  <span className="scholar-status-badge">
                    <CheckCircle size={12} />
                    {scholar.status}
                  </span>
                </div>
                <p className="scholar-card-topic">{scholar.topic}</p>
              </div>
            ))}
          </div>

          {/* ── Supervisor Info ───────────────────────────────── */}
          <div className="supervisor-note animate-fadeInUp">
            <div className="supervisor-note-icon">
              <Atom size={24} />
            </div>
            <div className="supervisor-note-content">
              <h4>Ph.D. Supervisor</h4>
              <p>
                <strong>{PROFESSOR.name}</strong> — {PROFESSOR.title},
                {' '}{PROFESSOR.institution}, affiliated to the University of Mumbai.
                All scholars were supervised in areas of Polymer Composites,
                Gas Sensors, Colorimetry, and Nanocomposites.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
