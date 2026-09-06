"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { useEnquiry } from "@/components/EnquiryProvider";
import { BUSINESS } from "@/lib/constants";

export default function MobileContactBar() {
  const [visible, setVisible] = useState(false);
  const { openEnquiry } = useEnquiry();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="border-t border-line bg-warm/95 px-3 py-2.5 backdrop-blur-md">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-ink px-4 text-base font-semibold text-warm transition-colors hover:bg-charcoal"
            aria-label={`Call PI Electrical on ${BUSINESS.phoneDisplay}`}
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call
          </a>
          <button
            type="button"
            onClick={openEnquiry}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-[#25D366] px-4 text-base font-semibold text-white transition-colors hover:bg-[#1ebe5d]"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
