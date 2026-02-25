import { Users, Sparkles, Globe2, Clock } from "lucide-react";

/**
 * ValuesGrid
 *
 * Why join ICR 优势条带，展示在 ICR 工作的体验与价值感受。
 */
const BENEFITS = [
  {
    icon: Users,
    title: "多学科团队协作",
    description:
      "与你背景各异的同事一起，从社会研究、商业洞察到数据建模，在真实项目中交叉学习、共创方案。",
  },
  {
    icon: Sparkles,
    title: "面向决策的影响力",
    description:
      "你的分析不会停留在幻灯片上，而是走进董事会、政府会议室或项目工作坊，成为行动讨论的一部分。",
  },
  {
    icon: Globe2,
    title: "国际视角与本地实践",
    description:
      "参与跨国或跨区域项目，在本地语境中落地国际成熟方法论，理解不同文化与制度环境下的决策逻辑。",
  },
  {
    icon: Clock,
    title: "可持续的职业成长",
    description:
      "在项目密度与个人节奏之间寻找平衡，通过结构化反馈与项目轮换，支持你长期而稳定地成长。",
  },
];

export function ValuesGrid() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.18em] text-slate-500">
            WHY JOIN ICR
          </p>
          <h2 className="serif-headline mt-2 text-2xl text-foreground md:text-3xl">
            在 ICR 工作是一种怎样的体验？
          </h2>
          <p className="mt-3 text-sm text-slate-600 md:text-base">
            我们更像一个紧密合作的项目团队，而不是层级森严的机构。下面这些，是许多同事在回顾 ICR 体验时提到的关键词。
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
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gs-blue/10 text-gs-blue">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-slate-900 md:text-base">
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
  );
}
