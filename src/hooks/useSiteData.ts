import { useState, useEffect, useCallback } from 'react';
import {
  SiteContent,
  Program,
  Facility,
  FacultyMember,
  GalleryItem,
  ParentReview,
  Branch,
  SupportedLanguage,
} from '../types/models';
import { siteRepository } from '../data/repositories/site.repository';
import { useLanguage } from './useLanguage';

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useSiteContent(): AsyncState<SiteContent> {
  const { language } = useLanguage();
  const [data, setData] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContent = useCallback(async (lang: SupportedLanguage) => {
    setLoading(true);
    setError(null);
    try {
      const res = await siteRepository.getSiteContent(lang);
      setData(res);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to load site content';
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let isCancelled = false;
    fetchContent(language).catch((err) => {
      if (!isCancelled) console.error(err);
    });
    return () => {
      isCancelled = true;
    };
  }, [language, fetchContent]);

  return { data, loading, error, refetch: () => fetchContent(language) };
}

export function usePrograms(): AsyncState<Program[]> {
  const { language } = useLanguage();
  const [data, setData] = useState<Program[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPrograms = useCallback(async (lang: SupportedLanguage) => {
    setLoading(true);
    setError(null);
    try {
      const res = await siteRepository.getPrograms(lang);
      setData(res);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to load programs';
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let isCancelled = false;
    fetchPrograms(language).catch((err) => {
      if (!isCancelled) console.error(err);
    });
    return () => {
      isCancelled = true;
    };
  }, [language, fetchPrograms]);

  return { data, loading, error, refetch: () => fetchPrograms(language) };
}

export function useFacilities(): AsyncState<Facility[]> {
  const { language } = useLanguage();
  const [data, setData] = useState<Facility[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFacilities = useCallback(async (lang: SupportedLanguage) => {
    setLoading(true);
    setError(null);
    try {
      const res = await siteRepository.getFacilities(lang);
      setData(res);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to load facilities';
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let isCancelled = false;
    fetchFacilities(language).catch((err) => {
      if (!isCancelled) console.error(err);
    });
    return () => {
      isCancelled = true;
    };
  }, [language, fetchFacilities]);

  return { data, loading, error, refetch: () => fetchFacilities(language) };
}

export function useFaculty(): AsyncState<FacultyMember[]> {
  const { language } = useLanguage();
  const [data, setData] = useState<FacultyMember[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFaculty = useCallback(async (lang: SupportedLanguage) => {
    setLoading(true);
    setError(null);
    try {
      const res = await siteRepository.getFaculty(lang);
      setData(res);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to load faculty';
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let isCancelled = false;
    fetchFaculty(language).catch((err) => {
      if (!isCancelled) console.error(err);
    });
    return () => {
      isCancelled = true;
    };
  }, [language, fetchFaculty]);

  return { data, loading, error, refetch: () => fetchFaculty(language) };
}

export function useGallery(): AsyncState<GalleryItem[]> {
  const { language } = useLanguage();
  const [data, setData] = useState<GalleryItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGallery = useCallback(async (lang: SupportedLanguage) => {
    setLoading(true);
    setError(null);
    try {
      const res = await siteRepository.getGallery(lang);
      setData(res);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to load gallery';
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let isCancelled = false;
    fetchGallery(language).catch((err) => {
      if (!isCancelled) console.error(err);
    });
    return () => {
      isCancelled = true;
    };
  }, [language, fetchGallery]);

  return { data, loading, error, refetch: () => fetchGallery(language) };
}

export function useApprovedReviews(): AsyncState<ParentReview[]> {
  const { language } = useLanguage();
  const [data, setData] = useState<ParentReview[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchReviews = useCallback(async (lang: SupportedLanguage) => {
    setLoading(true);
    setError(null);
    try {
      const res = await siteRepository.getApprovedReviews(lang);
      setData(res);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to load reviews';
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let isCancelled = false;
    fetchReviews(language).catch((err) => {
      if (!isCancelled) console.error(err);
    });
    return () => {
      isCancelled = true;
    };
  }, [language, fetchReviews]);

  return { data, loading, error, refetch: () => fetchReviews(language) };
}

export function useBranches(): AsyncState<Branch[]> {
  const { language } = useLanguage();
  const [data, setData] = useState<Branch[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBranches = useCallback(async (lang: SupportedLanguage) => {
    setLoading(true);
    setError(null);
    try {
      const res = await siteRepository.getBranches(lang);
      setData(res);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to load branches';
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let isCancelled = false;
    fetchBranches(language).catch((err) => {
      if (!isCancelled) console.error(err);
    });
    return () => {
      isCancelled = true;
    };
  }, [language, fetchBranches]);

  return { data, loading, error, refetch: () => fetchBranches(language) };
}
