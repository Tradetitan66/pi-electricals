import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileContactBar from "@/components/MobileContactBar";
import WhatsAppEnquiry from "@/components/WhatsAppEnquiry";
import EnquiryProvider from "@/components/EnquiryProvider";
import { BUSINESS } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pielectrical.example.com"),
  title: {
    default: "PI Electrical | Electrician in Bonnyrigg & Midlothian",
    template: "%s | PI Electrical",
  },
  description:
    "Professional electrical services in Bonnyrigg, Edinburgh and Midlothian. View recent PI Electrical projects and get in touch for electrical work, lighting, testing and installations.",
  keywords: [
    "electrician Bonnyrigg",
    "electrician Midlothian",
    "electrician Edinburgh",
    "electrical contractor Bonnyrigg",
    "electrical services Midlothian",
    "EICR Edinburgh",
    "lighting installation Edinburgh",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "PI Electrical",
    title: "PI Electrical | Electrician in Bonnyrigg & Midlothian",
    description:
      "Professional electrical services in Bonnyrigg, Edinburgh and Midlothian.",
    images: [
      {
        url: "/images/PI 22.jpg",
        alt: "PI Electrical completed electrical installation in a premium residential project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PI Electrical | Electrician in Bonnyrigg & Midlothian",
    description:
      "Professional electrical services in Bonnyrigg, Edinburgh and Midlothian.",
    images: ["/images/PI 22.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const address = BUSINESS.address;

  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Electrician",
              name: BUSINESS.name,
              telephone: BUSINESS.phoneDisplay,
              address: {
                "@type": "PostalAddress",
                streetAddress: address.line1,
                addressLocality: address.line2,
                postalCode: address.line3,
                addressCountry: "GB",
              },
              url: "https://pielectrical.example.com",
              logo: "https://pielectrical.example.com/images/PI LOGO.png",
              areaServed: ["Bonnyrigg", "Edinburgh", "Midlothian"],
            }),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:rounded-sm focus:bg-ink focus:px-5 focus:py-3 focus:font-semibold focus:text-warm"
        >
          Skip to content
        </a>
        <EnquiryProvider>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <MobileContactBar />
          <WhatsAppEnquiry />
          <Footer />
        </EnquiryProvider>
      </body>
    </html>
  );
}
