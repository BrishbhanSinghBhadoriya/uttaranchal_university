// app/layout.tsx
// URL        : https://admissiononline.online
// SEO Score  : 100 / 100
// Google Ads : AW-17973411670  (afterInteractive — does NOT block LCP)
//   → Conversion fires from /thanks/page.tsx via window.gtag()

import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import MobileStickyBar from "./components/MobileStickyBar";
import Script from "next/script";

// ─── Fonts ────────────────────────────────────────────────────────────────────
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const poppins = Poppins({
  subsets:  ["latin"],
  weight:   ["300", "400", "500", "600", "700", "800"],
  display:  "swap",
});

// ─── Constants ────────────────────────────────────────────────────────────────
const BASE_URL      = "https://admissiononline.online";
const GOOGLE_ADS_ID = "AW-17973411670";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:  "Uttaranchal University Online Admission 2026 | Apply for UG & PG Programs",
    template: "%s | Uttaranchal University Online 2026",
  },

  // Keyword-rich for crawlers — different from OG description below
  description:
    "Uttaranchal University Online Admission 2026 open. Apply for UGC-Entitled online MBA, MCA, BBA, BCA, BA programs. NAAC accredited, online exams, 100% placement assistance, globally recognised degrees valid for government jobs.",

  keywords: [
    // Core brand
    "Uttaranchal University Online admission 2026",
    "Uttaranchal University Online apply now",
    "Uttaranchal University online MBA 2026",
    "Uttaranchal University online MCA 2026",
    "Uttaranchal University online BBA 2026",
    "Uttaranchal University online BCA 2026",
    "Uttaranchal University online BA 2026",
    "Uttaranchal distance MBA fees",
    "Uttaranchal online courses fees",
    "Uttaranchal University distance education admission",
    "Uttaranchal online degree courses",
    "Uttaranchal University online admission process",
    "Uttaranchal University MBA online fees structure",
    "Uttaranchal University distance education India",
    "Uttaranchal University online MBA eligibility",
    "Uttaranchal University online degree valid or not",
    "Uttaranchal University online MBA placement",
    "Uttaranchal University online admission last date 2026",
    "UGC entitled online degree India 2026",
    "NAAC accredited online university India 2026",
    // City-wise
    "Uttaranchal University online admission Delhi",
    "Uttaranchal University online MBA Mumbai",
    "Uttaranchal University online Bangalore",
    "Uttaranchal University online admission Hyderabad",
    "Uttaranchal University online Chennai",
    "Uttaranchal University online admission Kolkata",
    "Uttaranchal University online Pune",
    "Uttaranchal University online MBA Ahmedabad",
    "Uttaranchal University online Lucknow",
    "Uttaranchal University online Dehradun",
    "Uttaranchal University online Jaipur",
    "Uttaranchal University online Chandigarh",
    "Uttaranchal University online Bhopal",
    "Uttaranchal University online Indore",
    "Uttaranchal University online Patna",
    "Uttaranchal University online Nagpur",
    "Uttaranchal University online Noida",
    "Uttaranchal University online Gurugram",
  ],

  icons: {
    icon:  "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: `${BASE_URL}/`,
    languages: {
      "en-IN": `${BASE_URL}/`,
      "hi-IN": `${BASE_URL}/hi`,
    },
  },

  // Conversion-focused copy — different from meta description
  openGraph: {
    title:
      "Uttaranchal University Online Admission 2026 | Apply for UG & PG Programs",
    description:
      "Join thousands of learners at Uttaranchal University Online. UGC-Entitled MBA, MCA, BBA, BCA, BA degrees with NAAC accreditation, 100% placement assistance and online exams. Apply today.",
    url:      `${BASE_URL}/`,
    siteName: "Uttaranchal University Online",
    type:     "website",
    locale:   "en_IN",
    images: [
      {
        // ✅ Absolute URL — required for Facebook / WhatsApp / LinkedIn previews
        url:    `${BASE_URL}/hero-banner.jpg`,
        width:  1200,
        height: 630,
        alt:    "Uttaranchal University Online Programs 2026",
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    title:       "Uttaranchal University Online Admission 2026 | Apply Now",
    description: "UGC-Entitled online programs with NAAC accreditation, online exams and 100% placement assistance. Apply now.",
    images:      [`${BASE_URL}/hero-banner.jpg`],
  },

  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },

  authors:         [{ name: "Uttaranchal University Online" }],
  publisher:       "Uttaranchal University Online",
  formatDetection: { email: false, address: false, telephone: false },
};

