"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import Reveal from "@/components/Reveal";
import { REVIEWS } from "@/lib/constants";

type Review = (typeof REVIEWS)[number];

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      aria-label={`${rating} out of 5 stars`}
      role="img"
    >
      {Array.from({ length: rating }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-amber-400 text-amber-400"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function Expandable({
  review,
  previewLength = 150,
}: {
  review: Review;
  previewLength?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const showToggle = review.full.length > previewLength;
  const shown = expanded ? review.full : review.full.slice(0, previewLength);

  return (
    <>
      <p className="text-[0.95rem] leading-relaxed text-charcoal/80">
        &ldquo;{shown}
        {!expanded &&
          review.full.length > previewLength &&
          !review.full.slice(previewLength).startsWith(" ") &&
          "..."}
        {expanded && "”"}
      </p>
      {showToggle && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="-mx-1 mt-2 inline-block px-1 py-2 text-sm font-semibold text-charcoal underline underline-offset-4 transition-colors hover:text-ink focus-visible:outline-charcoal"
          aria-expanded={expanded}
        >
          {expanded ? "Read less" : "Read full review"}
        </button>
      )}
    </>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="border-b border-line bg-warm">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-muted">
              Reviews
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
              What our customers say
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-muted sm:text-lg">
              The quality of the work matters. So does the experience of getting
              it done.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:gap-5 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.reviewer + review.date} delay={(i % 3) * 60}>
              <figure className="flex h-full flex-col rounded-[2px] bg-ivory p-6 ring-1 ring-black/5 sm:p-7">
                <Stars rating={review.rating} />
                <div className="mt-4 flex-1">
                  <p className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-muted">
                    {review.job}
                  </p>
                  <div className="mt-3">
                    <Expandable review={review} previewLength={110} />
                  </div>
                </div>
                <figcaption className="mt-5 border-t border-line pt-4">
                  <p className="font-semibold text-ink">{review.reviewer}</p>
                  <p className="mt-1 text-sm text-muted">
                    {review.location}
                    <span aria-hidden="true"> · </span>
                    <span className="text-faint">{review.date}</span>
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
