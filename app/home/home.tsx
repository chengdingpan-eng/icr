import Image from "next/image";
import { SerifHeadline } from "../components/SerifHeadline";
import { InsightStrip } from "../components/InsightStrip";
import { FeatureBlocks } from "../components/FeatureBlocks";
import { DataKPI } from "../components/DataKPI";
import { QuoteBlock } from "../components/QuoteBlock";
import { CtaButton } from "../components/CtaButton";

const INSIGHTS = [
  {
    id: "public-services-index",
    title: "公共服务体验指数：从居民视角审视服务质量",
    description:
      "基于多城市样本的量化研究，评估居民对教育、医疗、交通等关键公共服务的真实体验。",
    date: "2025-12",
    tag: "公共政策与社会研究",
    imageSrc: "/images/gs_style/gs_insight_1.png",
    href: "/services",
  },
  {
    id: "consumer-confidence",
    title: "消费信心与价格敏感度：零售与电商的下一轮增长",
    description:
      "通过连续追踪调查，识别不同收入与年龄群体对价格、品牌与渠道的敏感程度。",
    date: "2025-11",
    tag: "消费与零售洞察",
    imageSrc: "/images/gs_style/gs_insight_2.png",
    href: "/services",
  },
  {
    id: "employee-experience",
    title: "员工体验与组织韧性：从满意度到留任意愿",
    description:
      "结合定量问卷与深度访谈，拆解驱动员工投入度与组织粘性的关键因子。",
    date: "2025-10",
    tag: "雇主品牌与员工体验",
    imageSrc: "/images/gs_style/gs_insight_3.png",
    href: "/services",
  },
];

const FEATURE_BLOCKS = [
  {
    id: "quantitative",
    title: "以证据为基础的决策",
    description:
      "基于稳健的定量数据与严格的方法论，让关键决策建立在可信的证据之上。",
    imageSrc: "/images/gs_style/blocks_icr_quant.png",
    href: "/services",
  },
  {
    id: "qualitative",
    title: "情境化洞察",
    description:
      "通过定性研究和本地语境理解，将数字背后的故事还原为可讨论的洞察。",
    imageSrc: "/images/gs_style/blocks_icr_qual.png",
    href: "/services",
  },
  {
    id: "tracking",
    title: "持续监测",
    description:
      "构建长期追踪框架，及时捕捉趋势变化，为政策与业务提供实时参照。",
    imageSrc: "/images/gs_style/blocks_icr_tracking.png",
    href: "/services",
  },
  {
    id: "retail-shopper",
    title: "实用的市场洞察",
    description:
      "把零售现场与渠道调研转化为可落地的策略建议，而不是抽象结论。",
    imageSrc: "/images/gs_style/blocks_icr_retail.png",
    href: "/services",
  },
  {
    id: "market-assessment",
    title: "清晰的战略市场认知",
    description:
      "在复杂市场信息中梳理优先级与机会区，帮助你看清下一步布局。",
    imageSrc: "/images/gs_style/blocks_icr_market.png",
    href: "/services",
  },
  {
    id: "strategic-consulting",
    title: "可执行的战略方案",
    description:
      "将研究结果整理为清晰、可执行的方案，使不同职能团队都能对齐行动。",
    imageSrc: "/images/gs_style/blocks_icr_consulting.png",
    href: "/services",
  },
];

const KPI_ITEMS = [
  {
    label: "访谈执行量",
    value: "100,000+",
    description:
      "涵盖面对面、电话与数字化收集方式，持续累积的真实反馈。",
  },
  {
    label: "已交付项目",
    value: "100+",
    description:
      "跨公共政策、消费与零售等多个领域完成的研究与咨询项目。",
  },
  {
    label: "团队综合执业经验",
    value: "55+",
    description:
      "核心团队在研究、分析与咨询领域累积的年限经验。",
  },
];

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      {/* 顶部 Hero：全宽摄影背景 + 衬线大标题 */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-black text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/gs_style/gs_home_hero.png"
            alt="团队在城市高楼会议室内围绕数据讨论"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:py-20 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <SerifHeadline
              eyebrow="ICR · INSIGHT CONSULTANCY & RESEARCH"
              title="塑造下一阶段市场与政策格局的洞见"
              subtitle="我们用严谨的研究与分析，为公共部门与企业在关键节点提供可以依赖的证据与观点。"
              stroke="light"
              tone="onDark"
            />

            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton href="/ContactUS">讨论项目需求</CtaButton>
              <CtaButton href="/services" variant="ghost">
                浏览我们的服务
              </CtaButton>
            </div>
          </div>

          <div className="max-w-sm border-l border-white/25 pl-6 text-sm leading-relaxed text-slate-100 md:pl-8">
            <p>
              在充满不确定性的环境中，好的研究不是堆叠数据，而是帮助决策者在有限时间内抓住少数关键问题。
            </p>
            <p className="mt-3">
              ICR 将国际方法论、本地团队经验与对情境的理解结合起来，让研究真正进入决策桌面，而不是停留在报告封面。
            </p>
          </div>
        </div>
      </section>

      {/* 最新洞见条带 */}
      <InsightStrip items={INSIGHTS} />

      {/* 业务板块入口：六大服务 */}
      <FeatureBlocks
        eyebrow="我们的服务"
        title="为什么选择 ICR"
        description="我们帮助组织实现从证据到洞察，再从洞察到清晰、可论证的决策的转变。"
        items={FEATURE_BLOCKS}
      />

      {/* 关键数据 KPI */}
      <DataKPI
        eyebrow="ICR IN NUMBERS"
        title="用真实项目沉淀下来的关键数字"
        description="每一个数字背后，都是一次与客户团队共同完成的研究与决策过程。"
        items={KPI_ITEMS}
      />

      {/* 品牌与价值主张引用块 */}
      <QuoteBlock
        imageSrc="/images/gs_style/gs_blocks_1.png"
        quote="我们相信，研究的终点不是图表，而是组织真正采取的行动。好的研究，会让复杂问题变得可讨论、可选择、可执行。"
        author="ICR 团队 · Insight Consultancy & Research"
        description="因此，我们从一开始就与决策者一起界定问题与成功标准，在执行过程中保持对话，在交付阶段共同打磨行动路线，而不是简单递交一份厚重的报告。"
      />

      {/* 底部 CTA 横幅 */}
      <section className="border-t border-slate-200 bg-slate-100 py-10 md:py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="serif-headline text-xl text-foreground md:text-2xl">
              让下一次重要决策，从一次更好的研究开始
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600 md:text-base">
              无论你正在规划新政策评估、品牌与体验研究，还是希望搭建长期追踪体系，我们都可以一起设计合适的研究与分析路径。
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <CtaButton href="/ContactUS">讨论需求</CtaButton>
            <CtaButton href="/services" variant="ghost">
              了解我们的服务
            </CtaButton>
          </div>
        </div>
      </section>
    </div>
  );
}
