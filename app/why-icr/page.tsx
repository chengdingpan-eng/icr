"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Users,
  Database,
  BarChart2,
  FileText,
  Award,
  Zap,
  Wrench,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Page() {
  const { t, language } = useLanguage();

  return (
    <main>
      <section className="relative bg-linear-to-br from-[#041a2e] via-[#062944] to-[#041a2e] py-8">
        {/* subtle background pattern */}
        <div className="absolute inset-0 -z-10 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 800 400"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden
          >
            <defs>
              <pattern
                id="dots"
                width="32"
                height="32"
                patternUnits="userSpaceOnUse"
              >
                <rect width="4" height="4" fill="#07323f" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="mx-auto max-w-4xl px-4 text-center">
          {/* <div className="inline-block rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200 mb-6">
            Why ICR
          </div> */}

          <h1 className="mx-auto max-w-3xl text-3xl font-sans leading-tight text-white md:text-5xl">
            {t("whyicr.hero.title")}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm text-slate-300">
            {t("whyicr.hero.description")}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/ContactUS"
              className="inline-block rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-navy"
            >
              {t("whyicr.cta.discuss")} »
            </Link>

            <Link
              href="/services"
              className="inline-block rounded-md border border-brand-blue px-6 py-3 text-sm font-medium text-brand-teal hover:bg-brand-navy/10"
            >
              {t("whyicr.cta.services")}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 space-y-16">
          <div className="grid lg:grid-cols-2 gap-4 items-center">
            <div>
              <div className="inline-block rounded-full bg-brand-blue/5 px-3 py-1 text-xs text-brand-navy mb-4">
                {t("whyicr.section.consulting")}
              </div>
              <h3 className="text-3xl font-semibold text-slate-900">
                {t("whyicr.partnerships.title")}
              </h3>
              <p className="mt-4 text-slate-600">
                {t("whyicr.partnerships.desc")}
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/WhatsApp Image 2025-12-20 at 8.39.42 PM.jpeg"
                alt={t("whyicr.partnerships.title")}
                width={860}
                height={520}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 items-center">
            <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/WhatsApp Image 2025-12-20 at 8.39.39 PM (1).jpeg"
                alt={t("whyicr.marketing.title")}
                width={860}
                height={520}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block rounded-full bg-brand-blue/5 px-3 py-1 text-xs text-brand-navy mb-4">
                {t("whyicr.section.consulting")}
              </div>
              <h3 className="text-3xl font-semibold text-slate-900">
                {t("whyicr.marketing.title")}
              </h3>
              <p className="mt-4 text-slate-600">
                {t("whyicr.marketing.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-linear-to-r from-[#f7fbfa] to-[#f1f8f6]">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="inline-block rounded-full bg-white/30 px-3 py-1 text-xs text-brand-navy mb-4">
            {t("whyicr.section.retailaudit")}
          </div>
          <h3 className="mt-6 text-3xl font-sans text-slate-900 sm:text-4xl">
            {t("whyicr.retail.title")}
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            {t("whyicr.retail.desc")}
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-left">
            <div className="flex flex-col items-start gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand-blue/5 text-brand-blue">
                <Users className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900">
                {t("whyicr.agency.title")}
              </h4>
              <p className="text-sm text-slate-600">
                {t("whyicr.agency.desc")}
              </p>
            </div>

            <div className="flex flex-col items-start gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand-blue/5 text-brand-blue">
                <Database className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900">
                {t("whyicr.accuracy.title")}
              </h4>
              <p className="text-sm text-slate-600">
                {t("whyicr.accuracy.desc")}
              </p>
            </div>

            <div className="flex flex-col items-start gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand-blue/5 text-brand-blue">
                <BarChart2 className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900">
                {t("whyicr.analytics.title")}
              </h4>
              <p className="text-sm text-slate-600">
                {t("whyicr.analytics.desc")}
              </p>
            </div>

            <div className="flex flex-col items-start gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand-blue/5 text-brand-blue">
                <FileText className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900">
                {t("whyicr.reporting.title")}
              </h4>
              <p className="text-sm text-slate-600">
                {t("whyicr.reporting.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-linear-to-r from-[#f7fbfa] to-[#f1f8f6]">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="inline-block rounded-full bg-white/30 px-3 py-1 text-xs text-brand-navy mb-6">
            {t("whyicr.section.process")}
          </div>
          <h3 className="mt-6 text-3xl font-sans text-slate-900 sm:text-4xl">
            {t("whyicr.process.title")}
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            {t("whyicr.process.description")}
          </p>

          <div className="relative mt-16">
            {/* Connecting line - hidden on mobile */}
            <div className="absolute left-0 right-0 top-12 h-0.5 bg-gradient-to-r from-brand-blue/40 via-brand-blue to-brand-teal/60 hidden sm:block" />

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-6">
              {/* Step 1 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-teal shadow-lg mb-6">
                  <span className="text-3xl font-bold text-white">01</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  {t("whyicr.process.step1").replace("01 ", "")}
                </h4>
                <p className="text-sm text-slate-600">
                  {t("whyicr.process.step1.desc")}
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-teal shadow-lg mb-6">
                  <span className="text-3xl font-bold text-white">02</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  {t("whyicr.process.step2").replace("02 ", "")}
                </h4>
                <p className="text-sm text-slate-600">
                  {t("whyicr.process.step2.desc")}
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-teal shadow-lg mb-6">
                  <span className="text-3xl font-bold text-white">03</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  {t("whyicr.process.step3").replace("03 ", "")}
                </h4>
                <p className="text-sm text-slate-600">
                  {t("whyicr.process.step3.desc")}
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-teal shadow-lg mb-6">
                  <span className="text-3xl font-bold text-white">04</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  {t("whyicr.process.step4").replace("04 ", "")}
                </h4>
                <p className="text-sm text-slate-600">
                  {t("whyicr.process.step4.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#071827] relative">
        <div className="absolute inset-0 -z-10 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 800 400"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden
          >
            <defs>
              <pattern
                id="dots2"
                width="36"
                height="36"
                patternUnits="userSpaceOnUse"
              >
                <rect width="4" height="4" fill="#062633" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots2)" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-4 text-center text-white">
          <div className="inline-block rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200 mb-4">
            {t("whyicr.section.industries")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("whyicr.industries.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            {t("whyicr.industries.description")}
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-center max-w-4xl mx-auto">
            <div className="rounded-xl bg-brand-blue/5 p-6 flex flex-col items-center gap-3 hover:shadow-lg transition-shadow">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg text-brand-blue">
                <svg
                  className="h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 22V12h6v10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-sm font-medium text-slate-900">
                {t("whyicr.industry.consumer")}
              </div>
            </div>

            <div className="rounded-xl bg-brand-blue/5 p-6 flex flex-col items-center gap-3 hover:shadow-lg transition-shadow">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg text-brand-blue">
                <svg
                  className="h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M22 12h-4l-3 9L9 3l-3 9H2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-sm font-medium text-slate-900">
                {t("whyicr.industry.healthcare")}
              </div>
            </div>

            <div className="rounded-xl bg-brand-blue/5 p-6 flex flex-col items-center gap-3 hover:shadow-lg transition-shadow">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg text-brand-blue">
                <svg
                  className="h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="8"
                    rx="2"
                    ry="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="2"
                    y="14"
                    width="20"
                    height="8"
                    rx="2"
                    ry="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="6"
                    y1="6"
                    x2="6.01"
                    y2="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="6"
                    y1="18"
                    x2="6.01"
                    y2="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-sm font-medium text-slate-900">
                {t("whyicr.industry.telecom")}
              </div>
            </div>

            <div className="rounded-xl bg-brand-blue/5 p-6 flex flex-col items-center gap-3 hover:shadow-lg transition-shadow">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg text-brand-blue">
                <svg
                  className="h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M18 6L6 18M8 6h10v10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="7"
                    cy="17"
                    r="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="17"
                    cy="7"
                    r="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-sm font-medium text-slate-900">
                {t("whyicr.industry.automotive")}
              </div>
            </div>

            <div className="rounded-xl bg-brand-blue/5 p-6 flex flex-col items-center gap-3 hover:shadow-lg transition-shadow">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg text-brand-blue">
                <svg
                  className="h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <polygon
                    points="23 7 16 12 23 17 23 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="1"
                    y="5"
                    width="15"
                    height="14"
                    rx="2"
                    ry="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-sm font-medium text-slate-900">
                {t("whyicr.industry.media")}
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/ContactUS"
              className="inline-block rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-navy"
            >
              {t("whyicr.cta.discuss")} »
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="inline-block rounded-full bg-brand-blue/5 px-3 py-1 text-xs text-brand-navy mb-4">
            {t("whyicr.section.success")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            {t("whyicr.success.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            {t("whyicr.success.description")}
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div
              className="rounded-lg bg-white p-6 shadow-sm"
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-brand-blue/5 text-brand-blue">
                  <Users className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-slate-900">
                    {t("whyicr.success.relationships")}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600">
                    {t("whyicr.success.item3")}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="rounded-lg bg-brand-blue/5 p-6 shadow-md ring-1 ring-brand-blue/20 border border-brand-blue/30"
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-white text-brand-blue">
                  <Award className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-slate-900">
                    {t("whyicr.success.expertise")}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600">
                    {t("whyicr.success.item2")}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="rounded-lg bg-white p-6 shadow-sm"
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-brand-blue/5 text-brand-blue">
                  <Zap className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-slate-900">
                    {t("whyicr.success.innovation")}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600">
                    {t("whyicr.success.item1")}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="rounded-lg bg-white p-6 shadow-sm"
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-brand-blue/5 text-brand-blue">
                  <BarChart2 className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-slate-900">
                    {t("whyicr.success.tools")}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600">
                    {t("whyicr.success.item5")}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="rounded-lg bg-brand-blue/5 p-6 shadow-md ring-1 ring-brand-blue/20 border border-brand-blue/30"
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-white text-brand-blue">
                  <Wrench className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-slate-900">
                    {t("whyicr.success.process")}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600">
                    {t("whyicr.success.item4")}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="rounded-lg bg-white p-6 shadow-sm"
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-brand-blue/5 text-brand-blue">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-slate-900">
                    {t("whyicr.success.talent")}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600">
                    ICR teams blend marketing experience with core research
                    skill — delivering clarity at every stage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
