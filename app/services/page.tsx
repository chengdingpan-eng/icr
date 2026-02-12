"use client";

import { BarChart2, LineChart, Target, GraduationCap } from "lucide-react";
import { HeroSection } from "../components/HeroSection";
import { CardGrid, type CardGridItem } from "../components/CardGrid";
import { GradientCTAButton } from "../components/GradientCTAButton";
import { MethodTimeline, type MethodStep } from "../components/MethodTimeline";

const SERVICE_CARDS: CardGridItem[] = [
  {
    id: "research",
    title: "研究服务",
    description:
      "从问卷调查到深度访谈，结合定量与定性方法，回答政策与业务中最关键的问题。",
    href: "/services",
    icon: <BarChart2 className="h-4 w-4" />,
  },
  {
    id: "analytics",
    title: "数据分析",
    description:
      "打通运营数据、交易数据与研究数据，用仪表盘和建模工具还原真实行为模式。",
    href: "/services",
    icon: <LineChart className="h-4 w-4" />,
  },
  {
    id: "strategy",
    title: "战略咨询",
    description:
      "基于证据的战略与政策建议，帮助你优先排序机会、评估方案影响并设计路线图。",
    href: "/services",
    icon: <Target className="h-4 w-4" />,
  },
  {
    id: "training",
    title: "培训与赋能",
    description:
      "为内部团队提供研究方法、数据分析与洞察呈现的系统培训与共创工作坊。",
    href: "/services",
    icon: <GraduationCap className="h-4 w-4" />,
  },
];

const PROCESS_STEPS: MethodStep[] = [
  {
    label: "01",
    title: "对齐问题与成功样貌",
    description:
      "与核心决策人共创项目 brief，界定研究要支持的具体决策与成功指标。",
  },
  {
    label: "02",
    title: "设计研究与数据方案",
    description:
      "选择合适的样本框与方法（问卷、访谈、工作坊等），并梳理可用的内部数据源。",
  },
  {
    label: "03",
    title: "现场执行与质量控制",
    description:
      "通过培训、督导与实时监控，保证问卷回收与访谈记录的质量与代表性。",
  },
  {
    label: "04",
    title: "分析与洞察生成",
    description:
      "构建清晰的分析框架，结合可视化、建模与故事化讲述萃取关键洞察。",
  },
  {
    label: "05",
    title: "共创行动与评估机制",
    description:
      "与业务团队一起将洞察转化为行动计划，并定义后续监测与评估指标。",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero：编辑型大图 + 渐变遮罩 + 双 CTA */}
      <HeroSection
        eyebrow="服务"
        title="大数据驱动的研究与咨询服务组合"
        highlighted="从一次项目到长期合作，围绕同一个决策问题展开"
        description="ICR 结合国际研究标准与本地市场经验，围绕“研究 · 分析 · 战略 · 培训”四大模块，为政府与企业提供一体化的证据与洞察服务。"
        backgroundImageSrc="/images/ipsos_style/services_hero.png"
        align="left"
        childrenBelow={
          <div className="flex flex-wrap items-center gap-3">
            <GradientCTAButton href="/ContactUS">讨论项目需求</GradientCTAButton>
            <GradientCTAButton href="/ContactUS" variant="outline">
              安排一次介绍会
            </GradientCTAButton>
          </div>
        }
      />

      {/* 主服务卡片网格 */}
      <CardGrid
        eyebrow="四大核心服务"
        title="围绕同一个洞察问题，提供不同深度的服务组合"
        subtitle="无论你处于探索、验证还是落地阶段，我们都会围绕清晰的决策问题设计研究与分析方案。"
        items={SERVICE_CARDS}
        className="bg-white"
      />

      {/* 方法论时间线 + 说明文案 */}
      <section className="bg-brand-soft-bg py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl">
                从 briefing 到行动落地的完整流程
              </h2>
              <p className="mt-3 text-sm text-slate-600 md:text-base">
                与其把研究看成一次性“勾选项”，不如把它视为陪伴决策全过程的能力。ICR 的方法论以决策问题为起点，兼顾研究严谨性与业务节奏，帮助团队在关键节点做出有信心的选择。
              </p>
              <p className="mt-2 text-sm text-slate-600 md:text-base">
                在整个过程中，我们会与项目团队保持频繁沟通：从问卷与讨论提纲到分析框架与汇报故事线，都以“能被采纳、能落地”为标准进行打磨。
              </p>
            </div>
            <div>
              <MethodTimeline steps={PROCESS_STEPS} tone="light" />
            </div>
          </div>
        </div>
      </section>

      {/* 底部品牌化 CTA 横幅 */}
      <section className="bg-gradient-to-r from-brand-navy via-brand-blue to-brand-teal py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">
              正在规划下一轮研究或大型项目？
            </h2>
            <p className="mt-2 max-w-xl text-sm md:text-base">
              告诉我们你的目标与时间表，我们会与团队一起评估最佳的研究与分析路径，并给出初步的合作建议与预算区间。
            </p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <GradientCTAButton href="/ContactUS">讨论需求</GradientCTAButton>
            <GradientCTAButton href="/ContactUS" variant="outline">
              下载服务白皮书（占位）
            </GradientCTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
