"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Phone, X } from "lucide-react";
import { useEnquiry } from "@/components/EnquiryProvider";
import { BUSINESS, JOB_TYPES, buildWhatsAppUrl } from "@/lib/constants";

type FormData = {
  name: string;
  location: string;
  service: string;
  description: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const INITIAL: FormData = {
  name: "",
  location: "",
  service: "",
  description: "",
};

export default function WhatsAppEnquiry() {
  const { isOpen, closeEnquiry } = useEnquiry();
  const [data, setData] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeEnquiry();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeEnquiry]);

  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => setData(INITIAL), 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const set = (field: keyof FormData, value: string) => {
    setData((d) => ({ ...d, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!data.name.trim()) next.name = "Please enter your name.";
    if (!data.location.trim()) next.location = "Please enter your location or postcode.";
    if (!data.service) next.service = "Please choose the type of work.";
    if (!data.description.trim()) next.description = "Please tell us briefly about the job.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onContinue = () => {
    if (!validate()) return;
    const url = buildWhatsAppUrl({
      name: data.name.trim(),
      location: data.location.trim(),
      service: data.service,
      description: data.description.trim(),
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/70 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Start an enquiry"
      onClick={closeEnquiry}
    >
      <div
        className="flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-2xl bg-warm shadow-2xl sm:max-w-lg sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-line px-5 py-5 sm:px-7">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-ink">
              Start an enquiry
            </h2>
            <p className="mt-1 text-sm text-muted">
              We&rsquo;ll prepare your WhatsApp message so you don&rsquo;t have to type
              everything again.
            </p>
          </div>
          <button
            type="button"
            onClick={closeEnquiry}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm text-charcoal transition-colors hover:bg-stone"
            aria-label="Close enquiry"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 space-y-5 overflow-y-auto px-5 py-6 sm:px-7">
          <div>
            <label
              htmlFor="enq-name"
              className="block text-sm font-medium text-charcoal"
            >
              Your name
            </label>
            <input
              id="enq-name"
              type="text"
              value={data.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="James"
              autoComplete="name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "enq-name-err" : undefined}
              className="mt-2 w-full rounded-sm border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-faint focus:border-charcoal focus:outline-none focus:ring-1 focus:ring-charcoal"
            />
            {errors.name && (
              <p id="enq-name-err" role="alert" className="mt-2 text-sm text-[#a33]">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="enq-location"
              className="block text-sm font-medium text-charcoal"
            >
              Location / postcode
            </label>
            <input
              id="enq-location"
              type="text"
              value={data.location}
              onChange={(e) => set("location", e.target.value)}
              placeholder="EH10"
              autoComplete="postal-code"
              aria-invalid={!!errors.location}
              aria-describedby={errors.location ? "enq-location-err" : undefined}
              className="mt-2 w-full rounded-sm border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-faint focus:border-charcoal focus:outline-none focus:ring-1 focus:ring-charcoal"
            />
            {errors.location && (
              <p id="enq-location-err" role="alert" className="mt-2 text-sm text-[#a33]">
                {errors.location}
              </p>
            )}
          </div>

          <div>
            <span className="block text-sm font-medium text-charcoal">
              What do you need help with?
            </span>
            <div
              className="mt-2 grid grid-cols-2 gap-2"
              role="group"
              aria-label="Type of work"
            >
              {JOB_TYPES.map((job) => {
                const active = data.service === job;
                return (
                  <button
                    key={job}
                    type="button"
                    onClick={() => set("service", job)}
                    aria-pressed={active}
                    className={`rounded-sm border px-3 py-3 text-center text-sm font-medium transition-colors ${
                      active
                        ? "border-ink bg-ink text-warm"
                        : "border-line bg-white text-charcoal hover:border-charcoal"
                    }`}
                  >
                    {job}
                  </button>
                );
              })}
            </div>
            {errors.service && (
              <p role="alert" className="mt-2 text-sm text-[#a33]">
                {errors.service}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="enq-description"
              className="block text-sm font-medium text-charcoal"
            >
              Tell us briefly about the job
            </label>
            <textarea
              id="enq-description"
              rows={3}
              value={data.description}
              onChange={(e) => set("description", e.target.value)}
              placeholder="For example: Looking to replace 8 kitchen spotlights."
              aria-invalid={!!errors.description}
              aria-describedby={
                errors.description ? "enq-description-err" : undefined
              }
              className="mt-2 w-full resize-none rounded-sm border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-faint focus:border-charcoal focus:outline-none focus:ring-1 focus:ring-charcoal"
            />
            {errors.description && (
              <p id="enq-description-err" role="alert" className="mt-2 text-sm text-[#a33]">
                {errors.description}
              </p>
            )}
          </div>

          <p className="text-sm text-muted">
            You can also send photos once WhatsApp opens.
          </p>
        </div>

        {/* Footer */}
        <div className="border-t border-line px-5 py-5 sm:px-7">
          <button
            type="button"
            onClick={onContinue}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-sm bg-ink px-6 py-4 text-base font-semibold text-warm transition-colors hover:bg-charcoal"
          >
            Continue to WhatsApp
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
          <a
            href={BUSINESS.phoneHref}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-sm border border-line bg-white px-6 py-3.5 text-sm font-semibold text-charcoal transition-colors hover:border-charcoal"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call instead
          </a>
        </div>
      </div>
    </div>
  );
}
