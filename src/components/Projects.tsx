"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useEnquiry } from "@/components/EnquiryProvider";
import { PROJECTS } from "@/lib/constants";

type Project = (typeof PROJECTS)[number];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [paused, setPaused] = useState(false);
  const { openEnquiry } = useEnquiry();
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  const openLightbox = useCallback((p: Project) => setSelected(p), []);

  const scrollByCard = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-carousel-card]");
    const width = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollTo({ left: el.scrollLeft + dir * width, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 8) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollTo({ left: el.scrollLeft + el.clientWidth * 0.95, behavior: "smooth" });
      }
    }, 2000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="projects" className="border-b border-line bg-ivory">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-muted">
              Our work
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
              Selected work
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-muted sm:text-lg">
              A selection of recent electrical work completed across homes and
              properties in the local area.
            </p>
          </div>
        </Reveal>

        <div
          className="group/carousel relative mt-10 sm:mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {PROJECTS.map((project, index) => (
              <Reveal
                key={project.image}
                as="figure"
                className="w-[78vw] max-w-md shrink-0 snap-start sm:w-[46vw] sm:max-w-lg lg:w-[calc((100%-2rem)/3)]"
                delay={(index % 4) * 60}
              >
                <button
                  type="button"
                  onClick={() => openLightbox(project)}
                  data-carousel-card
                  className="group block w-full rounded-3xl bg-stone text-left focus-visible:outline-charcoal"
                  aria-label={`View ${project.label} photograph`}
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" />
                  </div>
                  <figcaption className="flex items-center justify-between gap-3 px-1 pb-1 pt-4">
                    <span className="text-[0.85rem] font-medium tracking-wide text-charcoal">
                      {project.label}
                    </span>
                    <span className="hidden h-px flex-1 bg-line sm:block" />
                    <span
                      aria-hidden="true"
                      className="text-[0.85rem] font-medium text-faint transition-colors group-hover:text-charcoal"
                    >
                      View
                    </span>
                  </figcaption>
                </button>
              </Reveal>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            className="absolute left-0 top-[40%] z-10 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-warm text-ink shadow-lg ring-1 ring-black/5 transition-colors hover:bg-white lg:inline-flex"
            aria-label="Previous projects"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            className="absolute right-0 top-[40%] z-10 hidden h-12 w-12 translate-x-1/2 items-center justify-center rounded-full bg-warm text-ink shadow-lg ring-1 ring-black/5 transition-colors hover:bg-white lg:inline-flex"
            aria-label="Next projects"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <Reveal className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <button
            type="button"
            onClick={openEnquiry}
            className="inline-flex items-center justify-center self-start rounded-sm bg-ink px-7 py-4 text-base font-semibold text-warm transition-colors hover:bg-charcoal"
          >
            Start an enquiry
          </button>
          <p className="text-sm text-muted">
            Like what you see? We&rsquo;d be glad to talk about your project.
          </p>
        </Reveal>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.label} enlarged`}
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-warm/10 text-warm transition-colors hover:bg-warm/20"
            aria-label="Close image"
          >
            <X className="h-6 w-6" />
          </button>
          <figure
            className="relative max-h-[86vh] w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-ink/40 sm:aspect-[3/4]">
              <Image
                src={selected.image}
                alt={selected.alt}
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-3 text-sm text-warm/70">
              {selected.label}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
