import { en } from './en';
import { gu } from './gu';
import { SupportedLanguage } from '../../types/models';

export const translations = {
  en,
  gu,
} as const;

export type TranslationKey = typeof gu;

export function getTranslation(lang: SupportedLanguage): TranslationKey {
  return translations[lang] || translations.gu;
}
