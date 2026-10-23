import { Branch } from '../../types/models';
import { mediaMock } from './media.mock';
import { siteConfig } from '../../config/site-config';

export const branchesMock: Branch[] = [
  {
    id: 'branch-mota-varachha',
    name: {
      en: 'TS Preschool — Mota Varachha',
      gu: 'TS પ્રિસ્કૂલ — મોટા વરાછા',
    },
    subtitle: {
      en: 'Playgroup, Nursery & Play Area',
      gu: 'પ્લે ગ્રુપ, નર્સરી અને પ્લે એરિયા',
    },
    address: {
      en: siteConfig.branches.branch1.addressEn,
      gu: siteConfig.branches.branch1.addressGu,
    },
    mapUrl: null,
    mapDirectionsUrl: siteConfig.branches.branch1.directionsUrl,
    isProvisionalMap: false,
    phone: siteConfig.branches.branch1.phone,
    whatsapp: siteConfig.contact.whatsapp,
    openingHours: {
      en: 'Morning batches for preschool, playgroup & activities',
      gu: 'પ્રિસ્કૂલ, પ્લે ગ્રુપ અને પ્રવૃત્તિઓ માટે સવારની બેચ',
    },
    image: mediaMock.branchMotaVarachha,
    isActive: true,
    sortOrder: 1,
  },
  {
    id: 'branch-nana-varachha',
    name: {
      en: 'TS Academy — Nana Varachha (Sarthana Jakat Naka)',
      gu: 'TS એકેડેમી — નાના વરાછા (સરથાણા જકાતનાકા)',
    },
    subtitle: {
      en: 'Standards 1–9 & Jawahar Navodaya Batches',
      gu: 'ધોરણ ૧ થી ૯ અને જવાહર નવોદય બેચ',
    },
    address: {
      en: siteConfig.branches.branch2.addressEn,
      gu: siteConfig.branches.branch2.addressGu,
    },
    mapUrl: null,
    mapDirectionsUrl: siteConfig.branches.branch2.directionsUrl,
    isProvisionalMap: true, // Marked provisional per owner note
    phone: siteConfig.branches.branch2.phone,
    whatsapp: siteConfig.contact.whatsapp,
    openingHours: {
      en: 'Afternoon & evening academic coaching & entrance batches',
      gu: 'બપોર અને સાંજના શૈક્ષણિક કોચિંગ અને પ્રવેશ પરીક્ષા વર્ગો',
    },
    image: mediaMock.branchNanaVarachha,
    isActive: true,
    sortOrder: 2,
  },
];
