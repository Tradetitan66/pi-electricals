"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { useEnquiry } from "@/components/EnquiryProvider";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openEnquiry } = useEnquiry();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-warm/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {/* Top contact micro-bar — desktop only */}
      <div
        className={`hidden overflow-hidden border-b border-line transition-all duration-300 lg:block ${
          scrolled ? "max-h-0 border-transparent opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-[0.8125rem] text-muted">
          <span>Bonnyrigg · Edinburgh · Midlothian</span>
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-1.5 text-charcoal transition-colors hover:text-ink"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>

      <nav aria-label="Main navigation">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
          <Link
            href="/#home"
            className="shrink-0"
            aria-label="PI Electrical — home"
            onClick={() => setOpen(false)}
          >
            <Logo imgClassName="h-10 w-auto lg:h-11" />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-sm px-3.5 py-2 text-[0.9rem] font-medium text-charcoal/80 transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              onClick={openEnquiry}
              className="rounded-sm bg-[#25D366] px-6 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[#1ebe5d] focus-visible:outline-charcoal"
            >
              Get a quote
            </button>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={BUSINESS.phoneHref}
              aria-label={`Call PI Electrical on ${BUSINESS.phoneDisplay}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-ink transition-colors hover:bg-stone"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={openEnquiry}
              className="rounded-sm bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5d]"
            >
              Get a quote
            </button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-ink transition-colors hover:bg-stone"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div
            id="mobile-menu"
            className="border-t border-line bg-warm lg:hidden"
          >
            <div className="mx-auto flex flex-col px-4 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line/60 px-2 py-4 text-base font-medium text-charcoal transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openEnquiry();
                }}
                className="mt-4 rounded-sm bg-ink px-6 py-4 text-base font-semibold text-warm"
              >
                Get a quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
