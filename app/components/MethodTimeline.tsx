"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { IconBadge } from "./IconBadge";

export interface MethodStep {
  label?: string;
  title: string;
  description: string;
  icon?: ReactNode;
}

interface MethodTimelineProps {
  steps: MethodStep[];
  /** 深色背景（默认）或浅色背景 */
  tone?: "dark" | "light";
  className?: string;
}

/**
 * 通用方法论时间线组件：
 * - 渐变圆形编号节点 + 标题 + 描述
 * - 可用于 /services 等页面的方法论展示
 */
export function MethodTimeline({ steps, tone = "dark", className }: MethodTimelineProps) {
  const isDark = tone === "dark";

  return (
    <div className={cn("relative", className)}>
      {/* 竖向连接线 */}
      <div
        className={cn(
          "pointer-events-none absolute left-5 top-4 bottom-0 w-0.5",
          isDark ? "bg-brand-blue/35" : "bg-brand-blue/20",
        )}
        aria-hidden
      />

      <div className="space-y-8 pl-2">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-6">
            <div className="relative z-10 flex flex-col items-center">
              <IconBadge
                variant="solid"
                className="h-10 w-10"
                icon={
                  step.icon ?? (
                    <span className="text-sm font-semibold">
                      {step.label ?? index + 1}
                    </span>
                  )
                }
              />
            </div>

            <div>
              <h4
                className={cn(
                  "text-sm font-semibold",
                  isDark ? "text-white" : "text-brand-navy",
                )}
              >
                {step.title}
              </h4>
              <p
                className={cn(
                  "mt-2 text-sm",
                  isDark ? "text-slate-200" : "text-slate-600",
                )}
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
