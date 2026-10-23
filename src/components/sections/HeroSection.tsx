import React from 'react';
import { ArrowRight, BookOpen, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useSiteContent } from '../../hooks/useSiteData';
import { siteConfig } from '../../config/site-config';
import { AsyncStateView } from '../common/AsyncStateView';
import { HeroLogoSlider } from './HeroLogoSlider';

export const HeroSection: React.FC = () => {
  const { localize, t } = useLanguage();
  const { data: siteContent, loading, error, refetch } = useSiteContent();

  if (!siteConfig.sectionVisibility.hero) {
    return null;
  }

  const hero = siteContent?.hero;

  return (
    <section id="home" className="section" style={{ paddingTop: '3.5rem', paddingBottom: '4.5rem', backgroundColor: '#f0f9ff' }}>
      <div className="container">
        <AsyncStateView loading={loading} error={error} onRetry={refetch} skeletonHeight="450px">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '3rem',
              alignItems: 'center',
            }}
            className="hero-grid"
          >
            {/* Left Content Column */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              {/* Eyebrow Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--color-primary-100)',
                  color: 'var(--color-primary-800)',
                  fontSize: '0.8125rem',
                  fontWeight: 800,
                  letterSpacing: '0.05em',
                  marginBottom: '1.25rem',
                  boxShadow: '0 2px 6px rgba(2, 132, 199, 0.1)',
                }}
              >
                <Sparkles size={16} style={{ color: 'var(--color-primary-600)' }} />
                <span>{hero ? localize(hero.eyebrow) : t.hero.badge}</span>
              </div>

              {/* Main Headline */}
              <h1
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                  fontWeight: 800,
                  lineHeight: 1.2,
                  color: 'var(--color-slate-900)',
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.02em',
                }}
              >
                {hero ? localize(hero.title) : 'A happy place to learn, explore and achieve.'}
              </h1>

              {/* Subheading / Description */}
              <p
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.1875rem)',
                  lineHeight: 1.65,
                  color: 'var(--color-slate-600)',
                  marginBottom: '2rem',
                  maxWidth: '38rem',
                }}
              >
                {hero
                  ? localize(hero.description)
                  : 'From early childhood learning to school academics and competitive entrance preparation, TS helps children build confidence, strong foundations and a love of learning.'}
              </p>

              {/* CTA Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  width: '100%',
                  marginBottom: '2.5rem',
                }}
              >
                <a href="#programs" className="btn btn-primary btn-lg" style={{ flexGrow: 0 }}>
                  <BookOpen size={18} />
                  <span>{hero ? localize(hero.primaryCta) : t.hero.primaryCta}</span>
                  <ArrowRight size={16} />
                </a>
                <a href="#enquiry" className="btn btn-secondary btn-lg" style={{ flexGrow: 0 }}>
                  <Star size={18} style={{ color: 'var(--color-amber-500)' }} />
                  <span>{hero ? localize(hero.secondaryCta) : t.hero.secondaryCta}</span>
                </a>
              </div>

              {/* Trust & Focus Features (Bilingual, Verified Scope) */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.25rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--color-primary-200)',
                  width: '100%',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-slate-700)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-teal-600)' }} />
                  <span>{t.hero.tagPreschool}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-slate-700)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-primary-600)' }} />
                  <span>{t.hero.tagAcademics}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-slate-700)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-purple-600)' }} />
                  <span>{t.hero.tagNavodaya}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Automatic Three Logos Slider */}
            <HeroLogoSlider />
          </div>
        </AsyncStateView>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
};
