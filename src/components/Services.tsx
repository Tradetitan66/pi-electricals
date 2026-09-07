import Reveal from "@/components/Reveal";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="border-b border-line bg-warm">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-muted">
              What we do
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
              Services
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-muted sm:text-lg">
              From a single new socket to a full property project, we handle
              electrical work cleanly and professionally.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.number} delay={(i % 3) * 50}>
              <div className="border-t border-line pt-8">
                <span className="text-sm font-bold tabular-nums text-faint">
                  {service.number}
                </span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-2 max-w-sm text-[0.95rem] leading-relaxed text-muted">
                  {service.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="max-w-2xl text-[0.95rem] leading-relaxed text-muted">
            Every project is quoted in advance, with clear communication
            throughout. If you&rsquo;re unsure whether we cover your job, just ask -
            we&rsquo;ll be straight with you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
