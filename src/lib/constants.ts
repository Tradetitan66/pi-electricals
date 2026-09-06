// ============================================================================
// PI ELECTRICAL — SITE CONTENT
// ----------------------------------------------------------------------------
// All site content lives here so the client can edit it in one place.
//
// NOTE / PLACEHOLDERS:
// The phone number, email and WhatsApp number are NOT yet confirmed. Replace
// the placeholder values below with the real confirmed contact details before
// going live. Search for "TODO:" to find every placeholder.
// ============================================================================

export const BUSINESS = {
  name: "PI Electrical",
  slogan: "9A Durham Pl, Bonnyrigg, EH19 3EX, United Kingdom",
  address: {
    line1: "9A Durham Pl",
    line2: "Bonnyrigg",
    line3: "EH19 3EX",
  },
  phoneDisplay: "07445 846762",
  phoneHref: "tel:07445846762",
  // TODO: Replace with the real email address once confirmed.
  emailDisplay: "Paulinnes2306@hotmail.com",
  emailHref: "mailto:Paulinnes2306@hotmail.com",
  // WhatsApp number: UK mobile, international format with leading 0 dropped.
  // 07445 846762 -> 447445846762
  whatsappNumber: "447445846762",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
] as const;

export const TRUST_LINE = ["ON TIME.", "TIDY.", "DONE PROPERLY."] as const;

export const VALUES = [
  {
    title: "Neat workmanship",
    text: "A finish we're proud to put our name to.",
  },
  {
    title: "Clear communication",
    text: "From first message to final finish.",
  },
  {
    title: "Professional service",
    text: "Punctual, tidy and easy to deal with.",
  },
] as const;

// ============================================================================
// PROJECTS
// ----------------------------------------------------------------------------
// The supplied project photographs. Project details were not provided in
// full, so we use neutral, factual labels only. To fill in specific project
// info (type / location / work), edit the fields here.
// ============================================================================
export const PROJECTS = [
  {
    image: "/images/PI 21.jpg",
    alt: "PI Electrical completed electric installation in a residential project in Bonnyrigg",
    label: "Residential electrical project",
    size: "large" as const,
  },
  {
    image: "/images/PI 22.jpg",
    alt: "PI Electrical lighting installation detail in a completed project",
    label: "Lighting project",
    size: "small" as const,
  },
  {
    image: "/images/PI 23.jpg",
    alt: "PI Electrical completed electrical installation in Edinburgh",
    label: "Electrical installation",
    size: "small" as const,
  },
  {
    image: "/images/PI 24.jpg",
    alt: "PI Electrical downlight installation detail in a finished project",
    label: "Downlight installation",
    size: "small" as const,
  },
  {
    image: "/images/PI 25.jpg",
    alt: "PI Electrical electrical project completed in the local area",
    label: "Recent installation",
    size: "large" as const,
  },
  {
    image: "/images/PI 26.jpg",
    alt: "PI Electrical sockets and power installation detail",
    label: "Sockets and power",
    size: "small" as const,
  },
  {
    image: "/images/PI 27.jpg",
    alt: "PI Electrical electrical project in Midlothian",
    label: "Residential electrical project",
    size: "small" as const,
  },
  {
    image: "/images/PI 28.jpg",
    alt: "PI Electrical completed project detail installation",
    label: "Completed project",
    size: "small" as const,
  },
  {
    image: "/images/PI 29.jpg",
    alt: "PI Electrical lighting installation in a completed project",
    label: "Lighting project",
    size: "large" as const,
  },
  {
    image: "/images/PI 30.jpg",
    alt: "PI Electrical electrical installation detail in Bonnyrigg",
    label: "Electrical installation",
    size: "small" as const,
  },
  {
    image: "/images/PI 8.jpg",
    alt: "PI Electrical close-up detail of a finished electrical installation",
    label: "Detail installation",
    size: "detail" as const,
  },
  {
    image: "/images/PI 9.jpg",
    alt: "PI Electrical close-up detail of professional electrical workmanship",
    label: "Detail installation",
    size: "detail" as const,
  },
] as const;

// ============================================================================
// SERVICES
// ----------------------------------------------------------------------------
// Structure confirmed services so the client can edit them later. These are
// presented as categories rather than as verified claims.
// ============================================================================
export const SERVICES = [
  {
    number: "01",
    title: "Domestic electrical",
    text: "Rewires, consumer units, additions and upgrades handled cleanly and to a professional standard.",
  },
  {
    number: "02",
    title: "Lighting",
    text: "Downlights, spotlights, soffit lighting and decorative fixtures — carefully installed and finished.",
  },
  {
    number: "03",
    title: "Testing & EICR",
    text: "Electrical Installation Condition Reports carried out thoroughly and explained clearly.",
  },
  {
    number: "04",
    title: "Sockets & power",
    text: "New sockets, power points and circuits positioned where they're actually useful.",
  },
  {
    number: "05",
    title: "Outdoor electrical",
    text: "Shed and outbuilding power, outdoor lighting and power brought safely outside.",
  },
  {
    number: "06",
    title: "Renovations",
    text: "Electrical work for extensions and refurbishments, coordinated around other trades.",
  },
] as const;

