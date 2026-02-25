"use client";

import { MethodTimeline, type MethodStep } from "../components/MethodTimeline";
import { CareersHero } from "../components/CareersHero";
import { ValuesGrid } from "../components/ValuesGrid";
import { RoleCardGrid } from "../components/RoleCardGrid";
import { QuoteBlock } from "../components/QuoteBlock";
import { CareersCTA } from "../components/CareersCTA";

const PROCESS_STEPS: MethodStep[] = [
  {
    label: "01",
    title: "投递简历",
    description:
      "将你的简历和（如有）研究或分析作品发送至 info@icr-me.com，并简要说明你感兴趣的方向与地域。",
  },
  {
    label: "02",
    title: "初步交流",
    description:
      "我们会邀请你与团队进行一次 30 分钟左右的线上交流，互相了解背景、期待与工作方式。",
  },
  {
    label: "03",
    title: "案例练习",
    description:
      "针对不同岗位安排简短的案例或技能练习，模拟真实项目中的思考路径与协作方式。",
  },
  {
    label: "04",
    title: "Offer 与入职计划",
    description:
      "通过评估后，我们会与你沟通 Offer 与入职时间，并根据背景制定前几个月的成长与陪伴计划。",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      <CareersHero />

      <ValuesGrid />

      <RoleCardGrid />

      <QuoteBlock
        imageSrc="/images/ipsos_style/life_icr.png"
        quote="我们相信，研究的终点不是图表，而是组织真正采取的行动。好的研究，会让复杂问题变得可讨论、可选择、可执行。"
        author="ICR 团队 · Insight Consultancy & Research"
        description="因此，在项目中我们会花大量时间与客户一起澄清问题、对齐决策场景，并把数据转化为可以讨论的选项和具体的行动路线，而不是只交付一份厚重的报告。"
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.18em] text-slate-500">
              HIRING PROCESS
            </p>
            <h2 className="serif-headline mt-2 text-2xl text-foreground md:text-3xl">
              加入 ICR 的四个步骤
            </h2>
            <p className="mt-3 text-sm text-slate-600 md:text-base">
              我们希望招聘过程既高效透明，也给彼此足够的空间判断“是否真正适合长期合作”。下面是大多数岗位会经历的四个环节。
            </p>
          </div>
          <div className="mt-10">
            <MethodTimeline steps={PROCESS_STEPS} tone="light" />
          </div>
        </div>
      </section>

      <CareersCTA />
    </main>
  );
}
