"use client";

import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Navbar() {
  const { language, changeLanguage, t } = useLanguage();

  const languages = [
    { code: "en" as const, label: t("lang.english"), flag: "🇬🇧" },
    { code: "zh" as const, label: t("lang.chinese"), flag: "🇨🇳" },
    { code: "ar" as const, label: t("lang.arabic"), flag: "🇸🇦" },
  ];

  return (
    <nav>
      {/* ...existing JSX... */}
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`w-full text-left px-4 py-2 hover:bg-slate-100 ${
            language === lang.code ? "bg-brand-blue/5 text-brand-blue" : ""
          }`}
        >
          <span className="mr-2">{lang.flag}</span>
          {lang.label}
        </button>
      ))}
      {/* ...existing JSX... */}
    </nav>
  );
}
