"use client";

// import Link from "next/link";
import { BarChart2, LineChart, Target, GraduationCap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { CardGrid } from "../components/CardGrid";
import { HeroSection } from "../components/HeroSection";
import { GradientCTAButton } from "../components/GradientCTAButton";
import { MethodTimeline, type MethodStep } from "../components/MethodTimeline";

export default function ServicesPage() {
  const { t, language } = useLanguage();
  const isArabic = language === "ar";

  const primaryServices = [
    {
      id: "research",
      title: t("services.cards.quantitative.title"),
      description: t("services.cards.quantitative.description"),
      href: "/services/research",
      icon: <BarChart2 className="h-4 w-4" />,
    },
    {
      id: "analytics",
      title: t("services.cards.qualitative.title"),
      description: t("services.cards.qualitative.description"),
      href: "/services/analytics",
      icon: <LineChart className="h-4 w-4" />,
    },
    {
      id: "strategy",
      title: t("services.cards.tracking.title"),
      description: t("services.cards.tracking.description"),
      href: "/services/strategy",
      icon: <Target className="h-4 w-4" />,
    },
    {
      id: "training",
      title: t("services.cards.retail.title"),
      description: t("services.cards.retail.description"),
      href: "/services/training",
      icon: <GraduationCap className="h-4 w-4" />,
    },
  ];

  const otherServices = [
    {
      title: t("services.cards.market.title"),
      desc: t("services.cards.market.description"),
    },
    {
      title: t("services.cards.consulting.title"),
      desc: t("services.cards.consulting.description"),
    },
  ];

  const processSteps: MethodStep[] = [1, 2, 3, 4, 5].map((step) => ({
    label: `0${step}`,
    title: t(`services.process.steps.step${step}.title`),
    description: t(`services.process.steps.step${step}.description`),
  }));

  return (
    <main className="min-h-screen bg-background">
      {/* Hero：编辑型大图 + 渐变遮罩 + 双 CTA */}
      <HeroSection
        title={t("services.hero.title")}
        description={t("services.hero.description")}
        backgroundImageSrc="/images/services/hero_research.png"
        align="center"
        childrenBelow={
          <div
            className={`mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center ${
              isArabic ? "sm:flex-row-reverse" : ""
            }`}
          >
            <GradientCTAButton href="/ContactUS">
              {t("services.cta.discuss")}
            </GradientCTAButton>
            <GradientCTAButton href="/ContactUS" variant="outline">
              {t("services.cta.request")}
            </GradientCTAButton>
          </div>
        }
      />

      {/* 主服务卡片网格：Research / Analytics / Strategy / Training */}
      <CardGrid
        className="bg-white"
        eyebrow="Service overview"
        title={t("services.why.title")}
        subtitle={t("services.why.description")}
        items={primaryServices}
      />

      {/* 传统能力与扩展服务 + 方法论时间线 + 底部 CTA 横幅 */}
      <section className="w-full bg-brand-soft-bg">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="mt-2 text-3xl font-sans text-brand-navy sm:text-4xl">
              {t("services.why.title")}
            </h3>

            <p className="mt-3 text-sm text-slate-600">
              {t("services.why.description")}
            </p>
          </div>

          {/* 传统服务能力卡片 */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {primaryServices.map((item, index) => (
              <div
                key={item.id}
                className={`rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  index === 1
                    ? "border-brand-blue/50 bg-brand-blue/5"
                    : "border-slate-200"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-md bg-brand-blue/10 text-brand-blue">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-brand-navy">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {otherServices.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <h4 className="text-sm font-semibold text-brand-navy">
                  {s.title}
                </h4>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 方法论时间线 + 底部 CTA 横幅 */}
        <section className="mt-12 bg-gradient-to-br from-brand-navy to-brand-soft-navy py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid items-start gap-12 md:grid-cols-2">
              <div className="max-w-md">
                <h3 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
                  {t("services.process.title")}
                </h3>

                <p className="text-sm text-slate-200">
                  {t("services.process.description")}
                </p>

                <div className="mt-6 flex items-center space-x-2 md:space-x-3">
                  <div className="h-1 w-12 rounded bg-brand-teal md:w-20" />
                  <div className="h-1 w-16 rounded bg-slate-600 md:w-24" />
                  <div className="h-1 w-16 rounded bg-slate-600 md:w-24" />
                  <div className="hidden h-1 w-16 rounded bg-slate-600 md:block md:w-24" />
                </div>
              </div>

              <div className="relative">
                <MethodTimeline steps={processSteps} tone="dark" className="pl-4" />
              </div>
            </div>

            {/* 底部品牌 CTA：讨论需求 / 请求方案 */}
            <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl bg-black/10 px-4 py-6 sm:flex-row sm:justify-between">
              <div className="text-center text-white sm:text-left">
                <h4 className="text-lg font-semibold">
                  {t("services.cta.discuss")}
                </h4>
                <p className="mt-1 text-sm text-slate-200">
                  {t("services.process.description")}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <GradientCTAButton href="/ContactUS">
                  {t("services.cta.discuss")}
                </GradientCTAButton>
                <GradientCTAButton href="/ContactUS" variant="outline">
                  {t("services.cta.request")}
                </GradientCTAButton>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
