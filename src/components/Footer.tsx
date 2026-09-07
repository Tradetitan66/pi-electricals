import Link from "next/link";
import Logo from "@/components/Logo";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-ink text-warm">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Link href="/#home" aria-label="PI Electrical - home">
              <span className="inline-block rounded-sm bg-warm p-2">
                <Logo imgClassName="h-9 w-auto" />
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-warm/70">
              Professional electrical services across Bonnyrigg, Edinburgh,
              Midlothian and surrounding areas.
            </p>
          </div>

          <div>
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-warm/50">
              Contact
            </p>
            <address className="mt-4 text-sm not-italic leading-relaxed text-warm/80">
              {BUSINESS.address.line1}
              <br />
              {BUSINESS.address.line2}
              <br />
              {BUSINESS.address.line3}
            </address>
            <div className="mt-2 space-y-0.5 text-sm">
              <a
                href={BUSINESS.phoneHref}
                className="block py-2.5 text-warm/80 transition-colors hover:text-warm"
              >
                {BUSINESS.phoneDisplay}
              </a>
              <a
                href={BUSINESS.emailHref}
                className="block py-1 text-warm/80 transition-colors hover:text-warm"
              >
                {BUSINESS.emailDisplay}
              </a>
            </div>
          </div>

          <div>
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-warm/50">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warm/80 transition-colors hover:text-warm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-warm/15 pt-6 text-sm text-warm/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PI Electrical. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span aria-hidden="true">Bonnyrigg</span>
            <span aria-hidden="true" className="text-warm/30">
              ·
            </span>
            <span>EH19 3EX</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
