import Image from "next/image";
import { cn } from "@/lib/utils";

interface QuoteBlockProps {
  imageSrc: string;
  quote: string;
  author: string;
  description?: string;
  className?: string;
}

/**
 * QuoteBlock
 *
 * 品牌与价值主张引用段落，覆盖在黑白摄影背景之上。
 */
export function QuoteBlock({
  imageSrc,
  quote,
  author,
  description,
  className,
}: QuoteBlockProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-y border-slate-200 bg-black text-white",
        className,
      )}
    >
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={quote}
          fill
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-slate-300">
            我们的信念
          </p>
          <p className="serif-headline mt-4 text-2xl leading-relaxed md:text-3xl">
            {quote}
          </p>
          <p className="mt-4 text-xs font-medium text-slate-200 md:text-sm">
            {author}
          </p>
          {description ? (
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-200 md:text-base">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
