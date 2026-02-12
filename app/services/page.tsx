"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { CardGrid } from "../components/CardGrid";

export default function ServicesPage() {
  const { t } = useLanguage();

  const primaryServices = [
    {
      id: "research",
      title: "Research & Evidence",
      description:
        "定量与定性研究结合，支持公共政策、品牌与客户体验等关键议题。",
      href: "/services/research",
    },
    {
      id: "analytics",
      title: "Analytics & Measurement",
      description:
        "构建指标体系与分析模型，监测项目成效与行为变化。",
      href: "/services/analytics",
    },
    {
      id: "strategy",
      title: "Strategy & Advisory",
      description:
        "围绕治理结构与决策流程，将证据转化为清晰的战略路径。",
      href: "/services/strategy",
    },
    {
      id: "training",
      title: "Training & Capability",
      description:
        "通过工作坊与培训，提升团队对数据与洞察的理解与使用能力。",
      href: "/services/training",
    },
  ];

  const services = [
    {
      title: t("services.quantitative.title"),
      desc: t("services.quantitative.desc"),
    },
    {
      title: t("services.qualitative.title"),
      desc: t("services.qualitative.desc"),
      highlighted: true,
    },
    {
      title: t("services.tracking.title"),
      desc: t("services.tracking.desc"),
    },
    {
      title: t("services.retail.title"),
      desc: t("services.retail.desc"),
    },
    {
      title: t("services.market.title"),
      desc: t("services.market.desc"),
    },
    {
      title: t("services.strategic.title"),
      desc: t("services.strategic.desc"),
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero：深海军蓝背景 + 简洁标题 */}
      <section className="relative w-full overflow-hidden bg-brand-navy py-10 text-white md:py-14">
        {/* 背景装饰线条 + 蓝绿蒙版 */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute inset-0 h-full w-full opacity-20"
            viewBox="0 0 1200 400"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M0 200 C150 120 350 280 600 200 C850 120 1050 280 1200 200"
              stroke="rgba(255,255,255,0.10)"
              strokeWidth="14"
              fill="none"
            />
            <path
              d="M0 260 C200 200 400 320 600 260 C800 200 1000 320 1200 260"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="10"
              fill="none"
            />
          </svg>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-blue/35 via-transparent to-brand-teal/35" />
        </div>

        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mx-auto max-w-3xl text-3xl font-sans leading-tight text-white md:text-5xl">
            {t("services.hero.title")}
            <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-brand-blue to-brand-teal">
              {t("services.hero.subtitle")}
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-relaxed text-slate-100 md:text-base">
            {t("services.hero.description")}
          </p>
        </div>
      </section>

      {/* 模块化主服务卡片网格：Research / Analytics / Strategy / Training */}
      <CardGrid
        className="bg-white"
        eyebrow="Service overview"
        title="我们的核心服务版块"
        subtitle="从研究到分析、战略与能力建设，形成完整的一体化服务体系。"
        items={primaryServices}
      />

      {/* 传统服务能力块：沿用原有结构与文案 */}
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

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={i}
                className={`rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  s.highlighted
                    ? "border-brand-blue/50 bg-brand-blue/5"
                    : "border-slate-200"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-md bg-brand-blue/10">
                    <svg
                      className="h-5 w-5 text-brand-blue"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-brand-navy">{s.title}</h4>
                    <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 工作流程：数字步骤时间线 */}
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
                <div
                  className="pointer-events-none absolute left-11 top-10 bottom-0 w-0.75 bg-brand-blue/35"
                  aria-hidden
                />

                <div className="space-y-8 pl-6">
                  {[1, 2, 3, 4, 5].map((step) => (
                    <div key={step} className="flex items-start gap-6">
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-sm font-semibold text-white">
                          {step}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          {t(`services.process.step${step}`)}
                        </h4>
                        <p className="mt-2 text-sm text-slate-200">
                          {t(`services.process.step${step}.desc`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA 区：讨论需求 / 请求方案 */}
        <div className="flex flex-col items-center gap-4 bg-gradient-to-br from-brand-navy to-brand-soft-navy px-4 py-6 sm:flex-row sm:justify-center">
          <Link href="/ContactUS" className="w-full sm:w-auto">
            <Button className="w-full px-6 py-4 text-sm font-semibold text-white shadow-sm bg-gradient-to-r from-brand-blue to-brand-teal hover:shadow-md hover:brightness-105 sm:w-auto">
              {t("services.cta.discuss")}
            </Button>
          </Link>
          <Link href="/ContactUS" className="inline-block text-sm">
            <Button className="px-6 py-4 border border-brand-teal bg-transparent text-white hover:bg-white/10">
              {t("services.cta.request")}
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
