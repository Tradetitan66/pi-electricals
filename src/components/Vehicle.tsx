import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Vehicle() {
  return (
    <section
      className="border-b border-line bg-ivory"
      aria-labelledby="local-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] bg-stone">
              <Image
                src="/images/PI ELEC 1.jpg"
                alt="PI Electrical company vehicle, based in Bonnyrigg"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={80} className="lg:order-1">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-muted">
              Local &amp; established
            </p>
            <h2
              id="local-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl"
            >
              Local team.
              <br />
              Professional service.
            </h2>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted sm:text-lg">
              Based in Bonnyrigg and serving customers across Edinburgh,
              Midlothian and surrounding areas.
            </p>
            <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted sm:text-lg">
              A real, local team you can rely on — approachable, professional
              and proud of the work they put their name to.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
