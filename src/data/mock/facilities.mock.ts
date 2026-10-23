import { Facility } from '../../types/models';
import { mediaMock } from './media.mock';

export const facilitiesMock: Facility[] = [
  {
    id: 'fac-environment',
    title: {
      en: 'Supportive Learning Environment',
      gu: 'પ્રોત્સાહક શૈક્ષણિક વાતાવરણ',
    },
    description: {
      en: 'A calm, welcoming, well-arranged classroom setting where every child feels valued, safe and motivated to learn.',
      gu: 'શાંત, સુવ્યવસ્થિત અને સ્નેહપૂર્ણ વાતાવરણ જ્યાં દરેક બાળક પોતાને સુરક્ષિત અને શીખવા માટે ઉત્સાહિત અનુભવે.',
    },
    badge: {
      en: 'Classroom Culture',
      gu: 'વર્ગખંડ સંસ્કૃતિ',
    },
    image: mediaMock.facilityClassroom,
    isActive: true,
    sortOrder: 1,
    isDemo: false,
  },
  {
    id: 'fac-play-corner',
    title: {
      en: 'Preschool Play & Activity Space',
      gu: 'પ્રિસ્કૂલ પ્લે અને એક્ટિવિટી સ્પેસ',
    },
    description: {
      en: 'Dedicated play equipment and colorful learning aids to stimulate sensory, motor and cognitive development for little learners.',
      gu: 'નાના બાળકોના માનસિક અને શારીરિક વિકાસ માટે રંગબેરંગી સાધનો અને સુરક્ષિત રમત-ગમતનો વિસ્તાર.',
    },
    badge: {
      en: 'Early Childhood',
      gu: 'પ્રારંભિક વિકાસ',
    },
    image: mediaMock.facilityPlayArea,
    isActive: true,
    sortOrder: 2,
    isDemo: false,
  },
  {
    id: 'fac-concept-practice',
    title: {
      en: 'Concept Clarity & Practice Zone',
      gu: 'ખ્યાલ સ્પષ્ટતા અને અભ્યાસ ક્ષેત્ર',
    },
    description: {
      en: 'Structured study sessions with worksheets, doubt-clearing discussions, and step-by-step problem-solving methods.',
      gu: 'વર્કશીટ, શંકા નિવારણ ચર્ચા અને પદ્ધતિસર દાખલા ગણવાની રીતો સાથે રચનાત્મક સત્રો.',
    },
    badge: {
      en: 'Standards 1–9',
      gu: 'ધોરણ ૧ થી ૯',
    },
    image: mediaMock.facilityConceptLab,
    isActive: true,
    sortOrder: 3,
    isDemo: false,
  },
  {
    id: 'fac-study-habits',
    title: {
      en: 'Focused Exam Preparation Desk',
      gu: 'એકાગ્ર પરીક્ષા તૈયારી માર્ગદર્શન',
    },
    description: {
      en: 'Quiet, disciplined setting specially curated for competitive entrance batches like Jawahar Navodaya with timed practice papers.',
      gu: 'જવાહર નવોદય જેવી સ્પર્ધાત્મક પરીક્ષાઓ માટે સમયબદ્ધ પેપર પ્રેક્ટિસ સાથેનું શાંત અને શિસ્તબદ્ધ માળખું.',
    },
    badge: {
      en: 'Navodaya Focus',
      gu: 'નવોદય વિશેષ',
    },
    image: mediaMock.facilityLibrary,
    isActive: true,
    sortOrder: 4,
    isDemo: false,
  },
];
