import { appConfig } from '../../config/environment';

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public data?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || appConfig.apiBaseUrl;
  }

  private ensureConfigured(): void {
    if (!this.baseUrl) {
      throw new ApiError(
        0,
        'API base URL is not configured. Please set VITE_API_BASE_URL in your environment or switch VITE_DATA_SOURCE to "mock".'
      );
    }
  }

  private getFullUrl(endpoint: string): URL {
    const cleanBase = this.baseUrl.replace(/\/+$/, '');
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    return new URL(cleanBase + cleanEndpoint);
  }

  public async get<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
    this.ensureConfigured();

    const url = this.getFullUrl(endpoint);
    if (params) {
      Object.entries(params).forEach(([key, val]) => url.searchParams.append(key, val));
    }

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new ApiError(response.status, `Failed request to ${endpoint}: ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  }

  public async post<T, B>(endpoint: string, body: B): Promise<T> {
    this.ensureConfigured();

    const url = this.getFullUrl(endpoint);
    const response = await fetch(url.toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new ApiError(response.status, `Failed request to ${endpoint}: ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  }
}

export const apiClient = new ApiClient();
