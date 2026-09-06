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

        <div className="mt-12 border-t border-line">
          {SERVICES.map((service, i) => (
            <Reveal key={service.number} delay={(i % 3) * 50}>
              <div className="group grid grid-cols-[auto,1fr] items-baseline gap-x-5 gap-y-1 border-b border-line py-8 transition-colors sm:grid-cols-[4rem,minmax(0,14rem),1fr] sm:gap-x-8 sm:py-10">
                <span className="text-sm tabular-nums text-faint sm:mt-1">
                  {service.number}
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {service.title}
                </h3>
                <p className="col-span-2 mt-2 max-w-xl text-[0.95rem] leading-relaxed text-muted sm:col-span-1 sm:col-start-3 sm:mt-0 sm:max-w-none sm:text-base">
                  {service.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="max-w-2xl text-[0.95rem] leading-relaxed text-muted">
            Every project is quoted in advance, with clear communication
            throughout. If you&rsquo;re unsure whether we cover your job, just ask —
            we&rsquo;ll be straight with you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
