import Image from "next/image";
import { SerifHeadline } from "../components/SerifHeadline";
import { CtaButton } from "../components/CtaButton";

/**
 * ContactHero
 *
 * 联系页面顶部 Hero：深色渐变 + 摄影背景。
 */
export function ContactHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-indigo-950 via-slate-950 to-slate-900 text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/kantar_style/contact_hero.png"
          alt="ICR 团队与客户在会议室讨论研究与分析需求"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/80 to-slate-900/30" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 md:flex-row md:items-center md:py-20">
        <div className="max-w-xl">
          <SerifHeadline
            eyebrow="CONTACT ICR"
            title="联系 ICR · 与我们的团队沟通你的研究与分析需求"
            subtitle="告诉我们你所面临的场景与问题，我们会在 1–2 个工作日内回应，并安排最合适的同事与你交流。"
            align="left"
            stroke="light"
            tone="onDark"
          />

          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButton href="#contact-form">填写联系表单</CtaButton>
            <CtaButton href="mailto:info@icr-me.com" variant="ghost">
              直接发送邮件
            </CtaButton>
          </div>
        </div>

        <div className="max-w-md rounded-2xl bg-white/5 p-5 text-sm leading-relaxed text-slate-100 backdrop-blur">
          <p>
            你可以简单描述所在机构、所在国家或城市、希望解决的问题类型（例如公共服务体验、消费与零售、员工体验、市场机会等），以及时间安排与预算大致区间。
          </p>
          <p className="mt-3">
            如果你目前还没有完整的需求书，也完全没有问题——许多合作都是从一次开放式的对话开始的。
          </p>
        </div>
      </div>
    </section>
  );
}
