"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Carousel from "./Carousel";
import { useLanguage } from "../contexts/LanguageContext";
import { CardGrid } from "../components/CardGrid";
import { InsightCard } from "../components/InsightCard";
import { PartnersBand } from "../components/PartnersBand";

export default function HomePage() {
  const { t, language } = useLanguage();
  const isArabic = language === "ar";

  const primaryServices = [
    {
      id: "research",
      title: t("home.why.cards.evidence.title"),
      description: t("home.why.cards.evidence.description"),
      href: "/services/research",
    },
    {
      id: "analytics",
      title: t("home.why.cards.contextual.title"),
      description: t("home.why.cards.contextual.description"),
      href: "/services/analytics",
    },
    {
      id: "strategy",
      title: t("home.why.cards.strategic.title"),
      description: t("home.why.cards.strategic.description"),
      href: "/services/strategy",
    },
    {
      id: "training",
      title: t("home.why.cards.actionable.title"),
      description: t("home.why.cards.actionable.description"),
      href: "/services/training",
    },
  ];

  const insightPreviews = [
    {
      id: "citizen-confidence",
      category: t("home.impact.interviews.title"),
      title: "GCC citizen confidence tracker 2025",
      description: "示例：跨城市长期追踪公民对服务质量与生活成本的信心指数。",
      date: "2025-01-18",
      readingTime: "8 min read",
      imageSrc: "/images/carousel2.jpeg",
    },
    {
      id: "retail-panel",
      category: t("home.impact.projects.title"),
      title: "Modern trade retail panel in KSA",
      description: "示例：结合门店审计与消费者调研，衡量促销与货架执行效果。",
      date: "2024-11-03",
      readingTime: "6 min read",
      imageSrc: "/images/carousel3.jpeg",
    },
    {
      id: "analytics-lab",
      category: t("home.impact.experience.title"),
      title: "Building an insight lab for public policy",
      description: "示例：如何在政府部门内部搭建轻量级分析实验室，提升证据使用率。",
      date: "2024-07-22",
      readingTime: "9 min read",
      imageSrc: "/images/carousel4.jpeg",
    },
  ];

  return (
    <main className="bg-background">
      {/* Hero 区：编辑型大图 + 品牌标语 */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-x-0 -top-32 h-72 bg-gradient-to-br from-brand-blue/10 via-brand-teal/5 to-transparent" />

        <div className="mx-auto max-w-7xl px-4 pt-12 pb-16 lg:pt-20 lg:pb-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* 文案列 */}
            <div className={isArabic ? "text-right" : "text-left"}>
              <span className="inline-flex items-center rounded-full bg-brand-blue/5 px-3 py-1 text-xs font-medium text-brand-blue">
                {t("home.expertise.label")}
              </span>

              <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-navy">
                {t("home.hero.title")}
              </h1>
              <p className="mt-4 max-w-xl text-sm md:text-base text-slate-600">
                {t("home.hero.subtitle")}
              </p>
              <p className="mt-2 max-w-xl text-sm md:text-base text-slate-600">
                {t("home.hero.description")}
              </p>

              {/* CTA 行：主按钮 + 次按钮 */}
              <div
                className={`mt-6 flex flex-col items-start gap-3 sm:flex-row ${
                  isArabic ? "sm:flex-row-reverse" : ""
                }`}
              >
                <Link href="/ContactUS">
                  <Button className="bg-gradient-to-r from-brand-blue to-brand-teal text-white shadow-sm hover:shadow-md hover:brightness-105">
                    {t("home.cta.discuss")}
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="border-brand-blue text-brand-navy hover:bg-brand-blue/5"
                  >
                    {t("home.cta.explore")}
                  </Button>
                </Link>
              </div>

              {/* 三个关键特性小卡片 */}
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {["research", "insight", "clarity"].map((key) => (
                  <div
                    key={key}
                    className="rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm"
                  >
                    <div className="text-xs font-semibold text-brand-navy">
                      {t(`home.features.${key}.title`)}
                    </div>
                    <div className="mt-2 text-xs text-slate-600">
                      {t(`home.features.${key}.description`)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 视觉列：编辑型大图 + 渐变蒙版 */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl bg-brand-navy text-white shadow-xl">
                <div className="absolute inset-0">
                  <Image
                    src="/images/carousel3.jpeg"
                    alt="Team reviewing insight dashboards"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/80 via-brand-blue/40 to-brand-teal/40" />
                </div>
                <div className="relative flex min-h-[260px] flex-col justify-end px-8 py-7">
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-200">
                    ICR • Evidence you can act on
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    Turning complex evidence into confident decisions for leaders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 主要服务入口：模块化卡片网格 */}
      <CardGrid
        className="bg-brand-soft-bg"
        eyebrow={t("home.why.whatWeDo")}
        title={t("home.why.title")}
        subtitle={t("home.why.description")}
        items={primaryServices}
      />

      {/* 图片轮播：编辑型真实图片，叠加深色蒙版 */}
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="overflow-hidden rounded-3xl border border-brand-soft-navy/40">
            <Carousel
              interval={4500}
              images={[
                { src: "/images/carousel.jpeg", alt: "Research team in discussion" },
                { src: "/images/carousel2.jpeg", alt: "Workshop with stakeholders" },
                { src: "/images/carousel3.jpeg", alt: "City skyline" },
                { src: "/images/carousel4.jpeg", alt: "Conference audience" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 我们的专业领域 */}
      <section className="bg-brand-soft-bg py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy">
              {t("home.expertise.title")}
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              {t("home.expertise.description")}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {["market", "advisory", "monitoring", "data"].map((key) => (
              <div
                key={key}
                className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm border border-slate-200"
              >
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue text-xs font-semibold">
                  {t(`home.expertise.${key}.title`)[0]}
                </div>
                <div className={isArabic ? "text-right" : "text-left"}>
                  <div className="text-sm font-semibold text-brand-navy">
                    {t(`home.expertise.${key}.title`)}
                  </div>
                  <p className="mt-1 text-xs text-slate-600">
                    {t(`home.expertise.${key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 为什么选择 ICR */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy">
              {t("home.why.title")}
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              {t("home.why.description")}
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.keys(t("home.why.cards")).map((key, index) => (
              <div
                key={key}
                className={`rounded-2xl border bg-white p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md ${
                  index === 1
                    ? "border-brand-blue/40 bg-brand-blue/5"
                    : "border-slate-200"
                }`}
              >
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  0{index + 1}
                </div>
                <h3 className="mt-2 text-sm font-semibold text-brand-navy">
                  {t(`home.why.cards.${key}.title`)}
                </h3>
                <p className="mt-2 text-xs text-slate-600">
                  {t(`home.why.cards.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ICR in Numbers：品牌化深色区块 */}
      <section className="relative bg-brand-navy text-white py-16">
        <div className="absolute inset-0 bg-[url('/images/globe.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/80 via-brand-navy/90 to-[#040b26]" />

        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-slate-200">
            {t("home.impact.label")}
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
            {t("home.impact.title")}
          </h2>

          <p className="mt-3 mx-auto max-w-2xl text-sm md:text-base text-slate-200">
            {t("home.impact.description")}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {["interviews", "projects", "experience"].map((key) => (
              <div key={key} className="flex flex-col items-center px-4 text-center">
                <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                  {t(`home.impact.${key}.stat`)}
                </div>
                <div className="mt-3 text-sm font-medium">
                  {t(`home.impact.${key}.title`)}
                </div>
                <p className="mt-2 max-w-xs text-xs text-slate-200">
                  {t(`home.impact.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 最新洞察预览 */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy">
                {t("home.insights.title")}
              </h2>
              <p className="mt-2 text-sm md:text-base text-slate-600">
                {t("home.insights.description")}
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-slate-500">{t("home.insights.cta_text")}</span>
              <Link
                href="/insights"
                className="text-brand-blue hover:text-brand-teal font-semibold"
              >
                {t("home.insights.cta_link")} →
              </Link>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {insightPreviews.map((item) => (
              <InsightCard key={item.id} href="/insights" {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* 客户与合作伙伴 Logo 带柔和灰底 */}
      <PartnersBand />

      {/* Why organisations trust ICR */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy">
              {t("home.trust.title")}
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              {t("home.trust.description")}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
             {["delivery", "engagements", "team"].map((key) => (
                <div key={key} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-sm font-semibold text-brand-navy">
                        {t(`home.trust.${key}.title`)}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600">
                        {t(`home.trust.${key}.description`)}
                    </p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* 最终 CTA 区块 */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-teal py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between">
          <div
            className={
              isArabic ? "md:text-right text-center" : "text-center md:text-left"
            }
          >
            <h2 className="text-2xl md:text-3xl font-semibold">
              {t("home.finalCta.title")}
            </h2>
            <p className="mt-2 mx-auto max-w-xl text-sm md:text-base text-white/90 md:mx-0">
              {t("home.finalCta.description")}
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Link href="/ContactUS">
              <Button className="bg-white text-brand-navy hover:bg-slate-100">
                {t("home.finalCta.cta")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
