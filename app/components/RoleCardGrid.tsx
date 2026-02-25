import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface RoleCard {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  imageSrc: string;
}

const ROLE_CARDS: RoleCard[] = [
  {
    id: "research-analyst",
    title: "研究分析师 (Research Analyst)",
    description:
      "负责从问卷设计、数据清洗到结果解读的全流程分析，是项目团队中最接近数据与图表的人。",
    highlights: [
      "参与定量问卷设计与样本方案讨论",
      "在 Excel / BI 工具中完成数据处理与可视化",
      "与项目负责人一起梳理图表背后的故事线",
    ],
    imageSrc: "/images/ipsos_style/roles_research_analyst.png",
  },
  {
    id: "qualitative-researcher",
    title: "定性研究员 (Qualitative Researcher)",
    description:
      "与受访者对话、观察场景与语境，将零散的故事整理为有逻辑的洞察结构。",
    highlights: [
      "设计访谈提纲与小组讨论流程",
      "主持或协助开展深度访谈与焦点小组",
      "在大量逐字稿中提炼主题与洞察框架",
    ],
    imageSrc: "/images/ipsos_style/roles_qualitative_researcher.png",
  },
  {
    id: "data-analyst",
    title: "数据分析师 (Data Analyst)",
    description:
      "连接研究数据与业务数据，搭建模型、看趋势、做可视化，让复杂数据可被决策者读取。",
    highlights: [
      "整合调查数据与运营指标、外部公开数据",
      "搭建监测报表与仪表盘，支持长期追踪",
      "探索性分析，识别异常模式与机会点",
    ],
    imageSrc: "/images/ipsos_style/roles_data_analyst.png",
  },
  {
    id: "strategy-consultant",
    title: "战略咨询顾问 (Strategy Consultant)",
    description:
      "把研究结论转化为清晰的决策选项，与客户一起讨论机会、风险与行动路径。",
    highlights: [
      "在项目早期参与问题澄清与框架设计",
      "将研究结果整合为决策备选方案与影响分析",
      "与客户团队共创行动路线图与后续评估指标",
    ],
    imageSrc: "/images/ipsos_style/roles_strategy_consultant.png",
  },
];

/**
 * RoleCardGrid
 *
 * 展示示例岗位入口卡片，帮助候选人理解不同角色的侧重点。
 */
export function RoleCardGrid() {
  return (
    <section id="roles" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.18em] text-slate-500">
            ROLE EXAMPLES
          </p>
          <h2 className="serif-headline mt-2 text-2xl text-foreground md:text-3xl">
            我们正在寻找怎样的同事？
          </h2>
          <p className="mt-3 text-sm text-slate-600 md:text-base">
            以下是几类典型岗位的角色画像。实际招募会根据项目组合与团队情况灵活调整，也欢迎你在简历中说明希望结合的方向。
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {ROLE_CARDS.map((role) => (
            <article
              key={role.id}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-40 w-full overflow-hidden bg-slate-200">
                <Image
                  src={role.imageSrc}
                  alt={role.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5 text-sm text-slate-700">
                <h3 className="text-base font-semibold text-slate-900">
                  {role.title}
                </h3>
                <p className="text-sm leading-relaxed">{role.description}</p>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-xs md:text-sm">
                  {role.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span>欢迎附上相关作品或项目案例</span>
                  <Link
                    href="mailto:info@icr-me.com?subject=%E5%BA%94%E8%81%98%20ICR%20%E8%81%8C%E4%BD%8D"
                    className={cn(
                      "font-semibold text-gs-blue hover:underline underline-offset-4",
                    )}
                  >
                    发送简历
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
