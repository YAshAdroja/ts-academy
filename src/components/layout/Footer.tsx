import React from 'react';
import { Youtube, Facebook, Instagram, MapPin, Globe, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { siteConfig } from '../../config/site-config';

export const Footer: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-slate-900)',
        color: 'var(--color-slate-300)',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
        borderTop: '1px solid var(--color-slate-800)',
      }}
    >
      <div className="container">
        {/* Main Footer Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Brand & Purpose */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <img
                src="/images/brand/main_logo.png"
                alt="Total Solution — TS Academy"
                width={48}
                height={48}
                style={{
                  height: '48px',
                  width: 'auto',
                  maxHeight: '48px',
                  objectFit: 'contain',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  padding: '2px',
                  borderRadius: 'var(--radius-sm)',
                }}
              />
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#fff', margin: 0 }}>
                  TOTAL SOLUTION
                </h3>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-primary-400)' }}>
                  TS Academy &amp; TS Preschool
                </span>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--color-slate-400)' }}>
              {t.footer.tagline}
            </p>
            {/* Language Switch in footer */}
            <div style={{ paddingTop: '0.5rem' }}>
              <button
                type="button"
                onClick={toggleLanguage}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: 'var(--color-primary-300)',
                  backgroundColor: 'rgba(2, 132, 199, 0.15)',
                  border: '1px solid rgba(2, 132, 199, 0.3)',
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                }}
              >
                <Globe size={14} />
                <span>{language === 'gu' ? 'Switch to English' : 'ગુજરાતીમાં ફેરવો'}</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#fff', marginBottom: '1.25rem', letterSpacing: '0.04em' }}>
              {t.footer.quickLinks}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {siteConfig.sectionVisibility.hero && (
                <li>
                  <a href="#home" style={{ color: 'var(--color-slate-400)', fontSize: '0.875rem', transition: 'color var(--transition-fast)' }}>
                    {t.nav.home}
                  </a>
                </li>
              )}
              {siteConfig.sectionVisibility.programs && (
                <li>
                  <a href="#programs" style={{ color: 'var(--color-slate-400)', fontSize: '0.875rem', transition: 'color var(--transition-fast)' }}>
                    {t.nav.programs}
                  </a>
                </li>
              )}
              {siteConfig.sectionVisibility.aboutOwner && (
                <li>
                  <a href="#about" style={{ color: 'var(--color-slate-400)', fontSize: '0.875rem', transition: 'color var(--transition-fast)' }}>
                    {t.nav.aboutOwner}
                  </a>
                </li>
              )}
              {siteConfig.sectionVisibility.facilities && (
                <li>
                  <a href="#facilities" style={{ color: 'var(--color-slate-400)', fontSize: '0.875rem', transition: 'color var(--transition-fast)' }}>
                    {t.nav.facilities}
                  </a>
                </li>
              )}
              {siteConfig.sectionVisibility.faculty && (
                <li>
                  <a href="#faculty" style={{ color: 'var(--color-slate-400)', fontSize: '0.875rem', transition: 'color var(--transition-fast)' }}>
                    {t.nav.faculty}
                  </a>
                </li>
              )}
              {siteConfig.sectionVisibility.gallery && (
                <li>
                  <a href="#gallery" style={{ color: 'var(--color-slate-400)', fontSize: '0.875rem', transition: 'color var(--transition-fast)' }}>
                    {t.nav.gallery}
                  </a>
                </li>
              )}
              {siteConfig.sectionVisibility.parentReviews && (
                <li>
                  <a href="#reviews" style={{ color: 'var(--color-slate-400)', fontSize: '0.875rem', transition: 'color var(--transition-fast)' }}>
                    {t.nav.reviews}
                  </a>
                </li>
              )}
              {siteConfig.sectionVisibility.branches && (
                <li>
                  <a href="#branches" style={{ color: 'var(--color-slate-400)', fontSize: '0.875rem', transition: 'color var(--transition-fast)' }}>
                    {t.nav.branches}
                  </a>
                </li>
              )}
              {siteConfig.sectionVisibility.enquiryForm && (
                <li>
                  <a href="#enquiry" style={{ color: 'var(--color-slate-400)', fontSize: '0.875rem', transition: 'color var(--transition-fast)' }}>
                    {t.nav.contact}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Branch Locations */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#fff', marginBottom: '1.25rem', letterSpacing: '0.04em' }}>
              {t.footer.branchesTitle}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.875rem' }}>
              <div>
                <strong style={{ color: 'var(--color-slate-200)', display: 'block', marginBottom: '0.25rem' }}>
                  1. Mota Varachha (TS Preschool)
                </strong>
                <p style={{ color: 'var(--color-slate-400)', fontSize: '0.8125rem', lineHeight: 1.45, marginBottom: '0.35rem' }}>
                  {language === 'gu' ? siteConfig.branches.branch1.addressGu : siteConfig.branches.branch1.addressEn}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
                  <a
                    href={`tel:+91${siteConfig.branches.branch1.phone}`}
                    style={{ color: 'var(--color-primary-300)', fontSize: '0.75rem', textDecoration: 'none', fontWeight: 600 }}
                  >
                    📞 +91 {siteConfig.branches.branch1.phone}
                  </a>
                  <a
                    href={siteConfig.branches.branch1.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-primary-400)', fontSize: '0.75rem' }}
                  >
                    <MapPin size={12} />
                    <span>Google Maps Directions</span>
                  </a>
                </div>
              </div>
              <div>
                <strong style={{ color: 'var(--color-slate-200)', display: 'block', marginBottom: '0.25rem' }}>
                  2. Nana Varachha (TS Academy)
                </strong>
                <p style={{ color: 'var(--color-slate-400)', fontSize: '0.8125rem', lineHeight: 1.45, marginBottom: '0.35rem' }}>
                  {language === 'gu' ? siteConfig.branches.branch2.addressGu : siteConfig.branches.branch2.addressEn}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
                  <a
                    href={`tel:+91${siteConfig.branches.branch2.phone}`}
                    style={{ color: 'var(--color-primary-300)', fontSize: '0.75rem', textDecoration: 'none', fontWeight: 600 }}
                  >
                    📞 +91 {siteConfig.branches.branch2.phone}
                  </a>
                  <a
                    href={siteConfig.branches.branch2.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-amber-400)', fontSize: '0.75rem' }}
                  >
                    <MapPin size={12} />
                    <span>Provisional Map Link (Verify)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#fff', marginBottom: '1.25rem', letterSpacing: '0.04em' }}>
              {t.footer.socialTitle}
            </h4>
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <a
                href={siteConfig.socialUrls.youtube}
                target="_blank"
                rel="noopener noreferrer"
                title="TS Academy Official YouTube Channel"
                aria-label="TS Academy YouTube Channel"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transition: 'background-color var(--transition-fast), color var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ef4444';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                <Youtube size={20} />
              </a>

              {siteConfig.socialUrls.youtubeNavodaya && (
                <a
                  href={siteConfig.socialUrls.youtubeNavodaya}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="TS Navodaya YouTube Channel"
                  aria-label="TS Navodaya YouTube Channel"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#f87171',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    transition: 'background-color var(--transition-fast), color var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#b91c1c';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.color = '#f87171';
                  }}
                >
                  <Youtube size={20} />
                </a>
              )}

              <a
                href={siteConfig.socialUrls.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TS Academy Facebook Profile"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transition: 'background-color var(--transition-fast), color var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1877f2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                <Facebook size={20} />
              </a>

              <a
                href={siteConfig.socialUrls.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TS Preschool Instagram Profile"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transition: 'background-color var(--transition-fast), color var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#e1306c';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                <Instagram size={20} />
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--color-slate-400)' }}>
              <ShieldCheck size={16} style={{ color: 'var(--color-teal-500)', flexShrink: 0, marginTop: '2px' }} />
              <span>{t.footer.privacyNote}</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div
          style={{
            borderTop: '1px solid var(--color-slate-800)',
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.8125rem',
            color: 'var(--color-slate-500)',
          }}
        >
          <span>
            © {currentYear} Total Solution (TS Academy). {t.footer.allRightsReserved}
          </span>
          <span>{t.footer.developedFor}</span>
        </div>
      </div>
    </footer>
  );
};
