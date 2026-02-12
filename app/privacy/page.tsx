"use client";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-brand-navy py-10 text-white md:py-14">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
            隐私政策
          </h1>
          <p className="mt-3 text-sm text-slate-200 md:text-base">
            本页面概述 ICR 在收集、使用与保护个人信息方面的基本原则。实际合作项目中，如存在更为具体的隐私条款与数据处理协议，将以双方签署的合同及补充协议为准。
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-4xl space-y-8 px-4 text-sm text-slate-700 md:text-base">
          <section>
            <h2 className="text-lg font-semibold text-brand-navy">1. 信息收集范围</h2>
            <p className="mt-2">
              我们可能在以下情形中收集与你相关的信息：你通过网站表单或邮件主动提供的联系方式与项目背景信息；你参与研究项目（如问卷、访谈等）过程中提供的回答；作为客户方代表在项目沟通中形成的往来记录。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-navy">2. 信息使用目的</h2>
            <p className="mt-2">
              收集到的信息仅用于与你建立联系、评估与执行研究或咨询项目，以及在获得授权的前提下，用于改进我们的服务与方法。除法律法规要求或经你明确同意外，我们不会将可识别个人身份的信息提供给第三方用于其自身的市场推广目的。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-navy">3. 数据存储与安全</h2>
            <p className="mt-2">
              我们会采取合理的技术与管理措施保护数据安全，限制对数据的访问权限，并在项目结束后按内部政策或合同约定保留或删除数据。如果你作为受访者参与研究，数据通常会以匿名或去标识化形式进行汇总与分析。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-navy">4. 你的权利</h2>
            <p className="mt-2">
              在法律允许的范围内，你可以请求查阅、更正或删除与你相关的个人信息，也可以撤回先前授予的同意。你可通过下方联系方式与我们取得联系，我们会在合理时间内进行响应。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-navy">5. 联系方式</h2>
            <p className="mt-2">
              如对本隐私政策或你的个人信息有任何疑问，请发送邮件至
              <a
                href="mailto:info@icr-me.com"
                className="mx-1 font-semibold text-brand-blue hover:text-brand-teal"
              >
                info@icr-me.com
              </a>
              ，我们将尽力为你解答。
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
