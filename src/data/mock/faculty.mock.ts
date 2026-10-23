import { FacultyMember } from '../../types/models';
import { mediaMock } from './media.mock';

export const facultyMock: FacultyMember[] = [
  {
    id: 'fac-owner-amit-sir',
    name: 'Amit Kansagra (અમિત કણસાગરા)',
    role: {
      en: 'Founder & Academic Mentor',
      gu: 'સંસ્થાપક અને મુખ્ય શૈક્ષણિક માર્ગદર્શક',
    },
    bio: {
      en: 'Guiding academy operations, concept clarity and entrance exam batches with care, discipline and inspiring leadership.',
      gu: 'શૈક્ષણિક માર્ગદર્શન, મૂળભૂત ખ્યાલોની સ્પષ્ટતા અને પ્રવેશ પરીક્ષા બેચનું સ્નેહપૂર્ણ અને શિસ્તબદ્ધ નેતૃત્વ.',
    },
    photo: mediaMock.ownerPortrait,
    isActive: true,
    sortOrder: 1,
    isDemo: false,
  },
  {
    id: 'fac-hemanshi-kotadiya',
    name: 'Hemanshi Kotadiya (હેમાંશી કોટડીયા)',
    role: {
      en: 'Early Childhood & Foundational Educator',
      gu: 'પ્રારંભિક બાળ કેળવણી શિક્ષિકા',
    },
    bio: {
      en: 'Specialized in child-friendly motor activities, playful learning, and fostering a happy, safe preschool environment.',
      gu: 'રમત આધારિત પ્રવૃત્તિઓ, સર્જનાત્મક બાળ વિકાસ અને પ્રારંભિક શિક્ષણમાં વાત્સલ્યપૂર્ણ માર્ગદર્શન.',
    },
    photo: mediaMock.facultyHemanshi,
    isActive: true,
    sortOrder: 2,
    isDemo: false,
  },
  {
    id: 'fac-orisa-kansagra',
    name: 'Orisa Kansagra (ઓરિસા કણસાગરા)',
    role: {
      en: 'Academic Guidance & Child Development Mentor',
      gu: 'શૈક્ષણિક માર્ગદર્શન અને બાળ વિકાસ સલાહકાર',
    },
    bio: {
      en: 'Dedicated to student practice habits, conceptual foundation, and encouraging children with confidence and care.',
      gu: 'વિદ્યાર્થીઓમાં અભ્યાસની સુટેવ, પાયાની વૈચારિક સ્પષ્ટતા અને વાલીઓ સાથે સતત રચનાત્મક સંવાદ.',
    },
    photo: mediaMock.facultyOrisa,
    isActive: true,
    sortOrder: 3,
    isDemo: false,
  },
];
