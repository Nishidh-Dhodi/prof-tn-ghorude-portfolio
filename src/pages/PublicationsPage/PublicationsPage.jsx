import { useState } from 'react';
import {
  BookOpen,
  FileText,
  Award,
  Globe,
  FlaskConical,
  Bookmark,
  Calendar,
} from 'lucide-react';
import {
  internationalJournals,
  internationalConferences,
  nationalJournalsAndConferences,
  PATENTS,
} from '../../data/portfolioData';
import './PublicationsPage.css';

// ── Merged pool (used by the "All" tab) ──────────────────────
const ALL_PUBLICATIONS = [
  ...internationalJournals,
  ...internationalConferences,
  ...nationalJournalsAndConferences,
];

// ── Tab configuration ─────────────────────────────────────────
const TABS = [
  {
    id:    'all',
    label: 'All Publications',
    icon:  <BookOpen size={15} />,
    count: ALL_PUBLICATIONS.length,
  },
  {
    id:    'intl-journals',
    label: 'International Journals',
    icon:  <FileText size={15} />,
    count: internationalJournals.length,
  },
  {
    id:    'intl-conferences',
    label: 'International Conferences',
    icon:  <Globe size={15} />,
    count: internationalConferences.length,
  },
  {
    id:    'national',
    label: 'National Journals & Conferences',
    icon:  <Award size={15} />,
    count: nationalJournalsAndConferences.length,
  },
  {
    id:    'patents',
    label: 'Patents',
    icon:  <FlaskConical size={15} />,
    count: PATENTS.length,
  },
];

// ── Reusable publication card for journal/conference entries ──
function PubCard({ pub, index }) {
  return (
    <div key={pub.id} className="journal-card">
      <div className="journal-num">{String(index + 1).padStart(2, '0')}</div>
      <div className="journal-content">
        <div className="journal-title">{pub.title}</div>
        <div className="journal-authors">{pub.authors}</div>
        <div className="journal-meta">
          <span className="journal-name">{pub.source}</span>
        </div>
        <div className="journal-badges">
          {pub.impactFactor && (
            <span className="badge badge-teal">IF: {pub.impactFactor}</span>
          )}
          {pub.issn && (
            <span className="badge badge-purple">ISSN: {pub.issn}</span>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────
export default function PublicationsPage() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────── */}
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
            A comprehensive collection of {internationalJournals.length + internationalConferences.length + nationalJournalsAndConferences.length} peer-reviewed works — international &amp; national journal papers,
            conference presentations, and patents in Polymer Physics, Gas Sensors,
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

      {/* ── Tabs ─────────────────────────────────────────── */}
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

      {/* ── Body ─────────────────────────────────────────── */}
      <section className="section publications-body">
        <div className="container">

          {/* ── All Publications ──────────────────────── */}
          {activeTab === 'all' && (
            <div className="journal-list animate-fadeIn" role="tabpanel" aria-labelledby="pub-tab-all">
              {ALL_PUBLICATIONS.map((pub, i) => (
                <PubCard key={`pub-${pub.id}-${i}`} pub={pub} index={i} />
              ))}
            </div>
          )}

          {/* ── International Journal Papers ───────────── */}
          {activeTab === 'intl-journals' && (
            <div className="journal-list animate-fadeIn" role="tabpanel" aria-labelledby="pub-tab-intl-journals">
              {internationalJournals.map((pub, i) => (
                <PubCard key={pub.id} pub={pub} index={i} />
              ))}
            </div>
          )}

          {/* ── International Conference Papers ────────── */}
          {activeTab === 'intl-conferences' && (
            <div className="journal-list animate-fadeIn" role="tabpanel" aria-labelledby="pub-tab-intl-conferences">
              {internationalConferences.map((pub, i) => (
                <PubCard key={pub.id} pub={pub} index={i} />
              ))}
            </div>
          )}

          {/* ── National Journals & Conferences ────────── */}
          {activeTab === 'national' && (
            <div className="journal-list animate-fadeIn" role="tabpanel" aria-labelledby="pub-tab-national">
              {nationalJournalsAndConferences.map((pub, i) => (
                <PubCard key={pub.id} pub={pub} index={i} />
              ))}
            </div>
          )}

          {/* ── Patents ──────────────────────────────────── */}
          {activeTab === 'patents' && (
            <div className="patents-list animate-fadeIn" role="tabpanel" aria-labelledby="pub-tab-patents">
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
