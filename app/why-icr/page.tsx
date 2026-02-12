
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

  const successCards = t("why.success.cards", { returnObjects: true }) as Record<
    string,
    { title: string; description: string }
  >;

  return (
    <main>
      <section className="relative bg-linear-to-br from-[#041a2e] via-[#062944] to-[#041a2e] py-8">
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
          <h1 className="mx-auto max-w-3xl text-3xl font-sans leading-tight text-white md:text-5xl">
            {t("why.hero.title")}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm text-slate-300">
            {t("why.hero.description")}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/ContactUS"
              className="inline-block rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-navy"
            >
              {t("why.hero.cta_discuss")}
            </Link>

            <Link
              href="/services"
              className="inline-block rounded-md border border-brand-blue px-6 py-3 text-sm font-medium text-brand-teal hover:bg-brand-navy/10"
            >
              {t("why.hero.cta_explore")}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 space-y-16">
          <div className="grid lg:grid-cols-2 gap-4 items-center">
            <div>
              <div className="inline-block rounded-full bg-brand-blue/5 px-3 py-1 text-xs text-brand-navy mb-4">
                {t("why.partnerships.eyebrow")}
              </div>
              <h3 className="text-3xl font-semibold text-slate-900">
                {t("why.partnerships.title")}
              </h3>
              <p className="mt-4 text-slate-600">
                {t("why.partnerships.description")}
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/about1.jpeg"
                alt={t("why.partnerships.title")}
                width={860}
                height={520}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 items-center">
            <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/about2.jpeg"
                alt={t("why.marketing.title")}
                width={860}
                height={520}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block rounded-full bg-brand-blue/5 px-3 py-1 text-xs text-brand-navy mb-4">
                {t("why.marketing.eyebrow")}
              </div>
              <h3 className="text-3xl font-semibold text-slate-900">
                {t("why.marketing.title")}
              </h3>
              <p className="mt-4 text-slate-600">
                {t("why.marketing.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-linear-to-r from-[#f7fbfa] to-[#f1f8f6]">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="inline-block rounded-full bg-white/30 px-3 py-1 text-xs text-brand-navy mb-4">
            {t("why.retail.eyebrow")}
          </div>
          <h3 className="mt-6 text-3xl font-sans text-slate-900 sm:text-4xl">
            {t("why.retail.title")}
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            {t("why.retail.description")}
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-left">
            <div className="flex flex-col items-start gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand-blue/5 text-brand-blue">
                <Users className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900">
                {t("why.retail.cards.coordination.title")}
              </h4>
              <p className="text-sm text-slate-600">
                {t("why.retail.cards.coordination.description")}
              </p>
            </div>

            <div className="flex flex-col items-start gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand-blue/5 text-brand-blue">
                <Database className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900">
                {t("why.retail.cards.accuracy.title")}
              </h4>
              <p className="text-sm text-slate-600">
                {t("why.retail.cards.accuracy.description")}
              </p>
            </div>

            <div className="flex flex-col items-start gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand-blue/5 text-brand-blue">
                <BarChart2 className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900">
                {t("why.retail.cards.analytics.title")}
              </h4>
              <p className="text-sm text-slate-600">
                {t("why.retail.cards.analytics.description")}
              </p>
            </div>

            <div className="flex flex-col items-start gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand-blue/5 text-brand-blue">
                <FileText className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900">
                {t("why.retail.cards.reporting.title")}
              </h4>
              <p className="text-sm text-slate-600">
                {t("why.retail.cards.reporting.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-linear-to-r from-[#f7fbfa] to-[#f1f8f6]">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="inline-block rounded-full bg-white/30 px-3 py-1 text-xs text-brand-navy mb-6">
            {t("why.process.eyebrow")}
          </div>
          <h3 className="mt-6 text-3xl font-sans text-slate-900 sm:text-4xl">
            {t("why.process.title")}
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            {t("why.process.description")}
          </p>

          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-12 h-0.5 bg-gradient-to-r from-brand-blue/40 via-brand-blue to-brand-teal/60 hidden sm:block" />

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-6">
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-teal shadow-lg mb-6">
                  <span className="text-3xl font-bold text-white">01</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  {t("why.process.steps.step1.title")}
                </h4>
                <p className="text-sm text-slate-600">
                  {t("why.process.steps.step1.description")}
                </p>
              </div>

              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-teal shadow-lg mb-6">
                  <span className="text-3xl font-bold text-white">02</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  {t("why.process.steps.step2.title")}
                </h4>
                <p className="text-sm text-slate-600">
                  {t("why.process.steps.step2.description")}
                </p>
              </div>

              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-teal shadow-lg mb-6">
                  <span className="text-3xl font-bold text-white">03</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  {t("why.process.steps.step3.title")}
                </h4>
                <p className="text-sm text-slate-600">
                  {t("why.process.steps.step3.description")}
                </p>
              </div>

              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-teal shadow-lg mb-6">
                  <span className="text-3xl font-bold text-white">04</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  {t("why.process.steps.step4.title")}
                </h4>
                <p className="text-sm text-slate-600">
                  {t("why.process.steps.step4.description")}
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
            {t("why.industries.eyebrow")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("why.industries.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            {t("why.industries.description")}
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-center max-w-4xl mx-auto">
            {(t("why.industries.list", { returnObjects: true }) as string[]).map((industry: string, index: number) => (
                <div key={index} className="rounded-xl bg-brand-blue/5 p-6 flex flex-col items-center gap-3 hover:shadow-lg transition-shadow">
                    <div className="text-sm font-medium text-slate-300">
                        {industry.trim()}
                    </div>
                </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/ContactUS"
              className="inline-block rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-navy"
            >
              {t("why.industries.cta")}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="inline-block rounded-full bg-brand-blue/5 px-3 py-1 text-xs text-brand-navy mb-4">
            {t("why.success.eyebrow")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            {t("why.success.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            {t("why.success.description")}
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.keys(successCards).map((key, index) => {
              const card = successCards[key];
              const isHighlighted = index === 1 || index === 4;
              return (
                <div
                  key={index}
                  className={`rounded-lg p-6 shadow-sm ${isHighlighted ? 'bg-brand-blue/5 ring-1 ring-brand-blue/20 border border-brand-blue/30' : 'bg-white'}`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md ${isHighlighted ? 'bg-white text-brand-blue' : 'bg-brand-blue/5 text-brand-blue'}`}>
                        {index === 0 && <Users className="h-5 w-5" />}
                        {index === 1 && <Award className="h-5 w-5" />}
                        {index === 2 && <Zap className="h-5 w-5" />}
                        {index === 3 && <BarChart2 className="h-5 w-5" />}
                        {index === 4 && <Wrench className="h-5 w-5" />}
                        {index === 5 && <FileText className="h-5 w-5" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-900">
                        {card.title}
                      </h4>
                      <p className="mt-2 text-sm text-slate-600">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
