import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface InsightItem {
  id: string;
  title: string;
  description: string;
  date: string;
  tag: string;
  imageSrc: string;
  href: string;
}

interface InsightStripProps {
  items: InsightItem[];
  className?: string;
}

/**
 * InsightStrip
 *
 * 最新洞见/动态条带组件，支持 3–4 列网格展示。
 */
export function InsightStrip({ items, className }: InsightStripProps) {
  if (!items?.length) return null;

  return (
    <section
      className={cn(
        "border-b border-slate-200 bg-white py-10 md:py-12",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4 pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="serif-headline text-2xl text-foreground md:text-3xl">
              最新洞见与动态
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600">
              紧贴市场与政策动向的研究摘要，帮助你在繁杂信息中把握真正重要的变化。
            </p>
          </div>

          <Link
            href="/services"
            className="text-xs font-semibold text-gs-blue underline-offset-4 hover:underline"
          >
            浏览与项目相关的更多案例
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50 transition-colors hover:border-slate-400"
            >
              <div className="relative h-40 w-full overflow-hidden bg-slate-200">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-all duration-500 brightness-75 saturate-75 group-hover:scale-105 group-hover:brightness-100 group-hover:saturate-100"
                />
              </div>

              <div className="flex flex-1 flex-col gap-2 p-4">
                <div className="flex items-center justify-between text-[11px] font-medium text-slate-500">
                  <span>{item.tag}</span>
                  <span>{item.date}</span>
                </div>
                <h3 className="line-clamp-2 text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="line-clamp-3 text-xs leading-relaxed text-slate-600">
                  {item.description}
                </p>
                <span className="mt-auto pt-1 text-xs font-semibold text-gs-blue">
                  查看详情
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
