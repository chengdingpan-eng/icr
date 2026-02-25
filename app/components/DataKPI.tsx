import { cn } from "@/lib/utils";

interface KpiItem {
  label: string;
  value: string;
  description: string;
}

interface DataKPIProps {
  eyebrow?: string;
  title: string;
  description?: string;
  items: KpiItem[];
  className?: string;
}

/**
 * DataKPI
 *
 * 用于展示关键数字与说明的组件，强调冷灰背景与高对比数字。
 */
export function DataKPI({
  eyebrow,
  title,
  description,
  items,
  className,
}: DataKPIProps) {
  if (!items?.length) return null;

  return (
    <section
      className={cn(
        "border-y border-slate-200 bg-slate-50 py-14 md:py-16",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow ? (
            <p className="text-xs font-semibold tracking-[0.18em] text-slate-500">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="serif-headline mt-2 text-2xl text-foreground md:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-sm text-slate-600 md:text-base">
              {description}
            </p>
          ) : null}
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-start rounded-xl border border-slate-200 bg-white px-5 py-6"
            >
              <div className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                {item.label}
              </div>
              <div className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                {item.value}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 md:text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
