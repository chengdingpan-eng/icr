"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import Link from "next/link";

export default function AboutPage() {
  const { t } = useLanguage();

  const sections = [
    {
      title: t("about.positioning.title"),
      img: "/images/about1.jpeg",
      content: (
        <>
          <p className="text-sm text-slate-600 mb-3">
            {t("about.positioning.desc1")}
          </p>
          <p className="text-sm text-slate-600">
            {t("about.positioning.desc2")}
          </p>
          <p className="text-sm text-slate-600 mt-3">
            {t("about.positioning.desc3")}
          </p>
          <p className="text-sm text-slate-600 mt-3">
            {t("about.positioning.desc4")}
          </p>
        </>
      ),
    },
    {
      title: t("about.integrity.title"),
      img: "/images/about2.jpeg",
      content: (
        <>
          <p className="text-sm text-slate-600 mb-3">
            {t("about.integrity.desc1")}
          </p>
          <p className="text-sm text-slate-600">{t("about.integrity.desc2")}</p>
        </>
      ),
    },
    {
      title: t("about.experience.title"),
      img: "/images/about3.jpeg",
      content: (
        <>
          <p className="text-sm text-slate-600 mb-3">
            {t("about.experience.desc1")}
          </p>
          <p className="text-sm text-slate-600 mb-3">
            {t("about.experience.desc2")}
          </p>
          <p className="text-sm text-slate-600">
            {t("about.experience.desc3")}
          </p>
        </>
      ),
    },
    {
      title: t("about.future.title"),
      img: "/images/about4.jpeg",
      content: (
        <>
          <p className="text-sm text-slate-600 mb-3">
            {t("about.future.desc1")}
          </p>
          <p className="text-sm text-slate-600 mb-3">
            {t("about.future.desc2")}
          </p>
          <p className="text-sm text-slate-600">{t("about.future.desc3")}</p>
        </>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <section className="w-full relative bg-linear-to-br from-[#041a2e] via-[#062944] to-[#041a2e] text-white py-6">
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
              stroke="rgba(255,255,255,0.03)"
              strokeWidth="18"
              fill="none"
            />
            <path
              d="M0 260 C200 200 400 320 600 260 C800 200 1000 320 1200 260"
              stroke="rgba(255,255,255,0.025)"
              strokeWidth="14"
              fill="none"
            />
            <path
              d="M0 140 C180 80 380 200 600 140 C820 80 1020 200 1200 140"
              stroke="rgba(255,255,255,0.02)"
              strokeWidth="12"
              fill="none"
            />
          </svg>
          <div className="absolute inset-0 bg-linear-to-br from-black/20 to-black/40 pointer-events-none" />
        </div>

        <div className="mx-auto max-w-4xl px-4 text-center">
          {/* <div className="inline-block rounded-full bg-black/20 px-3 py-1 text-xs text-white/70 mb-4">
            {t("about.section.about")}
          </div> */}

          <h1 className="mx-auto max-w-4xl text-3xl font-sans leading-tight text-white md:text-5xl">
            {t("about.hero.title")}
            <br />
            <span className="text-brand-teal">{t("about.hero.subtitle")}</span>
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-200 md:text-base">
            {t("about.hero.description1")}
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-200 md:text-base">
            {t("about.hero.description2")}
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-relaxed text-slate-200 md:text-base">
            {t("about.hero.description3")}
          </p>

          <div className="mt-8">
            <Link href="/ContactUS">
              <Button className="bg-brand-blue px-6 py-3 text-sm font-semibold hover:bg-brand-navy rounded-md">
                {t("about.cta.discuss")} »
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Positioning / Principles Zig-Zag */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 space-y-16">
          {sections.map((item, i) => (
            <div
              key={i}
              className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12"
            >
              {i % 2 === 0 ? (
                <>
                  <div className="md:order-1 md:max-w-xl">
                    <h4 className="text-2xl font-semibold text-slate-900 mb-4">
                      {item.title}
                    </h4>
                    <div className="prose max-w-none">{item.content}</div>
                  </div>

                  <div className="md:order-2 flex justify-center md:justify-end">
                    <div className="rounded-xl overflow-hidden shadow-lg border border-slate-100 max-w-md w-80">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full aspect-square object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="md:order-1 flex justify-center md:justify-start">
                    <div className="rounded-xl overflow-hidden shadow-lg border border-slate-100 max-w-md w-80">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full aspect-square object-cover rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="md:order-2 md:max-w-xl">
                    <h4 className="text-2xl font-semibold text-slate-900 mb-4">
                      {item.title}
                    </h4>
                    <div className="prose max-w-none">{item.content}</div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 mb-8 bg-gradient-to-br from-[#0a1f2e] to-[#041a2e] py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="max-w-md">
              <div className="inline-block rounded-full bg-brand-blue/20 border border-brand-blue/40 px-3 py-1 text-xs text-brand-teal mb-4">
                {t("about.section.howwework")}
              </div>

              <h3 className="text-3xl font-extrabold text-white mb-4">
                {t("about.clients.title")}
              </h3>

              <p className="text-md text-slate-300">
                {t("about.clients.description")}
              </p>
              <br />
              <p className="text-md text-slate-300">
                {t("about.clients.subtitle")}
              </p>

              <div className="mt-6 flex items-center space-x-2 md:space-x-3">
                <div className="h-1 w-12 md:w-20 rounded bg-brand-teal"></div>
                <div className="h-1 w-16 md:w-24 rounded bg-slate-600"></div>
                <div className="h-1 w-16 md:w-24 rounded bg-slate-600 "></div>
                <div className="h-1 w-16 md:w-24 rounded bg-slate-600 hidden md:block"></div>
              </div>
            </div>

            <div className="relative">
              <div className="inline-block rounded-full bg-brand-blue/20 border border-brand-blue/40 px-3 py-1 text-xs text-brand-teal mb-4">
                {t("about.approach.emphasises")}
              </div>
              <div className="space-y-8 pl-6">
                <div className="flex items-start gap-8">
                  <div className="flex flex-col items-center relative z-10">
                    <div className="h-10 w-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-semibold">
                      1
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {t("about.clients.approach1")}
                    </h4>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center relative z-10">
                    <div className="h-10 w-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-semibold">
                      2
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {t("about.clients.approach2")}
                    </h4>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center relative z-10">
                    <div className="h-10 w-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-semibold">
                      3
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {t("about.clients.approach3")}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
