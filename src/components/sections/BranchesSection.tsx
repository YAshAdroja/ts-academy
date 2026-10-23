import React from 'react';
import { MapPin, Navigation, AlertTriangle, CheckCircle2, Clock, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useBranches } from '../../hooks/useSiteData';
import { siteConfig } from '../../config/site-config';
import { AsyncStateView } from '../common/AsyncStateView';

export const BranchesSection: React.FC = () => {
  const { localize, t } = useLanguage();
  const { data: branches, loading, error, refetch } = useBranches();

  if (!siteConfig.sectionVisibility.branches) {
    return null;
  }

  return (
    <section id="branches" className="section" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            <MapPin size={14} />
            {t.branches.eyebrow}
          </span>
          <h2 className="section-title">{t.branches.title}</h2>
          <p className="section-desc">{t.branches.subtitle}</p>
        </div>

        <AsyncStateView loading={loading} error={error} onRetry={refetch} skeletonHeight="380px">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {branches?.map((branch) => {
              const isProvisional = branch.isProvisionalMap;

              return (
                <div
                  key={branch.id}
                  className="card"
                  style={{
                    padding: 0,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    border: isProvisional ? '1px solid #fed7aa' : '1px solid var(--color-slate-200)',
                  }}
                >
                  {/* Branch Illustration Banner */}
                  <div
                    style={{
                      backgroundColor: isProvisional ? '#eff6ff' : '#fefce8',
                      padding: '1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderBottom: '1px solid var(--color-slate-100)',
                    }}
                  >
                    <img
                      src={branch.image?.src || '/images/branches/branch-preschool.svg'}
                      alt={branch.image?.alt ? localize(branch.image.alt) : localize(branch.name)}
                      width={400}
                      height={240}
                      style={{
                        width: '100%',
                        maxHeight: '170px',
                        objectFit: 'contain',
                        borderRadius: 'var(--radius-sm)',
                      }}
                      loading="lazy"
                    />
                  </div>

                  {/* Branch Details */}
                  <div
                    style={{
                      padding: '1.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1,
                    }}
                  >
                    <div style={{ marginBottom: '0.5rem' }}>
                      <span className={isProvisional ? 'badge badge-blue' : 'badge badge-amber'}>
                        {localize(branch.subtitle)}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: 'var(--color-slate-900)',
                        marginBottom: '0.85rem',
                      }}
                    >
                      {localize(branch.name)}
                    </h3>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        marginBottom: '1rem',
                        color: 'var(--color-slate-700)',
                        fontSize: '0.9375rem',
                        lineHeight: 1.5,
                      }}
                    >
                      <MapPin size={18} style={{ color: 'var(--color-primary-600)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{localize(branch.address)}</span>
                    </div>

                    {branch.openingHours && (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.65rem',
                          marginBottom: '0.85rem',
                          color: 'var(--color-slate-600)',
                          fontSize: '0.875rem',
                        }}
                      >
                        <Clock size={16} style={{ color: 'var(--color-slate-400)', flexShrink: 0 }} />
                        <span>{localize(branch.openingHours)}</span>
                      </div>
                    )}

                    {branch.phone && (
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          gap: '1rem',
                          marginBottom: '1.25rem',
                          padding: '0.5rem 0.75rem',
                          backgroundColor: 'var(--color-slate-50)',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--color-slate-200)',
                          fontSize: '0.8125rem',
                        }}
                      >
                        <a
                          href={`tel:+91${branch.phone.replace(/[^0-9]/g, '')}`}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            color: 'var(--color-primary-700)',
                            fontWeight: 700,
                            textDecoration: 'none',
                          }}
                        >
                          <Phone size={14} style={{ color: 'var(--color-primary-600)' }} />
                          <span>+91 {branch.phone}</span>
                        </a>

                        {branch.whatsapp && (
                          <a
                            href={`https://wa.me/91${branch.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                              `Hello TS Academy, I would like to inquire about the ${localize(branch.name)} branch.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                              color: '#059669',
                              fontWeight: 600,
                              textDecoration: 'none',
                            }}
                          >
                            <MessageCircle size={14} style={{ color: '#10b981' }} />
                            <span>WhatsApp</span>
                          </a>
                        )}
                      </div>
                    )}

                    {/* Provisional map note if flagged */}
                    {isProvisional ? (
                      <div
                        style={{
                          backgroundColor: '#fffbeb',
                          border: '1px solid #fde68a',
                          borderRadius: 'var(--radius-sm)',
                          padding: '0.75rem',
                          marginBottom: '1.5rem',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          fontSize: '0.8125rem',
                          color: '#92400e',
                          lineHeight: 1.45,
                        }}
                      >
                        <AlertTriangle size={16} style={{ color: '#d97706', flexShrink: 0, marginTop: '2px' }} />
                        <span>{t.branches.provisionalWarning}</span>
                      </div>
                    ) : (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          fontSize: '0.8125rem',
                          color: 'var(--color-teal-700)',
                          marginBottom: '1.5rem',
                          fontWeight: 600,
                        }}
                      >
                        <CheckCircle2 size={15} style={{ color: 'var(--color-teal-600)' }} />
                        <span>{t.branches.verifiedLocation}</span>
                      </div>
                    )}

                    <div style={{ marginTop: 'auto' }}>
                      <a
                        href={branch.mapDirectionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={isProvisional ? 'btn btn-secondary' : 'btn btn-primary'}
                        style={{ width: '100%' }}
                      >
                        <Navigation size={16} />
                        <span>{t.branches.getDirections}</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AsyncStateView>
      </div>
    </section>
  );
};
