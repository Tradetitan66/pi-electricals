"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useEnquiry } from "@/components/EnquiryProvider";

export default function FeaturedProject() {
  const { openEnquiry } = useEnquiry();

  return (
    <section
      className="relative isolate overflow-hidden bg-ink text-warm"
      aria-labelledby="featured-heading"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/PI 25.jpg"
          alt="Featured PI Electrical project — a carefully finished lighting installation"
          fill
          sizes="100vw"
          className="object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[70svh] max-w-7xl flex-col justify-end px-4 pb-16 pt-24 sm:min-h-[72svh] sm:px-6 sm:pb-20 lg:min-h-[80svh] lg:px-8 lg:pb-24">
        <div className="max-w-2xl">
          <p className="tracking-[0.25em] text-[0.7rem] font-medium uppercase text-warm/70 sm:text-xs">
            Featured work
          </p>
          <h2
            id="featured-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-warm sm:text-5xl lg:text-6xl"
          >
            Crafted down to
            <br />
            the last detail.
          </h2>
          <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-warm/80 sm:text-lg">
            Good electrical work should feel effortless once it&rsquo;s finished.
            PI Electrical focuses on clean installation, thoughtful placement and
            a professional finish throughout every project.
          </p>
          <button
            type="button"
            onClick={openEnquiry}
            className="group mt-8 inline-flex items-center justify-center gap-2 rounded-sm border border-warm/40 bg-ink/20 px-7 py-4 text-base font-semibold text-warm backdrop-blur-sm transition-colors hover:border-warm/70 hover:bg-ink/40"
          >
            Start an enquiry
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
