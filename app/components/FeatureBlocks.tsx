import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FeatureBlockItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

interface FeatureBlocksProps {
  eyebrow?: string;
  title: string;
  description?: string;
  items: FeatureBlockItem[];
  className?: string;
}

/**
 * FeatureBlocks
 *
 * 业务板块入口卡片网格，采用细边框与摄影封面。
 */
export function FeatureBlocks({
  eyebrow,
  title,
  description,
  items,
  className,
}: FeatureBlocksProps) {
  if (!items?.length) return null;

  return (
    <section className={cn("bg-white py-14 md:py-16", className)}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
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

        <div className="mt-8 grid gap-6 md:grid-cols-2">
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
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0 grayscale"
                />
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
                <span className="mt-auto text-xs font-semibold text-gs-blue">
                  了解更多
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
