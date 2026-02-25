import Link from "next/link";
import { ContactHero } from "../components/ContactHero";
import { RegionTabs } from "../components/RegionTabs";
import { ContactForm } from "../components/ContactForm";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <ContactHero />

      {/* 地区 / 办公室 + 联系表单 */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.15fr,0.85fr] lg:items-start">
          {/* 左：地区 Tab + 办公室卡片 + 地图示意 */}
          <RegionTabs />

          {/* 右：联系表单 + 说明 */}
          <div className="space-y-4">
            <ContactForm />

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs leading-relaxed text-slate-300 md:text-sm">
              <h3 className="text-sm font-semibold text-slate-100 md:text-base">
                数据保密与合规说明
              </h3>
              <p className="mt-2">
                你在此表单中提供的个人与机构信息，仅用于与 ICR 及其合作伙伴建立联系、评估是否适合开展合作以及在项目推进过程中保持沟通。
              </p>
              <p className="mt-2">
                除非事先取得你的明确书面同意，我们不会向无关第三方披露可识别你身份的信息。在开展具体研究项目之前，我们也会与贵方签署必要的保密协议（NDA）以及数据处理条款。
              </p>
              <p className="mt-2">
                如果你希望更新或删除这些信息，可以随时发送邮件至
                <span> </span>
                <Link
                  href="mailto:info@icr-me.com"
                  className="font-semibold text-gs-blue hover:underline underline-offset-4"
                >
                  info@icr-me.com
                </Link>
                。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 底部 CTA 横幅 */}
      <section className="border-t border-slate-800 bg-slate-950 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="serif-headline text-xl text-slate-50 md:text-2xl">
              想和我们讨论一个正在酝酿的研究或评估项目？
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300 md:text-base">
              无论你目前只有一个模糊的想法，还是已经有了初步的需求书，我们都欢迎先进行一次不设限的交流，一起梳理问题与可能的路径。
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#contact-form"
              className="inline-flex items-center justify-center rounded-full bg-gs-blue px-5 py-2 text-sm font-semibold text-white transition hover:brightness-110"
            >
              通过表单讨论需求
            </Link>
            <Link
              href="mailto:info@icr-me.com"
              className="text-sm font-semibold text-gs-blue hover:underline underline-offset-4"
            >
              直接发送邮件
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
