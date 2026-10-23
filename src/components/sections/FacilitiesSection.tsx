import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { useFacilities } from '../../hooks/useSiteData';
import { siteConfig } from '../../config/site-config';
import { AsyncStateView } from '../common/AsyncStateView';

export const FacilitiesSection: React.FC = () => {
  const { localize, t } = useLanguage();
  const { data: facilities, loading, error, refetch } = useFacilities();

  if (!siteConfig.sectionVisibility.facilities) {
    return null;
  }

  return (
    <section id="facilities" className="section" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">{t.facilities.eyebrow}</span>
          <h2 className="section-title">{t.facilities.title}</h2>
          <p className="section-desc">{t.facilities.subtitle}</p>
        </div>

        <AsyncStateView loading={loading} error={error} onRetry={refetch} skeletonHeight="350px">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {facilities?.map((fac) => (
              <div
                key={fac.id}
                className="card"
                style={{
                  padding: 0,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Visual Area */}
                <div
                  style={{
                    backgroundColor: 'var(--color-slate-50)',
                    padding: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid var(--color-slate-100)',
                  }}
                >
                  <img
                    src={fac.image.src}
                    alt={localize(fac.image.alt)}
                    width={400}
                    height={280}
                    style={{
                      width: '100%',
                      maxHeight: '190px',
                      objectFit: 'contain',
                      borderRadius: 'var(--radius-sm)',
                    }}
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  {fac.badge && (
                    <div style={{ marginBottom: '0.65rem' }}>
                      <span className="badge badge-teal">{localize(fac.badge)}</span>
                    </div>
                  )}

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--color-slate-900)',
                      marginBottom: '0.65rem',
                    }}
                  >
                    {localize(fac.title)}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.9375rem',
                      lineHeight: 1.6,
                      color: 'var(--color-slate-600)',
                    }}
                  >
                    {localize(fac.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AsyncStateView>
      </div>
    </section>
  );
};
