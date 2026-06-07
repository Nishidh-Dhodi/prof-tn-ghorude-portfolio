import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './BackToTop.css';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 350);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Set focus back to navbar for accessibility
    setTimeout(() => {
      const nav = document.getElementById('navbar');
      if (nav) nav.focus();
    }, 600);
  };

  return (
    <button
      id="back-to-top-btn"
      className={`back-to-top${visible ? ' visible' : ''}`}
      onClick={scrollTop}
      aria-label="Scroll back to top"
      title="Back to top"
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  );
}
