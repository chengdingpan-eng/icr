"use client";

import { FormEvent, useRef, useState, ChangeEvent } from "react";
import Link from "next/link";
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
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert("File size must be less than 10MB");
        e.target.value = "";
        return;
      }
      // Check file type
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

    // Get Power Automate URL from environment variable
    const powerAutomateUrl = process.env.NEXT_PUBLIC_POWER_AUTOMATE_URL;

    if (!powerAutomateUrl) {
      alert(
        "Form submission is not configured. Please contact the administrator."
      );
      setIsSubmitting(false);
      return;
    }

    try {
      // Convert file to base64 if exists
      let fileBase64 = "";
      let fileName = "";
      let fileType = "";

      if (selectedFile) {
        const reader = new FileReader();
        fileBase64 = await new Promise<string>((resolve, reject) => {
          reader.onload = () => {
            const base64 = reader.result as string;
            // Remove data URL prefix (e.g., "data:application/pdf;base64,")
            resolve(base64.split(",")[1]);
          };
          reader.onerror = reject;
          reader.readAsDataURL(selectedFile);
        });
        fileName = selectedFile.name;
        fileType = selectedFile.type;
      }

      // Prepare data for Power Automate
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

      // Submit to Power Automate
      const response = await fetch(powerAutomateUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      if (response.ok) {
        alert(
          "Thank you for your enquiry! We will review your submission and respond within 24-48 hours."
        );
        form.reset();
        setSelectedFile(null);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        "There was an error submitting your form. Please try again or contact us directly at info@icr-me.com"
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
      <section className="w-full relative  bg-linear-to-br from-[#041a2e] via-[#062944] to-[#041a2e] text-white py-6">
        {/* decorative pattern */}
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
            <path
              d="M0 260 C200 200 400 320 600 260 C800 200 1000 320 1200 260"
              stroke="rgba(255,255,255,0.025)"
              strokeWidth="14"
              fill="none"
            />
            <path
              d="M0 140 C180 80 380 200 600 140 C820 80 1020 200 1200 140"
              stroke="rgba(255,255,255,0.02)"
              strokeWidth="12"
              fill="none"
            />
          </svg>
          <div className="absolute inset-0 bg-linear-to-br from-black/20 to-black/40 pointer-events-none" />
        </div>

        <div className="mx-auto max-w-4xl px-4 text-center">
          {/* <div className="inline-block rounded-full bg-black/20 px-3 py-1 text-xs text-white/70 mb-4">
            {t("nav.contact")}
          </div> */}

          <h1 className="mx-auto max-w-4xl text-3xl font-sans leading-tight text-white md:text-5xl">
            {t("contact.hero.title")}
            <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-brand-blue to-brand-teal">
              {t("contact.hero.subtitle")}
            </span>
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
              {t("contact.cta.discuss")} »
            </Button>
            <Link href="/services">
              <Button className="bg-transparent border border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-brand-navy">
                {t("contact.cta.services")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 grid gap-12 lg:grid-cols-2 items-start">
          {/* Left: Contact info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">
              {t("contact.getintouch.title")}
            </h2>

            <div className="divide-y divide-slate-200 bg-white rounded-lg p-6 shadow-sm">
              <div className="flex gap-4 py-6 items-center">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {t("contact.email.title")}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {t("contact.email.desc")}{" "}
                    <a
                      href="mailto:info@icr-me.com"
                      className="text-brand-blue font-medium hover:text-brand-navy transition-colors"
                    >
                      info@icr-me.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-sm font-semibold text-slate-900">
                  {t("contact.social.title")}
                </h3>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white border"
                  >
                    <Facebook className="h-4 w-4 text-blue-600" />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white border"
                  >
                    <Linkedin className="h-4 w-4 text-blue-700" />
                  </a>
                  <a
                    href="#"
                    aria-label="X"
                    className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white border"
                  >
                    <X className="h-4 w-4 text-slate-900" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="relative">
            {/* Pulse indicator */}
            {showIndicator && (
              <div className="absolute -inset-4 rounded-3xl animate-pulse">
                <div className="absolute inset-0 rounded-3xl bg-brand-blue/20 animate-ping" />
                <div className="absolute inset-0 rounded-3xl bg-brand-blue/30 border-2 border-brand-blue/50" />
              </div>
            )}

            <form
              ref={formRef}
              className="relative bg-[#071827] p-8 rounded-2xl shadow-lg text-white transition-all duration-300"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-300">
                    {t("contact.form.name")}{" "}
                    <span className="text-red-400">*</span>
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
                    {t("contact.form.email")}{" "}
                    <span className="text-red-400">*</span>
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
                  {t("contact.form.message")}{" "}
                  <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  disabled={isSubmitting}
                  className="mt-2 w-full rounded-md border border-slate-700 bg-transparent px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 disabled:opacity-50"
                ></textarea>
              </div>

              {/* File Upload */}
              <div className="mt-4">
                <label className="block text-sm text-slate-300 mb-2">
                  {t("contact.form.upload")}
                </label>
                <div
                  onClick={() => !isSubmitting && fileInputRef.current?.click()}
                  className={`w-full rounded-md border-2 border-dashed ${
                    selectedFile
                      ? "border-brand-teal/60 bg-brand-teal/5"
                      : "border-slate-700 bg-transparent"
                  } px-4 py-8 text-center cursor-pointer hover:border-brand-teal transition-colors ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
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
                        <FileText className="h-8 w-8 text-brand-teal mb-2" />
                        <span className="text-brand-teal text-sm font-medium">
                          {selectedFile.name}
                        </span>
                        <span className="text-slate-500 text-xs mt-1">
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
                        <Upload className="h-8 w-8 text-brand-teal mb-2" />
                        <span className="text-slate-400 text-sm">
                          {t("contact.form.upload.instruction")}
                        </span>
                        <span className="text-slate-500 text-xs mt-1">
                          {t("contact.form.upload.note")}
                        </span>
                        <span className="text-slate-500 text-xs mt-1">
                          {t("contact.form.upload.format")}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full rounded-md bg-brand-blue py-3 text-sm font-semibold hover:bg-brand-navy disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
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
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    {t("contact.form.submitting")}
                  </>
                ) : (
                  t("contact.form.submit")
                )}
              </button>

              {/* Confidentiality Notice */}
              <div className="mt-4 flex items-start gap-2 p-3 rounded-lg bg-brand-blue/5 border border-brand-blue/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-brand-teal flex-shrink-0 mt-0.5"
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
                  {t("contact.form.confidentiality")}
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="w-full py-12 bg-gradient-to-br from-[#0a1f2e] to-[#041a2e]">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-brand-blue/15 border border-brand-blue/40 px-4 py-1 text-sm text-brand-teal font-semibold mb-4 shadow-sm">
              {t("contact.next.badge")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("contact.next.title")}
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto">
              {t("contact.next.description")}
            </p>
          </div>

          <div className="relative">
            {/* Timeline line - vertical on mobile, hidden on desktop */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brand-blue/35 md:hidden" />

            {/* Timeline line - horizontal on desktop */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-brand-blue/35" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
              {/* Step 1 */}
              <div className="relative flex md:flex-col items-start md:items-center text-left md:text-center">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-blue to-brand-teal shadow-lg flex-shrink-0">
                  <span className="text-2xl font-bold text-white">01</span>
                </div>
                <div className="ml-6 md:ml-0 md:mt-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {t("contact.next.step1")}
                  </h3>
                  <p className="text-sm text-slate-300">
                    {t("contact.next.step1.desc")}
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex md:flex-col items-start md:items-center text-left md:text-center">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-blue to-brand-teal shadow-lg flex-shrink-0">
                  <span className="text-2xl font-bold text-white">02</span>
                </div>
                <div className="ml-6 md:ml-0 md:mt-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {t("contact.next.step2")}
                  </h3>
                  <p className="text-sm text-slate-300">
                    {t("contact.next.step2.desc")}
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex md:flex-col items-start md:items-center text-left md:text-center">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-blue to-brand-teal shadow-lg shrink-0">
                  <span className="text-2xl font-bold text-white">03</span>
                </div>
                <div className="ml-6 md:ml-0 md:mt-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {t("contact.next.step3")}
                  </h3>
                  <p className="text-sm text-slate-300">
                    {t("contact.next.step3.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-400 mb-4">
              {t("contact.urgent")}{" "}
              <a
                href="mailto:info@icr-me.com"
                className="text-brand-teal font-semibold hover:text-brand-blue transition-colors"
              >
                info@icr-me.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
