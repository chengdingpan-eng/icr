"use client";

import Image from "next/image";
import Link from "next/link";
import { GradientCTAButton } from "../components/GradientCTAButton";

const EXPERTISE_SECTIONS = [
  {
    id: "public-policy",
    title: "公共政策与社会研究",
    description:
      "围绕公共服务质量、生活满意度、城市体验与公共安全等议题，我们为政府机构与公共部门设计长期追踪与专项研究，帮助理解公民需求与政策影响。",
    points: [
      "公民满意度与信任度追踪",
      "政策试点与项目评估",
      "舆论与媒体监测结合民调数据",
    ],
    image: "/images/ipsos_style/expertise_public.png",
  },
  {
    id: "consumer-retail",
    title: "消费、零售与品牌研究",
    description:
      "从品牌健康度到门店执行，我们帮助企业理解消费者在真实环境中的选择与体验，为产品创新、定价与渠道策略提供依据。",
    points: [
      "品牌认知与形象追踪",
      "新品概念与包装测试",
      "现代渠道与传统渠道零售盘点",
    ],
    image: "/images/ipsos_style/expertise_consumer.png",
  },
  {
    id: "experience-service",
    title: "客户体验与服务质量",
    description:
      "通过神秘顾客、体验旅程与接触点调研，帮助你识别体验短板，优化流程和前线服务表现。",
    points: [
      "全渠道客户旅程梳理",
      "神秘顾客与门店体验评估",
      "NPS / CSAT 等体验指标体系设计",
    ],
    image: "/images/ipsos_style/expertise_experience.png",
  },
  {
    id: "people-employee",
    title: "雇主品牌与员工体验",
    description:
      "围绕组织文化、激励机制与员工敬业度，我们协助 HR 与业务领导团队共同理解“在这里工作”的真实感受。",
    points: [
      "员工敬业度与敬业驱动因素分析",
      "领导力与管理者反馈项目",
      "雇主品牌与候选人体验研究",
    ],
    image: "/images/ipsos_style/expertise_employee.png",
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
            覆盖政策、市场与体验的完整链路
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-200 md:text-base">
            ICR 团队在公共政策、消费品与零售、服务与体验以及组织与人才等领域具有长期项目经验，能够在同一个研究框架下，连接不同利益相关方的视角。
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <GradientCTAButton href="/ContactUS">讨论你的研究场景</GradientCTAButton>
            <GradientCTAButton href="/services" variant="outline">
              查看相关服务模块
            </GradientCTAButton>
          </div>
        </div>
      </section>

      {/* Zig-zag 图文块 */}
      <section className="bg-brand-soft-bg py-16">
        <div className="mx-auto max-w-6xl space-y-16 px-4">
          {EXPERTISE_SECTIONS.map((section, index) => {
            const reversed = index % 2 === 1;
            return (
              <div
                key={section.id}
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
                    {section.title}
                  </h2>
                  <p className="mt-3 text-sm text-slate-700 md:text-base">
                    {section.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {section.points.map((item) => (
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
                  <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={640}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent" />
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
