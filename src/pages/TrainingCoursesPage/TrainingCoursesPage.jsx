import { BookOpen, Calendar, Award } from 'lucide-react';
import { TRAINING_COURSES } from '../../data/portfolioData';
import './TrainingCoursesPage.css';

const TYPE_COLORS = {
  // 'Refresher Course':    { cls: 'tc-badge-blue',   bg: 'tc-card-blue' },
  // 'Workshop':            { cls: 'tc-badge-gold',   bg: 'tc-card-gold' },
  // 'Short term course':{ cls: 'tc-badge-teal',  bg: 'tc-card-teal' },
  // 'E-workshop': { cls: 'tc-badge-purple', bg: 'tc-card-purple' },
  // 'Conference':          { cls: 'tc-badge-default',bg: 'tc-card-default' },
  'Refresher Course':  { cls: 'tc-badge-blue',    bg: 'tc-card-blue' },
  'Workshop':          { cls: 'tc-badge-gold',    bg: 'tc-card-gold' },
  'Short term course': { cls: 'tc-badge-teal',    bg: 'tc-card-teal' },
  'E-workshop':        { cls: 'tc-badge-purple',  bg: 'tc-card-purple' },
  'Conference':        { cls: 'tc-badge-default', bg: 'tc-card-default' },
  'Awareness Program': { cls: 'tc-badge-orange',  bg: 'tc-card-orange' },
  'Webinar':           { cls: 'tc-badge-indigo',  bg: 'tc-card-indigo' },
  'Seminar':           { cls: 'tc-badge-rose',    bg: 'tc-card-rose' },
  'Interview Panel':   { cls: 'tc-badge-emerald', bg: 'tc-card-emerald' },
  'Symposium': { cls: 'tc-badge-pink', bg: 'tc-card-pink' },
};

export default function TrainingCoursesPage() {
  return (
    <main className="training-page page-enter">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="tc-hero">
        <div className="container animate-fadeInUp">
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
            Professional Development
          </div>
          <h1>Training &amp; <span className="gradient-text">Courses</span></h1>
          <p>
            Faculty Development Programmes, Refresher Courses, Orientation Programmes,
            and Workshops attended for continuous academic and professional growth.
          </p>
        </div>
      </section>

      {/* ── Courses Grid ──────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Professional Growth</div>
            <h2 className="section-title">
              FDPs &amp; <span className="gradient-text">Training Programmes</span>
            </h2>
          </div>

          <div className="tc-grid animate-fadeInUp">
            {TRAINING_COURSES.map((course, i) => {
              const style = TYPE_COLORS[course.type] || TYPE_COLORS['Conference'];
              return (
                <div key={course.id} className={`tc-card ${style.bg} animate-delay-${(i % 5) + 1}`}>
                  <div className="tc-card-header">
                    <span className={`tc-badge ${style.cls}`}>{course.type}</span>
                    <span className="tc-year">
                      <Calendar size={12} />
                      {course.year}
                    </span>
                  </div>
                  <h3 className="tc-title">{course.title}</h3>
                  <div className="tc-meta">
                    <div className="tc-meta-item">
                      <BookOpen size={13} />
                      <span>{course.organizer}</span>
                    </div>
                    {/* <div className="tc-meta-item">
                      <Award size={13} />
                      <span>Duration: {course.duration}</span>
                    </div> */}
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
