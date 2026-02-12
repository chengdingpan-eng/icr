"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../translations";
import { detectLanguageFromGeolocation } from "../utils/detectLanguage";

type Language = "en" | "zh" | "ar";

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isDetecting: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [isDetecting, setIsDetecting] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    async function initializeLanguage() {
      try {
        const savedLanguage = localStorage.getItem(
          "language"
        ) as Language | null;
        const manuallySet =
          localStorage.getItem("languageManuallySet") === "true";

        if (savedLanguage && manuallySet) {
          setLanguage(savedLanguage);
          setIsDetecting(false);
          return;
        }

        const cachedLanguage = localStorage.getItem(
          "detectedLanguage"
        ) as Language | null;
        const locationGranted =
          localStorage.getItem("locationPermissionGranted") === "true";

        if (cachedLanguage && locationGranted) {
          setLanguage(cachedLanguage);
          localStorage.setItem("language", cachedLanguage);
          setIsDetecting(false);
          return;
        }

        const detectedLang = await detectLanguageFromGeolocation();
        setLanguage(detectedLang);
        localStorage.setItem("language", detectedLang);
        localStorage.setItem("detectedLanguage", detectedLang);
      } catch (error) {
        console.error("Error initializing language:", error);
        setLanguage("en");
      } finally {
        setIsDetecting(false);
      }
    }

    initializeLanguage();
  }, [isMounted]);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
      localStorage.setItem("languageManuallySet", "true");
    }
  };

  const t = (key: string): string => {
    const langTranslations = translations[language] || translations.en;
    const result = key.split('.').reduce((obj, k) => obj && obj[k], langTranslations);
    return result || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, t, isDetecting }}
    >
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
