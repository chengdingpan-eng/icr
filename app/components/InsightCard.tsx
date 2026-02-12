"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export interface InsightCardProps {
  href?: string;
  category: string;
  title: string;
  description: string;
  date?: string;
  readingTime?: string;
  imageSrc?: string;
}

/**
 * 洞察/新闻卡片：统一首页与 /insights 列表页的样式。
 */
export function InsightCard({
  href,
  category,
  title,
  description,
  date,
  readingTime,
  imageSrc = "/images/carousel3.jpeg",
}: InsightCardProps) {
  const cardContent = (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-2 text-[11px] text-slate-500">
          <span className="rounded-full bg-brand-blue/10 px-2 py-0.5 font-medium text-brand-blue">
            {category}
          </span>
          {(date || readingTime) && (
            <span className="h-1 w-1 rounded-full bg-slate-300" />
          )}
          {date && <span>{date}</span>}
          {readingTime && <span>{readingTime}</span>}
        </div>

        <h3 className="mt-3 line-clamp-2 text-sm font-semibold text-brand-navy">
          {title}
        </h3>

        <p className="mt-2 line-clamp-3 text-xs text-slate-600">
          {description}
        </p>

        <div className="mt-4 flex items-center text-xs font-semibold text-brand-blue">
          <span>阅读全文</span>
          <ArrowRight className="ml-1 h-3 w-3" />
        </div>
      </div>
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
