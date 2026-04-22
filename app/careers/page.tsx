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
    title: "简历评估",
    description:
      "我们会根据职位的契合度与过往经验对简历进行初步评估。",
  },
  {
    label: "02",
    title: "初步甄选",
    description:
      "入围的候选人将受邀进行简短的电话或视频沟通。",
  },
  {
    label: "03",
    title: "深度面谈",
    description:
      "您将与相关的团队负责人及管理层进行 1-2 轮面试。",
  },
  {
    label: "04",
    title: "综合评审",
    description:
      "在发出正式录用通知前，我们将对专业技能、团队契合度及文化一致性进行最终评估。",
  },
  {
    label: "05",
    title: "录用与入职",
    description:
      "获选候选人将收到正式的录用通知及详细的入职计划。",
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
              加入 ICR 的五个步骤
            </h2>
            <p className="mt-3 text-sm text-slate-600 md:text-base">
              我们希望招聘过程既高效透明，也给彼此足够的空间判断“是否真正适合长期合作”。下面是大多数岗位会经历的五个环节。
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
