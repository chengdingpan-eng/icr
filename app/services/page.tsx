"use client";

import Image from "next/image";
import { IntelligenceCard } from "../components/IntelligenceCard";
import {
  StaggeredTimeline,
  type StaggeredTimelineStep,
} from "../components/StaggeredTimeline";
import { CtaButton } from "../components/CtaButton";

interface IntelligenceService {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
}

const INTELLIGENCE_SERVICES: IntelligenceService[] = [
  {
    id: "quantitative-research",
    title: "定量研究 (Quantitative Research)",
    description:
      "运用科学的问卷设计、建模与分析技术，生成稳健、可验证的证据，为战略、运营及公共政策制定提供规模化支持。",
    bullets: [
      "科学的问卷与样本框设计，保证代表性与可比性",
      "多维度建模与细分分析，识别关键影响因素",
      "支撑战略、运营及公共政策制定的规模化证据",
    ],
    imageSrc: "/images/gs_style/blocks_icr_quant.png",
  },
  {
    id: "qualitative-research",
    title: "定性研究 (Qualitative Research)",
    description:
      "通过深度访谈及系统化定性方法，拆解行为背后的认知逻辑与情感因素，为结果解读与决策判断提供背景支撑。",
    bullets: [
      "深度访谈、焦点小组等多种定性方法组合",
      "还原行为背后的认知逻辑与情感动因",
      "为定量结果与管理决策提供情境化解释",
    ],
    imageSrc: "/images/gs_style/blocks_icr_qual.png",
  },
  {
    id: "tracking-studies",
    title: "追踪研究 (Tracking Studies)",
    description:
      "构建持续性的监测框架，长期追踪指标变化，精准识别新兴趋势并支持纵向洞察。",
    bullets: [
      "设计可持续运行的长期监测体系",
      "关注关键指标的节奏与结构性变化",
      "为品牌、体验与政策提供纵向洞察",
    ],
    imageSrc: "/images/gs_style/blocks_icr_tracking.png",
  },
  {
    id: "retail-shopper",
    title: "零售与购物者研究 (Retail & Shopper Research)",
    description:
      "基于结构化的线下审计与实地观察研究，在真实商业生态中获取一手可靠数据。",
    bullets: [
      "门店审计与货架盘点，量化终端表现",
      "购物路径与决策节点的现场观察与访谈",
      "为渠道策略与生动化执行提供依据",
    ],
    imageSrc: "/images/gs_style/blocks_icr_retail.png",
  },
  {
    id: "market-assessment",
    title:
      "市场评估与机会分析 (Market Assessments & Opportunity Analysis)",
    description:
      "开展市场规模评估、细分研究及对标分析，为复杂市场中的战略优先级、进入路径及投资决策提供依据。",
    bullets: [
      "市场规模与结构评估，量化机会空间",
      "细分人群与场景，识别高价值组合",
      "支持进入路径、资源分配与投资决策",
    ],
    imageSrc: "/images/gs_style/blocks_icr_market.png",
  },
  {
    id: "strategic-consulting",
    title: "战略咨询 (Strategic Consulting)",
    description:
      "提供研究导向的咨询与决策支持服务，将研究结论转化为清晰的决策选项、影响分析与管理层建议。",
    bullets: [
      "基于证据的战略与政策讨论框架",
      "将研究结论转化为可比较的决策选项",
      "为管理层准备清晰、可执行的行动建议",
    ],
    imageSrc: "/images/gs_style/blocks_icr_consulting.png",
  },
];

