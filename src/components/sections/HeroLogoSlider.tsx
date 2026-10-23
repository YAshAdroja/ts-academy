import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

interface SlideData {
  id: string;
  logo: string;
  alt: {
    en: string;
    gu: string;
  };
  divisionLabel: {
    en: string;
    gu: string;
  };
  badge: {
    en: string;
    gu: string;
  };
  title: {
    en: string;
    gu: string;
  };
  subtitle: {
    en: string;
    gu: string;
  };
  tagline: {
    en: string;
    gu: string;
  };
  themeColor: string;
  badgeClass: string;
  bgGradient: string;
  borderColor: string;
  glowShadow: string;
}

const slides: SlideData[] = [
  {
    id: 'ts-academy',
    logo: '/images/brand/main_logo.png',
    alt: {
      en: 'Total Solution — TS Academy Official Logo',
      gu: 'ટોટલ સોલ્યુશન — TS એકેડેમી સત્તાવાર લોગો',
    },
    divisionLabel: {
      en: 'TS Academy',
      gu: 'TS એકેડેમી',
    },
    badge: {
      en: 'Total Solution Educare • Since 2017',
      gu: 'ટોટલ સોલ્યુશન એજ્યુકેર • ૨૦૧૭ થી કાર્યરત',
    },
    title: {
      en: 'Total Solution (TS Academy)',
      gu: 'ટોટલ સોલ્યુશન (TS એકેડેમી)',
    },
    subtitle: {
      en: 'Standards 1 to 9 • Gujarati & English Medium',
      gu: 'ધોરણ ૧ થી ૯ • ગુજરાતી અને અંગ્રેજી માધ્યમ',
    },
    tagline: {
      en: 'Concept Clarity • Regular Practice • Exam Confidence',
      gu: 'મજબૂત પાયો • નિયમિત મહાવરો • શૈક્ષણિક આત્મવિશ્વાસ',
    },
    themeColor: '#0284c7',
    badgeClass: 'badge badge-blue',
    bgGradient: 'radial-gradient(circle at 50% 35%, rgba(2, 132, 199, 0.12) 0%, #ffffff 75%)',
    borderColor: 'rgba(2, 132, 199, 0.3)',
    glowShadow: '0 16px 40px rgba(2, 132, 199, 0.15)',
  },
  {
    id: 'ts-preschool',
    logo: '/images/brand/ts-preschool-logo.png',
    alt: {
      en: 'TS Preschool Official Logo',
      gu: 'TS પ્રિસ્કૂલ સત્તાવાર લોગો',
    },
    divisionLabel: {
      en: 'TS Preschool',
      gu: 'TS પ્રિસ્કૂલ',
    },
    badge: {
      en: 'Play, Learn and Grow.. Together!',
      gu: 'નાના પગલાંથી મોટી સફળતા તરફ !',
    },
    title: {
      en: 'TS Preschool — Mota Varachha',
      gu: 'TS પ્રિસ્કૂલ — મોટા વરાછા',
    },
    subtitle: {
      en: 'Playgroup • Nursery • Jr/Sr KG • Balvatika',
      gu: 'પ્લે ગ્રુપ • નર્સરી • જુ/સિ કે.જી. • બાલવાટિકા',
    },
    tagline: {
      en: 'Activity-based Foundation & Caring Environment',
      gu: 'પ્રવૃત્તિ આધારિત શિક્ષણ અને કાળજીભર્યો માહોલ',
    },
    themeColor: '#d97706',
    badgeClass: 'badge badge-amber',
    bgGradient: 'radial-gradient(circle at 50% 35%, rgba(245, 158, 11, 0.14) 0%, #ffffff 75%)',
    borderColor: 'rgba(245, 158, 11, 0.35)',
    glowShadow: '0 16px 40px rgba(245, 158, 11, 0.16)',
  },
  {
    id: 'ts-navodaya',
    logo: '/images/brand/ts-navodaya-logo.png',
    alt: {
      en: 'TS Jawahar Navodaya Logo',
      gu: 'TS જવાહર નવોદય સત્તાવાર લોગો',
    },
    divisionLabel: {
      en: 'TS Navodaya',
      gu: 'TS નવોદય',
    },
    badge: {
      en: 'Surat District Rank 1 (2025 Result)',
      gu: 'સમગ્ર સુરત જિલ્લામાં ૧લો ક્રમાંક (૨૦૨૫)',
    },
    title: {
      en: 'TS Jawahar Navodaya Coaching',
      gu: 'TS જવાહર નવોદય કોચિંગ',
    },
    subtitle: {
      en: '9+ Years Proven Selection Track Record',
      gu: '૯+ વર્ષથી સતત ઉત્કૃષ્ટ પરિણામ અને સફળતા',
    },
    tagline: {
      en: 'Specialized Mentoring for Class 6 Entrance Exam',
      gu: 'ધોરણ ૬ પ્રવેશ પરીક્ષા માટે વિશેષ માર્ગદર્શન વર્ગો',
    },
    themeColor: '#7c3aed',
    badgeClass: 'badge badge-purple',
    bgGradient: 'radial-gradient(circle at 50% 35%, rgba(124, 58, 237, 0.12) 0%, #ffffff 75%)',
    borderColor: 'rgba(124, 58, 237, 0.3)',
    glowShadow: '0 16px 40px rgba(124, 58, 237, 0.15)',
  },
];

const AUTOPLAY_INTERVAL_MS = 3800;

