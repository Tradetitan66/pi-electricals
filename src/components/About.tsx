"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useEnquiry } from "@/components/EnquiryProvider";

export default function About() {
  const { openEnquiry } = useEnquiry();

  return (
    <section id="about" className="border-b border-line bg-warm">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr,1fr] lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-stone sm:aspect-[3/2] lg:aspect-[4/5]">
              <Image
                src="/images/PI TEAM 1.jpg"
                alt="PI Electrical team member at work on a professional installation"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="lg:sticky lg:top-28">
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-muted">
                About PI Electrical
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Professional work.
                <br />
                Personal service.
              </h2>
              <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted sm:text-lg">
                PI Electrical is a local electrical company focused on
                professional workmanship, clear communication and a finish we&rsquo;re
                proud to put our name to.
              </p>
              <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted sm:text-lg">
                From smaller electrical jobs to larger property projects, the aim
                is to make the process straightforward — from the first message
                through to completion.
              </p>

              <div className="mt-8 grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
                <div>
                  <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-muted">
                    Quality first
                  </p>
                  <p className="mt-2 max-w-xs text-[0.95rem] leading-relaxed text-charcoal/70">
                    We take care to do the job properly and leave it clean and
                    tidy.
                  </p>
                </div>
                <div>
                  <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-muted">
                    Clear and easy
                  </p>
                  <p className="mt-2 max-w-xs text-[0.95rem] leading-relaxed text-charcoal/70">
                    Straightforward communication and fair pricing, from the
                    first call to the final handover.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={openEnquiry}
                className="group mt-8 inline-flex items-center gap-2 rounded-sm bg-ink px-7 py-4 text-base font-semibold text-warm transition-colors hover:bg-charcoal"
              >
                Get in touch
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
