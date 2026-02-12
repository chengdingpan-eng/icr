"use client";

import Image from "next/image";
import { CardGrid } from "../components/CardGrid";
import { GradientCTAButton } from "../components/GradientCTAButton";
import { MethodTimeline, type MethodStep } from "../components/MethodTimeline";

const HOME_SERVICES = [
  {
    id: "research",
    title: "研究服务",
    description: "定量与定性结合，从问卷到深度访谈，为公共部门与企业提供可验证的证据基础。",
    href: "/services",
  },
  {
    id: "analytics",
    title: "数据分析",
    description: "整合多源数据与仪表盘，将零散数据转化为可视化、可追踪的决策支持体系。",
    href: "/services",
  },
  {
    id: "strategy",
    title: "战略咨询",
    description: "围绕关键问题设计研究，识别机会与风险，支持中长期战略与政策制定。",
    href: "/services",
  },
  {
    id: "training",
    title: "培训与赋能",
    description: "为团队提供研究方法、数据分析与洞察呈现的系统化培训与共创工作坊。",
    href: "/services",
  },
];

const HOME_STEPS: MethodStep[] = [
  {
    label: "01",
    title: "理解背景与问题",
    description: "与决策方共同澄清政策或业务问题，明确研究要回答的关键决策问题。",
  },
  {
    label: "02",
    title: "联结数据与方法",
    description: "结合既有数据与实地调研，设计合适的样本、问卷与讨论指引。",
  },
  {
    label: "03",
    title: "严谨执行与质量把控",
    description: "通过现场督导与质量监控，确保采集到的数据真实、完整、可解释。",
  },
  {
    label: "04",
    title: "分析与洞察产出",
    description: "使用可视化与建模工具，对关键群体和行为模式进行深入拆解。",
  },
  {
    label: "05",
    title: "共创行动方案",
    description: "与项目团队一起梳理优先事项，形成可落地的行动路线与跟踪指标。",
  },
];

