"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useEnquiry } from "@/components/EnquiryProvider";

const SLIDES = [
  {
    src: "/images/PI TEAM 2.jpg",
    alt: "PI Electrical local team",
  },
  {
    src: "/images/PI TEAM VAN.png",
    alt: "PI Electrical team van",
  },
] as const;

const ROTATE_MS = 5000;

function useRotatingIndex(length: number) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [length]);

  return index;
}

export default function About() {
  const { openEnquiry } = useEnquiry();
  const index = useRotatingIndex(SLIDES.length);
  const slide = SLIDES[index];

  return (
    <section id="about" className="border-b border-line bg-warm">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr,1fr] lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-stone">
              <div
                className="flex h-full w-full flex-col transition-transform duration-700 ease-in-out"
                style={{ transform: `translateY(-${index * 100}%)` }}
              >
                {SLIDES.map((s, i) => (
                  <div
                    key={s.src}
                    className="relative h-full w-full flex-shrink-0"
                    aria-hidden={i !== index}
                  >
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <p className="sr-only">{slide.alt}</p>
              <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-1.5">
                {SLIDES.map((s, i) => (
                  <span
                    key={s.src}
                    aria-hidden="true"
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? "w-5 bg-warm" : "w-1.5 bg-warm/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="lg:sticky lg:top-28">
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-muted">
                Local &amp; established
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Local team.
                <br />
                Professional service.
              </h2>
              <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted sm:text-lg">
                Based in Bonnyrigg and serving customers across Edinburgh,
                Midlothian and surrounding areas.
              </p>
              <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted sm:text-lg">
                A real, local team you can rely on - approachable, professional
                and proud of the work they put their name to.
              </p>

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
