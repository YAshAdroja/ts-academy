import React, { useState } from 'react';
import { Send, Phone, MessageSquare, AlertCircle, CheckCircle, Info, Sparkles } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { siteRepository } from '../../data/repositories/site.repository';
import { EnquiryInput } from '../../types/models';
import { useSiteContent } from '../../hooks/useSiteData';
import { siteConfig } from '../../config/site-config';

export const ContactSection: React.FC = () => {
  const { language, localize, t } = useLanguage();
  const { data: siteContent } = useSiteContent();

  if (!siteConfig.sectionVisibility.enquiryForm) {
    return null;
  }

  const [formData, setFormData] = useState<EnquiryInput>({
    parentName: '',
    phone: '',
    program: '',
    standardAge: '',
    branch: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submittedResult, setSubmittedResult] = useState<{
    success: boolean;
    mode: 'demo' | 'api';
    message: string;
  } | null>(null);

  const contactConfig = siteContent?.contact;

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = t.enquiry.errors.parentNameRequired;
    }

    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      newErrors.phone = t.enquiry.errors.phoneRequired;
    } else if (!/^\d{10}$/.test(cleanPhone)) {
      newErrors.phone = t.enquiry.errors.phoneInvalid;
    }

    if (!formData.program) {
      newErrors.program = t.enquiry.errors.programRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await siteRepository.submitEnquiry(formData);
      setSubmittedResult({
        success: res.success,
        mode: res.mode,
        message: localize(res.message),
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error submitting enquiry';
      setSubmittedResult({
        success: false,
        mode: 'api',
        message: msg,
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      parentName: '',
      phone: '',
      program: '',
      standardAge: '',
      branch: '',
      message: '',
    });
    setErrors({});
    setSubmittedResult(null);
  };

  return (
    <section id="enquiry" className="section" style={{ backgroundColor: 'var(--color-bg-app)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            <Sparkles size={14} />
            {t.enquiry.eyebrow}
          </span>
          <h2 className="section-title">{t.enquiry.title}</h2>
          <p className="section-desc">{t.enquiry.subtitle}</p>
        </div>

        <div
          style={{
            maxWidth: '46rem',
            margin: '0 auto',
            backgroundColor: 'var(--color-white)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-md)',
            padding: 'clamp(1.5rem, 4vw, 2.75rem)',
            border: '1px solid var(--color-slate-200)',
          }}
        >
          {/* Honest Notice Banner */}
          <div
            className="alert-box alert-info"
            style={{ marginBottom: '2rem' }}
          >
            <Info size={20} style={{ color: 'var(--color-primary-700)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ display: 'block', color: 'var(--color-primary-900)', marginBottom: '0.2rem' }}>
                {t.enquiry.demoAlertTitle}
              </strong>
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-primary-800)' }}>
                {t.enquiry.demoAlertBody}
              </span>
            </div>
          </div>

          {/* Quick contact buttons with verified institutional contacts */}
          {(contactConfig?.phone || contactConfig?.officePhone || contactConfig?.whatsapp) && (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2rem',
                paddingBottom: '1.5rem',
                borderBottom: '1px solid var(--color-slate-100)',
              }}
            >
              {contactConfig?.phone && (
                <a
                  href={`tel:+91${contactConfig.phone.replace(/[^0-9]/g, '')}`}
                  className="btn btn-secondary btn-sm"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <Phone size={15} style={{ color: 'var(--color-primary-600)' }} />
                  <span>{t.enquiry.callLabel}: +91 {contactConfig.phone}</span>
                </a>
              )}
              {contactConfig?.officePhone && (
                <a
                  href={`tel:+91${contactConfig.officePhone.replace(/[^0-9]/g, '')}`}
                  className="btn btn-secondary btn-sm"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <Phone size={15} style={{ color: 'var(--color-primary-600)' }} />
                  <span>{t.enquiry.callLabel}: +91 {contactConfig.officePhone}</span>
                </a>
              )}
              {contactConfig?.whatsapp && (
                <a
                  href={`https://wa.me/91${contactConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                    language === 'gu'
                      ? 'નમસ્તે ટોટલ સોલ્યુશન (TS એકેડેમી), મને પ્રવેશ અને વિગતો વિશે માહિતી જોઈએ છે.'
                      : 'Hello Total Solution (TS Academy), I would like to inquire about admissions and batch timings.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#059669', borderColor: '#a7f3d0' }}
                >
                  <MessageSquare size={15} style={{ color: '#10b981' }} />
                  <span>{t.enquiry.whatsappChat}</span>
                </a>
              )}
            </div>
          )}

          {/* Submission Result / Form State */}
          {submittedResult ? (
            <div
              style={{
                textAlign: 'center',
                padding: '2rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: submittedResult.success ? '#dcfce7' : '#fee2e2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: submittedResult.success ? '#15803d' : '#b91c1c',
                }}
              >
                {submittedResult.success ? <CheckCircle size={32} /> : <AlertCircle size={32} />}
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-slate-900)', margin: 0 }}>
                {submittedResult.success ? t.enquiry.successTitle : 'Enquiry Notice'}
              </h3>

              <p style={{ maxWidth: '34rem', fontSize: '0.9375rem', lineHeight: 1.6, color: 'var(--color-slate-600)' }}>
                {submittedResult.message || t.enquiry.successMsg}
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="btn btn-primary"
                style={{ marginTop: '0.5rem' }}
              >
                {t.enquiry.resetBtn}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }} className="form-grid">
                {/* Parent Name */}
                <div>
                  <label
                    htmlFor="parentName"
                    style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-slate-800)', marginBottom: '0.4rem' }}
                  >
                    {t.enquiry.parentNameLabel}
                  </label>
                  <input
                    id="parentName"
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder={t.enquiry.parentNamePlaceholder}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.parentName ? '1px solid #ef4444' : '1px solid var(--color-slate-300)',
                      backgroundColor: 'var(--color-white)',
                    }}
                  />
                  {errors.parentName && (
                    <span style={{ fontSize: '0.75rem', color: '#ef4444', display: 'block', marginTop: '0.25rem' }}>
                      {errors.parentName}
                    </span>
                  )}
                </div>

                {/* Mobile Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-slate-800)', marginBottom: '0.4rem' }}
                  >
                    {t.enquiry.phoneLabel}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t.enquiry.phonePlaceholder}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.phone ? '1px solid #ef4444' : '1px solid var(--color-slate-300)',
                      backgroundColor: 'var(--color-white)',
                    }}
                  />
                  {errors.phone && (
                    <span style={{ fontSize: '0.75rem', color: '#ef4444', display: 'block', marginTop: '0.25rem' }}>
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* Program Selection */}
                <div>
                  <label
                    htmlFor="enquiry-program-select"
                    style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-slate-800)', marginBottom: '0.4rem' }}
                  >
                    {t.enquiry.programLabel}
                  </label>
                  <select
                    id="enquiry-program-select"
                    required
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.program ? '1px solid #ef4444' : '1px solid var(--color-slate-300)',
                      backgroundColor: 'var(--color-white)',
                    }}
                  >
                    <option value="">{t.enquiry.selectProgramPlaceholder}</option>
                    <option value="preschool">{t.enquiry.programPreschool}</option>
                    <option value="standards1-9">{t.enquiry.programAcademy}</option>
                    <option value="navodaya">{t.enquiry.programNavodaya}</option>
                    <option value="general">{t.enquiry.programGeneral}</option>
                  </select>
                  {errors.program && (
                    <span style={{ fontSize: '0.75rem', color: '#ef4444', display: 'block', marginTop: '0.25rem' }}>
                      {errors.program}
                    </span>
                  )}
                </div>

                {/* Standard or Age */}
                <div>
                  <label
                    htmlFor="standardAge"
                    style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-slate-800)', marginBottom: '0.4rem' }}
                  >
                    {t.enquiry.standardAgeLabel}
                  </label>
                  <input
                    id="standardAge"
                    type="text"
                    value={formData.standardAge}
                    onChange={(e) => setFormData({ ...formData, standardAge: e.target.value })}
                    placeholder={t.enquiry.standardAgePlaceholder}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-slate-300)',
                      backgroundColor: 'var(--color-white)',
                    }}
                  />
                </div>

                {/* Preferred Branch */}
                <div>
                  <label
                    htmlFor="branchSelect"
                    style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-slate-800)', marginBottom: '0.4rem' }}
                  >
                    {t.enquiry.branchLabel}
                  </label>
                  <select
                    id="branchSelect"
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-slate-300)',
                      backgroundColor: 'var(--color-white)',
                    }}
                  >
                    <option value="">{t.enquiry.selectBranchPlaceholder}</option>
                    <option value="mota-varachha">{t.enquiry.branchMotaVarachha}</option>
                    <option value="nana-varachha">{t.enquiry.branchNanaVarachha}</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-slate-800)', marginBottom: '0.4rem' }}
                  >
                    {t.enquiry.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.enquiry.messagePlaceholder}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-slate-300)',
                      backgroundColor: 'var(--color-white)',
                      resize: 'vertical',
                    }}
                  />
                </div>

                {/* Submit Button */}
                <div style={{ marginTop: '0.5rem' }}>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-primary btn-lg"
                    style={{ width: '100%' }}
                  >
                    <Send size={18} />
                    <span>{submitting ? t.enquiry.submittingBtn : t.enquiry.submitBtn}</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
