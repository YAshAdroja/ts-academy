export type DataSourceMode = 'mock' | 'api';

export const appConfig = {
  dataSource: ((import.meta.env.VITE_DATA_SOURCE as string) || 'mock') as DataSourceMode,
  apiBaseUrl: (import.meta.env.VITE_API_BASE_URL as string) || '',
};