const EXCELLENCE_STEPS: StaggeredTimelineStep[] = [
  {
    id: "step-1",
    step: 1,
    title: "明确决策目标",
    description:
      "在项目启动阶段清晰界定决策需求与核心问题，识别真正需要通过研究回答的关键决策场景。",
    imageSrc: "/images/kantar_style/steps_1.png",
  },
  {
    id: "step-2",
    step: 2,
    title: "结构化交付",
    description:
      "依托标准化流程与严谨的质量控制体系，确保样本、执行与数据处理的每一个环节都有清晰的责任与校验点。",
    imageSrc: "/images/kantar_style/steps_2.png",
  },
  {
    id: "step-3",
    step: 3,
    title: "持续监管与校验",
    description:
      "在项目全过程对方法论与数据进行持续验证与把控，及时发现并纠正潜在偏差。",
    imageSrc: "/images/kantar_style/steps_3.png",
  },
  {
    id: "step-4",
    step: 4,
    title: "可执行型成果输出",
    description:
      "提供面向决策、清晰易读且具备实效性的研究报告与汇报素材，便于管理层快速对齐。",
    imageSrc: "/images/kantar_style/steps_4.png",
  },
  {
    id: "step-5",
    step: 5,
    title: "规范化项目治理",
    description:
      "确保项目范围、流程与成果完全符合客户、监管及利益相关方的要求，并为后续项目沉淀经验。",
    imageSrc: "/images/kantar_style/steps_5.png",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero：Kantar Intelligence 风格导入 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-indigo-900 to-slate-950 text-white">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/ipsos_style/services_hero.png"
            alt="团队在数据与报告前讨论服务方案"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-[0.18em] text-violet-100">
            服务 · INTELLIGENCE STYLE
          </span>
          <h1 className="serif-headline mt-5 text-3xl md:text-4xl lg:text-5xl">
            围绕同一个决策问题的六大服务模块
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-violet-100 md:text-base">
            我们将 ICR 的定量研究、定性研究、追踪研究、零售与购物者研究、市场评估与机会分析以及战略咨询六类能力，整理为一套可以组合的服务矩阵。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CtaButton href="/ContactUS">讨论项目需求</CtaButton>
            <CtaButton href="#intelligence" variant="ghost">
              浏览六大服务
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Intelligence 风格 6 卡片 */}
      <section
        id="intelligence"
        className="bg-slate-950 py-14 text-white md:py-16"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-violet-200">
              INTELLIGENCE SERVICES
            </p>
            <h2 className="serif-headline mt-2 text-2xl md:text-3xl">
              用六类服务能力，拆解同一个业务问题
            </h2>
            <p className="mt-3 text-sm text-violet-100 md:text-base">
              在 ICR，我们致力于协助组织实现从“证据”走向“洞察”，并将洞察转化为清晰、经得起推敲的决策方案。
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {INTELLIGENCE_SERVICES.map((service) => (
              <IntelligenceCard
                key={service.id}
                title={service.title}
                description={service.description}
                bullets={service.bullets}
                imageSrc={service.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 五步卓越流程：中轴线 + 左右交错统一模块 */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-violet-200">
              五步卓越流程
            </p>
            <h2 className="serif-headline mt-2 text-2xl md:text-3xl">
              从明确决策目标，到规范化项目治理
            </h2>
            <p className="mt-3 text-sm text-slate-100 md:text-base">
              我们将严谨的方法论与实践经验深度融合，确保每一项研究都能切实支撑商业与政策决策。这五个步骤既可以完整应用，也可以针对不同项目阶段灵活选取重点。
            </p>
          </div>

          <div className="mt-10">
            <StaggeredTimeline steps={EXCELLENCE_STEPS} />
          </div>
        </div>
      </section>

      {/* 底部品牌化 CTA 横幅 */}
      <section className="border-t border-slate-800 bg-slate-950 py-12 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="serif-headline text-xl md:text-2xl">
              正在规划一个需要“证据 + 洞察 + 行动方案”的项目？
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-200 md:text-base">
              无论是一次性评估、品牌与体验研究，还是长期追踪体系，我们都可以基于这六大服务模块，和你一起搭建合适的 Intelligence 组合。
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CtaButton href="/ContactUS">讨论需求</CtaButton>
            <CtaButton href="/services" variant="ghost">
              下载服务白皮书（占位）
            </CtaButton>
          </div>
        </div>
      </section>
    </main>
  );
}
