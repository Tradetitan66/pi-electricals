import { TRUST_LINE, VALUES } from "@/lib/constants";

export default function TrustStrip() {
  return (
    <section className="border-b border-line bg-warm" aria-label="What we value">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div
          className="flex flex-wrap items-baseline gap-x-3 gap-y-1"
          aria-label="On time, tidy, done properly"
        >
          {TRUST_LINE.map((word) => (
            <span
              key={word}
              className="text-2xl font-semibold tracking-tight text-charcoal sm:text-4xl"
            >
              {word}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-8 border-t border-line pt-10 sm:grid-cols-3 sm:gap-10">
          {VALUES.map((value) => (
            <div key={value.title}>
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-muted">
                {value.title}
              </p>
              <p className="mt-2 max-w-xs text-[0.95rem] leading-relaxed text-charcoal/70">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
