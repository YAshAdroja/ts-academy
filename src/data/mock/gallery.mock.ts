import { GalleryItem } from '../../types/models';

export const galleryMock: GalleryItem[] = [
  {
    id: 'gal-1',
    title: {
      en: 'Interactive Classroom Learning',
      gu: 'સંવાદપૂર્ણ વર્ગખંડ અભ્યાસ',
    },
    description: {
      en: 'Students engaged in concept discussions and daily practice routines.',
      gu: 'વિદ્યાર્થીઓ ચર્ચા અને દૈનિક પ્રેક્ટિસ દ્વારા અભ્યાસ કરતા.',
    },
    image: {
      id: 'gal-img-1',
      src: '/images/gallery/classroom-activity.svg',
      alt: {
        en: 'Classroom study session placeholder illustration',
        gu: 'વર્ગખંડ અભ્યાસ સત્રનું પ્લેસહોલ્ડર ચિત્ર',
      },
      width: 500,
      height: 350,
      category: 'classroom',
    },
    category: 'classroom',
    alt: {
      en: 'Classroom session at TS Academy',
      gu: 'TS એકેડેમી ખાતે વર્ગખંડ અભ્યાસ',
    },
    isPublished: true,
    sortOrder: 1,
    isDemo: true,
  },
  {
    id: 'gal-2',
    title: {
      en: 'Joyful Preschool Playtime',
      gu: 'પ્રિસ્કૂલ બાળકોની રમત પ્રવૃત્તિ',
    },
    description: {
      en: 'Sensory games and motor skill building in the dedicated play area.',
      gu: 'પ્લે એરિયામાં ઇન્દ્રિયગત રમતો અને શારીરિક વિકાસ પ્રવૃત્તિઓ.',
    },
    image: {
      id: 'gal-img-2',
      src: '/images/gallery/preschool-play.svg',
      alt: {
        en: 'Children playing with educational blocks in preschool',
        gu: 'પ્રિસ્કૂલમાં બ્લોક્સ સાથે રમતા બાળકો',
      },
      width: 500,
      height: 350,
      category: 'preschool',
    },
    category: 'preschool',
    alt: {
      en: 'Preschool activities at TS Preschool Mota Varachha',
      gu: 'TS પ્રિસ્કૂલ મોટા વરાછા ખાતે પ્રવૃત્તિઓ',
    },
    isPublished: true,
    sortOrder: 2,
    isDemo: true,
  },
  {
    id: 'gal-3',
    title: {
      en: 'Hands-on Science & Maths Discovery',
      gu: 'ગણિત અને વિજ્ઞાન પ્રાયોગિક સમજ',
    },
    description: {
      en: 'Visual demonstration of principles to make learning memorable.',
      gu: 'નિયમો અને પ્રમેયને સરળતાથી સમજવા માટેનું મોડેલિંગ.',
    },
    image: {
      id: 'gal-img-3',
      src: '/images/gallery/science-experiment.svg',
      alt: {
        en: 'Science learning tools and charts',
        gu: 'વિજ્ઞાન સાધનો અને ચાર્ટ્સ',
      },
      width: 500,
      height: 350,
      category: 'activities',
    },
    category: 'activities',
    alt: {
      en: 'Practical learning sessions at TS Academy',
      gu: 'TS એકેડેમી ખાતે પ્રાયોગિક શિક્ષણ',
    },
    isPublished: true,
    sortOrder: 3,
    isDemo: true,
  },
  {
    id: 'gal-4',
    title: {
      en: 'Creative Art & Handcraft Work',
      gu: 'ચિત્રકલા અને સર્જનાત્મક હસ્તકલા',
    },
    description: {
      en: 'Encouraging self-expression, imagination and coloring confidence.',
      gu: 'કલ્પનાશક્તિ, રંગોની સમજ અને આત્મઅભિવ્યક્તિને પ્રોત્સાહન.',
    },
    image: {
      id: 'gal-img-4',
      src: '/images/gallery/art-craft.svg',
      alt: {
        en: 'Art palette and craft creations placeholder',
        gu: 'આર્ટ પેલેટ અને ક્રાફ્ટ પ્રવૃત્તિ',
      },
      width: 500,
      height: 350,
      category: 'activities',
    },
    category: 'activities',
    alt: {
      en: 'Art sessions at TS Academy',
      gu: 'TS એકેડેમી ખાતે કલા સત્રો',
    },
    isPublished: true,
    sortOrder: 4,
    isDemo: true,
  },
  {
    id: 'gal-5',
    title: {
      en: 'Focused Navodaya Entrance Mock Session',
      gu: 'નવોદય પ્રવેશ પરીક્ષા મોક ટેસ્ટ સત્ર',
    },
    description: {
      en: 'Disciplined exam pattern practice and time management training.',
      gu: 'સમયબદ્ધ ટેસ્ટ પ્રેક્ટિસ અને પ્રશ્નપત્ર હલ કરવાની પદ્ધતિ.',
    },
    image: {
      id: 'gal-img-5',
      src: '/images/gallery/navodaya-batch.svg',
      alt: {
        en: 'Entrance exam preparation session placeholder',
        gu: 'પ્રવેશ પરીક્ષા તૈયારી સત્ર પ્લેસહોલ્ડર',
      },
      width: 500,
      height: 350,
      category: 'navodaya',
    },
    category: 'navodaya',
    alt: {
      en: 'Navodaya entrance batch at TS Academy',
      gu: 'TS એકેડેમી ખાતે નવોદય બેચ',
    },
    isPublished: true,
    sortOrder: 5,
    isDemo: true,
  },
  {
    id: 'gal-6',
    title: {
      en: 'Student Gatherings & Annual Celebrations',
      gu: 'વિદ્યાર્થી સંમેલન અને વાર્ષિક ઉત્સવ',
    },
    description: {
      en: 'Fostering camaraderie, joy and stage confidence among students.',
      gu: 'વિદ્યાર્થીઓમાં મિત્રતા, ઉત્સાહ અને મંચ પર બોલવાનો આત્મવિશ્વાસ વધારવો.',
    },
    image: {
      id: 'gal-img-6',
      src: '/images/gallery/annual-day.svg',
      alt: {
        en: 'Celebration and certificate event placeholder',
        gu: 'ઉત્સવ અને સન્માન સમારોહ પ્લેસહોલ્ડર',
      },
      width: 500,
      height: 350,
      category: 'events',
    },
    category: 'events',
    alt: {
      en: 'Events and student gatherings',
      gu: 'કાર્યક્રમો અને વિદ્યાર્થી મિલન',
    },
    isPublished: true,
    sortOrder: 6,
    isDemo: false,
  },
  {
    id: 'gal-7',
    title: {
      en: 'Early Alphabet & Foundational Learning',
      gu: 'પ્રારંભિક અક્ષરજ્ઞાન અને શિક્ષણ',
    },
    description: {
      en: 'Toddlers learning alphabet fundamentals through play and teamwork.',
      gu: 'રમત અને પ્રવૃત્તિ દ્વારા મૂળાક્ષરો અને પાયાની સમજ કેળવતા બાળકો.',
    },
    image: {
      id: 'gal-img-7',
      src: '/images/gallery/preschool-children.png',
      alt: {
        en: 'Preschool toddlers learning alphabet',
        gu: 'મૂળાક્ષરો શીખતા પ્રિસ્કૂલ બાળકો',
      },
      width: 900,
      height: 624,
      category: 'preschool',
    },
    category: 'preschool',
    alt: {
      en: 'Preschool alphabet play at TS Preschool',
      gu: 'TS પ્રિસ્કૂલ ખાતે પાયાનું શિક્ષણ',
    },
    isPublished: true,
    sortOrder: 7,
    isDemo: false,
  },
  {
    id: 'gal-8',
    title: {
      en: 'Back to School Concept Study',
      gu: 'શાળાકીય સૈદ્ધાંતિક અભ્યાસ સંકલ્પના',
    },
    description: {
      en: 'Rich educational tools, mathematics instruments, and concept charts.',
      gu: 'ગણિત, વિજ્ઞાન સાધનો અને આલેખન દ્વારા રસપ્રદ શિક્ષણ.',
    },
    image: {
      id: 'gal-img-8',
      src: '/images/gallery/back-to-school.jpg',
      alt: {
        en: 'Educational tools and blackboard concept study',
        gu: 'શિક્ષણ સાધનો અને બોર્ડ અભ્યાસ',
      },
      width: 600,
      height: 400,
      category: 'classroom',
    },
    category: 'classroom',
    alt: {
      en: 'Classroom study aids at TS Academy',
      gu: 'TS એકેડેમી શૈક્ષણિક સાધનો',
    },
    isPublished: true,
    sortOrder: 8,
    isDemo: false,
  },
];
