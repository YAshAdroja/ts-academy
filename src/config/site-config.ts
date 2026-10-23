import { SupportedLanguage } from '../types/models';

export const siteConfig = {
  defaultLanguage: 'gu' as SupportedLanguage,
  
  // Section Visibility Flags (editable without modifying components)
  sectionVisibility: {
    hero: true,
    programs: true,
    aboutOwner: true,
    facilities: true,
    faculty: true,
    gallery: true,
    parentReviews: true,
    branches: true,
    enquiryForm: true,
  },

  // Verified Contact Details from Posters & Improvement Plan
  contact: {
    primaryPhone: '9898894334',
    officePhone: '8488929310',
    helplinePhone: '8866363651',
    whatsapp: '9898894334',
  },

  // Verified Social Links from Owner Spec & Improvement Plan
  socialUrls: {
    youtube: 'https://www.youtube.com/@TS-Academy',
    youtubeNavodaya: 'https://www.youtube.com/@tsnavodaya',
    facebook: 'http://facebook.com/profile.php?id=100090597774524&mibextid=ZbWKwL',
    instagram: 'https://instagram.com/ts_preschool?igshid=NTc4MTIwNjQ2YQ==',
  },

  // Owner confirmed addresses & directions links
  branches: {
    branch1: {
      name: 'TS Preschool / Mota Varachha',
      addressEn: 'F5–F9, Liberty Nine, near Ram Chowk, Sudama Chowk, Mota Varachha, Surat, Gujarat 394101',
      addressGu: 'F-5 થી F-9, લિબર્ટી 9, રામ ચોક પાસે, સુદામા ચોક, મોટા વરાછા, સુરત, ગુજરાત - 394101',
      directionsUrl: 'https://share.google/NgKp656ChWUlW4XVg',
      phone: '9898894334',
      isProvisional: false,
    },
    branch2: {
      name: 'TS Academy / Nana Varachha (Sarthana Jakat Naka)',
      addressEn: 'B-107/8, First Floor, Govind Park, opposite Varniraj Apartment, Vrajabhumi Road, Sarthana Jakat Naka, Nana Varachha, Surat, Gujarat 395013',
      addressGu: 'B-107/8, પહેલો માળ, ગોવિંદપાર્ક, વર્ણીરાજ એપાર્ટમેન્ટ સામે, વ્રજભૂમિ રોડ, સરથાણા જકાતનાકા, નાના વરાછા, સુરત - 395013',
      directionsUrl: 'https://www.google.com/maps/place/Siddheshwar+Jewellers/@21.227824,72.901325,932m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be0459fad9c893f:0x422726faf0a24417!8m2!3d21.227824!4d72.901325!16s%2Fg%2F11l_18n4_9?entry=ttu',
      phone: '8488929310',
      isProvisional: true, // As identified in spec: points to a nearby landmark, waiting for exact TS Academy pin
    },
  },
};