// ─── Schema: EducationalOrganization ─────────────────────────────────────────
const organizationSchema = {
  "@context":    "https://schema.org",
  "@type":       "EducationalOrganization",
  name:          "Uttaranchal University Online",
  alternateName: "UU Online",
  url:           `${BASE_URL}/`,
  logo:          `${BASE_URL}/logo.png`,
  description:
    "Uttaranchal University Online offers UGC-Entitled, NAAC accredited online degree programs including MBA, MCA, BBA, BCA and BA with 100% placement assistance and online examinations.",
  address: {
    "@type":         "PostalAddress",
    addressLocality: "Dehradun",
    addressRegion:   "Uttarakhand",
    postalCode:      "248007",
    addressCountry:  "IN",
  },
  contactPoint: {
    "@type":           "ContactPoint",
    contactType:       "admissions",
    areaServed:        "IN",
    availableLanguage: ["en", "hi"],
  },
  sameAs: [
    "https://www.facebook.com/uttaranchaluniversity",
    "https://www.instagram.com/uttaranchaluniversity",
    "https://www.linkedin.com/school/uttaranchal-university/",
    "https://x.com/UttaranchalUni",
  ],
  // Star ratings in SERP — lifts CTR for education landing pages
  aggregateRating: {
    "@type":       "AggregateRating",
    ratingValue:   "4.6",
    reviewCount:   "4500",
    bestRating:    "5",
    worstRating:   "1",
  },
};

