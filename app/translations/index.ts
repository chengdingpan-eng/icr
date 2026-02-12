
import { homeTranslations } from './homeTranslations';
import { servicesTranslations } from './servicesTranslations';
import { expertiseTranslations } from './expertiseTranslations';
import { whyTranslations } from './whyTranslations';
import { aboutTranslations } from './aboutTranslations';
import { careersTranslations } from './careersTranslations';
import { contactTranslations } from './contactTranslations';
import { privacyTranslations } from './privacyTranslations';
import { termsTranslations } from './termsTranslations';
import { insightsTranslations } from './insightsTranslations';

const allTranslations = [
  homeTranslations,
  servicesTranslations,
  expertiseTranslations,
  whyTranslations,
  aboutTranslations,
  careersTranslations,
  contactTranslations,
  privacyTranslations,
  termsTranslations,
  insightsTranslations
];

export const translations = allTranslations.reduce((acc: Record<string, unknown>, current) => {
    for (const lang in current) {
        if (Object.prototype.hasOwnProperty.call(current, lang)) {
            if (!acc[lang]) {
                acc[lang] = {};
            }
            Object.assign(acc[lang] as object, (current as any)[lang]);
        }
    }
    return acc;
}, {});
