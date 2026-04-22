"use client";

import Link from "next/link";
import Image from "next/image";
import { Users, Database, BarChart2, FileText, Award, Zap } from "lucide-react";
import { GradientCTAButton } from "../components/GradientCTAButton";
import { MethodTimeline, type MethodStep } from "../components/MethodTimeline";

const SUCCESS_FACTORS = [
  {
    icon: Users,
    title: "本地团队 + 国际视角",
    description:
      "团队成员兼具本地市场深度与在国际研究机构工作的经验，既懂方法论，也懂区域语境与实际执行。",
  },
  {
    icon: Database,
    title: "严谨的数据与样本质量",
    description:
      "从样本设计到数据清洗，都遵循国际研究标准，并结合本地经验处理难以覆盖的人群与场景。",
    imageSrc: "/images/why-icr/data_quality_dashboard.jpg",
  },
  {
    icon: BarChart2,
    title: "可视化与建模能力",
    description:
      "以清晰的仪表盘和简洁的建模结果呈现复杂数据，帮助非数据背景的决策者快速抓住重点。",
  },
  {
    icon: FileText,
    title: "故事化的洞察呈现",
    description:
      "通过场景化案例与故事线，把抽象的数据转译为具体、可执行的行动建议与路线图。",
  },
  {
    icon: Award,
    title: "长期合作与知识沉淀",
    description:
      "在长期合作中沉淀行业知识与组织背景，避免每个项目都从头再来，持续提升洞察效率。",
  },
  {
    icon: Zap,
    title: "项目节奏与灵活交付",
    description:
      "理解政策与业务节奏的压力，提供敏捷更新与阶段性输出，而不仅仅是一次性报告。",
  },
];

const PROCESS_STEPS: MethodStep[] = [
  {
    label: "01",
    title: "一起定义问题",
    description: "与决策团队共创问题树，明确要支持的关键决策与需要影响的对象。",
  },
  {
    label: "02",
    title: "设计合适的证据路径",
    description: "综合考虑时间、预算与可用数据，选择最合适而非最复杂的研究与分析组合。",
  },
  {
    label: "03",
    title: "严谨执行与透明沟通",
    description: "在项目关键节点进行中期对齐，确保方向正确、过程中发现的新问题被纳入。",
  },
  {
    label: "04",
    title: "共创行动框架",
    description: "围绕“我们接下来要做什么”梳理行动优先级，并明确如何衡量成效。",
  },
];

export default function WhyICRPage() {
  return (
    <main className="bg-background">
      {/* Hero 区 */}
      <section className="relative overflow-hidden bg-brand-navy py-10 text-white md:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(17,102,255,0.45),_transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
            为何选择 ICR？
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-200 md:text-base">
            在复杂、不确定的环境里，决策者需要的是“可以行动的证据”，而不仅是冗长的报告。ICR 以问题为起点，以行动为终点，从研究设计到洞察呈现，都围绕这一目标展开。
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <GradientCTAButton href="/ContactUS">讨论你的项目</GradientCTAButton>
            <GradientCTAButton href="/services" variant="outline">
              查看我们的服务
            </GradientCTAButton>
          </div>
        </div>
      </section>

      {/* 成功要素卡片区 */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl">
              我们如何与决策者一起创造价值
            </h2>
            <p className="mt-3 text-sm text-slate-600 md:text-base">
              选择研究合作伙伴，不只是选择一种方法，更是在选择一种与决策团队协作的方式。以下几个特质，是许多客户选择 ICR 的原因。
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SUCCESS_FACTORS.map((factor, index) => {
              const Icon = factor.icon;
              const highlighted = index === 1 || index === 4;
              return (
                <div
                  key={factor.title}
                  className={`flex h-full flex-col rounded-xl border bg-white p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md ${
                    highlighted ? "border-brand-blue/40 bg-brand-blue/5" : "border-slate-200"
                  }`}
                >
                  {factor.imageSrc ? (
                    <div className="relative mb-3 h-28 w-full overflow-hidden rounded-lg bg-slate-900/90">
                      <Image
                        src={factor.imageSrc}
                        alt={factor.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover opacity-90"
                      />
                    </div>
                  ) : null}
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-blue/10 text-brand-blue">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-brand-navy">
                    {factor.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 md:text-sm">
                    {factor.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 流程/合作方法说明 */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl">
                一起工作的方式
              </h2>
              <p className="mt-3 text-sm text-slate-600 md:text-base">
                一个好的研究项目，应该从一开始就把“谁会使用这些结果、他们如何使用”考虑进去。ICR 的项目团队会在立项阶段就邀请关键决策者参与，确保研究问题与业务语言对齐。随着项目推进，我们会在关键节点以工作坊或中期汇报的形式同步发现与假设，而不是把所有信息堆到最终报告里。
              </p>
              <p className="mt-2 text-sm text-slate-600 md:text-base">
                这样做的结果，是让研究成为团队集体学习的过程，而不是外包的一次性任务，也让最终的行动建议更容易被理解和采纳。
              </p>
            </div>
            <div>
              <MethodTimeline steps={PROCESS_STEPS} tone="light" />
            </div>
          </div>
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-teal py-12 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">
              准备开始下一次研究或评估了吗？
            </h2>
            <p className="mt-2 max-w-xl text-sm md:text-base">
              无论你处于探索想法的早期，还是已经有了明确的项目 brief，都欢迎与你的团队一起梳理问题、评估可行路径。
            </p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <GradientCTAButton href="/ContactUS">预约 30 分钟交流</GradientCTAButton>
            <Link
              href="/services"
              className="text-sm font-semibold text-white/90 hover:text-white"
            >
              了解我们在项目中的具体角色 →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