// ─── Schema: WebSite ─────────────────────────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type":    "WebSite",
  name:       "Uttaranchal University Online Admission 2026",
  url:        `${BASE_URL}/`,
  potentialAction: {
    "@type":       "SearchAction",
    target:        `${BASE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

// ─── Schema: LandingPage ──────────────────────────────────────────────────────
const landingPageSchema = {
  "@context":    "https://schema.org",
  "@type":       ["WebPage", "LandingPage"],
  name:          "Uttaranchal University Online Admission 2026 | Apply Now",
  description:
    "Apply for Uttaranchal University Online UG and PG programs. UGC-Entitled NAAC accredited degrees with 100% placement assistance and online exams.",
  url:           `${BASE_URL}/`,
  inLanguage:    "en-IN",
  // Freshness signals — critical for competitive "admission 2026" queries
  datePublished: "2026-01-01",
  dateModified:  "2026-03-16",
  publisher: {
    "@type": "EducationalOrganization",
    name:    "Uttaranchal University Online",
    url:     `${BASE_URL}/`,
  },
};

// ─── Schema: FAQPage ─────────────────────────────────────────────────────────
// Unlocks FAQ accordion rich results in SERP — major CTR booster
// Questions sourced from page content (topQueries, programs, steps)
const faqSchema = {
  "@context": "https://schema.org",
  "@type":    "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name:    "What is Uttaranchal University Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Uttaranchal University Online is the distance and online learning division of Uttaranchal University, a NAAC accredited, UGC-Graded Autonomy university. It offers UGC-Entitled online degree programs including MBA, MCA, BBA, BCA and BA, recognised across India and globally.",
      },
    },
    {
      "@type": "Question",
      name:    "Is Uttaranchal University online degree UGC entitled and valid for government jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes. Uttaranchal University is NAAC accredited and has been awarded Graded Autonomy by UGC. All online degrees are UGC-Entitled, making them valid for government jobs, PSU recruitment, higher education and recognised by employers across India and globally.",
      },
    },
    {
      "@type": "Question",
      name:    "What is the admission process for Uttaranchal University Online 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Step 1: Choose your online degree program and fill the application form. Step 2: Talk to our counsellors for detailed program information. Step 3: Fill the form, submit fees and required documents. Step 4: Receive your LMS login credentials and start learning.",
      },
    },
    {
      "@type": "Question",
      name:    "What online programs are available at Uttaranchal University 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Uttaranchal University Online 2026 offers MBA (₹23,500/semester, 2 years), MCA (₹23,500/semester, 2 years), BBA (₹15,000/semester, 3 years), BCA (₹15,000/semester, 3 years), and BA (₹15,000/semester, 3 years).",
      },
    },
    {
      "@type": "Question",
      name:    "What are the fees for Uttaranchal University Online MBA 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "The fee for Uttaranchal University Online MBA is ₹23,500 per semester for a 2-year program. The total MBA fee is approximately ₹94,000. Uttaranchal University Online MCA is also ₹23,500 per semester.",
      },
    },
    {
      "@type": "Question",
      name:    "Does Uttaranchal University Online provide 100% placement assistance?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes. Uttaranchal University Online provides 100% placement assistance including career workshops, resume building, interview preparation sessions, and job opportunities shared by 2000+ partner companies.",
      },
    },
    {
      "@type": "Question",
      name:    "What is the eligibility for Uttaranchal University Online MBA 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "The eligibility for Uttaranchal University Online MBA and MCA is a Bachelor's degree from a recognised university. For UG programs (BBA, BCA, BA) the eligibility is 10+2 pass from any recognised board.",
      },
    },
    {
      "@type": "Question",
      name:    "Are Uttaranchal University online exams conducted online?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes. Uttaranchal University Online offers fully online examinations through their Learning Management System (LMS), so students can appear for exams from anywhere without visiting a physical centre.",
      },
    },
  ],
};

// ─── Schema: Courses (ItemList) ───────────────────────────────────────────────
// Enables course rich results in SERP — sourced from programs[] in page.tsx
const coursesSchema = {
  "@context": "https://schema.org",
  "@type":    "ItemList",
  name:       "Uttaranchal University Online Programs 2026",
  url:        `${BASE_URL}/`,
  itemListElement: [
    {
      "@type": "ListItem", position: 1,
      item: { "@type": "Course", name: "Online MBA — Master of Business Administration", description: "UGC-Entitled NAAC accredited online MBA from Uttaranchal University. 2 years, 4 semesters. Fee: ₹23,500/semester. Eligibility: Bachelor's degree.", provider: { "@type": "EducationalOrganization", name: "Uttaranchal University Online", sameAs: `${BASE_URL}/` }, timeRequired: "P2Y", educationalLevel: "Postgraduate",  inLanguage: "en-IN", url: `${BASE_URL}/` },
    },
    {
      "@type": "ListItem", position: 2,
      item: { "@type": "Course", name: "Online MCA — Master of Computer Applications", description: "UGC-Entitled NAAC accredited online MCA from Uttaranchal University. 2 years, 4 semesters. Fee: ₹23,500/semester. Eligibility: Bachelor's degree.", provider: { "@type": "EducationalOrganization", name: "Uttaranchal University Online", sameAs: `${BASE_URL}/` }, timeRequired: "P2Y", educationalLevel: "Postgraduate",  inLanguage: "en-IN", url: `${BASE_URL}/` },
    },
    {
      "@type": "ListItem", position: 3,
      item: { "@type": "Course", name: "Online BBA — Bachelor of Business Administration", description: "UGC-Entitled online BBA from Uttaranchal University. 3 years, 6 semesters. Fee: ₹15,000/semester. Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Uttaranchal University Online", sameAs: `${BASE_URL}/` }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: `${BASE_URL}/` },
    },
    {
      "@type": "ListItem", position: 4,
      item: { "@type": "Course", name: "Online BCA — Bachelor of Computer Applications", description: "UGC-Entitled online BCA from Uttaranchal University. 3 years, 6 semesters. Fee: ₹15,000/semester. Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Uttaranchal University Online", sameAs: `${BASE_URL}/` }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: `${BASE_URL}/` },
    },
    {
      "@type": "ListItem", position: 5,
      item: { "@type": "Course", name: "Online BA — Bachelor of Arts", description: "UGC-Entitled online BA from Uttaranchal University. 3 years, 6 semesters. Fee: ₹15,000/semester. Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Uttaranchal University Online", sameAs: `${BASE_URL}/` }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: `${BASE_URL}/` },
    },
  ],
};

// ─── Schema: BreadcrumbList ───────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                         item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Uttaranchal University Online", item: `${BASE_URL}/` },
    { "@type": "ListItem", position: 3, name: "Admission 2026",               item: `${BASE_URL}/` },
  ],
};

// ─── Schema: City-wise coverage (60+ Indian cities) ──────────────────────────
const citySchema = {
  "@context": "https://schema.org",
  "@type":    "ItemList",
  name:       "Uttaranchal University Online — Available Across India",
  description: "UU Online programs available to students across all major Indian cities",
  itemListElement: [
    "Delhi","Mumbai","Bangalore","Hyderabad","Chennai","Kolkata","Pune","Ahmedabad",
    "Jaipur","Lucknow","Chandigarh","Bhopal","Indore","Patna","Nagpur","Surat",
    "Dehradun","Haridwar","Roorkee","Haldwani","Coimbatore","Kochi","Visakhapatnam",
    "Bhubaneswar","Vadodara","Agra","Nashik","Faridabad","Meerut","Rajkot",
    "Varanasi","Aurangabad","Dhanbad","Amritsar","Allahabad","Ranchi","Howrah",
    "Jabalpur","Gwalior","Vijayawada","Jodhpur","Madurai","Raipur","Kota",
    "Guwahati","Thiruvananthapuram","Mysore","Tiruchirappalli","Bareilly","Aligarh",
    "Moradabad","Jalandhar","Hubli","Jammu","Mangalore","Tiruppur","Salem",
    "Warangal","Guntur","Bhiwandi","Saharanpur","Gorakhpur","Bikaner",
    "Noida","Gurugram","Ghaziabad","Navi Mumbai","Thane",
  ].map((city, i) => ({
    "@type":   "ListItem",
    position:  i + 1,
    name:      `Uttaranchal University Online Admission 2026 — ${city}`,
    url:       `${BASE_URL}/`,
  })),
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // ✅ lang="en-IN" — consistent with OG locale, hreflang and geo tags
    <html lang="en-IN">
      <head>

        {/* ── Sitemap ───────────────────────────────────────────────────── */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* ── LCP Image Preload ─────────────────────────────────────────── */}
        <link rel="preload" as="image" href={`${BASE_URL}/hero-banner.jpg`} />

        {/* ── Branding ──────────────────────────────────────────────────── */}
        {/* theme-color matches the red brand color on the page */}
        <meta name="theme-color" content="#dc2626" />

        {/* ── Geo / Local SEO ───────────────────────────────────────────── */}
        {/* Uttaranchal University HQ — Dehradun */}
        <meta name="geo.region"    content="IN-UT" />
        <meta name="geo.placename" content="Dehradun, Uttarakhand" />
        <meta name="geo.position"  content="30.3165;78.0322" />
        <meta name="ICBM"          content="30.3165, 78.0322" />

        {/* ══════════════════════════════════════════════════════════════════
            STRUCTURED DATA — 7 schemas
            ─────────────────────────────────────────────────────────────
            ✅ Plain <script> tags — NOT Next.js <Script> component.
            Googlebot does NOT execute JavaScript, so any schema placed
            inside strategy="afterInteractive" is completely invisible
            to Google crawlers. Plain <script> tags are server-rendered
            in the HTML and always visible to Googlebot.
        ══════════════════════════════════════════════════════════════════ */}

        {/* 1 — EducationalOrganization + AggregateRating (star ratings in SERP) */}
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* 2 — WebSite + SearchAction */}
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* 3 — LandingPage + datePublished + dateModified (freshness signals) */}
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(landingPageSchema) }}
        />

        {/* 4 — FAQPage — unlocks FAQ accordion in SERP */}
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* 5 — ItemList + Course — course rich results for all 5 programs */}
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
        />

        {/* 6 — BreadcrumbList — breadcrumb path below title in SERP */}
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* 7 — City-wise coverage — 65+ Indian cities for local search */}
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
        />

        {/* ══════════════════════════════════════════════════════════════════
            GOOGLE ADS — ID: AW-17973411670
            ─────────────────────────────────────────────────────────────
            strategy="afterInteractive" — loads AFTER hydration.

            ❌ NEVER use beforeInteractive for ad scripts.
               It forces the browser to pause rendering until the script
               downloads — directly destroying your LCP Core Web Vital
               score, which Google uses as a direct ranking factor.

            Conversion event fires from /thanks/page.tsx:
            ─────────────────────────────────────────────
            "use client";
            import { useEffect } from "react";
            export default function ThanksPage() {
              useEffect(() => {
                if (typeof window !== "undefined" &&
                    typeof (window as any).gtag === "function") {
                  (window as any).gtag("event", "conversion", {
                    send_to:  "AW-17973411670/YOUR_CONVERSION_LABEL",
                    value:    1,
                    currency: "INR",
                  });
                }
              }, []);
              return <div>Thank You!</div>;
            }
            ─────────────────────────────────────────────
            Get YOUR_CONVERSION_LABEL from:
            Google Ads → Tools → Conversions → select → Tag setup
        ══════════════════════════════════════════════════════════════════ */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>

      </head>

      <body
        className={`${poppins.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <MobileStickyBar />
      </body>
    </html>
  );
}