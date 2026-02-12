
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { useState, FormEvent } from "react";

export default function CareerPage() {
  const { t } = useLanguage();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const benefits = t("careers.section1.cards", { returnObjects: true }) as Record<string, { title: string; description: string }>;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const powerAutomateUrl = process.env.NEXT_PUBLIC_POWER_AUTOMATE_URL;

    if (!powerAutomateUrl) {
      alert("Configuration error. Please contact support.");
      setIsSubmitting(false);
      return;
    }

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      let fileBase64 = "";
      let fileName = "";
      let fileType = "";

      if (selectedFile) {
        const reader = new FileReader();
        fileBase64 = await new Promise<string>((resolve, reject) => {
          reader.onload = () => {
            const base64 = reader.result as string;
            resolve(base64.split(",")[1]);
          };
          reader.onerror = reject;
          reader.readAsDataURL(selectedFile);
        });
        fileName = selectedFile.name;
        fileType = selectedFile.type;
      }

      const submitData = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        position: formData.get("position") as string,
        coverLetter: formData.get("coverLetter") as string,
        file: fileBase64
          ? {
              name: fileName,
              content: fileBase64,
              contentType: fileType,
            }
          : null,
        submittedAt: new Date().toISOString(),
        formType: "career",
      };

      const response = await fetch(powerAutomateUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      if (response.ok) {
        alert(
          "Thank you for your application! We will review your submission and respond within 5-7 business days."
        );
        form.reset();
        setSelectedFile(null);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        "There was an error submitting your application. Please try again or contact us directly at careers@icr-me.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="w-full relative bg-linear-to-br from-[#041a2e] via-[#062944] to-[#041a2e] text-white py-6">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute inset-0 h-full w-full opacity-15"
            viewBox="0 0 1200 400"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M0 200 C150 120 350 280 600 200 C850 120 1050 280 1200 200"
              stroke="rgba(255,255,255,0.03)"
              strokeWidth="18"
              fill="none"
            />
          </svg>
          <div className="absolute inset-0 bg-linear-to-br from-black/20 to-black/40 pointer-events-none" />
        </div>

        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="mx-auto max-w-3xl text-3xl font-sans leading-tight text-white md:text-5xl">
            {t("careers.hero.title")}
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-base text-slate-200">
            {t("careers.hero.description")}
          </p>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-[#f7fafc] to-[#eef4f7] py-12">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
              {t("careers.section1.title")}
            </h2>
            <p className="text-slate-600 text-base max-w-lg mx-auto">
              {t("careers.section1.description")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(benefits).map((benefit, idx) => {
              const isHighlighted = idx === 1;
              return (
              <div
                key={idx}
                className={`p-6 rounded-xl shadow-sm border ${
                  isHighlighted
                    ? "bg-gradient-to-br from-brand-blue/5 to-white border-brand-blue/40"
                    : "bg-white border-slate-200"
                }`}
              >
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isHighlighted ? "text-brand-blue" : "text-slate-700"
                  }`}
                >
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </div>
            )})}
          </div>
        </div>
      </section>

      <section className="w-full relative bg-linear-to-br from-[#041a2e] via-[#062944] to-[#041a2e] text-white py-12">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg style={{ minHeight: "100%" }} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="pattern-bg"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="40" height="40" fill="#071829" />
                <rect x="8" y="8" width="8" height="8" rx="2" fill="#0e253a" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern-bg)" />
          </svg>
        </div>
        <div className="mx-auto max-w-2xl px-2">
          <div className="text-center mb-6">
            <div className="inline-block rounded-full bg-black/20 px-3 py-1 text-xs text-white/70 mb-3">
              {t("careers.form.subtitle")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {t("careers.form.title")}
            </h2>
            <p className="text-slate-200 text-base max-w-lg mx-auto">
              {t("careers.form.description")}
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white/90 border border-slate-200 rounded-3xl shadow-xl p-6 md:p-8 space-y-4"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-slate-600 text-sm font-medium mb-1">
                  {t("careers.form.fullName")}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder=""
                  className="w-full rounded-md border border-slate-200 px-4 py-3 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
                />
              </div>
              <div>
                <label className="block text-slate-600 text-sm font-medium mb-1">
                  {t("careers.form.email")}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder=""
                  className="w-full rounded-md border border-slate-200 px-4 py-3 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
                />
              </div>
              <div>
                <label className="block text-slate-600 text-sm font-medium mb-1">
                  {t("careers.form.phone")}
                </label>
                <input
                  type="text"
                  name="phone"
                  required
                  placeholder=""
                  className="w-full rounded-md border border-slate-200 px-4 py-3 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
                />
              </div>
              <div>
                <label className="block text-slate-600 text-sm font-medium mb-1">
                  {t("careers.form.interest")}
                </label>
                <input
                  type="text"
                  name="position"
                  required
                  placeholder=""
                  className="w-full rounded-md border border-slate-200 px-4 py-3 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
                />
              </div>
              <div>
                <label className="block text-slate-600 text-sm font-medium mb-1">
                  {t("careers.form.resume")}
                </label>
                <label className="block">
                  <div className="w-full rounded-md border-2 border-dashed border-brand-blue/40 bg-brand-blue/5 px-4 py-8 text-center cursor-pointer hover:bg-brand-blue/10 transition">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <div className="flex flex-col items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-brand-teal mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                      <span className="text-slate-500 text-base">
                        {selectedFile
                          ? selectedFile.name
                          : t("careers.form.resumeHelper")}
                      </span>
                    </div>
                  </div>
                </label>
              </div>
              <div>
                <label className="block text-slate-600 text-sm font-medium mb-1">
                  {t("careers.form.message")}
                </label>
                <textarea
                  name="coverLetter"
                  rows={4}
                  placeholder=""
                  className="w-full rounded-md border border-slate-200 px-4 py-3 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-blue hover:bg-brand-navy text-white font-semibold py-3 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : t("careers.form.submit")}
            </button>
          </form>
        </div>
      </section>

      <section className="w-full bg-gradient-to-br from-[#0a1f2e] to-[#041a2e] py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center mb-8">
            <div className="inline-block rounded-full bg-brand-blue/15 border border-brand-blue/40 px-4 py-1 text-sm text-brand-teal font-semibold mb-4 shadow-sm">
              {t("careers.process.eyebrow")}
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
              {t("careers.process.title")}
            </h2>
            <p className="text-slate-300 text-base max-w-xl mx-auto">
              {t("careers.process.description")}
            </p>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-60 gap-y-30 z-10">
              {Object.values(
                t("careers.process.steps", { returnObjects: true }) as Record<
                  string,
                  { title: string; description: string }
                >,
              ).map((step, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-md flex flex-col justify-center items-center w-full max-w-[320px] min-h-[160px] text-center p-7">
                  <h3 className="font-bold text-lg text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
