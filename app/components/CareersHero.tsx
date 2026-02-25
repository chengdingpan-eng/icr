import Image from "next/image";
import { CtaButton } from "./CtaButton";
import { SerifHeadline } from "./SerifHeadline";

/**
 * CareersHero
 *
 * 招聘页顶部 Hero：写实摄影背景 + 衬线大标题 + 双 CTA。
 */
export function CareersHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-slate-900 text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/ipsos_style/careers_hero.png"
          alt="在会议室中围绕数据与报告讨论的 ICR 团队"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/80 to-slate-900/20" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-20">
        <div className="max-w-xl">
          <SerifHeadline
            eyebrow="ICR · CAREERS"
            title="加入 ICR · 在更大的问题上发挥你的研究与分析能力"
            subtitle="我们与公共部门和企业团队一起，用严谨的研究与数据方法推动更好的决策。这里既需要你对方法的坚持，也需要你对现实世界的好奇。"
            align="left"
            stroke="light"
            tone="onDark"
          />

          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButton href="#roles">浏览开放职位</CtaButton>
            <CtaButton href="mailto:info@icr-me.com" variant="ghost">
              发送简历邮件
            </CtaButton>
          </div>
        </div>

        <div className="max-w-md space-y-4 rounded-2xl bg-white/5 p-5 text-sm leading-relaxed text-slate-100 backdrop-blur">
          <p>
            在 ICR，你会与研究员、数据分析师、政策与商业背景的同事一起，围绕同一个决策问题工作。我们关心如何把证据整理成清晰的选项，而不是在报告里堆叠图表。
          </p>
          <p>
            如果你愿意在不确定性中寻找结构，乐于从数据与故事里抽丝剥茧，也希望看到自己的工作真正进入决策桌面，我们非常期待与你聊聊。
          </p>
        </div>
      </div>
    </section>
  );
}
