import Image from "next/image";
import { cn } from "@/lib/utils";

export interface StaggeredTimelineStep {
  id: string;
  step: string;
  title: string;
  description: string;
  imageSrc: string;
}

interface StaggeredTimelineProps {
  steps: StaggeredTimelineStep[];
}

/**
 * StaggeredTimeline
 *
 * 参考 Kantar Explore Solutions 样式的左右错列时间线：
 * - 在中线两侧交错排布步骤卡片与配图
 * - 中心使用圆形编号节点强调节奏
 */
export function StaggeredTimeline({ steps }: StaggeredTimelineProps) {
  if (!steps?.length) return null;

  return (
    <div className="relative">
      {/* 中心竖线，仅在中大屏显示 */}
      <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-violet-300/40 md:block" />

      <div className="space-y-10">
        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;
          const stepNumber = step.step || `0${index + 1}`;

          return (
            <div
              key={step.id}
              className={cn(
                "relative grid gap-6 md:grid-cols-2 md:items-center",
              )}
            >
              {/* 文本卡片 */}
              <div
                className={cn(
                  "order-2 md:order-1",
                  isLeft ? "md:col-start-1" : "md:col-start-2",
                )}
              >
                <div className="rounded-2xl bg-slate-800/80 p-5 shadow-lg ring-1 ring-slate-700/70">
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-violet-200 md:text-xs">
                    STEP {stepNumber}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-white md:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-100/90 md:text-base">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* 配图区域 */}
              <div
                className={cn(
                  "order-1 md:order-2",
                  isLeft ? "md:col-start-2" : "md:col-start-1",
                )}
              >
                <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-slate-700/60">
                  <Image
                    src={step.imageSrc}
                    alt={step.title}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* 中心编号圆点，仅在中大屏显示 */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-violet-500 text-sm font-semibold text-white shadow-lg md:flex">
                {stepNumber}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
