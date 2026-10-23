import React, { useState } from 'react';
import { Image as ImageIcon, X, ZoomIn } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useGallery } from '../../hooks/useSiteData';
import { GalleryItem } from '../../types/models';
import { siteConfig } from '../../config/site-config';
import { AsyncStateView } from '../common/AsyncStateView';

export const GallerySection: React.FC = () => {
  const { localize, t } = useLanguage();
  const { data: galleryItems, loading, error, refetch } = useGallery();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  if (!siteConfig.sectionVisibility.gallery) {
    return null;
  }

  const categories = [
    { key: 'all', label: t.gallery.filters.all },
    { key: 'classroom', label: t.gallery.filters.classroom },
    { key: 'preschool', label: t.gallery.filters.preschool },
    { key: 'activities', label: t.gallery.filters.activities },
    { key: 'events', label: t.gallery.filters.events },
    { key: 'navodaya', label: t.gallery.filters.navodaya },
  ];

  const filteredItems = galleryItems?.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="gallery" className="section" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            <ImageIcon size={14} />
            {t.gallery.eyebrow}
          </span>
          <h2 className="section-title">{t.gallery.title}</h2>
          <p className="section-desc">{t.gallery.subtitle}</p>
        </div>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '2.5rem',
          }}
          role="tablist"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.key)}
                style={{
                  padding: '0.5rem 1.15rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  transition: 'all var(--transition-fast)',
                  backgroundColor: isActive ? 'var(--color-primary-600)' : 'var(--color-slate-100)',
                  color: isActive ? 'var(--color-white)' : 'var(--color-slate-700)',
                  boxShadow: isActive ? '0 2px 8px rgba(2, 132, 199, 0.25)' : 'none',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <AsyncStateView loading={loading} error={error} onRetry={refetch} skeletonHeight="400px">
          {/* Gallery Items Grid */}
          {filteredItems && filteredItems.length > 0 ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="card"
                  onClick={() => setSelectedPhoto(item)}
                  style={{
                    padding: 0,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    position: 'relative',
                  }}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedPhoto(item);
                    }
                  }}
                  aria-label={`${localize(item.title)} — ${t.gallery.viewPhoto}`}
                >
                  {/* Photo Thumbnail */}
                  <div style={{ position: 'relative', backgroundColor: 'var(--color-slate-100)' }}>
                    <img
                      src={item.image.src}
                      alt={localize(item.alt)}
                      width={500}
                      height={350}
                      style={{
                        width: '100%',
                        height: '220px',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                      loading="lazy"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        backgroundColor: 'rgba(15, 23, 42, 0.65)',
                        color: '#fff',
                        borderRadius: 'var(--radius-full)',
                        padding: '0.35rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <ZoomIn size={14} />
                    </div>
                  </div>

                  {/* Caption */}
                  <div style={{ padding: '1rem 1.25rem' }}>
                    <h3
                      style={{
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: 'var(--color-slate-900)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {localize(item.title)}
                    </h3>
                    {item.description && (
                      <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate-600)', lineHeight: 1.45 }}>
                        {localize(item.description)}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: 'center',
                padding: '3rem 1.5rem',
                backgroundColor: 'var(--color-slate-50)',
                borderRadius: 'var(--radius-lg)',
                color: 'var(--color-slate-600)',
              }}
            >
              <p>{t.gallery.emptyState}</p>
            </div>
          )}
        </AsyncStateView>
      </div>

      {/* Accessible Lightbox Modal */}
      {selectedPhoto && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label={localize(selectedPhoto.title)}
        >
          <div
            style={{
              maxWidth: '700px',
              width: '100%',
              backgroundColor: 'var(--color-white)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 1.5rem',
                borderBottom: '1px solid var(--color-slate-200)',
              }}
            >
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-slate-900)', margin: 0 }}>
                {localize(selectedPhoto.title)}
              </h3>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                style={{
                  padding: '0.4rem',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--color-slate-600)',
                }}
                aria-label={t.gallery.closeLightbox}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ backgroundColor: 'var(--color-slate-50)', display: 'flex', justifyContent: 'center' }}>
              <img
                src={selectedPhoto.image.src}
                alt={localize(selectedPhoto.alt)}
                style={{ maxWidth: '100%', maxHeight: '60vh', objectFit: 'contain' }}
              />
            </div>

            {selectedPhoto.description && (
              <div style={{ padding: '1.25rem 1.5rem', backgroundColor: 'var(--color-white)' }}>
                <p style={{ margin: 0, fontSize: '0.9375rem', color: 'var(--color-slate-700)', lineHeight: 1.5 }}>
                  {localize(selectedPhoto.description)}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
