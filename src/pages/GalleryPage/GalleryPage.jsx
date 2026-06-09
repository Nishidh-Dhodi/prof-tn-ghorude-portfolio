import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize, Minimize } from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from '../../data/portfolioData';
import './GalleryPage.css';

const CATEGORY_EMOJIS = {
  'award': '🏆',
  'book-cover': '📚',
  'event': '🎤',
  'news-paper': '📰',
  'photo': '📷',
};

// ── Lightbox Modal ────────────────────────────────────────────
function Lightbox({ images, startIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const modalRef = useRef(null);

  const currentImage = images[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === images.length - 1;

  /* ── Navigation ─────────────────────────────────────────── */
  const goPrev = useCallback(() => {
    if (!isFirst) {
      setImgLoaded(false);
      setCurrentIndex((i) => i - 1);
    }
  }, [isFirst]);

  const goNext = useCallback(() => {
    if (!isLast) {
      setImgLoaded(false);
      setCurrentIndex((i) => i + 1);
    }
  }, [isLast]);

  /* ── Keyboard navigation ─────────────────────────────────── */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goPrev, goNext, onClose]);

  /* ── Body scroll lock ────────────────────────────────────── */
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = original; };
  }, []);

  /* ── Fullscreen API ──────────────────────────────────────── */
  const toggleFullscreen = useCallback(async () => {
    const el = modalRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      try { await el.requestFullscreen(); } catch (_) { }
    } else {
      try { await document.exitFullscreen(); } catch (_) { }
    }
  }, []);

  /* Track real fullscreen state (user may press Esc to exit) */
  useEffect(() => {
    const onFsChange = () =>
      setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  /* ── Backdrop click closes ────────────────────────────────── */
  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      ref={modalRef}
      className="lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`Lightbox: ${currentImage?.alt}`}
      onClick={onBackdropClick}
    >
      {/* ── Top Controls ──────────────────────────────────── */}
      <div className="lightbox-top-bar">
        {/* Counter */}
        <span className="lightbox-counter">
          {currentIndex + 1} / {images.length}
        </span>

        <div className="lightbox-top-actions">
          {/* Fullscreen toggle */}
          {/* <button
            className="lightbox-ctrl-btn lightbox-fs-btn"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? 'Exit full screen' : 'Enter full screen'}
            title={isFullscreen ? 'Exit full screen' : 'Full screen'}
          >
            {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
          </button> */}

          {/* Close */}
          <button
            className="lightbox-ctrl-btn lightbox-close-btn"
            onClick={onClose}
            aria-label="Close lightbox"
            title="Close (Esc)"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* ── Left Arrow ────────────────────────────────────── */}
      <button
        className={`lightbox-nav lightbox-nav--prev${isFirst ? ' lightbox-nav--disabled' : ''}`}
        onClick={goPrev}
        disabled={isFirst}
        aria-label="Previous image"
        title="Previous (←)"
      >
        <ChevronLeft size={28} />
      </button>

      {/* ── Image Container ───────────────────────────────── */}
      <div className="lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
        {!imgLoaded && (
          <div className="lightbox-spinner" aria-hidden="true">
            <span className="lightbox-spinner-ring" />
          </div>
        )}
        <img
          key={currentImage?.src}        /* force re-mount on image change */
          src={currentImage?.src}
          alt={currentImage?.alt}
          className={`lightbox-img${imgLoaded ? ' lightbox-img--loaded' : ''}`}
          onLoad={() => setImgLoaded(true)}
          draggable={false}
        />
      </div>

      {/* ── Right Arrow ───────────────────────────────────── */}
      <button
        className={`lightbox-nav lightbox-nav--next${isLast ? ' lightbox-nav--disabled' : ''}`}
        onClick={goNext}
        disabled={isLast}
        aria-label="Next image"
        title="Next (→)"
      >
        <ChevronRight size={28} />
      </button>

      {/* ── Bottom Caption ────────────────────────────────── */}
      <div className="lightbox-caption" onClick={(e) => e.stopPropagation()}>
        <p className="lightbox-caption-text">{currentImage?.alt}</p>

        {/* Dot strip */}
        <div className="lightbox-dots" role="tablist">
          {images.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === currentIndex}
              aria-label={`Go to image ${i + 1}`}
              className={`lightbox-dot${i === currentIndex ? ' lightbox-dot--active' : ''}`}
              onClick={() => { setImgLoaded(false); setCurrentIndex(i); }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Single gallery tile ───────────────────────────────────────
function GalleryItem({ img, onClick }) {
  return (
    <button
      className="gallery-item"
      onClick={onClick}
      aria-label={`Open ${img.alt} in lightbox`}
    >
      <img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        decoding="async"
        className="gallery-img"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement.classList.add('gallery-item--broken');
        }}
      />
      <div className="gallery-item-overlay" aria-hidden="true">
        <span className="gallery-item-label">{img.alt}</span>
      </div>
    </button>
  );
}

