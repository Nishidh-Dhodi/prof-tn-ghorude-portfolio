import { useState } from 'react';
import { BookOpen, FileText, Award, Calendar, Bookmark } from 'lucide-react';
import { JOURNAL_PUBLICATIONS, CONFERENCE_PUBLICATIONS, BOOKS } from '../../data/portfolioData';
import './PublicationsPage.css';

const TABS = [
  { id: 'journals',     label: 'Journal Papers',   icon: <FileText size={15} /> },
  { id: 'conferences',  label: 'Conference Papers', icon: <Award size={15} /> },
  { id: 'books',        label: 'Textbooks',         icon: <BookOpen size={15} /> },
];

export default function PublicationsPage() {
  const [activeTab, setActiveTab] = useState('journals');

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="publications-hero">
        <div className="container animate-fadeInUp">
          <div className="pub-hero-badge">
            <Bookmark size={13} />
            Research &amp; Scholarship
          </div>
          <h1>
            Publications &amp; <span className="gradient-text">Authored Works</span>
          </h1>
          <p>
            A curated collection of peer-reviewed journal papers, conference
            presentations, and authored textbooks spanning AI, ML, Networking,
            and Computer Science education.
          </p>
          <div className="pub-counts">
            <div className="pub-count-item">
              <span className="pub-count-num">{JOURNAL_PUBLICATIONS.length}</span>
              <span className="pub-count-label">Journal Papers</span>
            </div>
            <div className="pub-count-item">
              <span className="pub-count-num">{CONFERENCE_PUBLICATIONS.length}</span>
              <span className="pub-count-label">Conference Papers</span>
            </div>
            <div className="pub-count-item">
              <span className="pub-count-num">{BOOKS.length}</span>
              <span className="pub-count-label">Textbooks</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tabs ─────────────────────────────────────────────── */}
      <div className="pub-tabs-section">
        <div className="container">
          <div className="pub-tabs" role="tablist" aria-label="Publication categories">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                id={`pub-tab-${tab.id}`}
                className={`pub-tab${activeTab === tab.id ? ' active' : ''}`}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                {tab.label}
                <span className="pub-tab-count">
                  {tab.id === 'journals'    && JOURNAL_PUBLICATIONS.length}
                  {tab.id === 'conferences' && CONFERENCE_PUBLICATIONS.length}
                  {tab.id === 'books'       && BOOKS.length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Body ─────────────────────────────────────────────── */}
      <section className="section publications-body">
        <div className="container">
          {/* ── Journal Papers ─────────────────────────────── */}
          {activeTab === 'journals' && (
            <div className="journal-list animate-fadeIn" role="tabpanel">
              {JOURNAL_PUBLICATIONS.map((pub, i) => (
                <div key={pub.id} className="journal-card">
                  <div className="journal-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="journal-content">
                    <div className="journal-title">{pub.title}</div>
                    <div className="journal-meta">
                      <span className="journal-name">{pub.journal}</span>
                      <span className="badge">{pub.year}</span>
                      {pub.issn && (
                        <span className="badge badge-teal">ISSN: {pub.issn}</span>
                      )}
                      {pub.volume && (
                        <span className="badge badge-purple">{pub.volume}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── Conference Papers ───────────────────────────── */}
          {activeTab === 'conferences' && (
            <div className="conference-list animate-fadeIn" role="tabpanel">
              {CONFERENCE_PUBLICATIONS.map((pub) => (
                <div key={pub.id} className="conference-card">
                  <span className="conference-type-badge">
                    {pub.type}
                  </span>
                  <div className="conference-title">{pub.title}</div>
                  <div className="conference-theme">{pub.theme}</div>
                  <div className="conference-meta">
                    <span>{pub.organizer}</span>
                    <span className="sep">·</span>
                    <Calendar size={12} style={{ opacity: 0.5 }} />
                    <span>{pub.date}</span>
                    {pub.issn && pub.issn !== 'N/A' && (
                      <>
                        <span className="sep">·</span>
                        <span>ISSN: {pub.issn}</span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── Textbooks ───────────────────────────────────── */}
          {activeTab === 'books' && (
            <div className="animate-fadeIn" role="tabpanel">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 'var(--space-xl)' }}>
                {BOOKS.map((book) => (
                  <div key={book.id} className="card">
                    <div className="badge badge-purple" style={{ marginBottom: 'var(--space-md)' }}>
                      {book.publisher} · {book.year}
                    </div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>{book.title}</h3>
                    <p style={{ color: 'var(--clr-accent)', fontSize: '0.82rem', marginBottom: 'var(--space-sm)', fontWeight: 500 }}>
                      {book.subtitle}
                    </p>
                    <p style={{ fontSize: '0.85rem', lineHeight: 1.65 }}>{book.description}</p>
                    {book.coAuthor && (
                      <div style={{ marginTop: 'var(--space-sm)' }}>
                        <span className="badge badge-teal">Co-author: {book.coAuthor}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
