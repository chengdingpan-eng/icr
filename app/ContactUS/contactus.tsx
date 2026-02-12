"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUsPage() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setTimeout(() => {
      alert("感谢你的留言，我们会在 1–2 个工作日内回复你。");
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero 区 */}
      <section className="relative overflow-hidden bg-brand-navy py-10 text-white md:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(17,102,255,0.6),_transparent_65%)]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
            联系我们
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-200 md:text-base">
            无论你正在规划一次新的研究项目、评估现有计划的成效，还是希望为团队搭建洞察能力，我们都非常乐意先听你讲讲目前的想法与挑战。
          </p>
        </div>
      </section>

      {/* 主体：左信息 + 右表单 */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.1fr,1fr] md:items-start">
          {/* 左列：联系方式 + 地图占位 */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-base font-semibold text-brand-navy md:text-lg">
                直接联系
              </h2>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-brand-blue" />
                  <div>
                    <div className="text-xs text-slate-500">邮箱</div>
                    <a
                      href="mailto:info@icr-me.com"
                      className="font-medium text-brand-navy hover:text-brand-teal"
                    >
                      info@icr-me.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-brand-blue" />
                  <div>
                    <div className="text-xs text-slate-500">电话（示意）</div>
                    <p className="font-medium text-brand-navy">+966 (0)11 000 0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-brand-blue" />
                  <div>
                    <div className="text-xs text-slate-500">主要办公城市（示意）</div>
                    <p className="font-medium text-brand-navy">利雅得 · 迪拜 · 多哈</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-brand-navy md:text-base">
                办公地点与服务区域（地图缩略图占位）
              </h3>
              <div className="mt-3 overflow-hidden rounded-xl border border-slate-200">
                <div className="relative h-56 w-full">
                  <Image
                    src="/images/ipsos_style/contact_map.png"
                    alt="ICR 服务区域示意地图"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                上图为示意图，用于展示 ICR 在区域内的典型服务城市与覆盖范围，不对应具体办公地址。
              </p>
            </div>
          </div>

          {/* 右列：表单 */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white p-6 shadow-sm md:p-7"
            >
              <h2 className="text-base font-semibold text-brand-navy md:text-lg">
                留下你的需求与问题
              </h2>
              <p className="mt-2 text-xs text-slate-600 md:text-sm">
                请尽可能简要说明你的背景和想要解决的问题，我们会安排最合适的同事与你联系。
              </p>

              <div className="mt-6 space-y-4 text-sm">
                <div>
                  <label className="mb-1 block text-slate-700">姓名</label>
                  <input
                    name="name"
                    required
                    className="w-full rounded-md border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-blue/40"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-slate-700">邮箱</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-md border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-blue/40"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-slate-700">留言（可简要介绍你的需求）</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-md border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-blue/40"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-6 flex w-full items-center justify-center rounded-md bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-navy disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "提交中…" : "提交信息"}
              </button>

              <p className="mt-3 text-xs text-slate-500">
                提交表单即代表你同意我们在合理范围内使用这些信息，以便联系你并提供相关服务。你也可以随时通过邮箱 info@icr-me.com 更新或删除这些信息。
              </p>
            </form>

            <div className="mt-6 text-xs text-slate-500">
              <span>更倾向直接发邮件？</span>{" "}
              <Link
                href="mailto:info@icr-me.com"
                className="font-semibold text-brand-blue hover:text-brand-teal"
              >
                发送至 info@icr-me.com
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