// ── Main Gallery Page ─────────────────────────────────────────
export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [lightbox, setLightbox] = useState(null); // { images, startIndex }

  /* Images visible under the current filter */
  const visibleImages = activeCategory
    ? GALLERY_IMAGES.filter((img) => img.category === activeCategory)
    : GALLERY_IMAGES;

  const displayCategories = activeCategory
    ? GALLERY_CATEGORIES.filter((c) => c.id === activeCategory)
    : GALLERY_CATEGORIES;

  const openLightbox = useCallback((images, index) =>
    setLightbox({ images, index }), []);

  const closeLightbox = useCallback(() => {
    // exit fullscreen if open when closing
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => { });
    }
    setLightbox(null);
  }, []);

  return (
    <>
      <main className="gallery-page page-enter">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="gallery-hero">
          <div className="container animate-fadeInUp">
            <div
              className="section-label"
              style={{ justifyContent: 'center', marginBottom: '1rem' }}
            >
              Visual Showcase
            </div>
            <h1>
              Media <span className="gradient-text">Gallery</span>
            </h1>
            <p>
              A visual archive of awards, book publications, events, press
              coverage, and photographs from Prof. Dr. T. N. Ghorude's
              distinguished academic journey. Click any image to open the
              full-screen viewer.
            </p>
            <div className="gallery-hero-meta">
              <span className="badge">{GALLERY_IMAGES.length} images</span>
              <span className="badge">{GALLERY_CATEGORIES.length} categories</span>
            </div>
          </div>
        </section>

        {/* ── Filter Bar ────────────────────────────────────────── */}
        <div className="gallery-filter-bar">
          <div className="container">
            <div className="gallery-filters">
              <button
                className={`gallery-filter-btn${activeCategory === null ? ' active' : ''}`}
                onClick={() => setActiveCategory(null)}
                id="gallery-filter-all"
              >
                All
                <span className="gallery-count">{GALLERY_IMAGES.length}</span>
              </button>

              {GALLERY_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  className={`gallery-filter-btn${activeCategory === cat.id ? ' active' : ''}`}
                  onClick={() =>
                    setActiveCategory(activeCategory === cat.id ? null : cat.id)
                  }
                  id={`gallery-filter-${cat.id}`}
                >
                  <span className="gallery-filter-emoji" aria-hidden="true">
                    {CATEGORY_EMOJIS[cat.id] ?? '🖼️'}
                  </span>
                  {cat.label}
                  <span className="gallery-count">{cat.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Gallery Body ──────────────────────────────────────── */}
        <section className="section gallery-body">
          <div className="container">
            {activeCategory === null ? (
              /* ── Grouped-by-category view ─────────────────────── */
              displayCategories.map((cat) => {
                const catImages = GALLERY_IMAGES.filter(
                  (img) => img.category === cat.folderKey
                );
                if (catImages.length === 0) return null;

                return (
                  <div
                    key={cat.id}
                    className="gallery-category-block animate-fadeInUp"
                  >
                    <div className="gallery-category-header">
                      <span className="gallery-cat-emoji" aria-hidden="true">
                        {CATEGORY_EMOJIS[cat.id] ?? '🖼️'}
                      </span>
                      <div className="gallery-cat-text">
                        <h3 className="gallery-cat-title">{cat.label}</h3>
                        <p className="gallery-cat-desc">{cat.description}</p>
                      </div>
                      <button
                        className="gallery-cat-show-all"
                        onClick={() => setActiveCategory(cat.id)}
                      >
                        View all {cat.count}
                      </button>
                    </div>

                    <div className="gallery-masonry">
                      {catImages.slice(0, 6).map((img, idx) => (
                        <GalleryItem
                          key={img.id}
                          img={img}
                          onClick={() => openLightbox(catImages, idx)}
                        />
                      ))}
                    </div>
                  </div>
                );
              })
            ) : (
              /* ── Single-category filtered view ─────────────────── */
              (() => {
                const cat = GALLERY_CATEGORIES.find((c) => c.id === activeCategory);
                const catImages = GALLERY_IMAGES.filter(
                  (img) => img.category === activeCategory
                );
                return (
                  <div className="gallery-filtered-view animate-fadeInUp">
                    {cat && (
                      <div className="gallery-category-header">
                        <span className="gallery-cat-emoji" aria-hidden="true">
                          {CATEGORY_EMOJIS[cat.id] ?? '🖼️'}
                        </span>
                        <div className="gallery-cat-text">
                          <h3 className="gallery-cat-title">{cat.label}</h3>
                          <p className="gallery-cat-desc">{cat.description}</p>
                        </div>
                        <span className="badge">{catImages.length} images</span>
                      </div>
                    )}
                    <div className="gallery-masonry gallery-masonry--full">
                      {catImages.map((img, idx) => (
                        <GalleryItem
                          key={img.id}
                          img={img}
                          onClick={() => openLightbox(catImages, idx)}
                        />
                      ))}
                    </div>
                  </div>
                );
              })()
            )}
          </div>
        </section>
      </main>

      {/* ── Lightbox Portal ──────────────────────────────────── */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          startIndex={lightbox.index}
          onClose={closeLightbox}
        />
      )}
    </>
  );
}
