import {
  SiteContent,
  Program,
  Facility,
  FacultyMember,
  GalleryItem,
  ParentReview,
  Branch,
  EnquiryInput,
  EnquiryResult,
  SupportedLanguage,
} from '../../types/models';
import { siteContentMock } from '../mock/site.mock';
import { programsMock } from '../mock/programs.mock';
import { facilitiesMock } from '../mock/facilities.mock';
import { facultyMock } from '../mock/faculty.mock';
import { galleryMock } from '../mock/gallery.mock';
import { reviewsMock } from '../mock/reviews.mock';
import { branchesMock } from '../mock/branches.mock';
import { appConfig } from '../../config/environment';
import { ApiClient, apiClient } from '../../services/api/api-client';
import { API_ENDPOINTS } from '../../services/api/endpoints';

export interface SiteRepository {
  getSiteContent(language?: SupportedLanguage): Promise<SiteContent>;
  getPrograms(language?: SupportedLanguage): Promise<Program[]>;
  getFacilities(language?: SupportedLanguage): Promise<Facility[]>;
  getFaculty(language?: SupportedLanguage): Promise<FacultyMember[]>;
  getGallery(language?: SupportedLanguage): Promise<GalleryItem[]>;
  getApprovedReviews(language?: SupportedLanguage): Promise<ParentReview[]>;
  getBranches(language?: SupportedLanguage): Promise<Branch[]>;
  submitEnquiry(input: EnquiryInput): Promise<EnquiryResult>;
}

/**
 * MockSiteRepository reads strictly from central mock datasets.
 * It simulates real network response patterns and filters approved/active records.
 */
export class MockSiteRepository implements SiteRepository {
  public async getSiteContent(_language?: SupportedLanguage): Promise<SiteContent> {
    return Promise.resolve({ ...siteContentMock });
  }

  public async getPrograms(_language?: SupportedLanguage): Promise<Program[]> {
    const list = programsMock
      .filter((p) => p.isActive)
      .sort((a, b) => a.sortOrder - b.sortOrder);
    return Promise.resolve([...list]);
  }

  public async getFacilities(_language?: SupportedLanguage): Promise<Facility[]> {
    const list = facilitiesMock
      .filter((f) => f.isActive)
      .sort((a, b) => a.sortOrder - b.sortOrder);
    return Promise.resolve([...list]);
  }

  public async getFaculty(_language?: SupportedLanguage): Promise<FacultyMember[]> {
    const list = facultyMock
      .filter((f) => f.isActive)
      .sort((a, b) => a.sortOrder - b.sortOrder);
    return Promise.resolve([...list]);
  }

  public async getGallery(_language?: SupportedLanguage): Promise<GalleryItem[]> {
    const list = galleryMock
      .filter((g) => g.isPublished)
      .sort((a, b) => a.sortOrder - b.sortOrder);
    return Promise.resolve([...list]);
  }

  public async getApprovedReviews(_language?: SupportedLanguage): Promise<ParentReview[]> {
    // Only approved reviews are visible to the public site
    const list = reviewsMock
      .filter((r) => r.isApproved)
      .sort((a, b) => a.sortOrder - b.sortOrder);
    return Promise.resolve([...list]);
  }

  public async getBranches(_language?: SupportedLanguage): Promise<Branch[]> {
    const list = branchesMock
      .filter((b) => b.isActive)
      .sort((a, b) => a.sortOrder - b.sortOrder);
    return Promise.resolve([...list]);
  }

  public async submitEnquiry(input: EnquiryInput): Promise<EnquiryResult> {
    // Mock simulation: Log input safely and return honest demo status
    console.info('[Mock Enquiry Received in Demo Mode]:', input);
    return Promise.resolve({
      success: true,
      mode: 'demo',
      message: {
        en: 'Enquiry validated in demo mode. Delivery destination is not configured yet; please visit or call once confirmed.',
        gu: 'ડેમો મોડમાં પૂછપરછ ચકાસાયેલ છે. વિતરણ ગંતવ્ય હજુ ગોઠવાયેલ નથી; કૃપા કરીને શાખાની મુલાકાત લો અથવા ફોન નંબર ઉપલબ્ધ થાય ત્યારે સંપર્ક કરો.',
      },
    });
  }
}

/**
 * ApiSiteRepository connects to a real REST backend when VITE_DATA_SOURCE=api.
 */
export class ApiSiteRepository implements SiteRepository {
  constructor(private client: ApiClient) {}

  public async getSiteContent(language?: SupportedLanguage): Promise<SiteContent> {
    return this.client.get<SiteContent>(
      API_ENDPOINTS.siteContent,
      language ? { lang: language } : undefined
    );
  }

  public async getPrograms(language?: SupportedLanguage): Promise<Program[]> {
    return this.client.get<Program[]>(
      API_ENDPOINTS.programs,
      language ? { lang: language } : undefined
    );
  }

  public async getFacilities(language?: SupportedLanguage): Promise<Facility[]> {
    return this.client.get<Facility[]>(
      API_ENDPOINTS.facilities,
      language ? { lang: language } : undefined
    );
  }

  public async getFaculty(language?: SupportedLanguage): Promise<FacultyMember[]> {
    return this.client.get<FacultyMember[]>(
      API_ENDPOINTS.faculty,
      language ? { lang: language } : undefined
    );
  }

  public async getGallery(language?: SupportedLanguage): Promise<GalleryItem[]> {
    return this.client.get<GalleryItem[]>(
      API_ENDPOINTS.gallery,
      language ? { lang: language } : undefined
    );
  }

  public async getApprovedReviews(language?: SupportedLanguage): Promise<ParentReview[]> {
    return this.client.get<ParentReview[]>(
      API_ENDPOINTS.reviews,
      language ? { lang: language } : undefined
    );
  }

  public async getBranches(language?: SupportedLanguage): Promise<Branch[]> {
    return this.client.get<Branch[]>(
      API_ENDPOINTS.branches,
      language ? { lang: language } : undefined
    );
  }

  public async submitEnquiry(input: EnquiryInput): Promise<EnquiryResult> {
    return this.client.post<EnquiryResult, EnquiryInput>(API_ENDPOINTS.submitEnquiry, input);
  }
}

/**
 * Central site repository factory.
 * Switch seamlessly between mock data and future backend without touching UI.
 */
export const siteRepository: SiteRepository =
  appConfig.dataSource === 'api'
    ? new ApiSiteRepository(apiClient)
    : new MockSiteRepository();
