"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { GradientCTAButton } from "./GradientCTAButton";

export interface CardGridItem {
  id: string;
  title: string;
  description: string;
  href?: string;
  category?: string;
  icon?: ReactNode;
}

interface CardGridProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  items: CardGridItem[];
  className?: string;
}

/**
 * 通用卡片网格：用于首页主服务入口、服务概览页等。
 * 约定：圆角 12（rounded-xl）、轻投影、hover 上浮，CTA 统一为中文“了解更多”。
 */
export function CardGrid({ title, subtitle, eyebrow, items, className }: CardGridProps) {
  return (
    <section className={cn("w-full", className)}>
      <div className="mx-auto max-w-7xl px-4 py-10">
        {(eyebrow || title || subtitle) && (
          <div className="mx-auto max-w-3xl text-center">
            {eyebrow && (
              <span className="inline-flex items-center rounded-full bg-brand-blue/5 px-3 py-1 text-xs font-medium text-brand-blue">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-brand-navy">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-sm md:text-base text-slate-600">{subtitle}</p>
            )}
          </div>
        )}

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {item.icon && (
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                  {item.icon}
                </div>
              )}

              {item.category && (
                <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                  {item.category}
                </div>
              )}

              <h3 className="mt-1 text-sm font-semibold text-brand-navy">{item.title}</h3>

              <p className="mt-2 flex-1 text-xs text-slate-600">{item.description}</p>

              {item.href && (
                <div className="mt-4">
                  <GradientCTAButton
                    href={item.href}
                    variant="outline"
                    className="w-full justify-center text-xs"
                  >
                    了解更多
                  </GradientCTAButton>
                </div>
              )}

              {!item.href && (
                <div className="mt-4 text-[11px] text-slate-400">
                  {/* 无链接时仅做信息展示，不展示按钮 */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
