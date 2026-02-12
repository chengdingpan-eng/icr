"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();

  const expertiseItems = [
    {
      title: t("expertise.sections.governmental.title"),
      img: "/images/expertise/expersite_2.jpeg",
      content: (
        <>
          <p className="mb-4 text-sm text-slate-600">
            {t("expertise.sections.governmental.description1")}
          </p>
          <p className="mb-4 text-sm text-slate-600">
            {t("expertise.sections.governmental.description2")}
          </p>

          <h5 className="mt-4 text-sm font-semibold text-slate-900">
            {t("expertise.sections.governmental.includes_title")}
          </h5>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
            {t("expertise.sections.governmental.includes_list").split(',').map((item: string, index: number) => (
                <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: t("expertise.sections.corporate.title"),
      img: "/images/expertise/expersite_3.jpeg",
      content: (
        <>
          <p className="mb-4 text-sm text-slate-600">
            {t("expertise.sections.corporate.description1")}
          </p>
          <p className="mb-4 text-sm text-slate-600">
            {t("expertise.sections.corporate.description2")}
          </p>

          <h5 className="mt-4 text-sm font-semibold text-slate-900">
            {t("expertise.sections.corporate.includes_title")}
          </h5>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
             {t("expertise.sections.corporate.includes_list").split(',').map((item: string, index: number) => (
                <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: t("expertise.sections.methodological.title"),
      img: "/images/expertise/expersite_4.jpeg",
      content: (
        <>
          <p className="mb-4 text-sm text-slate-600">
            {t("expertise.sections.methodological.description1")}
          </p>
          <p className="mb-4 text-sm text-slate-600">
            {t("expertise.sections.methodological.description2")}
          </p>

          <h5 className="mt-4 text-sm font-semibold text-slate-900">
            {t("expertise.sections.methodological.includes_title")}
          </h5>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
             {t("expertise.sections.methodological.includes_list").split(',').map((item: string, index: number) => (
                <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: t("expertise.sections.ai.title"),
      img: "/images/expertise/expersite_1.jpeg",
      content: (
        <>
          <p className="mb-4 text-sm text-slate-600">
            {t("expertise.sections.ai.description1")}
          </p>
          <p className="mb-4 text-sm text-slate-600">
            {t("expertise.sections.ai.description2")}
          </p>

          <h5 className="mt-4 text-sm font-semibold text-slate-900">
            {t("expertise.sections.ai.includes_title")}
          </h5>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
             {t("expertise.sections.ai.includes_list").split(',').map((item: string, index: number) => (
                <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: t("expertise.sections.decision.title"),
      img: "/images/expertise/expersite_5.jpeg",
      content: (
        <>
          <p className="mb-4 text-sm text-slate-600">
            {t("expertise.sections.decision.description1")}
          </p>
          <p className="mb-4 text-sm text-slate-600">
            {t("expertise.sections.decision.description2")}
          </p>

          <h5 className="mt-4 text-sm font-semibold text-slate-900">
            {t("expertise.sections.decision.includes_title")}
          </h5>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
             {t("expertise.sections.decision.includes_list").split(',').map((item: string, index: number) => (
                <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: t("expertise.sections.closing.title"),
      img: "/images/expertise/expersite_6.jpeg",
      content: (
        <>
          <p className="mb-4 text-sm text-slate-600">
            {t("expertise.sections.closing.description1")}
          </p>
          <p className="text-sm text-slate-600">
            {t("expertise.sections.closing.description2")}
          </p>

          <h5 className="mt-4 text-sm font-semibold text-slate-900">
            {t("expertise.sections.closing.includes_title")}
          </h5>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
             {t("expertise.sections.closing.includes_list").split(',').map((item: string, index: number) => (
                <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero：深海军蓝背景 + 渐变标题 */}
      <section className="w-full relative bg-brand-navy text-white py-8 md:py-12">
        {/* decorative pattern */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute inset-0 h-full w-full opacity-15"
            viewBox="0 0 1200 400"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M0 200 C150 120 350 280 600 200 C850 120 1050 280 1200 200"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="18"
              fill="none"
            />
            <path
              d="M0 260 C200 200 400 320 600 260 C800 200 1000 320 1200 260"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="14"
              fill="none"
            />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/35 via-transparent to-brand-teal/35 pointer-events-none" />
        </div>

        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans leading-tight text-white">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-brand-blue to-brand-teal">
              {t("expertise.hero.title")}
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-4xl text-sm leading-relaxed text-slate-100 md:text-base">
            {t("expertise.hero.description1")}
          </p>
          <p className="mx-auto mt-2 max-w-4xl text-sm leading-relaxed text-slate-100 md:text-base">
            {t("expertise.hero.description2")}
          </p>
          <p className="mx-auto mt-2 max-w-4xl text-sm leading-relaxed text-slate-100 md:text-base">
            {t("expertise.hero.description3")}
          </p>

          <div className="mt-8">
            <Link href="/ContactUS">
              <Button className="rounded-md bg-gradient-to-r from-brand-blue to-brand-teal px-6 py-3 text-sm font-semibold text-white shadow-sm hover:shadow-md hover:brightness-105">
                {t("expertise.hero.cta")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise list (zig-zag) */}
      <section className="bg-brand-soft-bg py-20">
        <div className="mx-auto max-w-5xl px-4 space-y-16">
          {expertiseItems.map((item, i) => (
            <div
              key={i}
              className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12"
            >
              {i % 2 === 0 ? (
                <>
                  <div className="md:order-1 md:max-w-xl">
                    <h4 className="mb-4 text-2xl font-semibold text-brand-navy">
                      {item.title}
                    </h4>
                    <div className="prose max-w-none text-sm text-slate-700">
                      {item.content}
                    </div>
                  </div>

                  <div className="md:order-2 flex justify-center md:justify-end">
                    <div className="w-80 max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full aspect-square object-cover"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="md:order-1 flex justify-center md:justify-start">
                    <div className="w-80 max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full aspect-square object-cover"
                      />
                    </div>
                  </div>

                  <div className="md:order-2 md:max-w-xl">
                    <h4 className="mb-4 text-2xl font-semibold text-brand-navy">
                      {item.title}
                    </h4>
                    <div className="prose max-w-none text-sm text-slate-700">
                      {item.content}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 底部 CTA 区块 */}
      <section className="relative w-full bg-gradient-to-br from-brand-navy via-brand-navy to-brand-soft-navy text-white py-16">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute inset-0 h-full w-full opacity-10"
            viewBox="0 0 1200 400"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M0 200 C150 120 350 280 600 200 C850 120 1050 280 1200 200"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="18"
              fill="none"
            />
            <path
              d="M0 260 C200 200 400 320 600 260 C800 200 1000 320 1200 260"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="12"
              fill="none"
            />
          </svg>
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans">
            {t("expertise.finalCta.title")}
          </h2>

          <div className="mt-8">
            <Link href="/services">
              <Button className="bg-gradient-to-r from-brand-blue to-brand-teal px-6 py-3 text-sm font-semibold text-white shadow-sm hover:shadow-md hover:brightness-105">
                {t("expertise.finalCta.cta")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
