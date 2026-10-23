import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Sparkles, MapPin } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { siteConfig } from '../../config/site-config';

export const Header: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    ...(siteConfig.sectionVisibility.hero ? [{ href: '#home', label: t.nav.home }] : []),
    ...(siteConfig.sectionVisibility.programs ? [{ href: '#programs', label: t.nav.programs }] : []),
    ...(siteConfig.sectionVisibility.aboutOwner ? [{ href: '#about', label: t.nav.aboutOwner }] : []),
    ...(siteConfig.sectionVisibility.facilities ? [{ href: '#facilities', label: t.nav.facilities }] : []),
    ...(siteConfig.sectionVisibility.faculty ? [{ href: '#faculty', label: t.nav.faculty }] : []),
    ...(siteConfig.sectionVisibility.gallery ? [{ href: '#gallery', label: t.nav.gallery }] : []),
    ...(siteConfig.sectionVisibility.parentReviews ? [{ href: '#reviews', label: t.nav.reviews }] : []),
    ...(siteConfig.sectionVisibility.branches ? [{ href: '#branches', label: t.nav.branches }] : []),
    ...(siteConfig.sectionVisibility.enquiryForm ? [{ href: '#enquiry', label: t.nav.contact }] : []),
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--color-slate-200)',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        transition: 'all var(--transition-normal)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: 'var(--nav-height)', padding: '0.4rem 1.25rem' }}>
        {/* Brand Mark */}
        <a
          href="#home"
          style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none', flexShrink: 0 }}
          aria-label="TS Academy Home"
          onClick={closeMenu}
        >
          <img
            src="/images/brand/main_logo.png"
            alt="Total Solution — TS Academy"
            width={44}
            height={44}
            style={{
              height: '44px',
              width: 'auto',
              maxHeight: '44px',
              objectFit: 'contain',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 800, fontSize: '1.0625rem', color: 'var(--color-slate-900)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              TOTAL SOLUTION
            </span>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-primary-600)', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
              TS ACADEMY &amp; PRESCHOOL
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: 'clamp(0.45rem, 0.85vw, 1.1rem)',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: 'var(--color-slate-700)',
                transition: 'color var(--transition-fast)',
                padding: '0.35rem 0.2rem',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary-600)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-slate-700)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons: Language Switch & Admission CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Language Toggle Button */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="btn btn-secondary btn-sm"
            style={{
              padding: '0.45rem 0.85rem',
              fontSize: '0.8125rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--color-slate-300)',
              backgroundColor: 'var(--color-slate-50)',
            }}
            title={language === 'gu' ? 'Switch to English' : 'ગુજરાતીમાં જુઓ'}
            aria-label="Toggle language"
          >
            <Globe size={15} style={{ color: 'var(--color-primary-600)' }} />
            <span style={{ fontWeight: 700 }}>{language === 'gu' ? 'ENG' : 'ગુજરાતી'}</span>
          </button>

          {/* Desktop Primary CTA */}
          <a
            href="#enquiry"
            className="btn btn-primary btn-sm desktop-cta"
            style={{ display: 'none' }}
          >
            <Sparkles size={15} />
            {t.nav.admissionCta}
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-slate-700)',
              backgroundColor: mobileMenuOpen ? 'var(--color-slate-100)' : 'transparent',
            }}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'var(--color-white)',
            borderBottom: '2px solid var(--color-primary-100)',
            boxShadow: 'var(--shadow-lg)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--color-slate-800)',
                padding: '0.5rem 0.25rem',
                borderBottom: '1px solid var(--color-slate-100)',
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ paddingTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a
              href="#enquiry"
              onClick={closeMenu}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <Sparkles size={16} />
              {t.nav.admissionCta}
            </a>
            <a
              href="#branches"
              onClick={closeMenu}
              className="btn btn-secondary"
              style={{ width: '100%', fontSize: '0.875rem' }}
            >
              <MapPin size={16} style={{ color: 'var(--color-primary-600)' }} />
              {t.branches.title}
            </a>
          </div>
        </div>
      )}

      {/* Responsive Inline CSS media queries for desktop vs mobile nav */}
      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (min-width: 1220px) {
          .desktop-cta {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
};
