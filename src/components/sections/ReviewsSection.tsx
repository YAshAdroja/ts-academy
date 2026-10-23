import React from 'react';
import { Star, MessageSquareQuote, Info } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useApprovedReviews } from '../../hooks/useSiteData';
import { siteConfig } from '../../config/site-config';
import { AsyncStateView } from '../common/AsyncStateView';

export const ReviewsSection: React.FC = () => {
  const { localize, t } = useLanguage();
  const { data: reviews, loading, error, refetch } = useApprovedReviews();

  if (!siteConfig.sectionVisibility.parentReviews) {
    return null;
  }

  return (
    <section id="reviews" className="section" style={{ backgroundColor: 'var(--color-bg-app)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            <MessageSquareQuote size={14} />
            {t.reviews.eyebrow}
          </span>
          <h2 className="section-title">{t.reviews.title}</h2>
          <p className="section-desc">{t.reviews.subtitle}</p>
        </div>

        <AsyncStateView loading={loading} error={error} onRetry={refetch} skeletonHeight="300px">
          {reviews && reviews.length > 0 ? (
            <>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '2rem',
                  marginBottom: '2.5rem',
                }}
              >
                {reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="card"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      backgroundColor: 'var(--color-white)',
                    }}
                  >
                    {/* Demo Warning Pill */}
                    {rev.isDemo && (
                      <div style={{ marginBottom: '0.85rem' }}>
                        <span className="badge badge-demo" style={{ fontSize: '0.6875rem' }}>
                          {t.reviews.demoBadge}
                        </span>
                      </div>
                    )}

                    {/* Star Rating */}
                    {rev.rating && rev.rating > 0 && (
                      <div
                        style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}
                        aria-label={`${rev.rating} out of 5 stars`}
                      >
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            style={{
                              color: i < (rev.rating || 0) ? '#f59e0b' : '#cbd5e1',
                              fill: i < (rev.rating || 0) ? '#f59e0b' : 'none',
                            }}
                          />
                        ))}
                      </div>
                    )}

                    {/* Review Body */}
                    <p
                      style={{
                        fontSize: '0.9375rem',
                        lineHeight: 1.65,
                        color: 'var(--color-slate-700)',
                        marginBottom: '1.5rem',
                        flexGrow: 1,
                        fontStyle: 'italic',
                      }}
                    >
                      “{localize(rev.review)}”
                    </p>

                    {/* Reviewer Meta */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        paddingTop: '1rem',
                        borderTop: '1px solid var(--color-slate-100)',
                      }}
                    >
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--color-primary-100)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          overflow: 'hidden',
                        }}
                      >
                        <img
                          src={rev.avatar?.src || '/images/reviews/parent-avatar.svg'}
                          alt={rev.parentDisplayName}
                          width={40}
                          height={40}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <strong style={{ fontSize: '0.875rem', color: 'var(--color-slate-900)' }}>
                          {rev.parentDisplayName}
                        </strong>
                        {rev.relationship && (
                          <span style={{ fontSize: '0.75rem', color: 'var(--color-primary-700)', fontWeight: 600 }}>
                            {localize(rev.relationship)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Honest Notice */}
              <div
                className="alert-box alert-warning"
                style={{ maxWidth: '44rem', margin: '0 auto' }}
              >
                <Info size={18} style={{ color: '#b45309', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.8125rem' }}>{t.reviews.demoNotice}</span>
              </div>
            </>
          ) : (
            <div
              style={{
                textAlign: 'center',
                padding: '3rem 1.5rem',
                backgroundColor: 'var(--color-white)',
                borderRadius: 'var(--radius-lg)',
                color: 'var(--color-slate-600)',
              }}
            >
              <p>{t.reviews.emptyState}</p>
            </div>
          )}
        </AsyncStateView>
      </div>
    </section>
  );
};
