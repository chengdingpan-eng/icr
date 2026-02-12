"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { termsTranslations } from "../translations/termsTranslations";

export default function TermsPage() {
  const { t, language } = useLanguage();
  const terms =
    termsTranslations[language as keyof typeof termsTranslations]?.terms ||
    termsTranslations.en.terms;

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
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

        <div className="mx-auto max-w-3xl px-4 text-center">
          {/* <div className="inline-block rounded-full bg-black/20 px-3 py-1 text-xs text-white/70 mb-4">
            {terms.title}
          </div> */}
          <h1 className="mx-auto max-w-3xl text-3xl font-sans leading-tight text-white md:text-5xl">
            {terms.title}
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-teal">
              {terms.company}
            </span>
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-base text-slate-200">
            {terms.lastUpdated}
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="w-full bg-gradient-to-b from-[#f7fafc] to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-slate-700 leading-relaxed">
              {terms.section1.paragraph1}
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <span className="text-brand-blue font-bold text-lg">1</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                {terms.section1.title}
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">{terms.section1.paragraph1}</p>
              <p className="text-slate-600">{terms.section1.paragraph2}</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <span className="text-brand-blue font-bold text-lg">2</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                {terms.section2.title}
              </h2>
            </div>
            <div className="ml-13 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-700 mb-2">
                  {terms.section2.subtitle1}
                </h3>
                <p className="text-slate-600">{terms.section2.paragraph1}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-700 mb-2">
                  {terms.section2.subtitle2}
                </h3>
                <p className="text-slate-600">{terms.section2.paragraph2}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-700 mb-2">
                  {terms.section2.subtitle3}
                </h3>
                <p className="text-slate-600 mb-2">
                  {terms.section2.paragraph3}
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                  {terms.section2.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <span className="text-brand-blue font-bold text-lg">3</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                {terms.section3.title}
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">{terms.section3.paragraph1}</p>
              <p className="text-slate-600">{terms.section3.paragraph2}</p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <span className="text-brand-blue font-bold text-lg">4</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                {terms.section4.title}
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">{terms.section4.paragraph1}</p>
              <p className="text-slate-600">{terms.section4.paragraph2}</p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <span className="text-brand-blue font-bold text-lg">5</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                {terms.section5.title}
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">{terms.section5.paragraph1}</p>
              <p className="text-slate-600">{terms.section5.paragraph2}</p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <span className="text-brand-blue font-bold text-lg">6</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                {terms.section6.title}
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">{terms.section6.paragraph1}</p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <span className="text-brand-blue font-bold text-lg">7</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                {terms.section7.title}
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">{terms.section7.paragraph1}</p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <span className="text-brand-blue font-bold text-lg">8</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                {terms.section8.title}
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">{terms.section8.paragraph1}</p>
              <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                {terms.section8.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {terms.section8.paragraph2 && (
                <p className="text-slate-600">{terms.section8.paragraph2}</p>
              )}
            </div>
          </div>

          {/* Section 9 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <span className="text-brand-blue font-bold text-lg">9</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                {terms.section9.title}
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">{terms.section9.paragraph1}</p>
              <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                {terms.section9.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 10 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <span className="text-brand-blue font-bold text-lg">10</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                {terms.section10.title}
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">{terms.section10.paragraph1}</p>
            </div>
          </div>

          {/* Section 11 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <span className="text-brand-blue font-bold text-lg">11</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                {terms.section11.title}
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">{terms.section11.paragraph1}</p>
            </div>
          </div>

          {/* Section 12 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <span className="text-brand-blue font-bold text-lg">12</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                {terms.section12.title}
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">{terms.section12.paragraph1}</p>
              {"paragraph2" in terms.section12 &&
                terms.section12.paragraph2 && (
                  <p className="text-slate-600">{terms.section12.paragraph2}</p>
                )}
            </div>
          </div>

          {/* Section 13 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <span className="text-brand-blue font-bold text-lg">13</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                {terms.section13.title}
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">{terms.section13.paragraph1}</p>
            </div>
          </div>

          {/* Section 14 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <span className="text-brand-blue font-bold text-lg">14</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                {terms.section14.title}
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">{terms.section14.paragraph1}</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 p-6 bg-brand-blue/5 rounded-xl border border-brand-blue/20">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              {terms.section15.title}
            </h2>
            <div className="space-y-2 text-slate-700">
              <p>
                <strong>{terms.company}</strong>
              </p>
              <p>
                {terms.contact}{" "}
                <a
                  href="mailto:info@icr-me.com"
                  className="text-brand-blue hover:text-brand-navy font-medium"
                >
                  {terms.section15.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
