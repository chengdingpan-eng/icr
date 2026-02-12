"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GradientCTAButtonProps {
  href?: string;
  children: ReactNode;
  className?: string;
  variant?: "solid" | "outline";
}

/**
 * 统一的品牌化 CTA 按钮：
 * - solid：蓝绿渐变实心按钮，适合作为主行动
 * - outline：品牌色描边按钮，适合作为次要行动
 */
export function GradientCTAButton({
  href,
  children,
  className,
  variant = "solid",
}: GradientCTAButtonProps) {
  const baseClasses =
    variant === "solid"
      ? "bg-gradient-to-r from-brand-blue to-brand-teal text-white shadow-sm hover:shadow-md hover:brightness-105"
      : "border border-brand-teal bg-transparent text-brand-teal hover:bg-brand-teal hover:text-brand-navy";

  const content = (
    <Button
      className={cn(
        "px-5 py-2.5 text-sm font-semibold transition-all",
        baseClasses,
        className,
      )}
    >
      {children}
    </Button>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex">
        {content}
      </Link>
    );
  }

  return content;
}
