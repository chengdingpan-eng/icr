import Image from "next/image";
import Link from "next/link";

interface IntelligenceCardProps {
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  href?: string;
}

/**
 * IntelligenceCard
 *
 * 参考 Kantar Solutions Intelligence 栏目样式的紫色渐变卡片：
 * - 顶部为摄影封面
 * - 下方为标题、概要与 2–3 条要点
 * - 底部提供 "Learn More" CTA
 */
export function IntelligenceCard({
  title,
  description,
  bullets,
  imageSrc,
  href = "/services",
}: IntelligenceCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900 via-indigo-800 to-fuchsia-700 text-white shadow-lg ring-1 ring-violet-500/30">
      <div className="relative h-24 w-full overflow-hidden bg-black/30">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(min-width: 1024px) 30vw, 100vw"
          className="object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-sm font-semibold md:text-base">{title}</h3>
        <p className="text-xs text-violet-100/90 md:text-sm">{description}</p>

        {bullets?.length ? (
          <ul className="mt-1 space-y-1 text-[11px] text-violet-100/90 md:text-xs">
            {bullets.map((item, index) => (
              <li key={index} className="flex gap-2">
                <span className="mt-[3px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-200" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-4 flex items-center justify-between text-[11px] font-semibold md:text-xs">
          <Link
            href={href}
            className="inline-flex items-center gap-1 text-white transition-colors hover:text-violet-100"
          >
            <span>Learn More</span>
            <span aria-hidden className="text-sm">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
