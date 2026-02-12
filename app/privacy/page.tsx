
"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function PrivacyPage() {
  const { t } = useLanguage();
  
  const sections = t("privacy.sections", { returnObjects: true }) as Record<string, {
    title: string;
    content?: string;
    footer?: string;
    subsections?: {
        title: string;
        content: string;
        list?: string[];
    }[];
    list?: string[];
  }>;

  const section12 = t("privacy.sections.section12", {returnObjects: true}) as {
    title: string,
    content: string,
    footer: string
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="w-full relative bg-linear-to-br from-[#041a2e] via-[#062944] to-[#041a2e] text-white py-6">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="mx-auto max-w-3xl text-3xl font-sans leading-tight text-white md:text-5xl">
            {t("privacy.hero.title")}
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-teal">
              {t("privacy.hero.subtitle")}
            </span>
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-base text-slate-200">
            {t("privacy.hero.date")}
          </p>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-[#f7fafc] to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-12">
            <p className="text-slate-700 leading-relaxed">{t("privacy.hero.description")}</p>
          </div>

          {Object.values(sections).map((section, index) => (
            <div key={index} className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                  <span className="text-brand-blue font-bold text-lg">{index + 1}</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-800">{section.title}</h2>
              </div>
              <div className="ml-13 space-y-4">
                {section.content && <p className="text-slate-600">{section.content}</p>}
                {section.footer && <p className="text-sm text-slate-500 mt-2">{section.footer}</p>}
                {section.subsections && section.subsections.map((sub, subIdx) => (
                    <div key={subIdx}>
                        <h3 className="text-lg font-semibold text-slate-700 mt-4">{sub.title}</h3>
                        <p className="text-slate-600">{sub.content}</p>
                        {sub.list && (
                            <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                                {sub.list.map((li, i) => <li key={i}>{li}</li>)}
                            </ul>
                        )}
                    </div>
                ))}
                {section.list && (
                    <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                        {section.list.map((li, i) => <li key={i}>{li}</li>)}
                    </ul>
                )}
              </div>
            </div>
          ))}
          
           <div className="mt-12 p-6 bg-brand-blue/5 rounded-xl border border-brand-blue/20">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              {section12.title}
            </h2>
            <div className="space-y-2 text-slate-700">
              <p>
                <strong>{section12.content.split('\n')[0]}</strong>
              </p>
              <p>
                <a
                  href={`mailto:${section12.content.split('\n')[1]}`}
                  className="text-brand-blue hover:text-brand-navy font-medium"
                >
                  {section12.content.split('\n')[1]}
                </a>
              </p>
              <p className="text-sm text-slate-600 mt-2">
                {section12.footer}
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
