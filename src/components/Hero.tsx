"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import { useEnquiry } from "@/components/EnquiryProvider";
import { BUSINESS } from "@/lib/constants";

export default function Hero() {
  const { openEnquiry } = useEnquiry();

  return (
    <section id="home" className="relative isolate overflow-hidden bg-ink text-warm">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/HERO PAGE.png"
          alt="PI Electrical hero image"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[82svh] max-w-7xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:min-h-[88svh] lg:px-8 lg:pb-24">
        <p className="hero-item flex items-center gap-3 tracking-[0.25em] text-[0.7rem] font-medium uppercase text-warm/70 sm:text-xs">
          <span aria-hidden="true" className="h-px w-10 bg-brass" />
          Electrician · Bonnyrigg &amp; Midlothian
        </p>

        <h1 className="hero-item mt-5 max-w-3xl text-[2.6rem] font-semibold leading-[1.04] tracking-tight text-warm sm:text-6xl lg:text-7xl">
          Electrical work,
          <br />
          <span className="text-brass">done properly.</span>
        </h1>

        <p className="hero-item mt-5 max-w-xl text-base leading-relaxed text-warm/80 sm:text-lg">
          Professional electrical services across Bonnyrigg, Edinburgh, Midlothian
          and surrounding areas - delivered with care from first conversation to
          final finish.
        </p>

        <div className="hero-item mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <button
            type="button"
            onClick={openEnquiry}
            className="group inline-flex items-center justify-center gap-2 rounded-sm bg-warm px-7 py-4 text-base font-semibold text-ink transition-transform duration-300 hover:scale-[1.02] hover:bg-white"
          >
            Start an enquiry
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-warm/40 bg-ink/20 px-7 py-4 text-base font-semibold text-warm backdrop-blur-sm transition-colors hover:border-warm/70 hover:bg-ink/40"
          >
            View our work
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <div className="hero-item mt-10 flex items-center gap-3">
          <div className="flex items-center gap-0.5" aria-label="Rated 5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-brass text-brass" aria-hidden="true" />
            ))}
          </div>
          <p className="text-sm text-warm/70">
            Rated 5★ by Edinburgh homeowners
          </p>
        </div>

        <p className="hero-item mt-8 text-sm text-warm/60 sm:hidden">
          Call{" "}
          <a
            href={BUSINESS.phoneHref}
            className="inline-block py-2 font-semibold text-warm underline underline-offset-4"
          >
            {BUSINESS.phoneDisplay}
          </a>
        </p>
      </div>
    </section>
  );
}
