import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FileText, FlaskConical, BookOpen, Download, ChevronRight, FolderOpen } from 'lucide-react';
import { RESOURCES } from '../../data/portfolioData';
import './CategoryPage.css';

/* ── Helpers ─────────────────────────────────────────────────── */
const TYPE_ICON = {
  'Notes':         <FileText size={18} />,
  'Lab Manual':    <FlaskConical size={18} />,
  'Question Paper':<BookOpen size={18} />,
};

const TYPE_CLASS = {
  'Notes':         'notes',
  'Lab Manual':    'lab',
  'Question Paper':'qp',
};

const DISPLAY_LABELS = {
  cs:    'Computer Science',
  it:    'Information Technology',
  fycs:  'F.Y.B.Sc. CS',
  sycs:  'S.Y.B.Sc. CS',
  tycs:  'T.Y.B.Sc. CS',
  fyit:  'F.Y.B.Sc. IT',
  syit:  'S.Y.B.Sc. IT',
  tyit:  'T.Y.B.Sc. IT',
  'sem-i':   'Semester I',
  'sem-ii':  'Semester II',
  'sem-iii': 'Semester III',
  'sem-iv':  'Semester IV',
  'sem-v':   'Semester V',
  'sem-vi':  'Semester VI',
};

const label = (key) => DISPLAY_LABELS[key] || key?.toUpperCase() || 'All';

const RESOURCE_TYPES = ['All', 'Notes', 'Lab Manual', 'Question Paper'];

export default function CategoryPage() {
  const { department, year, semester } = useParams();
  const navigate = useNavigate();
  const [typeFilter, setTypeFilter] = useState('All');

  /* ── Filter resources by URL params ─────────────────────── */
  const filtered = useMemo(() => {
    return RESOURCES.filter((r) => {
      const matchDept = !department || r.category === department;
      const matchYear = !year       || r.year     === year;
      const matchSem  = !semester   || r.semester  === semester;
      const matchType = typeFilter === 'All' || r.type === typeFilter;
      return matchDept && matchYear && matchSem && matchType;
    });
  }, [department, year, semester, typeFilter]);

  /* ── Counts per type for filter chips ────────────────────── */
  const typeCounts = useMemo(() => {
    const base = RESOURCES.filter((r) => {
      const matchDept = !department || r.category === department;
      const matchYear = !year       || r.year     === year;
      const matchSem  = !semester   || r.semester  === semester;
      return matchDept && matchYear && matchSem;
    });
    return RESOURCE_TYPES.reduce((acc, t) => {
      acc[t] = t === 'All' ? base.length : base.filter(r => r.type === t).length;
      return acc;
    }, {});
  }, [department, year, semester]);

  /* ── Breadcrumb ──────────────────────────────────────────── */
  const crumbs = [
    { label: 'Home',         path: '/' },
    { label: label(department), path: `/category/${department}` },
    year      && { label: label(year),     path: `/category/${department}/${year}` },
    semester  && { label: label(semester), path: null },
  ].filter(Boolean);

  /* ── Page heading ────────────────────────────────────────── */
  const heading = [label(department), label(year), label(semester)]
    .filter(Boolean).join(' — ');

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="category-hero">
        <div className="container animate-fadeInUp">
          {/* Breadcrumb */}
          <nav className="breadcrumb" aria-label="breadcrumb">
            {crumbs.map((c, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                {i > 0 && <ChevronRight size={12} className="breadcrumb-sep" />}
                {c.path ? (
                  <button onClick={() => navigate(c.path)}>{c.label}</button>
                ) : (
                  <span className="breadcrumb-current">{c.label}</span>
                )}
              </span>
            ))}
          </nav>

          <h1>{heading}</h1>
          <p>
            Download lecture notes, lab manuals, and question papers for{' '}
            {[label(department), label(year), label(semester)].filter(Boolean).join(' · ')}.
          </p>
        </div>
      </section>

      {/* ── Filter Bar ───────────────────────────────────────── */}
      <div className="filter-bar">
        <div className="container">
          <div className="filter-bar-inner">
            <span className="filter-label">Filter:</span>
            <div className="filter-chips">
              {RESOURCE_TYPES.map((type) => (
                <button
                  key={type}
                  id={`filter-${type.replace(/\s+/g, '-').toLowerCase()}`}
                  className={`filter-chip${typeFilter === type ? ' active' : ''}`}
                  onClick={() => setTypeFilter(type)}
                >
                  {type}
                  {typeCounts[type] > 0 && (
                    <span className="filter-count">{typeCounts[type]}</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Body ─────────────────────────────────────────────── */}
      <section className="section category-body">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">
                <FolderOpen size={28} />
              </div>
              <h3>No Resources Found</h3>
              <p>
                No materials match your current filter. Try selecting a different
                type or navigate to another semester.
              </p>
              <button className="btn btn-outline" onClick={() => setTypeFilter('All')}>
                Clear Filter
              </button>
            </div>
          ) : (
            <>
              <p style={{
                fontSize: '0.82rem',
                color: 'var(--clr-text-faint)',
                marginBottom: 'var(--space-xl)',
              }}>
                Showing {filtered.length} resource{filtered.length !== 1 ? 's' : ''}
              </p>
              <div className="resource-grid">
                {filtered.map((res, i) => (
                  <div
                    key={res.id}
                    className={`resource-card animate-fadeInUp animate-delay-${(i % 5) + 1}`}
                  >
                    <div className="resource-card-top">
                      <div
                        className={`resource-icon ${TYPE_CLASS[res.type] || 'notes'}`}
                      >
                        {TYPE_ICON[res.type] || <FileText size={18} />}
                      </div>
                      <span className={`badge${
                        res.type === 'Lab Manual'    ? ' badge-teal'   :
                        res.type === 'Question Paper'? ' badge-gold'   : ''
                      }`}>
                        {res.type}
                      </span>
                    </div>

                    <div className="resource-title">{res.title}</div>

                    <div className="resource-tags">
                      {res.tags.map((tag) => (
                        <span key={tag} className="resource-tag">{tag}</span>
                      ))}
                    </div>

                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-download-btn"
                      id={`download-${res.id}`}
                      aria-label={`Download ${res.title}`}
                    >
                      <Download size={14} />
                      Download PDF
                    </a>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
