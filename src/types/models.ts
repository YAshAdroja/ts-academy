export type SupportedLanguage = 'en' | 'gu';

export interface LocalizedText {
  en: string;
  gu: string;
}

export interface ImageAsset {
  id: string;
  src: string;
  alt: LocalizedText;
  width?: number;
  height?: number;
  objectPosition?: string;
  category?: string;
}

export interface Program {
  id: string;
  slug: string;
  title: LocalizedText;
  badge: LocalizedText;
  description: LocalizedText;
  highlights: LocalizedText[];
  image: ImageAsset;
  icon?: string;
  isActive: boolean;
  sortOrder: number;
  ctaLabel: LocalizedText;
  targetEnquiryProgram: string;
  isDemo?: boolean;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: LocalizedText;
  bio: LocalizedText;
  photo: ImageAsset | null;
  isActive: boolean;
  sortOrder: number;
  isDemo?: boolean;
}

export interface GalleryItem {
  id: string;
  title: LocalizedText;
  description?: LocalizedText;
  image: ImageAsset;
  category: 'classroom' | 'preschool' | 'activities' | 'events' | 'navodaya';
  alt: LocalizedText;
  isPublished: boolean;
  sortOrder: number;
  isDemo?: boolean;
}

export interface ParentReview {
  id: string;
  parentDisplayName: string;
  relationship?: LocalizedText;
  review: LocalizedText;
  rating?: number;
  programId?: string;
  dateLabel?: string;
  avatar?: ImageAsset | null;
  isApproved: boolean;
  isFeatured: boolean;
  sortOrder: number;
  isDemo?: boolean;
}

export interface Branch {
  id: string;
  name: LocalizedText;
  subtitle: LocalizedText;
  address: LocalizedText;
  mapUrl: string | null;
  mapDirectionsUrl: string;
  isProvisionalMap?: boolean;
  phone?: string | null;
  whatsapp?: string | null;
  openingHours?: LocalizedText | null;
  image?: ImageAsset | null;
  isActive: boolean;
  sortOrder: number;
}

export interface Facility {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  image: ImageAsset;
  badge?: LocalizedText;
  isActive: boolean;
  sortOrder: number;
  isDemo?: boolean;
}

export interface SocialLinks {
  youtube: string | null;
  youtubeNavodaya?: string | null;
  facebook: string | null;
  instagram: string | null;
}

export interface ContactConfig {
  phone: string | null;
  officePhone?: string | null;
  whatsapp: string | null;
  email: string | null;
  displayWorkingHours: LocalizedText | null;
  enquiryEndpointConfigured: boolean;
}

export interface SiteContent {
  brand: {
    businessName: LocalizedText;
    academyName: LocalizedText;
    preschoolName: LocalizedText;
    navodayaName: LocalizedText;
    logo: ImageAsset;
    faviconUrl: string | null;
  };
  hero: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    primaryCta: LocalizedText;
    secondaryCta: LocalizedText;
    image: ImageAsset;
  };
  owner: {
    name: string;
    displayName: LocalizedText;
    role: LocalizedText;
    biography: LocalizedText;
    philosophy: LocalizedText;
    photo: ImageAsset;
    notice: LocalizedText;
  };
  socialLinks: SocialLinks;
  contact: ContactConfig;
  seo: {
    title: LocalizedText;
    description: LocalizedText;
    shareImage: ImageAsset | null;
  };
}

export interface EnquiryInput {
  parentName: string;
  phone: string;
  program: string;
  standardAge?: string;
  branch?: string;
  message?: string;
}

export interface EnquiryResult {
  success: boolean;
  mode: 'demo' | 'api';
  message: LocalizedText;
}
