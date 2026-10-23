import { ParentReview } from '../../types/models';
import { mediaMock } from './media.mock';

export const reviewsMock: ParentReview[] = [
  {
    id: 'rev-demo-1',
    parentDisplayName: 'Demo Parent Feedback (Replace before launch)',
    relationship: {
      en: 'Preschool Parent (Demo)',
      gu: 'પ્રિસ્કૂલ વાલી (ડેમો)',
    },
    review: {
      en: 'The play-based atmosphere and loving care at TS Preschool helped my child transition smoothly into school life. Very supportive staff.',
      gu: 'TS પ્રિસ્કૂલમાં સ્નેહભર્યું વાતાવરણ અને રમત-ગમત દ્વારા શીખવવાની રીતથી મારા બાળકનો શાળા પ્રત્યેનો ઉત્સાહ ખૂબ વધ્યો છે.',
    },
    rating: 5,
    programId: 'preschool',
    dateLabel: 'Demo 2026',
    avatar: mediaMock.parentAvatar,
    isApproved: true,
    isFeatured: true,
    sortOrder: 1,
    isDemo: true,
  },
  {
    id: 'rev-demo-2',
    parentDisplayName: 'Demo Parent Feedback (Replace before launch)',
    relationship: {
      en: 'Standard 7 Parent (Demo)',
      gu: 'ધોરણ ૭ વાલી (ડેમો)',
    },
    review: {
      en: 'Amit Sir pays personal attention to foundational doubts. Regular practice tests have improved study discipline significantly.',
      gu: 'અમિત સર પાયાની બાબતો અને શંકાઓ પર વ્યક્તિગત ધ્યાન આપે છે. નિયમિત પ્રેક્ટિસથી બાળકમાં અભ્યાસની સારી ટેવ પડી છે.',
    },
    rating: 5,
    programId: 'standards1-9',
    dateLabel: 'Demo 2026',
    avatar: mediaMock.parentAvatar,
    isApproved: true,
    isFeatured: true,
    sortOrder: 2,
    isDemo: true,
  },
  {
    id: 'rev-demo-3',
    parentDisplayName: 'Demo Parent Feedback (Replace before launch)',
    relationship: {
      en: 'Navodaya Aspirant Parent (Demo)',
      gu: 'નવોદય બેચ વાલી (ડેમો)',
    },
    review: {
      en: 'Structured guidance and question practice for Navodaya preparation gave our child clarity and confidence for the entrance exam format.',
      gu: 'નવોદય પ્રવેશ પરીક્ષા માટેનું વ્યવસ્થિત માર્ગદર્શન અને પેપર પ્રેક્ટિસથી બાળકને પરીક્ષાની પદ્ધતિ સમજવામાં સરળતા રહી.',
    },
    rating: 5,
    programId: 'navodaya',
    dateLabel: 'Demo 2026',
    avatar: mediaMock.parentAvatar,
    isApproved: true,
    isFeatured: true,
    sortOrder: 3,
    isDemo: true,
  },
  {
    id: 'rev-unapproved-sample',
    parentDisplayName: 'Unapproved Sample Review',
    relationship: {
      en: 'Unpublished',
      gu: 'અપ્રકાશિત',
    },
    review: {
      en: 'This review is unapproved and should NOT be returned by getApprovedReviews.',
      gu: 'આ પ્રતિભાવ અપ્રકાશિત છે અને વેબસાઇટ પર દેખાવો ન જોઈએ.',
    },
    rating: 4,
    isApproved: false, // Testing that unapproved reviews are never rendered
    isFeatured: false,
    sortOrder: 4,
    isDemo: true,
  },
];
