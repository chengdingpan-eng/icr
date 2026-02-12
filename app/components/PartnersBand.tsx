import Image from "next/image";

const partners = [
  { name: "Partner A", logoSrc: "/images/partners/partner-a.svg" },
  { name: "Partner B", logoSrc: "/images/partners/partner-b.svg" },
  { name: "Partner C", logoSrc: "/images/partners/partner-c.svg" },
  { name: "Partner D", logoSrc: "/images/partners/partner-d.svg" },
];

/**
 * 客户与合作伙伴 Logo 带柔和灰底：
 * - 小屏横向滚动，大屏为均匀网格
 * - 仅展示静态占位 Logo，后续可替换为真实品牌
 */
export function PartnersBand() {
  return (
    <section className="w-full bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              CLIENTS & PARTNERS
            </h2>
            <p className="mt-1 text-base font-semibold text-brand-navy">
              受到公共部门、企业与机构客户的长期信任
            </p>
          </div>
          <p className="text-xs text-slate-500 max-w-md">
            下方 Logo 仅为布局示意，可在后续迭代中替换为真实品牌标识。
          </p>
        </div>

        <div className="mt-6 overflow-x-auto">
          <div className="flex gap-4 sm:grid sm:grid-cols-4 sm:gap-6 min-w-max sm:min-w-0">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex h-20 w-40 sm:w-auto items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <Image
                  src={partner.logoSrc}
                  alt={partner.name}
                  width={120}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
