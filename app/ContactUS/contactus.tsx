
"use client";

import { FormEvent, useRef, useState, ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail, Facebook, Linkedin, X, Upload, FileText } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function ContactUs() {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showIndicator, setShowIndicator] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert("File size must be less than 10MB");
        e.target.value = "";
        return;
      }
      const allowedTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/msword",
      ];
      if (!allowedTypes.includes(file.type)) {
        alert("Only PDF and DOCX files are allowed");
        e.target.value = "";
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const powerAutomateUrl = process.env.NEXT_PUBLIC_POWER_AUTOMATE_URL;

    if (!powerAutomateUrl) {
      alert(
        "Form submission is not configured. Please contact the administrator.",
      );
      setIsSubmitting(false);
      return;
    }

    try {
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
        company: formData.get("company") as string,
        message: formData.get("message") as string,
        file: fileBase64
          ? {
              name: fileName,
              content: fileBase64,
              contentType: fileType,
            }
          : null,
        submittedAt: new Date().toISOString(),
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
          "Thank you for your enquiry! We will review your submission and respond within 24-48 hours.",
        );
        form.reset();
        setSelectedFile(null);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        "There was an error submitting your form. Please try again or contact us directly at info@icr-me.com",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setShowIndicator(true);
    setTimeout(() => setShowIndicator(false), 3000);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <section className="relative w-full bg-linear-to-br from-[#041a2e] via-[#062944] to-[#041a2e] py-6 text-white">
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
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-black/20 to-black/40" />
        </div>

        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mx-auto max-w-4xl text-3xl font-sans leading-tight text-white md:text-5xl">
            {t("contact.hero.title")}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80">
            {t("contact.hero.description1")}
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-white/80">
            {t("contact.hero.description2")}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              onClick={scrollToForm}
              className="bg-gradient-to-r from-brand-blue to-brand-teal px-6 py-3 text-sm font-semibold shadow-sm hover:shadow-md hover:brightness-105"
            >
              {t("contact.hero.cta_discuss")}
            </Button>
            <Link href="/services">
              <Button className="border border-brand-teal bg-transparent text-brand-teal hover:bg-brand-teal hover:text-brand-navy">
                {t("contact.hero.cta_explore")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-10">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 lg:grid-cols-2">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">
              {t("contact.getInTouch.title")}
            </h2>

            <div className="rounded-lg bg-white p-6 shadow-sm divide-y divide-slate-200">
              <div className="flex items-center gap-4 py-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {t("contact.getInTouch.email_title")}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {t("contact.getInTouch.email_desc")}
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-sm font-semibold text-slate-900">
                  {t("contact.getInTouch.social_title")}
                </h3>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-white"
                  >
                    <Facebook className="h-4 w-4 text-blue-600" />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-white"
                  >
                    <Linkedin className="h-4 w-4 text-blue-700" />
                  </a>
                  <a
                    href="#"
                    aria-label="X"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-white"
                  >
                    <X className="h-4 w-4 text-slate-900" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {showIndicator && (
              <div className="absolute -inset-4 rounded-3xl animate-pulse">
                <div className="absolute inset-0 rounded-3xl bg-brand-blue/20 animate-ping" />
                <div className="absolute inset-0 rounded-3xl border-2 border-brand-blue/50 bg-brand-blue/30" />
              </div>
            )}

            <form
              ref={formRef}
              className="relative rounded-2xl bg-[#071827] p-8 text-white shadow-lg transition-all duration-300"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm text-slate-300">
                    {t("contact.form.fullName")}
                  </label>
                  <input
                    name="name"
                    required
                    disabled={isSubmitting}
                    className="mt-2 w-full rounded-md border border-slate-700 bg-transparent px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-300">
                    {t("contact.form.email")}
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    disabled={isSubmitting}
                    className="mt-2 w-full rounded-md border border-slate-700 bg-transparent px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 disabled:opacity-50"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-slate-300">
                    {t("contact.form.company")}
                  </label>
                  <input
                    name="company"
                    disabled={isSubmitting}
                    className="mt-2 w-full rounded-md border border-slate-700 bg-transparent px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm text-slate-300">
                  {t("contact.form.message")}
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  disabled={isSubmitting}
                  className="mt-2 w-full rounded-md border border-slate-700 bg-transparent px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 disabled:opacity-50"
                />
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm text-slate-300">
                  {t("contact.form.upload_title")}
                </label>
                <p className="text-xs text-slate-400 mb-2">{t("contact.form.upload_desc")}</p>
                <div
                  onClick={() => !isSubmitting && fileInputRef.current?.click()}
                  className={`w-full cursor-pointer rounded-md border-2 border-dashed px-4 py-8 text-center transition-colors ${
                    selectedFile
                      ? "border-brand-teal/60 bg-brand-teal/5"
                      : "border-slate-700 bg-transparent"
                  } ${
                    isSubmitting ? "cursor-not-allowed opacity-50" : "hover:border-brand-teal"
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    name="document"
                    accept=".pdf,.docx,.doc"
                    onChange={handleFileChange}
                    disabled={isSubmitting}
                    className="hidden"
                  />
                  <div className="flex flex-col items-center justify-center">
                    {selectedFile ? (
                      <>
                        <FileText className="mb-2 h-8 w-8 text-brand-teal" />
                        <span className="text-sm font-medium text-brand-teal">
                          {selectedFile.name}
                        </span>
                        <span className="mt-1 text-xs text-slate-500">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedFile(null);
                            if (fileInputRef.current) {
                              fileInputRef.current.value = "";
                            }
                          }}
                          className="mt-2 text-xs text-red-400 hover:text-red-300"
                        >
                          Remove file
                        </button>
                      </>
                    ) : (
                      <>
                        <Upload className="mb-2 h-8 w-8 text-brand-teal" />
                        <span className="text-sm text-slate-400">
                          {t("contact.form.upload_helper")}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-brand-blue py-3 text-sm font-semibold transition-all hover:bg-brand-navy disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="h-4 w-4 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  t("contact.form.submit")
                )}
              </button>

              <div className="mt-4 flex items-start gap-2 rounded-lg border border-brand-blue/30 bg-brand-blue/5 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-teal"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <p className="text-xs text-slate-300">
                  {t("contact.form.confidential")}
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-br from-[#0a1f2e] to-[#041a2e] py-12">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-block rounded-full border border-brand-blue/40 bg-brand-blue/15 px-4 py-1 text-sm font-semibold text-brand-teal shadow-sm">
              {t("contact.nextSteps.eyebrow")}
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              {t("contact.nextSteps.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-base text-slate-300">
              {t("contact.nextSteps.description")}
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brand-blue/35 md:hidden" />

            <div className="absolute left-0 right-0 top-12 hidden h-0.5 bg-brand-blue/35 md:block" />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
              {Object.values(
                t("contact.nextSteps.steps", { returnObjects: true }) as Record<
                  string,
                  { title: string; description: string }
                >,
              ).map((step, index) => (
                <div key={index} className="relative flex items-start text-left md:flex-col md:items-center md:text-center">
                  <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-teal shadow-lg">
                    <span className="text-2xl font-bold text-white">{`0${index + 1}`}</span>
                  </div>
                  <div className="ml-6 md:ml-0 md:mt-6">
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4 text-sm text-slate-400">
              {t("contact.nextSteps.urgent")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
