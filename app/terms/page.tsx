"use client";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-brand-navy py-10 text-white md:py-14">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
            使用条款
          </h1>
          <p className="mt-3 text-sm text-slate-200 md:text-base">
            本页面概述你在浏览 ICR 网站以及与我们进行初步沟通时适用的基本使用条款。与具体项目相关的权利与义务，将以正式签署的合同为准。
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-4xl space-y-8 px-4 text-sm text-slate-700 md:text-base">
          <section>
            <h2 className="text-lg font-semibold text-brand-navy">1. 网站内容</h2>
            <p className="mt-2">
              本网站所展示的内容（包括文字、图像与示例案例）旨在介绍 ICR 的服务范围与方法论思路，部分内容为示意性说明，并不构成对具体项目结果或成效的保证。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-navy">2. 非咨询意见</h2>
            <p className="mt-2">
              网站上的任何信息均不构成对你所在组织的法律、财务或政策建议。做出重大决策前，请结合自身情况，并在必要时咨询合适的专业顾问。只有在签署具体项目合同后，ICR 才会基于约定范围提供正式的研究与咨询服务。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-navy">3. 责任限制</h2>
            <p className="mt-2">
              在法律允许的范围内，因使用或依赖本网站信息而产生的任何直接或间接损失，ICR 不承担责任。对于具体合作项目，双方权责将由合同条款另行约定。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-navy">4. 变更与更新</h2>
            <p className="mt-2">
              我们可能会不时更新本使用条款，以反映服务内容、法律要求或内部政策的变化。更新版本一经发布即刻生效，重要变更我们会以显著方式提示。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-navy">5. 联系我们</h2>
            <p className="mt-2">
              如你对本使用条款有任何问题，欢迎通过
              <a
                href="mailto:info@icr-me.com"
                className="mx-1 font-semibold text-brand-blue hover:text-brand-teal"
              >
                info@icr-me.com
              </a>
              与我们联系。
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
