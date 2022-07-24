import {translations_en, translations_de} from '../locales';
import {useMainContext} from '../providers/MainProvider';
translations_en;
translations_de;

export enum LanguageOptions {
  EN = 'en',
  DE = 'de',
}
export const useTranslations = (keys: (keyof typeof translations_en)[]) => {
  const {lang} = useMainContext();
  return keys.map(el => {
    if (lang === LanguageOptions.EN) {
      return translations_en[el];
    }
    return translations_de[el];
  });
};
