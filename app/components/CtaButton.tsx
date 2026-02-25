import Link from "next/link";
import { cn } from "@/lib/utils";

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}

/**
 * CtaButton
 *
 * GS 风格的 CTA 按钮，分为实心蓝色和文字型两种变体。
 */
export function CtaButton({
  href,
  children,
  variant = "primary",
  className,
}: CtaButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition-colors";

  const variantClasses =
    variant === "primary"
      ? "bg-gs-blue text-white hover:brightness-110"
      : "text-gs-blue hover:underline underline-offset-4";

  return (
    <Link href={href} className={cn(baseClasses, variantClasses, className)}>
      {children}
    </Link>
  );
}
