import { homeTranslations } from "./homeTranslations";
import { servicesTranslations } from "./servicesTranslations";
import { expertiseTranslations } from "./expertiseTranslations";
import { whyTranslations } from "./whyTranslations";
import { aboutTranslations } from "./aboutTranslations";
import { careersTranslations } from "./careersTranslations";
import { contactTranslations } from "./contactTranslations";
import { privacyTranslations } from "./privacyTranslations";
import { termsTranslations } from "./termsTranslations";
import { insightsTranslations } from "./insightsTranslations";

// 支持的语言枚举
export type Language = "en" | "zh" | "ar";

// 单个语言下的翻译树（嵌套对象结构）
type TranslationTree = Record<string, unknown>;

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
  insightsTranslations,
];

/**
 * 将各模块的翻译按语言维度合并为一个大对象：
 * translationsCombined["en" | "zh" | "ar"] = 扁平合并后的多页面文案树。
 */
export const translationsCombined: Record<Language, TranslationTree> = allTranslations.reduce(
  (acc, current) => {
    (Object.keys(current) as Language[]).forEach((lang) => {
      if (!acc[lang]) {
        acc[lang] = {};
      }
      Object.assign(acc[lang], current[lang] || {});
    });
    return acc;
  },
  {
    en: {},
    zh: {},
    ar: {},
  } as Record<Language, TranslationTree>,
);

// 兼容之前直接从该模块导入 translations 的写法
export const translations = translationsCombined;
