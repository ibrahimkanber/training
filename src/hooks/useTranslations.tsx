import {translations_en, translations_de} from '../locales';
import {useMainContext} from '../providers/MainProvider';
translations_en;
translations_de;
export const useTranslations = (keys: (keyof typeof translations_en)[]) => {
  const {lang} = useMainContext();
  return keys.map(el => {
    if (lang === 'en') {
      return translations_en[el];
    }
    return translations_de[el];
  });
};
