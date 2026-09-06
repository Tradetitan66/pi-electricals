"use client";

import { createContext, useCallback, useContext, useState } from "react";

type EnquiryContextValue = {
  isOpen: boolean;
  openEnquiry: () => void;
  closeEnquiry: () => void;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) {
    throw new Error("useEnquiry must be used within EnquiryProvider");
  }
  return ctx;
}

export default function EnquiryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openEnquiry = useCallback(() => setIsOpen(true), []);
  const closeEnquiry = useCallback(() => setIsOpen(false), []);

  return (
    <EnquiryContext.Provider value={{ isOpen, openEnquiry, closeEnquiry }}>
      {children}
    </EnquiryContext.Provider>
  );
}
