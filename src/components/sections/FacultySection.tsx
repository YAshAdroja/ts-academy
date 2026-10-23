import React from 'react';
import { Users, Info } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useFaculty } from '../../hooks/useSiteData';
import { siteConfig } from '../../config/site-config';
import { AsyncStateView } from '../common/AsyncStateView';

export const FacultySection: React.FC = () => {
  const { localize, t } = useLanguage();
  const { data: facultyList, loading, error, refetch } = useFaculty();

  if (!siteConfig.sectionVisibility.faculty) {
    return null;
  }

  return (
    <section id="faculty" className="section" style={{ backgroundColor: 'var(--color-bg-app)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            <Users size={14} />
            {t.faculty.eyebrow}
          </span>
          <h2 className="section-title">{t.faculty.title}</h2>
          <p className="section-desc">{t.faculty.subtitle}</p>
        </div>

        <AsyncStateView loading={loading} error={error} onRetry={refetch} skeletonHeight="340px">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginBottom: '2.5rem',
            }}
          >
            {facultyList?.map((member) => (
              <div
                key={member.id}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '2rem 1.5rem',
                  position: 'relative',
                }}
              >
                {member.isDemo && (
                  <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
                    <span className="badge badge-demo" style={{ fontSize: '0.6875rem' }}>
                      Demo Placeholder
                    </span>
                  </div>
                )}

                {/* Faculty Portrait Frame (properly sized and positioned so faces are never cut) */}
                <div
                  style={{
                    width: '140px',
                    height: '165px',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    marginBottom: '1.25rem',
                    backgroundColor: 'var(--color-primary-50)',
                    border: '4px solid var(--color-white)',
                    boxShadow: 'var(--shadow-md)',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={member.photo?.src || '/images/faculty/faculty-placeholder.svg'}
                    alt={member.photo?.alt ? localize(member.photo.alt) : member.name}
                    width={140}
                    height={165}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition:
                        member.id === 'fac-owner-amit-sir'
                          ? 'center 18%'
                          : 'center 6%',
                      display: 'block',
                    }}
                    loading="lazy"
                  />
                </div>

                <h3
                  style={{
                    fontSize: '1.1875rem',
                    fontWeight: 800,
                    color: 'var(--color-slate-900)',
                    marginBottom: '0.35rem',
                  }}
                >
                  {member.name}
                </h3>

                <span
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: 'var(--color-primary-700)',
                    marginBottom: '0.85rem',
                  }}
                >
                  {localize(member.role)}
                </span>

                <p
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    color: 'var(--color-slate-600)',
                  }}
                >
                  {localize(member.bio)}
                </p>
              </div>
            ))}
          </div>

          {/* Dedicated Guidance Team Note */}
          <div
            className="alert-box alert-info"
            style={{ maxWidth: '44rem', margin: '0 auto' }}
          >
            <Info size={18} style={{ color: 'var(--color-primary-600)', flexShrink: 0, marginTop: '2px' }} />
            <span style={{ fontSize: '0.8125rem' }}>{t.faculty.demoNote}</span>
          </div>
        </AsyncStateView>
      </div>
    </section>
  );
};
