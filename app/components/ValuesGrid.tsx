import { Users, Sparkles, Globe2, Clock } from "lucide-react";
import { careersTranslations } from "../translations/careersTranslations";

/**
 * ValuesGrid
 *
 * Why join ICR 优势条带，展示在 ICR 工作的体验与价值感受。
 */
const cards = careersTranslations.zh.section1.cards;

const BENEFITS = [
  {
    icon: Users,
    title: cards.purpose.title,
    description: cards.purpose.description,
  },
  {
    icon: Sparkles,
    title: cards.collaborative.title,
    description: cards.collaborative.description,
  },
  {
    icon: Globe2,
    title: cards.learning.title,
    description: cards.learning.description,
  },
  {
    icon: Clock,
    title: cards.exposure.title,
    description: cards.exposure.description,
  },
  {
    icon: Users,
    title: cards.culture.title,
    description: cards.culture.description,
  },
  {
    icon: Sparkles,
    title: cards.impact.title,
    description: cards.impact.description,
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
