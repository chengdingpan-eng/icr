import { cn } from "@/lib/utils";

export type SerifHeadlineAlign = "left" | "center";
export type SerifHeadlineStroke = "none" | "light";
export type SerifHeadlineTone = "default" | "onDark";

interface SerifHeadlineProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: SerifHeadlineAlign;
  stroke?: SerifHeadlineStroke;
  tone?: SerifHeadlineTone;
  className?: string;
}

/**
 * SerifHeadline
 *
 * 大号衬线标题组件，配合 layout.tsx 中注入的 `--font-serif` 变量使用。
 * 仅负责排版与对齐，不包含具体的布局逻辑。
 */
export function SerifHeadline({
  eyebrow,
  title,
  subtitle,
  align = "left",
  stroke = "none",
  tone = "default",
  className,
}: SerifHeadlineProps) {
  const alignmentClasses =
    align === "center" ? "items-center text-center" : "items-start text-left";

  const strokeClass = stroke === "light" ? "serif-headline-stroke" : "";
  const titleColorClass = tone === "onDark" ? "text-white" : "text-foreground";
  const subtitleColorClass =
    tone === "onDark" ? "text-slate-100" : "text-slate-600";

  return (
    <div className={cn("flex flex-col gap-4", alignmentClasses, className)}>
      {eyebrow ? (
        <span className="text-xs font-medium tracking-[0.18em] text-slate-500">
          {eyebrow}
        </span>
      ) : null}

      <h1
        className={cn(
          "serif-headline text-3xl tracking-tight sm:text-4xl lg:text-5xl",
          titleColorClass,
          strokeClass,
        )}
      >
        {title}
      </h1>

      {subtitle ? (
        <p
          className={cn(
            "max-w-xl text-sm leading-relaxed md:text-base",
            subtitleColorClass,
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
