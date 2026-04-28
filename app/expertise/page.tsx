"use client";

import Image from "next/image";
import Link from "next/link";
import { GradientCTAButton } from "../components/GradientCTAButton";

interface ExpertiseBlock {
  id: string;
  title: string;
  /** 摘要段落，保持与官网文案完全一致 */
  summary: string[];
  /** 要点列表，保持与官网文案完全一致 */
  points: string[];
  image: string;
}

const EXPERTISE_BLOCKS: ExpertiseBlock[] = [
  {
    id: "government-public",
    title: "政府与公共部门项目",
    summary: [
      "我们拥有支持政府及公共部门实体的深厚经验，提供包括研究、评估及顾问咨询在内的全方位服务。",
      "我们的工作深刻体现了对治理框架、问责要求以及实证支撑（以应对公众与监管审查）的理解。",
    ],
    points: [
      "政策研究与项目监测",
      "公共服务绩效评估",
      "利益相关者与受益人研究",
      "旨在驱动政策与项目优化的影响评估研究",
    ],
    image: "/images/expertise/expertise_block_1.png",
  },
  {
    id: "enterprise-market",
    title: "企业与市场导向专业服务",
    summary: [
      "除公共部门外，我们也为在复杂竞争环境中运营的企业组织提供专业支持。",
      "我们的洞察协助组织精准把握市场动态、消费者行为及运营表现，为战略规划和投资决策提供科学依据。",
    ],
    points: [
      "市场与机会评估",
      "消费者与购物者研究",
      "品牌表现追踪",
      "市场准入与竞争分析",
    ],
    image: "/images/expertise/expertise_block_2.png",
  },
  {
    id: "methodology-analytics",
    title: "方法论与分析优势",
    summary: [
      "我们的专业能力建立在定量、定性及混合研究方法的强大实力之上。",
      "每一项研究均紧密结合决策情境量身定制，确保方法适配、数据可靠且逻辑明晰。",
    ],
    points: [
      "大规模定量调查",
      "定性访谈与焦点小组",
      "纵向追踪研究框架",
      "跨多源数据的综合分析",
    ],
    image: "/images/expertise/expertise_block_3.png",
  },
  {
    id: "ai-in-research",
    title: "人工智能在研究流程中的应用",
    summary: [
      "我们在研究与分析流程中引入 AI 赋能工具，以提升效率、确保一致性并增强洞察生成能力。",
      "这些工具的应用始终处于严密的方法论监督与人类专业判断之下。",
    ],
    points: [
      "AI 支持的数据准备与清洗",
      "模式识别与趋势分析",
      "文本与定性数据处理",
      "结合专家审核的 AI 辅助分析建模",
    ],
    image: "/images/expertise/expertise_block_4.png",
  },
  {
    id: "decision-oriented",
    title: "决策导向型应用",
    summary: [
      "在所有专业领域中，我们的工作始终以决策为指引。",
      "我们优先考虑洞察的明晰性、相关性与实际应用价值，确保产出成果能够直接呈递至高层管理者，并与组织战略目标高度对齐。",
    ],
    points: [
      "政策制定与项目评估支持",
      "战略优先级排序与投资规划建议",
      "面向管理层的决策就绪型报告与建议",
    ],
    image: "/images/expertise/expertise_block_5.png",
  },
  {
    id: "closing-summary",
    title: "结语",
    summary: [
      "我们的专业水准体现了行业知识、严谨方法与分析创新的完美平衡。",
      "通过将政府与企业项目的丰富经验与先进研究能力相结合，我们协助各组织做出明智、自信且经得起推敲的决策。",
    ],
    points: [
      "行业知识与严谨方法论",
      "分析创新与整合洞察",
      "面向高层的决策就绪型交付",
    ],
    image: "/images/expertise/expertise_block_6.png",
  },
];

export default function ExpertisePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero 区 */}
      <section className="relative overflow-hidden bg-brand-navy py-10 text-white md:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(17,102,255,0.4),_transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
            专业领域
            <br />
            覆盖政策、市场与决策链路的关键环节
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-200 md:text-base">
            在 Insight 咨询与研究 (ICR)，我们的专业核心在于通过严谨的研究与分析，支持公共、企业及国际领域的复杂决策。我们将深厚的行业知识、严密的方法论以及前沿的分析能力相结合，致力于解决战略、运营及政策层面的核心挑战。
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <GradientCTAButton href="/ContactUS">讨论你的研究场景</GradientCTAButton>
            <GradientCTAButton href="/services" variant="outline">
              查看相关服务模块
            </GradientCTAButton>
          </div>
        </div>
      </section>

      {/* 6 块专业领域：Zig-zag 图文块 */}
      <section className="bg-brand-soft-bg py-16">
        <div className="mx-auto max-w-6xl space-y-16 px-4">
          {EXPERTISE_BLOCKS.map((block, index) => {
            const reversed = index % 2 === 1;
            return (
              <div
                key={block.id}
                className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14"
              >
                <div
                  className={
                    reversed
                      ? "order-2 md:order-1 md:max-w-xl"
                      : "order-1 md:order-1 md:max-w-xl"
                  }
                >
                  <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl">
                    {block.title}
                  </h2>
                  {block.summary.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-3 text-sm text-slate-700 md:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {block.points.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-brand-blue to-brand-teal" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={
                    reversed
                      ? "order-1 flex justify-center md:order-2 md:justify-end"
                      : "order-2 flex justify-center md:order-2 md:justify-start"
                  }
                >
                  <div className="group relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
                    <Image
                      src={block.image}
                      alt={block.title}
                      width={640}
                      height={400}
                      className="h-full w-full object-cover transition-all duration-500 brightness-75 saturate-75 group-hover:scale-105 group-hover:brightness-100 group-hover:saturate-100"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="bg-white py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl">
              想在这些领域开展下一步研究或评估？
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600 md:text-base">
              告诉我们你所在的行业与当前面临的问题，我们会为你建议合适的研究路径和样本设计，并分享相关案例示例。
            </p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <GradientCTAButton href="/ContactUS">联系 ICR 团队</GradientCTAButton>
            <Link
              href="/services"
              className="text-sm font-semibold text-brand-blue hover:text-brand-teal"
            >
              了解我们如何具体介入项目 →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
