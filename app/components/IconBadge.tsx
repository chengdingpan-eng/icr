"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface IconBadgeProps {
  icon: ReactNode;
  variant?: "solid" | "subtle";
  className?: string;
}

/**
 * 小型图标徽章组件，用于服务卡片、时间线节点等场景。
 * 统一使用品牌蓝/蓝绿配色，支持实心与浅色两种风格。
 */
export function IconBadge({ icon, variant = "subtle", className }: IconBadgeProps) {
  const baseClasses =
    variant === "solid"
      ? "bg-gradient-to-br from-brand-blue to-brand-teal text-white shadow-sm"
      : "bg-brand-blue/10 text-brand-blue";

  return (
    <div
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full",
        baseClasses,
        className,
      )}
    >
      {icon}
    </div>
  );
}
