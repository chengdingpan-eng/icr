"use client";

import Link from "next/link";
import { Users, Compass, HeartHandshake } from "lucide-react";
import { GradientCTAButton } from "../components/GradientCTAButton";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero 区 */}
      <section className="relative overflow-hidden bg-brand-navy py-10 text-white md:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(17,102,255,0.6),_transparent_65%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
            关于 ICR
            <br />
            Insight Consultancy &amp; Research
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-200 md:text-base">
            ICR 是一家专注于“大数据驱动的研究与咨询”的独立机构，服务覆盖公共部门、消费品与零售、金融服务以及体验驱动型行业。我们相信，高质量的证据与洞察，能够帮助组织在复杂环境中做出更有信心的决策。
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <GradientCTAButton href="/ContactUS">与团队取得联系</GradientCTAButton>
            <GradientCTAButton href="/services" variant="outline">
              了解我们的服务组合
            </GradientCTAButton>
          </div>
        </div>
      </section>

      {/* 公司简介卡片组 */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <Users className="h-6 w-6 text-brand-blue" />
              <h2 className="mt-3 text-sm font-semibold text-brand-navy md:text-base">
                我们是谁
              </h2>
              <p className="mt-2 text-xs text-slate-700 md:text-sm">
                ICR 由多名拥有国际研究机构与本地咨询公司背景的合伙人创立，总部位于中东地区，合作网络覆盖多国。我们既熟悉全球方法论标准，也深刻理解本地文化与监管环境。
              </p>
            </div>

            <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <Compass className="h-6 w-6 text-brand-blue" />
              <h2 className="mt-3 text-sm font-semibold text-brand-navy md:text-base">
                我们做什么
              </h2>
              <p className="mt-2 text-xs text-slate-700 md:text-sm">
                围绕“研究 · 分析 · 战略 · 培训”四大模块，ICR 提供从研究设计、数据分析到洞察呈现与能力共建的一体化服务，帮助客户搭建长期可迭代的洞察体系，而不仅仅是完成一次项目。
              </p>
            </div>

            <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <HeartHandshake className="h-6 w-6 text-brand-blue" />
              <h2 className="mt-3 text-sm font-semibold text-brand-navy md:text-base">
                我们的信念
              </h2>
              <p className="mt-2 text-xs text-slate-700 md:text-sm">
                我们坚持“诚实呈现证据、清晰讲述故事、务实推动行动”：在研究过程中保持方法透明，在分析过程中敢于呈现不那么“好看”的结果，在建议阶段共同寻找现实可行的方案。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 工作方式与价值观 */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl">
                与客户一起工作的方式
              </h2>
              <p className="mt-3 text-sm text-slate-700 md:text-base">
                在 ICR，每一个项目都从一次认真的对话开始——我们会花时间理解你的组织背景、利益相关方以及决策节奏，而不仅仅是“把问卷发出去”。
              </p>
              <p className="mt-2 text-sm text-slate-700 md:text-base">
                我们倾向于采用“多阶段输出”的方式工作：在数据收集与分析过程中，通过中期分享、工作坊与数据探索会议，持续与团队对齐，帮助你在项目尚未结束时就开始使用这些发现。
              </p>
              <p className="mt-2 text-sm text-slate-700 md:text-base">
                这种方式让研究不再只是年终的一份报告，而是贯穿全年决策节奏和项目管线的“学习循环”。
              </p>
            </div>

            <div className="space-y-6 rounded-2xl bg-brand-soft-bg p-6 text-sm text-slate-700">
              <h3 className="text-base font-semibold text-brand-navy">
                我们坚持的三件事
              </h3>
              <div>
                <h4 className="text-sm font-semibold text-brand-navy">
                  1. 诚实的证据
                </h4>
                <p className="mt-1">
                  不夸大、不隐去不利结果，用清晰的假设与限制条件呈现研究发现，让决策者明白“数据能说到哪里，也说不到哪里”。
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-brand-navy">
                  2. 清晰的故事线
                </h4>
                <p className="mt-1">
                  不用堆砌图表取代思考，而是以问题为主线，用关键洞察与案例构建“为什么值得在意、我们可以做什么”的叙事结构。
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-brand-navy">
                  3. 贴近现实的建议
                </h4>
                <p className="mt-1">
                  输出的不是抽象口号，而是考虑到资源、组织结构与执行约束的具体行动建议，并与团队一起评估优先级与影响路径。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 区块 */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-teal py-12 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">
              想了解 ICR 是否适合作为你的长期合作伙伴？
            </h2>
            <p className="mt-2 max-w-xl text-sm md:text-base">
              我们欢迎从一次小型试点或内部分享会开始合作，通过真实项目和团队互动，让彼此更好地理解适配度与价值空间。
            </p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <GradientCTAButton href="/ContactUS">预约介绍会</GradientCTAButton>
            <Link
              href="/why-icr"
              className="text-sm font-semibold text-white/90 hover:text-white"
            >
              了解为何组织选择 ICR →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
