import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

interface AsyncStateViewProps {
  loading: boolean;
  error: string | null;
  onRetry?: () => void;
  skeletonHeight?: string;
  children: React.ReactNode;
}

export const AsyncStateView: React.FC<AsyncStateViewProps> = ({
  loading,
  error,
  onRetry,
  skeletonHeight = '240px',
  children,
}) => {
  const { t } = useLanguage();

  if (loading) {
    return (
      <div
        className="skeleton"
        style={{
          width: '100%',
          height: skeletonHeight,
          borderRadius: 'var(--radius-lg)',
          margin: '1.5rem 0',
        }}
        aria-busy="true"
        aria-label={t.common.loading}
      />
    );
  }

  if (error) {
    return (
      <div
        className="alert-box alert-warning"
        style={{ margin: '2rem 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        role="alert"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <AlertCircle size={22} style={{ color: '#d97706', flexShrink: 0 }} />
          <div>
            <strong>{t.common.error}</strong>
            <p style={{ fontSize: '0.8125rem', marginTop: '0.25rem', color: '#78350f' }}>{error}</p>
          </div>
        </div>
        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="btn btn-secondary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
          >
            <RefreshCw size={14} />
            {t.common.retry}
          </button>
        )}
      </div>
    );
  }

  return <>{children}</>;
};
