import React from 'react';
import { Check, ArrowRight, Info } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { usePrograms } from '../../hooks/useSiteData';
import { siteConfig } from '../../config/site-config';
import { AsyncStateView } from '../common/AsyncStateView';

export const ProgramsSection: React.FC = () => {
  const { localize, t } = useLanguage();
  const { data: programs, loading, error, refetch } = usePrograms();

  if (!siteConfig.sectionVisibility.programs) {
    return null;
  }

  const handleProgramClick = (programSlug: string) => {
    // Dispatch custom event or let hash scroll handle it
    const selectElem = document.getElementById('enquiry-program-select') as HTMLSelectElement | null;
    if (selectElem) {
      selectElem.value = programSlug;
      // Trigger change event so state updates
      selectElem.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  return (
    <section id="programs" className="section" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">{t.programs.eyebrow}</span>
          <h2 className="section-title">{t.programs.title}</h2>
          <p className="section-desc">{t.programs.subtitle}</p>
        </div>

        <AsyncStateView loading={loading} error={error} onRetry={refetch} skeletonHeight="380px">
          {/* Programs Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem',
            }}
          >
            {programs?.map((prog) => {
              const isPreschool = prog.slug === 'preschool';
              const isAcademy = prog.slug === 'standards-1-to-9';

              const headerBg = isPreschool
                ? 'var(--color-amber-50)'
                : isAcademy
                ? 'var(--color-primary-50)'
                : 'var(--color-purple-50)';

              const badgeClass = isPreschool
                ? 'badge badge-amber'
                : isAcademy
                ? 'badge badge-blue'
                : 'badge badge-purple';

              const btnClass = isPreschool
                ? 'btn btn-secondary'
                : isAcademy
                ? 'btn btn-primary'
                : 'btn btn-accent';

              return (
                <div
                  key={prog.id}
                  className="card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 0,
                    overflow: 'hidden',
                  }}
                >
                  {/* Card Illustration Banner */}
                  <div
                    style={{
                      backgroundColor: headerBg,
                      padding: '1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderBottom: '1px solid var(--color-slate-100)',
                    }}
                  >
                    <img
                      src={prog.image.src}
                      alt={localize(prog.image.alt)}
                      width={400}
                      height={260}
                      style={{
                        width: '100%',
                        maxHeight: '190px',
                        objectFit: 'contain',
                        borderRadius: 'var(--radius-sm)',
                      }}
                      loading="lazy"
                    />
                  </div>

                  {/* Card Body */}
                  <div
                    style={{
                      padding: '1.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1,
                    }}
                  >
                    <div style={{ marginBottom: '0.85rem' }}>
                      <span className={badgeClass}>{localize(prog.badge)}</span>
                    </div>

                    <h3
                      style={{
                        fontSize: '1.375rem',
                        fontWeight: 800,
                        color: 'var(--color-slate-900)',
                        marginBottom: '0.75rem',
                      }}
                    >
                      {localize(prog.title)}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.9375rem',
                        lineHeight: 1.6,
                        color: 'var(--color-slate-600)',
                        marginBottom: '1.5rem',
                      }}
                    >
                      {localize(prog.description)}
                    </p>

                    {/* Highlights bullet points */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.65rem',
                        marginBottom: '2rem',
                        flexGrow: 1,
                      }}
                    >
                      {prog.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.6rem',
                            fontSize: '0.875rem',
                            color: 'var(--color-slate-700)',
                            lineHeight: 1.45,
                          }}
                        >
                          <div
                            style={{
                              width: '18px',
                              height: '18px',
                              borderRadius: '50%',
                              backgroundColor: 'var(--color-teal-100)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              marginTop: '2px',
                            }}
                          >
                            <Check size={12} style={{ color: 'var(--color-teal-700)' }} />
                          </div>
                          <span>{localize(highlight)}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <a
                      href="#enquiry"
                      className={btnClass}
                      onClick={() => handleProgramClick(prog.targetEnquiryProgram)}
                      style={{ width: '100%' }}
                    >
                      <span>{localize(prog.ctaLabel)}</span>
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Honest Batch note */}
          <div
            className="alert-box alert-info"
            style={{ maxWidth: '44rem', margin: '0 auto' }}
          >
            <Info size={18} style={{ color: 'var(--color-primary-700)', flexShrink: 0, marginTop: '2px' }} />
            <span style={{ fontSize: '0.875rem' }}>{t.programs.directEnquiryNote}</span>
          </div>
        </AsyncStateView>
      </div>
    </section>
  );
};
