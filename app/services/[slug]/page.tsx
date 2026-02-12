import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { GradientCTAButton } from "../../components/GradientCTAButton";

type ServiceSlug = "research" | "analytics" | "strategy" | "training";

interface ServiceMeta {
  slug: ServiceSlug;
  name: string;
  heroTitle: string;
  heroKicker: string;
  heroTagline: string;
  imageSrc: string;
  keyPoints: { title: string; body: string }[];
  steps: { title: string; body: string }[];
}

const services: Record<ServiceSlug, ServiceMeta> = {
  research: {
    slug: "research",
    name: "Research & Evidence",
    heroTitle: "将公民与客户声音，转化为可执行证据",
    heroKicker: "Research & Evidence",
    heroTagline: "从调研设计到结果解读，覆盖定量与定性全流程。",
    imageSrc: "/images/carousel.jpeg",
    keyPoints: [
      {
        title: "适用场景",
        body: "公共政策评估、品牌健康、满意度与体验研究、舆情与社会议题洞察等。",
      },
      {
        title: "你将获得",
        body: "结构化的研究报告、可视化呈现、关键人群与细分洞察，以及面向决策者的高层摘要。",
      },
      {
        title: "研究方式",
        body: "问卷调查、深度访谈、焦点小组、民族志/观察研究，以及与内部数据的整合分析。",
      },
    ],
    steps: [
      {
        title: "明确问题与决策场景",
        body: "与核心干系人共创，界定需要用证据回答的关键决策问题。",
      },
      {
        title: "设计研究框架",
        body: "确定样本、方法与问卷/讨论指南，兼顾严谨性与可落地性。",
      },
      {
        title: "现场执行与质量控制",
        body: "结合数字化采集与质检机制，确保数据可靠可追溯。",
      },
      {
        title: "分析与洞察生成",
        body: "从数据中提炼故事线，识别差异人群与关键驱动因素。",
      },
      {
        title: "工作坊与共创",
        body: "通过共创会，将洞察转化为具体行动与路线图。",
      },
    ],
  },
  analytics: {
    slug: "analytics",
    name: "Analytics & Measurement",
    heroTitle: "把分散数据串成一张决策仪表盘",
    heroKicker: "Analytics & Measurement",
    heroTagline: "构建指标体系、模型与可视化，让证据在日常会议中持续被使用。",
    imageSrc: "/images/carousel3.jpeg",
    keyPoints: [
      {
        title: "适用场景",
        body: "战略 KPI 监测、项目成效评估、行为数据分析、仪表盘与报告自动化。",
      },
      {
        title: "你将获得",
        body: "一套清晰的指标树、数据模型、可视化仪表盘以及与治理节奏对齐的报告节奏。",
      },
      {
        title: "数据来源",
        body: "内部运营数据、调查数据、开放数据以及第三方数据源的整合与清洗。",
      },
    ],
    steps: [
      {
        title: "梳理指标与决策节奏",
        body: "从现有会议与报表出发，识别哪些指标真正驱动决策。",
      },
      {
        title: "数据盘点与治理",
        body: "评估数据质量、缺口与接入方式，形成数据蓝图。",
      },
      {
        title: "模型与可视化设计",
        body: "选择合适的分析方法与可视化形式，让复杂结论一目了然。",
      },
      {
        title: "验证与试点",
        body: "在小范围试运行，验证模型稳定性与业务可用性。",
      },
      {
        title: "能力交付与迭代",
        body: "培训团队使用新指标与仪表盘，并根据反馈持续优化。",
      },
    ],
  },
  strategy: {
    slug: "strategy",
    name: "Strategy & Advisory",
    heroTitle: "让战略讨论建立在可验证的证据之上",
    heroKicker: "Strategy & Advisory",
    heroTagline: "从现状诊断到路线图设计，贯穿多轮工作坊与高层对话。",
    imageSrc: "/images/globe1.jpg",
    keyPoints: [
      {
        title: "适用场景",
        body: "中长期战略规划、项目组合优化、组织与运营模式调整等。",
      },
      {
        title: "你将获得",
        body: "战略选项对比、风险与机会分析、优先级排序以及清晰的执行路线图。",
      },
      {
        title: "合作方式",
        body: "与内部团队共同组建联合项目组，确保方案贴近实际并获得关键干系人认可。",
      },
    ],
    steps: [
      {
        title: "快速现状扫描",
        body: "从数据、访谈与文档中提炼出当下最关键的挑战与约束。",
      },
      {
        title: "情景与选项设计",
        body: "构建不同发展情景与策略选项，评估影响与可行性。",
      },
      {
        title: "共创工作坊",
        body: "与关键决策者与执行团队举行共创会，收敛共识与取舍。",
      },
      {
        title: "路线图与里程碑",
        body: "定义阶段性目标、里程碑与责任主体，嵌入现有治理结构。",
      },
      {
        title: "跟踪与复盘",
        body: "在实施过程中定期复盘，用最新证据更新判断。",
      },
    ],
  },
  training: {
    slug: "training",
    name: "Training & Capability",
    heroTitle: "让团队会提问、会读数、会讲故事",
    heroKicker: "Training & Capability",
    heroTagline: "通过工作坊与训练营，把研究与分析能力沉淀在组织内部。",
    imageSrc: "/images/carousel4.jpeg",
    keyPoints: [
      {
        title: "适用场景",
        body: "新团队组建、转型项目启动、证据使用文化建设、内部研究与分析团队赋能。",
      },
      {
        title: "你将获得",
        body: "可复用的工具包、培训材料、案例库，以及围绕真实项目的实战练习。",
      },
      {
        title: "形式与节奏",
        body: "线下/线上工作坊、短期训练营、持续辅导与教练式陪伴。",
      },
    ],
    steps: [
      {
        title: "能力现状评估",
        body: "通过访谈与问卷，了解团队在数据与洞察使用上的起点。",
      },
      {
        title: "课程与路径设计",
        body: "围绕真实业务问题定制训练内容与节奏。",
      },
      {
        title: "工作坊与实战演练",
        body: "用真实项目做练习，将方法与工具应用到日常场景。",
      },
      {
        title: "工具与模板交付",
        body: "提供可直接使用的模板、检查清单与演示文稿骨架。",
      },
      {
        title: "复盘与巩固",
        body: "在项目结束后追踪实践情况，必要时追加短冲刺强化。",
      },
    ],
  },
};

