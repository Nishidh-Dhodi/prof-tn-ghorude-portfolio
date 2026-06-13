import { GraduationCap, Calendar, Award } from 'lucide-react';
import { ACADEMIC_CREDENTIALS, EXPERTISE } from '../../data/portfolioData';
import './CredentialsPage.css';

const EXPERTISE_ICONS = ['⚗️','🔬','🧪','🎨','🔋','📡','🧲','🏥','💨'];

export default function CredentialsPage() {
  return (
    <main className="credentials-page page-enter">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container animate-fadeInUp">
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
            Academic Background
          </div>
          <h1>Academic <span className="gradient-text">Credentials</span></h1>
          <p>Educational qualifications, specialisations and areas of technical expertise.</p>
        </div>
      </section>

      {/* ── Qualifications Table ──────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Qualifications</div>
            <h2 className="section-title">
              Academic <span className="gradient-text">Degrees</span>
            </h2>
          </div>

          <div className="credentials-table-wrap animate-fadeInUp">
            <table className="credentials-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Degree</th>
                  <th>University / Institute</th>
                  <th>Year</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {ACADEMIC_CREDENTIALS.map((cred, i) => (
                  <tr key={cred.id}>
                    <td className="cred-num">{i + 1}</td>
                    <td>
                      <div className="cred-degree-wrap">
                        <div className="cred-degree-icon">
                          <GraduationCap size={16} />
                        </div>
                        <span className="cred-degree">{cred.degree}</span>
                      </div>
                    </td>
                    <td className="cred-university">{cred.university}</td>
                    <td>
                      <span className="badge">
                        <Calendar size={11} />
                        {cred.year}
                      </span>
                    </td>
                    <td>
                      {cred.thesis ? (
                        <span className="cred-thesis">{cred.thesis}</span>
                      ) : (
                        <span className="cred-na">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Expertise Cards ───────────────────────────────── */}
          <div className="section-header" style={{ marginTop: 'var(--space-4xl)' }}>
            <div className="section-label">Specialisations</div>
            <h2 className="section-title">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
          </div>

          <div className="expertise-grid animate-fadeInUp">
            {EXPERTISE.map((exp, i) => (
              <div key={exp.label} className={`expertise-card animate-delay-${(i % 5) + 1}`}>
                <div className="expertise-emoji">{EXPERTISE_ICONS[i % EXPERTISE_ICONS.length]}</div>
                <span className="expertise-label">{exp.label}</span>
              </div>
            ))}
          </div>

          {/* ── Key Highlights ────────────────────────────────── */}
          <div className="section-header" style={{ marginTop: 'var(--space-4xl)' }}>
            <div className="section-label">Achievements</div>
            <h2 className="section-title">
              Academic <span className="gradient-text">Highlights</span>
            </h2>
          </div>

          <div className="highlights-grid animate-fadeInUp">
            <div className="highlight-card">
              <Award size={28} className="highlight-icon" />
              <h4>Ph.D. from University of Pune</h4>
              <p>Doctoral thesis on Polypyrrole and its Composites, awarded in 2003. Research laid the foundation for a prolific career in conducting polymer sensors.</p>
            </div>
            <div className="highlight-card">
              <Award size={28} className="highlight-icon" />
              <h4>Recognized Ph.D. Guide</h4>
              <p>Recognized as a Ph.D. Supervisor by the University of Mumbai since 2005. Successfully supervised 7 doctoral scholars to completion.</p>
            </div>
            <div className="highlight-card">
              <Award size={28} className="highlight-icon" />
              <h4>32+ Years of Academic Service</h4>
              <p>Uninterrupted dedication to physics education since 1992, now serving as Principal at Dnyandeep Mandal's St. Joseph College of Arts and Commerce, Virar (West).</p>
            </div>
            <div className="highlight-card">
              <Award size={28} className="highlight-icon" />
              <h4>Patent Holder</h4>
              <p>Holds patents in wireless colorimetry and room temperature gas sensing technologies, bridging research innovation with real-world applications.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
