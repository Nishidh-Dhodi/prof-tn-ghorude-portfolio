import { useState } from 'react';
import { BookOpen, FileText, Award, Calendar, Bookmark, FlaskConical } from 'lucide-react';
import {
  JOURNAL_PUBLICATIONS, CONFERENCE_PUBLICATIONS, PATENTS
} from '../../data/portfolioData';
import './PublicationsPage.css';

const TABS = [
  { id: 'journals',    label: 'Journal Papers',   icon: <FileText size={15} />,    count: JOURNAL_PUBLICATIONS.length },
  { id: 'conferences', label: 'Conference Papers', icon: <Award size={15} />,       count: CONFERENCE_PUBLICATIONS.length },
  { id: 'patents',     label: 'Patents',           icon: <FlaskConical size={15} />, count: PATENTS.length },
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
            Publications &amp; <span className="gradient-text">Research Output</span>
          </h1>
          <p>
            A curated collection of peer-reviewed journal papers, conference
            presentations, and patents in Polymer Physics, Gas Sensors,
            Nanocomposites, and Colorimetry.
          </p>
          <div className="pub-counts">
            {TABS.map((t) => (
              <div className="pub-count-item" key={t.id}>
                <span className="pub-count-num">{t.count}</span>
                <span className="pub-count-label">{t.label}</span>
              </div>
            ))}
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
                <span className="pub-tab-count">{tab.count}</span>
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
                      {pub.authors && (
                        <span className="badge badge-teal">{pub.authors}</span>
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
                  <span className="conference-type-badge">{pub.type}</span>
                  <div className="conference-title">{pub.title}</div>
                  <div className="conference-theme">{pub.theme}</div>
                  <div className="conference-meta">
                    <span>{pub.organizer}</span>
                    <span className="sep">·</span>
                    <Calendar size={12} style={{ opacity: 0.5 }} />
                    <span>{pub.date}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── Patents ─────────────────────────────────────── */}
          {activeTab === 'patents' && (
            <div className="patents-list animate-fadeIn" role="tabpanel">
              {PATENTS.map((patent, i) => (
                <div key={patent.id} className="patent-card">
                  <div className="patent-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="patent-content">
                    <div className="patent-title">{patent.title}</div>
                    <div className="patent-meta">
                      <span className="badge">App. No: {patent.applicationNo}</span>
                      <span className="badge badge-teal">Filed: {patent.filedDate}</span>
                      <span className={`badge ${patent.status === 'Granted' ? 'badge-gold' : 'badge-purple'}`}>
                        {patent.status}
                      </span>
                    </div>
                    <div className="patent-inventors">
                      👤 {patent.inventors}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </main>
  );
}
