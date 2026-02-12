
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { InsightCard } from "../components/InsightCard";
import { GradientCTAButton } from "../components/GradientCTAButton";
import { HeroSection } from "../components/HeroSection";
import { useLanguage } from "../contexts/LanguageContext";

const TAGS_EN = ["All", "Research Insights", "Analytical Reports", "News & Updates"];
const TAGS_ZH = ["全部", "研究洞察", "分析报告", "新闻动态"];
const TAGS_AR = ["الكل", "رؤى بحثية", "تقارير تحليلية", "الأخبار والتحديثات"];


const INSIGHTS = [
  {
    id: "citizen-confidence",
    category: {
        en: "Research Insights",
        zh: "研究洞察",
        ar: "رؤى بحثية",
    },
    title: "GCC citizen confidence tracker 2025",
    description:
      "示例卡片：长期追踪公民对公共服务、生活成本与未来预期的信心指数。",
    date: "2025-01-18",
    readingTime: "8 min read",
    imageSrc: "/images/carousel2.jpeg",
    tags: ["All", "Research Insights", "全部", "研究洞察", "الكل", "رؤى بحثية"],
  },
  {
    id: "retail-panel",
    category: {
        en: "Analytical Reports",
        zh: "分析报告",
        ar: "تقارير تحليلية",
    },
    title: "Modern trade retail panel in KSA",
    description:
      "示例卡片：结合门店审计与消费者调研，评估促销执行与货架表现。",
    date: "2024-11-03",
    readingTime: "6 min read",
    imageSrc: "/images/carousel3.jpeg",
    tags: ["All", "Analytical Reports", "全部", "分析报告", "الكل", "تقارير تحليلية"],
  },
  {
    id: "icr-news",
    category: {
        en: "News & Updates",
        zh: "新闻动态",
        ar: "الأخبار والتحديثات",
    },
    title: "ICR joins regional public opinion research network",
    description:
      "示例卡片：仅作为布局占位，展示新闻类内容在列表中的位置与样式。",
    date: "2024-03-15",
    readingTime: "3 min read",
    imageSrc: "/images/globe1.jpg",
    tags: ["All", "News & Updates", "全部", "新闻动态", "الكل", "الأخبار والتحديثات"],
  },
];

export default function InsightsPage() {
    const { t, language } = useLanguage();
    const TAGS = language === 'zh' ? TAGS_ZH : language === 'ar' ? TAGS_AR : TAGS_EN;
    const [activeTag, setActiveTag] = useState(TAGS[0]);

  const filtered = useMemo(
    () =>
      activeTag === TAGS[0]
        ? INSIGHTS
        : INSIGHTS.filter((item) => item.tags.includes(activeTag)),
    [activeTag, TAGS]
  );

  return (
    <main className="min-h-screen bg-background">
      <HeroSection
        backgroundImageSrc="/images/carousel4.jpeg"
        eyebrow="Insights & News"
        title={t("insights.hero.title")}
        highlighted={t("insights.hero.subtitle")}
        align="center"
      />

      <section className="bg-white pb-4 pt-2">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                  activeTag === tag
                    ? "border-brand-blue bg-brand-blue text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-brand-blue/60 hover:text-brand-blue"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-soft-bg py-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <InsightCard
                key={item.id}
                href="#" 
                category={item.category[language]}
                title={item.title}
                description={item.description}
                date={item.date}
                readingTime={item.readingTime}
                imageSrc={item.imageSrc}
              />
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 text-sm">
            <GradientCTAButton variant="outline" className="px-6">
              {t('insights.cta.load_more')}
            </GradientCTAButton>
          </div>

          <div className="mt-8 flex items-center justify-between text-xs text-slate-500">
            <Link
              href="/"
              className="font-semibold text-brand-blue hover:text-brand-teal"
            >
              {t('insights.cta.back_home')}
            </Link>
            <Link
              href="/services"
              className="font-semibold text-brand-blue hover:text-brand-teal"
            >
              {t('insights.cta.view_services')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
