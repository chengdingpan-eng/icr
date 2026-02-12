import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  eyebrow?: string;
  title: string;
  highlighted?: string;
  description?: string;
  align?: "left" | "center";
  backgroundImageSrc?: string;
  childrenBelow?: ReactNode;
}

/**
 * 通用 Hero 区块：
 * - 支持可选背景图 + 蓝绿渐变蒙版
 * - 统一排版：大标题 + 可选高亮行 + 描述
 */
export function HeroSection({
  eyebrow,
  title,
  highlighted,
  description,
  align = "left",
  backgroundImageSrc,
  childrenBelow,
}: HeroSectionProps) {
  const isCenter = align === "center";

  return (
    <section className="relative overflow-hidden bg-white">
      {backgroundImageSrc && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={backgroundImageSrc}
            alt="Hero background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/80 via-brand-blue/40 to-brand-teal/40" />
        </div>
      )}

      {/* 若有背景图，文本改用浅色；否则使用深色主题 */}
      <div
        className={cn(
          "mx-auto max-w-5xl px-4 pt-12 pb-10 md:pt-16 md:pb-14",
          backgroundImageSrc ? "text-white" : "text-brand-navy",
          isCenter ? "text-center" : "text-left",
        )}
      >
        {eyebrow && (
          <span
            className={cn(
              "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
              backgroundImageSrc
                ? "bg-black/25 text-slate-100"
                : "bg-brand-blue/5 text-brand-blue",
            )}
          >
            {eyebrow}
          </span>
        )}

        <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
          {title}
          {highlighted && (
            <>
              <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-brand-blue to-brand-teal">
                {highlighted}
              </span>
            </>
          )}
        </h1>

        {description && (
          <p
            className={cn(
              "mt-4 max-w-2xl text-sm md:text-base",
              isCenter ? "mx-auto" : "",
              backgroundImageSrc ? "text-slate-100" : "text-slate-600",
            )}
          >
            {description}
          </p>
        )}

        {childrenBelow && <div className="mt-6">{childrenBelow}</div>}
      </div>
    </section>
  );
}
