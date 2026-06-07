import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar      from './components/Navbar/Navbar';
import Footer      from './components/Footer/Footer';
import BackToTop   from './components/BackToTop/BackToTop';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import HomePage         from './pages/HomePage/HomePage';
import PublicationsPage from './pages/PublicationsPage/PublicationsPage';
import CategoryPage     from './pages/CategoryPage/CategoryPage';
import ContactPage      from './pages/ContactPage/ContactPage';
import './index.css';

// ── Layout wrapper ──────────────────────────────────────────────
function Layout({ children }) {
  return (
    <>
      <Navbar />
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
    () => localStorage.getItem('pf-theme') || 'dark'
  );

  // Apply class on <html> whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    root.className = theme;
    localStorage.setItem('pf-theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* Contact */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Publications */}
          <Route path="/publications" element={<PublicationsPage />} />

          {/* Category pages — wildcard parameter matching */}
          {/* /category/:department */}
          <Route
            path="/category/:department"
            element={<CategoryPage />}
          />
          {/* /category/:department/:year */}
          <Route
            path="/category/:department/:year"
            element={<CategoryPage />}
          />
          {/* /category/:department/:year/:semester */}
          <Route
            path="/category/:department/:year/:semester"
            element={<CategoryPage />}
          />

          {/* Catch-all — redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>

      {/* ── Floating Theme Toggle (bottom-left) ────────────────── */}
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
    </BrowserRouter>
  );
}