export default function HomePage() {
  return (
    <main className="bg-background">
      {/* Hero：左文案 + 右编辑型大图 */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-x-0 -top-32 h-72 bg-gradient-to-br from-brand-blue/10 via-brand-teal/5 to-transparent" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pt-14 pb-16 lg:grid-cols-2 lg:pb-24 lg:pt-20">
          {/* 文案列 */}
          <div className="space-y-5">
            <span className="inline-flex items-center rounded-full bg-brand-blue/5 px-3 py-1 text-xs font-medium text-brand-blue">
              大数据驱动的研究与咨询
            </span>
            <h1 className="text-3xl font-semibold tracking-tight text-brand-navy md:text-4xl lg:text-5xl">
              大数据驱动的
              <br />
              研究与咨询合作伙伴
            </h1>
            <p className="text-sm text-slate-600 md:text-base">
              我们帮助政府机构与企业在复杂、不确定的环境中，用可靠的证据看清趋势、理解行为、评估方案，做出经得起时间检验的决策。
            </p>
            <p className="text-sm text-slate-600 md:text-base">
              服务覆盖「研究 · 分析 · 战略 · 培训」，从一次性项目到长期追踪，从问卷数据到运营指标，为你搭建完整的洞察体系。
            </p>

            <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row">
              <GradientCTAButton href="/ContactUS">
                讨论需求
              </GradientCTAButton>
              <GradientCTAButton href="/services" variant="outline">
                了解我们的服务
              </GradientCTAButton>
            </div>

            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <div className="text-xs font-semibold text-brand-navy">研究</div>
                <p className="mt-1 text-xs text-slate-600">兼顾代表性与深度的定量与定性研究设计。</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <div className="text-xs font-semibold text-brand-navy">分析</div>
                <p className="mt-1 text-xs text-slate-600">结合业务理解与数据建模，抽取可操作洞察。</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <div className="text-xs font-semibold text-brand-navy">战略与培训</div>
                <p className="mt-1 text-xs text-slate-600">共创行动方案，并通过培训将能力沉淀到团队内部。</p>
              </div>
            </div>
          </div>

          {/* 视觉列：编辑型大图卡片 */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-brand-navy text-white shadow-xl">
              <div className="absolute inset-0">
                <Image
                  src="/images/ipsos_style/home_hero.png"
                  alt="团队在会议室围绕数据仪表盘讨论"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/80 via-brand-blue/40 to-brand-teal/40" />
              </div>
              <div className="relative flex min-h-[260px] flex-col justify-between px-8 py-7">
                <div className="flex items-center justify-between text-xs text-slate-200">
                  <span className="uppercase tracking-[0.16em]">Evidence you can act on</span>
                  <span>ICR · Insight Consultancy &amp; Research</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-100">
                    从一次研究开始，搭建长期可迭代的洞察与学习体系，让每一个决策都有数据支撑。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 主要服务入口 */}
      <CardGrid
        eyebrow="服务概览"
        title="我们如何支持你的决策"
        subtitle="围绕从问题界定到方案落地的完整链路，ICR 提供研究、数据分析、战略咨询与培训赋能四大核心服务模块。"
        items={HOME_SERVICES}
        className="bg-brand-soft-bg"
      />

      {/* 方法论概览 */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl">
              从问题到行动的五步方法论
            </h2>
            <p className="mt-3 text-sm text-slate-600 md:text-base">
              我们将复杂的研究与分析流程拆解为清晰的五个步骤，确保每一阶段都对最终决策产生明确价值。
            </p>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr,1fr]">
            <div>
              <MethodTimeline steps={HOME_STEPS} tone="light" />
            </div>
            <div className="rounded-2xl bg-brand-soft-bg p-6 text-sm text-slate-700">
              <h3 className="text-base font-semibold text-brand-navy">
                与团队一起构建“会用得上的研究”
              </h3>
              <p className="mt-3">
                很多研究报告之所以难以转化为行动，并非因为数据不够多，而是缺乏在一开始就对接决策场景的共同理解。ICR 的项目团队会在立项阶段与你一起定义成功样貌，并在过程中定期对齐。这样一来，最终交付的不只是报告，而是一套被团队理解、愿意采纳的行动建议。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 品牌数字概览 */}
      <section className="relative bg-brand-navy py-16 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(17,102,255,0.4),_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">ICR in Numbers</h2>
          <p className="mt-3 text-sm text-slate-200 md:text-base">
            我们将国际方法论与本地团队经验结合，在中东及周边市场持续交付可操作的研究与洞察。
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center px-4">
              <div className="text-4xl font-semibold tracking-tight">50K+</div>
              <div className="mt-2 text-sm font-medium">受访者访谈与问卷样本</div>
              <p className="mt-2 max-w-xs text-xs text-slate-200">
                覆盖公民、消费者、员工与多类利益相关方，支持纵向与横向对比分析。
              </p>
            </div>
            <div className="flex flex-col items-center px-4">
              <div className="text-4xl font-semibold tracking-tight">300+</div>
              <div className="mt-2 text-sm font-medium">完成的研究与咨询项目</div>
              <p className="mt-2 max-w-xs text-xs text-slate-200">
                从快速洞察冲刺到年度大型研究，为不同成熟度阶段的组织提供灵活支持。
              </p>
            </div>
            <div className="flex flex-col items-center px-4">
              <div className="text-4xl font-semibold tracking-tight">15+</div>
              <div className="mt-2 text-sm font-medium">年行业与区域经验</div>
              <p className="mt-2 max-w-xs text-xs text-slate-200">
                团队成员拥有国际研究机构与本地咨询公司的双重背景，理解决策者真正关心的问题。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 底部品牌 CTA 横幅 */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-teal py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">
              让下一次重要决策，从一次更好的研究开始
            </h2>
            <p className="mt-2 max-w-xl text-sm md:text-base">
              无论你正在评估一项新政策、一条新产品线，还是希望系统性提升客户体验，ICR 都可以与你一起设计合适的研究与分析路径。
            </p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <GradientCTAButton href="/ContactUS">讨论需求</GradientCTAButton>
            <GradientCTAButton href="/services" variant="outline">
              查看全部服务
            </GradientCTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
