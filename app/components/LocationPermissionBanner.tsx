"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function LocationPermissionBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show banner only if:
    // 1. User hasn't manually set language
    // 2. Location permission not granted or denied yet
    const manuallySet = localStorage.getItem("languageManuallySet");
    const permissionGranted = localStorage.getItem("locationPermissionGranted");
    const permissionDenied = localStorage.getItem("locationPermissionDenied");

    if (!manuallySet && !permissionGranted && !permissionDenied) {
      // Show banner after a short delay
      setTimeout(() => setShow(true), 2000);
    }
  }, []);

  const handleDismiss = () => {
    setShow(false);
    localStorage.setItem("locationPermissionDenied", "true");
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 bg-brand-navy text-slate-100 p-4 rounded-lg shadow-2xl border border-slate-700">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <svg
            className="w-6 h-6 text-brand-teal"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-sm mb-1">
            Enable Location for Better Experience
          </h4>
          <p className="text-xs text-slate-300">
            We&apos;ll automatically set your preferred language based on your
            location
          </p>
        </div>
        <button
          onClick={handleDismiss}
          className="shrink-0 text-slate-400 hover:text-white"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="mt-3 flex gap-2">
        <Button
          size="sm"
          className="flex-1 bg-brand-blue hover:bg-brand-navy"
          onClick={() => window.location.reload()}
        >
          Allow Location
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="flex-1"
          onClick={handleDismiss}
        >
          Maybe Later
        </Button>
      </div>
    </div>
  );
}
