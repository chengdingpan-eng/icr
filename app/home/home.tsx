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
      title: "Research & Evidence",
      description:
        "量化与质化研究结合，帮助你听见真实声音，从公民态度到用户体验。",
      href: "/services/research",
    },
    {
      id: "analytics",
      title: "Analytics & Measurement",
      description:
        "从数据仓库到仪表盘，构建指标体系与模型，量化政策与业务成效。",
      href: "/services/analytics",
    },
    {
      id: "strategy",
      title: "Strategy & Advisory",
      description:
        "将证据转化为清晰的战略路径，为高层决策会议与治理结构提供支持。",
      href: "/services/strategy",
    },
    {
      id: "training",
      title: "Training & Capability",
      description:
        "工作坊与能力建设项目，帮助团队掌握基于证据决策的语言与方法。",
      href: "/services/training",
    },
  ];

  const insightPreviews = [
    {
      id: "citizen-confidence",
      category: "Public sector insight",
      title: "GCC citizen confidence tracker 2025",
      description:
        "示例：跨城市长期追踪公民对服务质量与生活成本的信心指数。",
      date: "2025-01-18",
      readingTime: "8 min read",
      imageSrc: "/images/carousel2.jpeg",
    },
    {
      id: "retail-panel",
      category: "Retail & shopper",
      title: "Modern trade retail panel in KSA",
      description:
        "示例：结合门店审计与消费者调研，衡量促销与货架执行效果。",
      date: "2024-11-03",
      readingTime: "6 min read",
      imageSrc: "/images/carousel3.jpeg",
    },
    {
      id: "analytics-lab",
      category: "Analytics & data",
      title: "Building an insight lab for public policy",
      description:
        "示例：如何在政府部门内部搭建轻量级分析实验室，提升证据使用率。",
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
                <br />
                <span className="bg-clip-text text-transparent bg-linear-to-r from-brand-blue to-brand-teal">
                  {t("home.hero.subtitle")}
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-sm md:text-base text-slate-600">
                {t("home.hero.description")}
              </p>
              <p className="mt-2 max-w-xl text-sm md:text-base text-slate-600">
                {t("home.hero.description2")}
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
                    {t("home.cta.services")}
                  </Button>
                </Link>
              </div>

              {/* 三个关键特性小卡片 */}
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  "home.feature.research",
                  "home.feature.insight",
                  "home.feature.clarity",
                ].map((key) => (
                  <div
                    key={key}
                    className="rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm"
                  >
                    <div className="text-xs font-semibold text-brand-navy">
                      {t(key)}
                    </div>
                    <div className="mt-2 text-xs text-slate-600">
                      {t(`${key}.desc`)}
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
        eyebrow="核心服务版块"
        title="从研究到战略落地的一站式能力"
        subtitle="围绕公共部门与企业的关键问题，提供从证据生成、分析到决策支持与能力建设的完整链路。"
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
                  {t(`home.expertise.${key}`)[0]}
                </div>
                <div className={isArabic ? "text-right" : "text-left"}>
                  <div className="text-sm font-semibold text-brand-navy">
                    {t(`home.expertise.${key}`)}
                  </div>
                  <p className="mt-1 text-xs text-slate-600">
                    {t(`home.expertise.${key}.desc`)}
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
            {[
              "evidence",
              "contextual",
              "monitoring",
              "practical",
              "strategic",
              "actionable",
            ].map((key, index) => (
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
                  {t(`home.why.${key}`)}
                </h3>
                <p className="mt-2 text-xs text-slate-600">
                  {/* 这里保持英文描述，后续如需可接入 i18n */}
                  {index === 0 &&
                    "We ensure every decision is grounded in robust quantitative data."}
                  {index === 1 &&
                    "Qualitative depth that explains the human stories behind the numbers."}
                  {index === 2 &&
                    "Ongoing tracking so you can see change as it happens, not months later."}
                  {index === 3 &&
                    "Field-level observations translated into practical guidance for teams."}
                  {index === 4 &&
                    "Advice anchored in your strategic agenda, not generic recommendations."}
                  {index === 5 &&
                    "Clear outputs that senior decision-makers can immediately act on."}
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
            {t("home.section.impact")}
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
            {t("home.numbers.title")}
          </h2>

          <p className="mt-3 mx-auto max-w-2xl text-sm md:text-base text-slate-200">
            Research and advisory expertise since 2009 — the scale and reach of our
            work speaks for itself.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center px-4 text-center">
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                100,000+
              </div>
              <div className="mt-3 text-sm font-medium">
                {t("home.numbers.interviews")}
              </div>
              <p className="mt-2 max-w-xs text-xs text-slate-200">
                Face-to-face, telephone, and digital data collection — and counting.
              </p>
            </div>

            <div className="flex flex-col items-center px-4 text-center">
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                100+
              </div>
              <div className="mt-3 text-sm font-medium">
                {t("home.numbers.projects")}
              </div>
              <p className="mt-2 max-w-xs text-xs text-slate-200">
                Completed across multiple sectors and industries.
              </p>
            </div>

            <div className="flex flex-col items-center px-4 text-center">
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                55+
              </div>
              <div className="mt-3 text-sm font-medium">
                {t("home.numbers.experience")}
              </div>
              <p className="mt-2 max-w-xs text-xs text-slate-200">
                Across research, analysis, and strategic advisory roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 最新洞察预览 */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy">
                最新洞察与研究示例
              </h2>
              <p className="mt-2 text-sm md:text-base text-slate-600">
                以下为静态示例卡片，用于展示未来洞察内容的排版与信息层级。
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-slate-500">查看更多分析与报告</span>
              <Link
                href="/insights"
                className="text-brand-blue hover:text-brand-teal font-semibold"
              >
                前往洞察中心 →
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
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-brand-navy">
                {t("home.trust.delivery")}
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Robust research design, quality assurance, and defensible findings.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-brand-navy">
                {t("home.trust.engagement")}
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Engagement models built around governance structures and decision
                forums.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-brand-navy">
                {t("home.trust.team")}
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Public, corporate, and international experience in one senior team.
              </p>
            </div>
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
              {t("home.final.title")}
            </h2>
            <p className="mt-2 mx-auto max-w-xl text-sm md:text-base text-white/90 md:mx-0">
              {t("home.final.description")}
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Link href="/ContactUS">
              <Button className="bg-white text-brand-navy hover:bg-slate-100">
                {t("home.cta.discuss")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
