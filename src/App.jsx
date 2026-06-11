import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar    from './components/Navbar/Navbar';
import Footer    from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';

import HomePage              from './pages/HomePage/HomePage';
import AboutPage             from './pages/AboutPage/AboutPage';
import CredentialsPage       from './pages/CredentialsPage/CredentialsPage';
import InstitutionalRolesPage from './pages/InstitutionalRolesPage/InstitutionalRolesPage';
import PublicationsPage      from './pages/PublicationsPage/PublicationsPage';
import PhDScholarsPage       from './pages/PhDScholarsPage/PhDScholarsPage';
import ResearchProjectsPage  from './pages/ResearchProjectsPage/ResearchProjectsPage';
import CareerTimelinePage    from './pages/CareerTimelinePage/CareerTimelinePage';
import TrainingCoursesPage   from './pages/TrainingCoursesPage/TrainingCoursesPage';
import GalleryPage           from './pages/GalleryPage/GalleryPage';
import ContactPage           from './pages/ContactPage/ContactPage';

import './index.css';

// ── Layout wrapper ──────────────────────────────────────────────
function Layout({ children, theme, onToggle }) {
  return (
    <>
      <Navbar theme={theme} onToggle={onToggle} />
      <div style={{ paddingTop: 'var(--navbar-h)' }}>
        {children}
      </div>
      <Footer />
      <BackToTop />
    </>
  );
}

// ── App ─────────────────────────────────────────────────────────
export default function App() {
  // ── Theme state (persisted in localStorage) ──────────────────
  const [theme, setTheme] = useState(
    () => localStorage.getItem('pf-theme') || 'light'
  );

  useEffect(() => {
    const root = document.documentElement;
    root.className = theme;
    localStorage.setItem('pf-theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <BrowserRouter>
      <Layout theme={theme} onToggle={toggleTheme}>
        <Routes>
          {/* ── Home ────────────────────────────── */}
          <Route path="/" element={<HomePage />} />

          {/* ── Profile Group ───────────────────── */}
          <Route path="/about"              element={<AboutPage />} />
          <Route path="/credentials"        element={<CredentialsPage />} />
          <Route path="/institutional-roles" element={<InstitutionalRolesPage />} />

          {/* ── Research & Guidance Group ────────── */}
          <Route path="/publications"      element={<PublicationsPage />} />
          <Route path="/phd-scholars"      element={<PhDScholarsPage />} />
          <Route path="/research-projects" element={<ResearchProjectsPage />} />

          {/* ── Professional Milestones Group ────── */}
          <Route path="/career-timeline"   element={<CareerTimelinePage />} />
          <Route path="/training-courses"  element={<TrainingCoursesPage />} />

          {/* ── Media Showcase ───────────────────── */}
          <Route path="/gallery"           element={<GalleryPage />} />

          {/* ── Contact ──────────────────────────── */}
          <Route path="/contact"           element={<ContactPage />} />

          {/* ── Catch-all redirect ────────────────── */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