// ============================================================================
// REVIEWS
// ----------------------------------------------------------------------------
// Real, supplied customer reviews. Only genuine reviews are included.
// "full" holds the complete review text; "excerpt" is shown first on
// shorter cards and expanded on demand.
// ============================================================================
export const REVIEWS = [
  {
    job: "New sockets and lights for flat",
    rating: 5,
    reviewer: "MyBuilder user",
    location: "Edinburgh",
    date: "27 April 2026",
    full: "Really good work from PI Electrical. Added plug sockets, spotlights in the kitchen, and replaced an old doorbell and put a light in the attic with switch, for a very reasonable price. Very pleasant guys, arrived on time, and tidied up after themselves. Very pleased, and highly recommend.",
    featured: true,
  },
  {
    job: "Downlights install",
    rating: 5,
    reviewer: "Gillian Wilson",
    location: "Bathgate",
    date: "20 February 2026",
    full: "Absolutely delighted with the standard of work from PI Electrical. The guys arrived prompt, cleaned up and did a very neat job and were very professional. Will definately contact again for other work.",
    featured: false,
  },
  {
    job: "EICR and certificate for council",
    rating: 5,
    reviewer: "Anayeth",
    location: "Edinburgh",
    date: "17 February 2026",
    full: "Paul carried out an EICR for me and I honestly couldn't have asked for better service. He is fully qualified, knowledgeable, and extremely professional throughout the whole process. He completed the Electrical Installation Condition Report thoroughly and explained everything clearly so I understood exactly where I stood. What really impressed me was how supportive he was in helping me achieve my completion certification with the council. He made sure everything was up to standard and compliant, which gave me real peace of mind. Reliable, punctual, and clearly takes pride in doing things properly, not cutting corners. If you need an electrician who knows his job and genuinely helps you get results, I would highly recommend Paul.",
    featured: true,
  },
  {
    job: "Emergency light fitting",
    rating: 5,
    reviewer: "Kirsty Ross",
    location: "Dalkeith",
    date: "16 December 2025",
    full: "I wasn't home when the job was completed as I had to be at work. My Daughter was left leading the way. It's always a worry when you're not there to show what needs done. Not only was the job completed. He fixed another issue with the socket. He arrived same day within a few hours on a Sunday. Didn't rip me off for a Sunday call out charge. Completed the work I asked to be done. Very reasonably priced. I would highly recommend and definitely use again.",
    featured: false,
  },
  {
    job: "Run electricity to shed",
    rating: 5,
    reviewer: "Nicola White",
    location: "Pathhead",
    date: "1 November 2025",
    full: "Quote was reasonable, work completed to high standard and communication excellent. Very pleased.",
    featured: false,
  },
  {
    job: "Removal of wall lights",
    rating: 5,
    reviewer: "MyBuilder user",
    location: "Edinburgh",
    date: "10 March 2026",
    full: "Paul did a brilliant job of removing several wall lights prior to my bedroom being replastered. Speedy responses, very professional. Will use again!",
    featured: false,
  },
] as const;

// ============================================================================
// WHATSAPP ENQUIRY FORM
// ============================================================================
export const JOB_TYPES = [
  "Lighting",
  "Sockets / Power",
  "EICR / Testing",
  "Electrical Installation",
  "Outdoor Electrical",
  "Fault / Repair",
  "Renovation Work",
  "Other",
] as const;

export const ENQUIRY_OPTIONS = [
  {
    value: "call",
    label: "CALL PI ELECTRICAL",
    href: BUSINESS.phoneHref,
  },
] as const;

// Build the wa.me prefilled message used by the enquiry form.
export function buildWhatsAppMessage(input: {
  name: string;
  location: string;
  service: string;
  description: string;
}) {
  return `Hi PI Electrical,

I'd like to enquire about some electrical work.

Name: ${input.name}
Location: ${input.location}
Job: ${input.service}
Details: ${input.description}

Could you let me know the next steps?

Thanks.`;
}

export function buildWhatsAppUrl(input: {
  name: string;
  location: string;
  service: string;
  description: string;
}) {
  const message = buildWhatsAppMessage(input);
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
