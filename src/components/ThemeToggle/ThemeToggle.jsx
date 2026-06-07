import { Sun, Moon } from 'lucide-react';
import './ThemeToggle.css';

export default function ThemeToggle({ theme, onToggle }) {
  const isLight = theme === 'light';

  return (
    <button
      id="theme-toggle-btn"
      className={`theme-toggle${isLight ? ' light' : ''}`}
      onClick={onToggle}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      title={isLight ? 'Dark mode' : 'Light mode'}
    >
      <span className="theme-toggle-track">
        <span className="theme-toggle-thumb">
          <span className="toggle-icon toggle-icon--moon">
            <Moon size={14} strokeWidth={2.2} />
          </span>
          <span className="toggle-icon toggle-icon--sun">
            <Sun size={14} strokeWidth={2.2} />
          </span>
        </span>
      </span>
      <span className="theme-toggle-label">
        {isLight ? 'Light' : 'Dark'}
      </span>
    </button>
  );
}
