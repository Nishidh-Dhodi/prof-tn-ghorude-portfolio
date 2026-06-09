import { Building2, BookOpen, FlaskConical, ClipboardList } from 'lucide-react';
import { INSTITUTIONAL_ROLES } from '../../data/portfolioData';
import './InstitutionalRolesPage.css';

const CATEGORY_COLORS = {
  Administration: { cls: 'cat-admin',  icon: <Building2 size={16} /> },
  Academic:       { cls: 'cat-academic', icon: <BookOpen size={16} /> },
  Accreditation:  { cls: 'cat-accred',  icon: <ClipboardList size={16} /> },
  Research:       { cls: 'cat-research', icon: <FlaskConical size={16} /> },
  Examination:    { cls: 'cat-exam',    icon: <ClipboardList size={16} /> },
};

const categories = [...new Set(INSTITUTIONAL_ROLES.map(r => r.category))];

export default function InstitutionalRolesPage() {
  return (
    <main className="inst-roles-page page-enter">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="ir-page-hero">
        <div className="container animate-fadeInUp">
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
            Administrative & Academic
          </div>
          <h1>Institutional <span className="gradient-text">Roles</span></h1>
          <p>
            A comprehensive overview of administrative, academic, and examination
            roles held at the institutional and university levels.
          </p>
        </div>
      </section>

      {/* ── Roles by Category ─────────────────────────────────── */}
      <section className="section">
        <div className="container">
          {categories.map((cat) => {
            const catMeta = CATEGORY_COLORS[cat] || { cls: 'cat-default', icon: null };
            const roles   = INSTITUTIONAL_ROLES.filter(r => r.category === cat);
            return (
              <div key={cat} className="ir-category-block animate-fadeInUp">
                <div className={`ir-category-header ${catMeta.cls}`}>
                  {catMeta.icon}
                  <h3>{cat}</h3>
                </div>
                <div className="ir-roles-grid">
                  {roles.map((role) => (
                    <div key={role.id} className="ir-role-card">
                      <div className="ir-role-top">
                        <div className="ir-role-title">{role.role}</div>
                        <span className={`badge ${catMeta.cls}-badge`}>{cat}</span>
                      </div>
                      <div className="ir-role-institution">{role.institution}</div>
                      <div className="ir-role-duration">📅 {role.duration}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
