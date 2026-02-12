"use client";

import React, { createContext, useContext, useState } from "react";
import { translationsCombined, type Language } from "../translations";

interface TranslateOptions {
  returnObjects?: boolean;
}

// 翻译值可以是字符串、字符串数组或嵌套对象树
export type TranslationPrimitive = string | string[] | Record<string, unknown>;

// t 函数签名：
// - 默认返回 string
// - 当传入 { returnObjects: true } 时，返回对象/数组，由调用方自行断言具体类型
export type TranslateFn = {
  (key: string): string;
  (key: string, options: TranslateOptions & { returnObjects?: false }): string;
  <T extends TranslationPrimitive>(
    key: string,
    options: TranslateOptions & { returnObjects: true },
  ): T;
};

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: TranslateFn;
  isDetecting: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language") as Language | null;
      if (saved) {
        return saved;
      }
    }
    return "en";
  });
  // 当前不再做异步探测，直接视为已完成
  const [isDetecting] = useState(false);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
      // 标记为用户手动切换语言，避免之后被地理定位覆盖
      localStorage.setItem("languageManuallySet", "true");
    }
  };

  const getNestedValue = (obj: unknown, path: string[]): unknown => {
    return path.reduce<unknown>((acc, segment) => {
      if (
        acc &&
        typeof acc === "object" &&
        segment in (acc as Record<string, unknown>)
      ) {
        return (acc as Record<string, unknown>)[segment];
      }
      return undefined;
    }, obj);
  };

  const tImpl = (key: string, options?: TranslateOptions): TranslationPrimitive => {
    const langTranslations = translationsCombined[language] ?? translationsCombined.en;
    const fallbackTranslations = translationsCombined.en;

    const segments = key.split(".");
    const pathsToTry: string[][] = [segments, segments.slice(1)];

    for (const path of pathsToTry) {
      const value =
        getNestedValue(langTranslations, path) ??
        getNestedValue(fallbackTranslations, path);

      if (value !== undefined) {
        if (typeof value === "string") {
          return value;
        }

        if (options?.returnObjects) {
          return value as TranslationPrimitive;
        }

        // 当请求的是对象/数组但未显式要求 returnObjects 时，避免渲染 [object Object]
        return key;
      }
    }

    // 若所有语言中都未找到，对应 key 直接回显，便于排查遗漏
    return key;
  };

  const t = tImpl as TranslateFn;

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, isDetecting }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
