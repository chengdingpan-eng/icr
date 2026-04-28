import Image from "next/image";
import { cn } from "@/lib/utils";

export interface StaggeredTimelineStep {
  id: string;
  /** 序号：支持 1..5 数字，也兼容字符串 */
  step: number | string;
  title: string;
  description: string;
  imageSrc: string;
  /** 可选要点列表，用于补充说明 */
  bullets?: string[];
  /** 可选图片 alt，不传则回退为标题 */
  imageAlt?: string;
}

interface StaggeredTimelineProps {
  steps: StaggeredTimelineStep[];
}

/**
 * StaggeredTimeline
 *
 * 将每一步的图片与对应文字组合为统一模块，围绕一条居中的竖直中轴线交错排布：
 * - 中轴线为冷灰细线，轴上圆形编号使用蓝/紫强调色，白字
 * - 奇数步模块在左侧，偶数步在右侧；编号位于中轴线上，并与模块纵向中点对齐
 * - 窄屏下收敛为一列，仍保留中轴与编号
 */
export function StaggeredTimeline({ steps }: StaggeredTimelineProps) {
  if (!steps?.length) return null;

  return (
    <div className="relative">
      {/* 中心竖线 */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-slate-300"
        aria-hidden="true"
      />

      <ol className="relative space-y-10 md:space-y-16">
        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;
          const numericStep =
            typeof step.step === "number"
              ? step.step
              : Number.parseInt(step.step, 10) || index + 1;
          const stepLabel = `步骤 ${numericStep}：${step.title}`;

          return (
            <li
              key={step.id}
              className={cn(
                "relative grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-stretch",
              )}
            >
              {/* 占位列 + 模块列：奇数在左，偶数在右 */}
              <div
                className={cn(
                  isLeft ? "md:col-start-1" : "md:col-start-2",
                  "md:flex md:justify-end",
                )}
              >
                <article className="relative flex flex-col overflow-hidden rounded-2xl bg-white text-slate-900 shadow-sm ring-1 ring-slate-200 md:max-w-xl">
                  <div className="relative h-40 w-full md:h-48">
                    <Image
                      src={step.imageSrc}
                      alt={step.imageAlt || step.title}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                  </div>

                  <div className="p-5 md:p-6">
                    <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-500 md:text-xs">
                      STEP {numericStep.toString().padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-base font-semibold text-slate-900 md:text-lg">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-700 md:text-base">
                      {step.description}
                    </p>
                    {step.bullets && step.bullets.length > 0 && (
                      <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                        {step.bullets.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              </div>

              {/* 中心编号圆点：与当前行模块的纵向中点对齐 */}
              <div
                 className="pointer-events-none absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-teal text-sm font-semibold text-white shadow-lg"
                 aria-label={stepLabel}
                 role="img"
              >
                {numericStep}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
