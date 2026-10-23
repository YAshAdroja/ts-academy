import { Program } from '../../types/models';
import { mediaMock } from './media.mock';

export const programsMock: Program[] = [
  {
    id: 'ts-preschool',
    slug: 'preschool',
    title: {
      en: 'TS Preschool',
      gu: 'TS પ્રિસ્કૂલ',
    },
    badge: {
      en: 'Playgroup • Nursery • Jr/Sr KG • Balvatika',
      gu: 'પ્લે ગ્રુપ • નર્સરી • જુ/સિ કે.જી. • બાલવાટિકા',
    },
    description: {
      en: '“From small steps to big success!” Play-based early childhood education with a strong foundation in reading, writing, and creative activities in a safe, caring space.',
      gu: '“નાના પગલાંથી મોટી સફળતા તરફ !” પ્રવૃત્તિ આધારિત અભ્યાસ, વાંચન-લેખનની મજબૂત શરૂઆત અને સુરક્ષિત, કાળજીભર્યા વાતાવરણમાં બાળકનો સર્વાંગી વિકાસ.',
    },
    highlights: [
      {
        en: 'Playgroup, Junior KG, Senior KG & Balvatika admissions open',
        gu: 'પ્લે ગ્રુપ, જુનિયર કે.જી., સિનિયર કે.જી. અને બાલવાટિકા પ્રવેશ શરૂ',
      },
      {
        en: 'Activity-based learning & strong reading-writing foundation',
        gu: 'પ્રવૃત્તિ આધારિત અભ્યાસ અને વાંચન-લખાણની મજબૂત શરૂઆત',
      },
      {
        en: 'Safe, caring environment focused on holistic child growth',
        gu: 'સુરક્ષિત અને કાળજીભર્યું વાતાવરણ જેમાં બાળકનો સર્વાંગી વિકાસ થાય',
      },
    ],
    image: mediaMock.programPreschool,
    isActive: true,
    sortOrder: 1,
    ctaLabel: {
      en: 'Ask About Preschool',
      gu: 'પ્રિસ્કૂલ વિશે પૂછો',
    },
    targetEnquiryProgram: 'preschool',
  },
  {
    id: 'ts-academy-std1-9',
    slug: 'standards-1-to-9',
    title: {
      en: 'TS Academy — Standards 1–9',
      gu: 'TS એકેડેમી — ધોરણ ૧ થી ૯',
    },
    badge: {
      en: 'Gujarati & English Medium',
      gu: 'ગુજરાતી અને અંગ્રેજી માધ્યમ',
    },
    description: {
      en: 'Academic support designed to strengthen core concept clarity, regular practice, study discipline, and exam confidence.',
      gu: 'શાળાના અભ્યાસક્રમમાં મૂળભૂત ખ્યાલોની સ્પષ્ટતા, નિયમિત પ્રેક્ટિસ, શિસ્તબદ્ધ વાંચન ટેવ અને પરીક્ષા માટે આત્મવિશ્વાસ વધારતું માર્ગદર્શન.',
    },
    highlights: [
      {
        en: 'Batches for both Gujarati Medium and English Medium students',
        gu: 'ગુજરાતી માધ્યમ અને અંગ્રેજી માધ્યમના વિદ્યાર્થીઓ માટે વિશેષ બેચ',
      },
      {
        en: 'Clear focus on fundamentals, concepts and doubt resolution',
        gu: 'મૂળભૂત સિદ્ધાંતો સમજવા અને શંકા નિવારણ પર વિશેષ ધ્યાન',
      },
      {
        en: 'Regular learning habits and positive academic encouragement',
        gu: 'નિયમિત અભ્યાસની ટેવ અને પ્રેરણાદાયી શૈક્ષણિક માહોલ',
      },
    ],
    image: mediaMock.programAcademy,
    isActive: true,
    sortOrder: 2,
    ctaLabel: {
      en: 'Ask About Classes',
      gu: 'વર્ગો વિશે પૂછો',
    },
    targetEnquiryProgram: 'standards1-9',
  },
  {
    id: 'ts-navodaya',
    slug: 'jawahar-navodaya',
    title: {
      en: 'TS Jawahar Navodaya',
      gu: 'TS જવાહર નવોદય',
    },
    badge: {
      en: 'Surat District Rank 1 (2025) • 9+ Yrs Excellence',
      gu: 'સમગ્ર સુરત જિલ્લામાં ૧લો ક્રમાંક (૨૦૨૫) • ૯+ વર્ષનું પરિણામ',
    },
    description: {
      en: '9+ continuous years of stellar results! Structured guidance batch for Jawahar Navodaya entrance examinations with disciplined problem-solving practice.',
      gu: 'છેલ્લા ૯ વર્ષથી સતત શ્રેષ્ઠ પરિણામ આપતી એક માત્ર સંસ્થા! જવાહર નવોદય વિદ્યાલય પ્રવેશ પરીક્ષા માટે વ્યવસ્થિત તૈયારી અને માર્ગદર્શન.',
    },
    highlights: [
      {
        en: 'Hit Gadhiya secured 1st Rank across entire Surat District (2025)',
        gu: 'હિત ગઢીયા — સમગ્ર સુરત જિલ્લામાં પ્રથમ ક્રમાંકે (૨૦૨૫)',
      },
      {
        en: 'Focused mental ability, arithmetic and language paper practice',
        gu: 'માનસિક ક્ષમતા, અંકગણિત અને ભાષા વિભાગની વ્યવસ્થિત પ્રેક્ટિસ',
      },
      {
        en: '9+ years of proven track record and structured mock testing',
        gu: 'છેલ્લા ૯ વર્ષથી સતત શ્રેષ્ઠ પરિણામ અને મોક ટેસ્ટ પદ્ધતિ',
      },
    ],
    image: mediaMock.programNavodaya,
    isActive: true,
    sortOrder: 3,
    ctaLabel: {
      en: 'Ask About Navodaya Batch',
      gu: 'નવોદય બેચ વિશે પૂછો',
    },
    targetEnquiryProgram: 'navodaya',
  },
];
