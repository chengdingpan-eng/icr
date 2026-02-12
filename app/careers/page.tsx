"use client";

import Link from "next/link";
import { Users, Sparkles, Globe2, Clock } from "lucide-react";
import { GradientCTAButton } from "../components/GradientCTAButton";
import { MethodTimeline, type MethodStep } from "../components/MethodTimeline";

const BENEFITS = [
  {
    icon: Users,
    title: "多学科团队协作",
    description: "与研究、数据分析、政策与商业背景多元的同事一起工作，在真实项目中快速成长。",
  },
  {
    icon: Sparkles,
    title: "面向决策的影响力",
    description: "你的分析会直接影响公共政策、客户体验或产品战略，而不仅仅是停留在幻灯片里。",
  },
  {
    icon: Globe2,
    title: "国际视角与本地实践",
    description: "有机会参与跨国研究项目，在本地语境中落地国际方法论与最佳实践。",
  },
  {
    icon: Clock,
    title: "弹性与可持续成长",
    description: "在保证项目质量的前提下，尊重个人节奏与生活边界，追求长期可持续的职业发展。",
  },
];

const PROCESS_STEPS: MethodStep[] = [
  {
    label: "01",
    title: "投递简历与作品",
    description: "将你的简历和（如有）研究或分析作品发送至 careers@icr-me.com，并简要说明感兴趣的方向。",
  },
  {
    label: "02",
    title: "初步交流与匹配",
    description: "我们会邀请你与团队进行一次 30 分钟线上交流，了解彼此的期待与匹配度。",
  },
  {
    label: "03",
    title: "案例练习或试题",
    description: "针对不同岗位，会安排简短的案例或技能练习，模拟真实项目中的思考方式。",
  },
  {
    label: "04",
    title: "Offer 与入职计划",
    description: "通过评估后，我们会与你沟通 Offer 与入职时间，并根据背景制定前几个月的成长计划。",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero 区 */}
      <section className="relative overflow-hidden bg-brand-navy py-10 text-white md:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(17,102,255,0.6),_transparent_65%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
            加入 ICR
            <br />
            用研究与数据参与重要决策
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-200 md:text-base">
            我们正在寻找热爱思考、愿意与复杂问题纠缠、又关心真实影响力的同事——无论你来自研究、数据、政策还是商业背景，只要愿意在证据与行动之间搭建桥梁，都欢迎你联系 ICR。
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <GradientCTAButton href="/ContactUS">与我们聊聊</GradientCTAButton>
            <GradientCTAButton href="mailto:careers@icr-me.com" variant="outline">
              发送简历至 careers@icr-me.com
            </GradientCTAButton>
          </div>
        </div>
      </section>

      {/* 福利 / 体验卡片 */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl">
              在 ICR 工作是一种怎样的体验？
            </h2>
            <p className="mt-3 text-sm text-slate-600 md:text-base">
              我们更像一个紧密合作的项目团队，而不是传统层级森严的机构。以下是许多同事提到的、关于 ICR 的几个关键词。
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {BENEFITS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-blue/10 text-brand-blue">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-brand-navy md:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-700 md:text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 招聘流程简要步骤 */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl">
              加入 ICR 的四个步骤
            </h2>
            <p className="mt-3 text-sm text-slate-600 md:text-base">
              我们尽量让招聘流程高效、透明，也给彼此足够的时间判断“是否真正适合一起长期合作”。
            </p>
          </div>
          <div className="mt-10">
            <MethodTimeline steps={PROCESS_STEPS} tone="light" />
          </div>
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-teal py-12 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">
              还不确定自己是否匹配某个岗位？
            </h2>
            <p className="mt-2 max-w-xl text-sm md:text-base">
              你可以先把简历与兴趣方向发给我们，我们会在未来合适的项目或职位出现时主动与你联系，也欢迎先约一场非正式的线上咖啡聊天。
            </p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <GradientCTAButton href="mailto:careers@icr-me.com">
              发送简历
            </GradientCTAButton>
            <Link
              href="/ContactUS"
              className="text-sm font-semibold text-white/90 hover:text-white"
            >
              通过联系我们页面留下信息 →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
