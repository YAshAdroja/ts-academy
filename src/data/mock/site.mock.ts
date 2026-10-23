import { SiteContent } from '../../types/models';
import { mediaMock } from './media.mock';
import { siteConfig } from '../../config/site-config';

export const siteContentMock: SiteContent = {
  brand: {
    businessName: {
      en: 'Total Solution',
      gu: 'ટોટલ સોલ્યુશન',
    },
    academyName: {
      en: 'TS Academy',
      gu: 'TS એકેડેમી',
    },
    preschoolName: {
      en: 'TS Preschool',
      gu: 'TS પ્રિસ્કૂલ',
    },
    navodayaName: {
      en: 'TS Jawahar Navodaya',
      gu: 'TS જવાહર નવોદય',
    },
    logo: mediaMock.logo,
    faviconUrl: '/favicon.svg',
  },
  hero: {
    eyebrow: {
      en: 'LEARN • GROW • SHINE',
      gu: 'શીખો • આગળ વધો • ચમકો',
    },
    title: {
      en: 'A happy place to learn, explore and achieve.',
      gu: 'શીખવા, શોધવા અને સફળતા મેળવવા માટેનું આનંદમય સ્થળ.',
    },
    description: {
      en: 'From early childhood learning to school academics and competitive entrance preparation, TS helps children build confidence, strong foundations and a love of learning.',
      gu: 'બાળકોના પ્રારંભિક શિક્ષણથી લઈને શાળાના અભ્યાસ અને પ્રવેશ પરીક્ષાની તૈયારી સુધી, TS બાળકોમાં આત્મવિશ્વાસ, મજબૂત પાયો અને શીખવાની ઉત્સુકતા વિકસાવવામાં મદદ કરે છે.',
    },
    primaryCta: {
      en: 'Explore Our Programs',
      gu: 'અમારા અભ્યાસક્રમો જુઓ',
    },
    secondaryCta: {
      en: 'Enquire for Admission',
      gu: 'પ્રવેશ માટે પૂછપરછ કરો',
    },
    image: mediaMock.hero,
  },
  owner: {
    name: 'Amit Kansagra',
    displayName: {
      en: 'Amit Kansagra (Amit Sir)',
      gu: 'અમિત કણસાગરા (અમિત સર)',
    },
    role: {
      en: 'Founder & Academic Mentor',
      gu: 'સંસ્થાપક અને શૈક્ષણિક માર્ગદર્શક',
    },
    biography: {
      en: 'Meet Amit Sir (Amit Kansagra), the visionary behind Total Solution. His mission is to guide children with curiosity, strong conceptual clarity, discipline, and confidence.',
      gu: 'મળો અમિત સર (અમિત કણસાગરા) સાથે — ટોટલ સોલ્યુશન પાછળની પ્રેરણા. બાળકો જિજ્ઞાસા, મજબૂત પાયો, શિસ્ત અને આત્મવિશ્વાસ સાથે આગળ વધે એ તેમનો ધ્યેય છે.',
    },
    philosophy: {
      en: "Our institution dreams of creating an educational center where every student's talent is encouraged, and they move towards a bright future with knowledge, values, and self-confidence.",
      gu: 'અમારી સંસ્થા શિક્ષણનું એક એવું કેન્દ્ર બનાવવાનું સપનું જુએ છે, જ્યાં દરેક વિદ્યાર્થીની પ્રતિભાને પ્રોત્સાહન મળે અને તેઓ જ્ઞાન, સંસ્કાર અને આત્મવિશ્વાસ સાથે ઉજ્જવળ ભવિષ્ય તરફ આગમન કરે.',
    },
    photo: mediaMock.ownerPortrait,
    notice: {
      en: 'Founder & academic lead at Total Solution, Surat.',
      gu: 'ટોટલ સોલ્યુશન સુરત ખાતે સંસ્થાપક અને મુખ્ય શૈક્ષણિક માર્ગદર્શક.',
    },
  },
  socialLinks: {
    youtube: siteConfig.socialUrls.youtube,
    youtubeNavodaya: siteConfig.socialUrls.youtubeNavodaya,
    facebook: siteConfig.socialUrls.facebook,
    instagram: siteConfig.socialUrls.instagram,
  },
  contact: {
    phone: siteConfig.contact.primaryPhone,
    officePhone: siteConfig.contact.officePhone,
    whatsapp: siteConfig.contact.whatsapp,
    email: null,
    displayWorkingHours: {
      en: 'Monday – Saturday: Morning (TS Preschool) & Evening (TS Academy Batches) • Call: 9898894334 / 8488929310',
      gu: 'સોમવાર – શનિવાર: સવારે (TS પ્રિસ્કૂલ) અને સાંજે (TS એકેડેમી બેચ) • સંપર્ક: 9898894334 / 8488929310',
    },
    enquiryEndpointConfigured: false, // Honest demo mode flag
  },
  seo: {
    title: {
      en: 'TS Academy | Total Solution — Surat',
      gu: 'TS એકેડેમી | ટોટલ સોલ્યુશન — સુરત',
    },
    description: {
      en: 'Explore TS Preschool, academic classes for Standards 1–9, and Jawahar Navodaya entrance preparation from Total Solution in Surat.',
      gu: 'સુરતમાં ટોટલ સોલ્યુશન દ્વારા TS પ્રિસ્કૂલ, ધોરણ ૧ થી ૯ ના અભ્યાસ વર્ગો અને જવાહર નવોદય પ્રવેશ પરીક્ષાની તૈયારી વિશે જાણો.',
    },
    shareImage: mediaMock.hero,
  },
};
