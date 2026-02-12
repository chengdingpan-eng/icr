
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
      content: [
        t("about.positioning.description1"),
        t("about.positioning.description2"),
        t("about.positioning.description3"),
        t("about.positioning.description4"),
      ],
    },
    {
      title: t("about.integrity.title"),
      img: "/images/about2.jpeg",
      content: [
        t("about.integrity.description1"),
        t("about.integrity.description2"),
      ],
    },
    {
      title: t("about.experience.title"),
      img: "/images/about3.jpeg",
      content: [
        t("about.experience.description1"),
        t("about.experience.description2"),
        t("about.experience.description3"),
      ],
    },
    {
      title: t("about.lookingAhead.title"),
      img: "/images/about4.jpeg",
      content: [
        t("about.lookingAhead.description1"),
        t("about.lookingAhead.description2"),
        t("about.lookingAhead.description3"),
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <section className="w-full relative bg-linear-to-br from-[#041a2e] via-[#062944] to-[#041a2e] text-white py-6">
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
          </svg>
          <div className="absolute inset-0 bg-linear-to-br from-black/20 to-black/40 pointer-events-none" />
        </div>

        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mx-auto max-w-4xl text-3xl font-sans leading-tight text-white md:text-5xl">
            {t("about.hero.title")}
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
                {t("about.hero.cta")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

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
                    <div className="prose max-w-none">
                      {item.content.map((p, idx) => (
                        <p key={idx} className="text-sm text-slate-600 mb-3">{p}</p>
                      ))}
                    </div>
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
                    <div className="prose max-w-none">
                        {item.content.map((p, idx) => (
                            <p key={idx} className="text-sm text-slate-600 mb-3">{p}</p>
                        ))}
                    </div>
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
                {t("about.howWeWork.eyebrow")}
              </div>

              <h3 className="text-3xl font-extrabold text-white mb-4">
                {t("about.howWeWork.title")}
              </h3>

              <p className="text-md text-slate-300">
                {t("about.howWeWork.description")}
              </p>
              <br />
              <p className="text-md text-slate-300">
                {t("about.howWeWork.description2")}
              </p>
            </div>

            <div className="relative">
              <div className="inline-block rounded-full bg-brand-blue/20 border border-brand-blue/40 px-3 py-1 text-xs text-brand-teal mb-4">
                {t("about.howWeWork.description3")}
              </div>
              <div className="space-y-8 pl-6">
                {t("about.howWeWork.steps", { returnObjects: true }).map((step: string, index: number) => (
                    <div key={index} className="flex items-start gap-8">
                        <div className="flex flex-col items-center relative z-10">
                        <div className="h-10 w-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-semibold">
                            {index + 1}
                        </div>
                        </div>
                        <div>
                        <h4 className="text-lg font-semibold text-white">
                            {step}
                        </h4>
                        </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
