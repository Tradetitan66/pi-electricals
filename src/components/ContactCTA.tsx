"use client";

import { ArrowUpRight, Phone } from "lucide-react";
import { useEnquiry } from "@/components/EnquiryProvider";
import { BUSINESS } from "@/lib/constants";

export default function ContactCTA() {
  const { openEnquiry } = useEnquiry();

  return (
    <section
      id="contact"
      className="border-b border-line bg-ink text-warm"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-2xl">
          <p className="tracking-[0.25em] text-[0.7rem] font-medium uppercase text-warm/60 sm:text-xs">
            Get in touch
          </p>
          <h2
            id="contact-heading"
            className="mt-4 text-4xl font-semibold tracking-tight text-warm sm:text-5xl lg:text-6xl"
          >
            Have a project
            <br />
            in mind?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-warm/75 sm:text-lg">
            A few details are enough to get started. We&rsquo;ll prepare your message
            so you don&rsquo;t have to type everything again.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <button
              type="button"
              onClick={openEnquiry}
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-warm px-7 py-4 text-base font-semibold text-ink transition-colors hover:bg-white"
            >
              Start WhatsApp enquiry
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-warm/40 bg-ink/20 px-7 py-4 text-base font-semibold text-warm backdrop-blur-sm transition-colors hover:border-warm/70 hover:bg-ink/40"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call PI Electrical
            </a>
          </div>

          <p className="mt-6 text-sm text-warm/60">
            Or call{" "}
            <a
              href={BUSINESS.phoneHref}
              className="inline-block py-2 font-semibold text-warm underline underline-offset-4"
            >
              {BUSINESS.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
