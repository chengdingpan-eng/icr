"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { OfficeCard, type OfficeCardProps } from "./OfficeCard";

interface Region {
  id: string;
  label: string;
  description: string;
  offices: OfficeCardProps[];
}

const REGIONS: Region[] = [
  {
    id: "middle-east",
    label: "中东",
    description:
      "覆盖海湾合作委员会（GCC）主要市场，我们与公共部门及企业客户在政策评估、体验研究与品牌追踪等领域保持长期合作。",
    offices: [
      {
        name: "ICR 中东办公室（示意）",
        city: "利雅得 · Riyadh",
        email: "info@icr-me.com",
        phone: "+966 (0)11 000 0000",
      },
      {
        name: "海湾地区项目团队（示意）",
        city: "迪拜 · Dubai",
        email: "info@icr-me.com",
        phone: "+971 (0)4 000 0000",
      },
    ],
  },
  {
    id: "asia",
    label: "亚洲",
    description:
      "通过合作伙伴网络，我们可以在部分亚洲市场开展项目，包括东亚与东南亚的关键城市。",
    offices: [
      {
        name: "亚洲区合作伙伴（示意）",
        city: "新加坡 · Singapore",
        email: "info@icr-me.com",
        phone: "+65 0000 0000",
      },
    ],
  },
  {
    id: "europe",
    label: "欧洲",
    description:
      "对于同时覆盖欧洲与中东的项目，我们会与欧洲合作伙伴协同设计方法论与样本框，确保跨区域结果可比。",
    offices: [
      {
        name: "欧洲合作网络（示意）",
        city: "伦敦 · London",
        email: "info@icr-me.com",
        phone: "+44 (0)20 0000 0000",
      },
    ],
  },
];

/**
 * RegionTabs
 *
 * 中东 / 亚洲 / 欧洲 地区 Tab，与办公室卡片组合展示。
 */
export function RegionTabs() {
  const [activeRegionId, setActiveRegionId] = useState<string>(REGIONS[0]?.id);

  const activeRegion = REGIONS.find((region) => region.id === activeRegionId) ?? REGIONS[0];

  return (
    <div className="space-y-5">
      <div className="inline-flex rounded-full bg-slate-900/60 p-1 text-xs text-slate-100">
        {REGIONS.map((region) => (
          <button
            key={region.id}
            type="button"
            onClick={() => setActiveRegionId(region.id)}
            className={cn(
              "rounded-full px-4 py-1.5 font-medium transition-colors",
              activeRegionId === region.id
                ? "bg-white text-slate-900"
                : "text-slate-200 hover:bg-white/10",
            )}
          >
            {region.label}
          </button>
        ))}
      </div>

      <div className="rounded-2xl bg-white/5 p-5 text-sm text-slate-100 ring-1 ring-slate-700/60">
        <p className="text-xs font-semibold tracking-[0.18em] text-slate-300">
          REGIONS &amp; OFFICES
        </p>
        <h2 className="mt-2 text-base font-semibold md:text-lg">
          {activeRegion.label} 区域 · 办公地点与服务能力（示意）
        </h2>
        <p className="mt-2 text-xs leading-relaxed text-slate-200 md:text-sm">
          {activeRegion.description}
        </p>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {activeRegion.offices.map((office) => (
            <OfficeCard key={`${activeRegion.id}-${office.email}`} {...office} />
          ))}
        </div>

        <div className="mt-4 overflow-hidden rounded-xl border border-slate-700/60 bg-slate-900/60">
          <div className="relative h-40 w-full">
            <Image
              src="/images/kantar_style/map_abstract.png"
              alt="ICR 服务区域示意地图"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover opacity-80"
            />
          </div>
          <p className="px-4 py-3 text-xs text-slate-300">
            上图为示意图，用于展示 ICR 在不同区域典型服务城市与覆盖范围，不对应具体办公地址。实际项目中，我们会根据研究对象与样本方案选择更合适的实施伙伴与地点。
          </p>
        </div>
      </div>
    </div>
  );
}
