"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { InsightCard } from "../components/InsightCard";
import { GradientCTAButton } from "../components/GradientCTAButton";
import { HeroSection } from "../components/HeroSection";

const TAGS = ["全部", "研究洞察", "分析报告", "新闻动态"] as const;

type Tag = (typeof TAGS)[number];

const INSIGHTS = [
  {
    id: "citizen-confidence",
    category: "研究洞察",
    title: "GCC citizen confidence tracker 2025",
    description:
      "示例卡片：长期追踪公民对公共服务、生活成本与未来预期的信心指数。",
    date: "2025-01-18",
    readingTime: "8 min read",
    imageSrc: "/images/carousel2.jpeg",
    tags: ["全部", "研究洞察"],
  },
  {
    id: "retail-panel",
    category: "分析报告",
    title: "Modern trade retail panel in KSA",
    description:
      "示例卡片：结合门店审计与消费者调研，评估促销执行与货架表现。",
    date: "2024-11-03",
    readingTime: "6 min read",
    imageSrc: "/images/carousel3.jpeg",
    tags: ["全部", "分析报告"],
  },
  {
    id: "analytics-lab",
    category: "研究洞察",
    title: "Building an insight lab for public policy",
    description:
      "示例卡片：如何在政府部门内部搭建轻量级分析实验室，提升证据使用率。",
    date: "2024-07-22",
    readingTime: "9 min read",
    imageSrc: "/images/carousel4.jpeg",
    tags: ["全部", "研究洞察"],
  },
  {
    id: "icr-news",
    category: "新闻动态",
    title: "ICR joins regional public opinion research network",
    description:
      "示例卡片：仅作为布局占位，展示新闻类内容在列表中的位置与样式。",
    date: "2024-03-15",
    readingTime: "3 min read",
    imageSrc: "/images/globe1.jpg",
    tags: ["全部", "新闻动态"],
  },
];

export default function InsightsPage() {
  const [activeTag, setActiveTag] = useState<Tag>("全部");

  const filtered = useMemo(
    () =>
      activeTag === "全部"
        ? INSIGHTS
        : INSIGHTS.filter((item) => item.tags.includes(activeTag)),
    [activeTag],
  );

  return (
    <main className="min-h-screen bg-background">
      <HeroSection
        backgroundImageSrc="/images/carousel4.jpeg"
        eyebrow="Insights & News"
        title="洞察、报告与新闻动态"
        highlighted="示例页面：用于展示未来内容的信息架构"
        description="本页内容为静态占位示例，帮助对齐版式结构与筛选方式。后续可接入真实洞察、白皮书与新闻稿。"
        align="center"
      />

      {/* 分类筛选标签（静态标签，前端轻量过滤，不接后端） */}
      <section className="bg-white pb-4 pt-2">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                  activeTag === tag
                    ? "border-brand-blue bg-brand-blue text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-brand-blue/60 hover:text-brand-blue"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 列表 + 加载更多占位 */}
      <section className="bg-brand-soft-bg py-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <InsightCard
                key={item.id}
                href="#" // 后续可替换为具体详情页路由
                category={item.category}
                title={item.title}
                description={item.description}
                date={item.date}
                readingTime={item.readingTime}
                imageSrc={item.imageSrc}
              />
            ))}
          </div>

          {/* 分页 / 更多加载占位 */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 text-sm">
            <p className="text-slate-500">
              这里可以接入分页或“加载更多”逻辑，目前为静态占位按钮。
            </p>
            <GradientCTAButton variant="outline" className="px-6">
              加载更多内容（占位）
            </GradientCTAButton>
          </div>

          {/* 返回首页或服务入口 */}
          <div className="mt-8 flex items-center justify-between text-xs text-slate-500">
            <Link
              href="/"
              className="font-semibold text-brand-blue hover:text-brand-teal"
            >
              返回首页
            </Link>
            <Link
              href="/services"
              className="font-semibold text-brand-blue hover:text-brand-teal"
            >
              查看服务如何支持这些洞察 →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