export const HeroLogoSlider: React.FC = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const activeSlide = slides[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setProgressKey((k) => k + 1);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgressKey((k) => k + 1);
  };

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
    setProgressKey((k) => k + 1);
  };

  // Autoplay handler with pause-on-hover
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      goToNext();
    }, AUTOPLAY_INTERVAL_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentIndex]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
      }}
    >
      <div
        className="hero-slider-card"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        style={{
          width: '100%',
          maxWidth: '540px',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          background: activeSlide.bgGradient,
          boxShadow: activeSlide.glowShadow,
          border: `1.5px solid ${activeSlide.borderColor}`,
          transition: 'border-color 0.4s ease, box-shadow 0.4s ease, background 0.4s ease',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
        role="region"
        aria-roledescription="carousel"
        aria-label="TS Academy Divisions and Logos"
      >
        {/* Top Segmented Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.35rem',
            padding: '1rem 1.25rem 0.5rem',
            borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
            {slides.map((s, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                    backgroundColor: isActive ? s.themeColor : 'rgba(0, 0, 0, 0.04)',
                    color: isActive ? '#ffffff' : 'var(--color-slate-600)',
                    boxShadow: isActive ? `0 2px 8px ${s.themeColor}40` : 'none',
                  }}
                  aria-label={`Go to slide ${idx + 1}: ${s.divisionLabel[language]}`}
                  aria-selected={isActive}
                >
                  {s.divisionLabel[language]}
                </button>
              );
            })}
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
              fontSize: '0.6875rem',
              fontWeight: 700,
              color: activeSlide.themeColor,
              backgroundColor: `${activeSlide.themeColor}15`,
              padding: '0.25rem 0.5rem',
              borderRadius: 'var(--radius-full)',
            }}
          >
            <Sparkles size={11} />
            <span>{isPaused ? (language === 'gu' ? 'સ્થગિત' : 'Paused') : `${currentIndex + 1} / 3`}</span>
          </div>
        </div>

        {/* Central Logo Showcase Area */}
        <div
          style={{
            position: 'relative',
            height: '240px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem 2.5rem',
            overflow: 'hidden',
          }}
        >
          {/* Subtle Left Chevron Button */}
          <button
            type="button"
            onClick={goToPrev}
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid var(--color-slate-200)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-slate-700)',
              cursor: 'pointer',
              zIndex: 10,
              boxShadow: 'var(--shadow-sm)',
              transition: 'background-color var(--transition-fast), transform var(--transition-fast)',
            }}
            aria-label="Previous logo slide"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Logo with smooth fade & scale transition */}
          <div
            key={activeSlide.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              animation: 'logoFadeIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            }}
          >
            <img
              src={activeSlide.logo}
              alt={activeSlide.alt[language]}
              style={{
                maxHeight: '190px',
                maxWidth: '85%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 6px 14px rgba(0, 0, 0, 0.08))',
              }}
              loading="eager"
            />
          </div>

          {/* Subtle Right Chevron Button */}
          <button
            type="button"
            onClick={goToNext}
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid var(--color-slate-200)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-slate-700)',
              cursor: 'pointer',
              zIndex: 10,
              boxShadow: 'var(--shadow-sm)',
              transition: 'background-color var(--transition-fast), transform var(--transition-fast)',
            }}
            aria-label="Next logo slide"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Bottom Details Banner with Badge, Title, and Indicator */}
        <div
          style={{
            backgroundColor: '#ffffff',
            padding: '1.25rem 1.5rem',
            borderTop: '1px solid rgba(0, 0, 0, 0.06)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span className={activeSlide.badgeClass} style={{ fontSize: '0.75rem', padding: '0.25rem 0.65rem' }}>
              {activeSlide.badge[language]}
            </span>
            <a
              href="#programs"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.2rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: activeSlide.themeColor,
                textDecoration: 'none',
              }}
            >
              <span>{language === 'gu' ? 'વિગતો જુઓ' : 'Explore Program'}</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          <h3
            style={{
              fontSize: '1.1875rem',
              fontWeight: 800,
              color: 'var(--color-slate-900)',
              margin: '0.1rem 0 0',
              lineHeight: 1.25,
            }}
          >
            {activeSlide.title[language]}
          </h3>

          <p
            style={{
              fontSize: '0.8125rem',
              color: 'var(--color-slate-600)',
              margin: 0,
              lineHeight: 1.45,
            }}
          >
            {activeSlide.subtitle[language]}
          </p>

          {/* Dots Indicator & Autoplay Progress Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '0.75rem',
              marginTop: '0.25rem',
              borderTop: '1px solid var(--color-slate-100)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              {slides.map((s, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    style={{
                      height: '8px',
                      width: isActive ? '28px' : '8px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: isActive ? s.themeColor : 'var(--color-slate-300)',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    aria-label={`Jump to slide ${idx + 1}`}
                  />
                );
              })}
            </div>

            <span style={{ fontSize: '0.6875rem', color: 'var(--color-slate-400)', fontWeight: 600 }}>
              {language === 'gu' ? 'ઑટોમેટિક સ્લાઇડર • થોભાવવા માટે માઉસ લાવો' : 'Auto-sliding • Hover to pause'}
            </span>
          </div>
        </div>

        {/* Animated autoplay progress strip */}
        {!isPaused && (
          <div
            key={progressKey}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              height: '3px',
              backgroundColor: activeSlide.themeColor,
              width: '100%',
              transformOrigin: 'left',
              animation: `slideProgress ${AUTOPLAY_INTERVAL_MS}ms linear forwards`,
            }}
          />
        )}
      </div>

      <style>{`
        @keyframes logoFadeIn {
          from {
            opacity: 0;
            transform: scale(0.94) translateY(6px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes slideProgress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
};