export function generateStaticParams() {
  const slugs: ServiceSlug[] = ["research", "analytics", "strategy", "training"];
  return slugs.map((slug) => ({ slug }));
}

interface ServicePageProps {
  params: { slug: string };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = services[params.slug as ServiceSlug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero：背景图 + 蓝绿渐变蒙版 + 关键卖点 */}
      <section className="relative overflow-hidden bg-brand-navy py-10 text-white md:py-14">
        <div className="absolute inset-0 -z-10">
          <Image
            src={service.imageSrc}
            alt={service.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/85 via-brand-blue/45 to-brand-teal/45" />
        </div>

        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="inline-flex rounded-full bg-black/25 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-100">
            {service.heroKicker}
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
            {service.heroTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base text-slate-100">
            {service.heroTagline}
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center">
            <GradientCTAButton href="/ContactUS">
              与我们讨论这个版块的项目
            </GradientCTAButton>
            <Button
              variant="outline"
              className="border-brand-teal bg-transparent text-brand-teal hover:bg-brand-teal hover:text-brand-navy"
            >
              下载白皮书（占位）
            </Button>
          </div>
        </div>
      </section>

      {/* 关键信息区块 */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {service.keyPoints.map((point) => (
              <div
                key={point.title}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h2 className="text-sm font-semibold text-brand-navy">
                  {point.title}
                </h2>
                <p className="mt-2 text-xs text-slate-600">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 方法论 / 流程步骤（3-5 步） */}
      <section className="bg-brand-soft-bg py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy">
              我们如何与您合作
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              以下流程为通用示意，将根据具体项目进行适配与精简。
            </p>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute left-6 top-3 bottom-0 w-0.5 bg-brand-blue/25 md:left-1/2" />

            <div className="space-y-8 md:mx-auto md:max-w-3xl">
              {service.steps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative flex items-start gap-4 md:gap-6"
                >
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-teal text-sm font-semibold text-white">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-brand-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 白皮书 / CTA 区（静态占位） */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-teal py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-semibold">
              下载白皮书与典型案例（占位）
            </h2>
            <p className="mt-3 text-sm md:text-base text-white/90">
              这里将来可以链接到 PDF 白皮书或案例合集，目前为静态占位文案，用于展示信息架构与布局。
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button className="bg-white text-brand-navy hover:bg-slate-100">
              下载白皮书（占位）
            </Button>
            <GradientCTAButton href="/ContactUS" variant="outline">
              安排一次 30 分钟介绍会
            </GradientCTAButton>
          </div>
        </div>
      </section>

      {/* 返回服务总览的轻量入口 */}
      <section className="bg-white py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 text-sm">
          <p className="text-slate-500">
            想要浏览其他服务版块？
          </p>
          <Link
            href="/services"
            className="font-semibold text-brand-blue hover:text-brand-teal"
          >
            返回服务概览 →
          </Link>
        </div>
      </section>
    </main>
  );
}
