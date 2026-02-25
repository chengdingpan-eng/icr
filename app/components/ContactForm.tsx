"use client";

import { FormEvent, useState } from "react";

/**
 * ContactForm
 *
 * 联系表单前端 stub：校验通过后展示感谢提示，不调用后端。
 */
export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 text-slate-900 shadow-sm md:p-7"
    >
      <h2 className="text-base font-semibold text-slate-900 md:text-lg">
        留下你的场景与问题
      </h2>
      <p className="mt-2 text-xs text-slate-600 md:text-sm">
        请简要介绍你的机构类型、所在国家或城市，以及希望解决的问题。我们会在 1–2 个工作日内邮件回应，并视情况安排进一步交流。
      </p>

      <div className="mt-6 space-y-4 text-sm">
        <div>
          <label className="mb-1 block text-slate-700">姓名</label>
          <input
            name="name"
            required
            className="w-full rounded-md border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gs-blue/40"
          />
        </div>
        <div>
          <label className="mb-1 block text-slate-700">邮箱</label>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-md border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gs-blue/40"
          />
        </div>
        <div>
          <label className="mb-1 block text-slate-700">公司 / 机构</label>
          <input
            name="company"
            required
            className="w-full rounded-md border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gs-blue/40"
          />
        </div>
        <div>
          <label className="mb-1 block text-slate-700">主题</label>
          <select
            name="topic"
            required
            className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gs-blue/40"
            defaultValue=""
          >
            <option value="" disabled>
              请选择一个最接近的选项
            </option>
            <option value="new-project">规划新的研究项目</option>
            <option value="evaluate">评估现有项目或计划</option>
            <option value="capability">搭建洞察能力 / 长期追踪体系</option>
            <option value="other">其他（在下方说明）</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-slate-700">留言</label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full rounded-md border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gs-blue/40"
            placeholder="你可以简单介绍目前的业务或政策场景、时间安排与大致预算区间等。"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 flex w-full items-center justify-center rounded-md bg-gs-blue px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "提交中…" : "提交信息"}
      </button>

      <p className="mt-3 text-xs text-slate-500">
        提交表单即代表你同意我们在合理范围内使用这些信息，以便联系你并提供相关服务。你也可以随时通过邮箱 info@icr-me.com 更新或删除这些信息。
      </p>

      {submitted ? (
        <p className="mt-3 rounded-md bg-emerald-50 px-3 py-2 text-xs text-emerald-700">
          感谢你的信任，我们已收到你的信息，会在 1–2 个工作日内回复。若希望更快建立联系，也可以直接发送邮件至 info@icr-me.com。
        </p>
      ) : null}
    </form>
  );
}
