import React from 'react';
import { Sparkles, HeartHandshake, Compass, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useSiteContent } from '../../hooks/useSiteData';
import { siteConfig } from '../../config/site-config';
import { AsyncStateView } from '../common/AsyncStateView';

export const AboutAmitSir: React.FC = () => {
  const { localize, t } = useLanguage();
  const { data: siteContent, loading, error, refetch } = useSiteContent();

  if (!siteConfig.sectionVisibility.aboutOwner) {
    return null;
  }

  const owner = siteContent?.owner;

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--color-bg-app)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">{t.aboutOwner.eyebrow}</span>
          <h2 className="section-title">{t.aboutOwner.title}</h2>
          <p className="section-desc">{t.aboutOwner.quote}</p>
        </div>

        <AsyncStateView loading={loading} error={error} onRetry={refetch} skeletonHeight="400px">
          <div
            className="card"
            style={{
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              backgroundColor: 'var(--color-white)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--color-slate-200)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '2.5rem',
                alignItems: 'center',
              }}
              className="about-grid"
            >
              {/* Portrait Placeholder Column */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    maxWidth: '320px',
                    width: '100%',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-lg)',
                    backgroundColor: 'var(--color-primary-50)',
                    border: '3px solid var(--color-white)',
                  }}
                >
                  <img
                    src={owner?.photo?.src || '/images/owner/amit-sir-portrait.svg'}
                    alt={owner?.photo?.alt ? localize(owner.photo.alt) : 'Amit Sir Portrait'}
                    width={400}
                    height={460}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    loading="lazy"
                  />
                </div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--color-slate-400)',
                    marginTop: '0.75rem',
                    textAlign: 'center',
                  }}
                >
                  {owner?.notice ? localize(owner.notice) : t.aboutOwner.disclaimer}
                </span>
              </div>

              {/* Story & Philosophy Column */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--color-teal-100)',
                    color: 'var(--color-teal-800)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    marginBottom: '1rem',
                    alignSelf: 'flex-start',
                  }}
                >
                  <Sparkles size={13} />
                  <span>{owner ? localize(owner.role) : t.aboutOwner.role}</span>
                </div>

                <h3
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 800,
                    color: 'var(--color-slate-900)',
                    lineHeight: 1.3,
                    marginBottom: '1.25rem',
                  }}
                >
                  {owner ? localize(owner.displayName) : 'Amit Sir (Amit Kansagra)'}
                </h3>

                <p
                  style={{
                    fontSize: '1.0625rem',
                    lineHeight: 1.75,
                    color: 'var(--color-slate-700)',
                    marginBottom: '1.25rem',
                  }}
                >
                  {owner
                    ? localize(owner.biography)
                    : 'Meet Amit Sir (Amit Kansagra), the person behind Total Solution. His goal is to help children grow through education, curiosity, discipline and confidence.'}
                </p>

                <p
                  style={{
                    fontSize: '1.0625rem',
                    lineHeight: 1.75,
                    color: 'var(--color-slate-700)',
                    marginBottom: '2rem',
                  }}
                >
                  {owner
                    ? localize(owner.philosophy)
                    : 'The academy brings together early learning, school-level academic support and focused entrance preparation so families can explore learning options for different stages of a child’s journey.'}
                </p>

                {/* Core Guiding Pillars */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1rem',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid var(--color-slate-200)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--color-primary-100)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-primary-700)',
                        flexShrink: 0,
                      }}
                    >
                      <Compass size={18} />
                    </div>
                    <div>
                      <strong style={{ fontSize: '0.875rem', color: 'var(--color-slate-900)', display: 'block' }}>
                        {t.aboutOwner.pillar1Title}
                      </strong>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-slate-500)' }}>
                        {t.aboutOwner.pillar1Desc}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--color-amber-100)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-amber-700)',
                        flexShrink: 0,
                      }}
                    >
                      <HeartHandshake size={18} />
                    </div>
                    <div>
                      <strong style={{ fontSize: '0.875rem', color: 'var(--color-slate-900)', display: 'block' }}>
                        {t.aboutOwner.pillar2Title}
                      </strong>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-slate-500)' }}>
                        {t.aboutOwner.pillar2Desc}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--color-teal-100)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-teal-700)',
                        flexShrink: 0,
                      }}
                    >
                      <CheckCircle size={18} />
                    </div>
                    <div>
                      <strong style={{ fontSize: '0.875rem', color: 'var(--color-slate-900)', display: 'block' }}>
                        {t.aboutOwner.pillar3Title}
                      </strong>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-slate-500)' }}>
                        {t.aboutOwner.pillar3Desc}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AsyncStateView>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 320px 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
