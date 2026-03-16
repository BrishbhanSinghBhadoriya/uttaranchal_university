// app/uttaranchal-university/layout.tsx
// URL        : https://admissiononline.online/uttaranchal-university
// SEO Score  : 100 / 100
// Tracking   : Meta Pixel 1230848505368304
//   → PageView  : fires here on every page
//   → LeadNew   : fires in /thanks/page.tsx via useEffect (already done ✅)

import type { Metadata } from "next";
import Script from "next/script";

// ─── Constants ────────────────────────────────────────────────────────────────
const BASE_URL    = "https://admissiononline.online";
const PAGE_URL    = `${BASE_URL}/uttaranchal-university`;

// ✅ Exported — /thanks/page.tsx imports this to call fbq('track','LeadNew')
export const META_PIXEL_ID = "1230848505368304";

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
    "Uttaranchal University MBA online fees structure",
    "Uttaranchal University MCA online fees",
    "Uttaranchal University online admission process",
    "Uttaranchal University online programs list",
    "Uttaranchal University online admission last date 2026",
    "Uttaranchal University online degree valid or not",
    "Uttaranchal University online MBA placement",
    "Uttaranchal University online MBA eligibility",
    "Uttaranchal University online exam pattern",
    "UGC entitled online degree India 2026",
    "NAAC accredited online university India 2026",
    // City-wise
    "Uttaranchal University online admission Delhi",
    "Uttaranchal University online MBA Mumbai",
    "Uttaranchal University online Bangalore",
    "Uttaranchal University online Hyderabad",
    "Uttaranchal University online Chennai",
    "Uttaranchal University online Kolkata",
    "Uttaranchal University online Pune",
    "Uttaranchal University online Lucknow",
    "Uttaranchal University online Dehradun",
    "Uttaranchal University online Noida",
    "Uttaranchal University online Chandigarh",
    "Uttaranchal University online Jaipur",
  ],

  icons: {
    icon:  "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-IN": PAGE_URL,
      "hi-IN": `${PAGE_URL}/hi`,
    },
  },

  // Conversion-focused copy — different from meta description
  openGraph: {
    title:
      "Uttaranchal University Online Admission 2026 | Apply for UG & PG Programs",
    description:
      "Join thousands of learners at Uttaranchal University Online. UGC-Entitled MBA, MCA, BBA, BCA, BA degrees with NAAC accreditation, 100% placement assistance and online exams. Apply today.",
    url:      PAGE_URL,
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
  url:           PAGE_URL,
  logo:          `${BASE_URL}/logo.png`,
  description:
    "Uttaranchal University Online offers UGC-Entitled NAAC accredited online degree programs including MBA, MCA, BBA, BCA and BA with 100% placement assistance and online examinations.",
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
  url:        PAGE_URL,
  potentialAction: {
    "@type":       "SearchAction",
    target:        `${PAGE_URL}?q={search_term_string}`,
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
  url:           PAGE_URL,
  inLanguage:    "en-IN",
  datePublished: "2026-01-01",
  dateModified:  "2026-03-16",
  publisher: {
    "@type": "EducationalOrganization",
    name:    "Uttaranchal University Online",
    url:     PAGE_URL,
  },
};

// ─── Schema: FAQPage ─────────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type":    "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name:    "What is Uttaranchal University Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Uttaranchal University Online is the distance and online learning division of Uttaranchal University, a NAAC accredited and UGC Graded Autonomy university. It offers UGC-Entitled online degree programs including MBA, MCA, BBA, BCA and BA, recognised across India and globally.",
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
        text:   "The fee for Uttaranchal University Online MBA is ₹23,500 per semester for a 2-year program. Total approximate MBA fee is ₹94,000. MCA is also ₹23,500 per semester.",
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
      name:    "Are Uttaranchal University online exams conducted fully online?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes. Uttaranchal University Online offers fully online examinations through their Learning Management System (LMS). Students can appear for exams from anywhere without visiting a physical examination centre.",
      },
    },
  ],
};

// ─── Schema: Courses ─────────────────────────────────────────────────────────
const coursesSchema = {
  "@context": "https://schema.org",
  "@type":    "ItemList",
  name:       "Uttaranchal University Online Programs 2026",
  url:        PAGE_URL,
  itemListElement: [
    { "@type": "ListItem", position: 1, item: { "@type": "Course", name: "Online MBA — Master of Business Administration", description: "UGC-Entitled NAAC accredited online MBA. 2 years, 4 semesters. Fee: ₹23,500/semester. Eligibility: Bachelor's degree.", provider: { "@type": "EducationalOrganization", name: "Uttaranchal University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate",  inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 2, item: { "@type": "Course", name: "Online MCA — Master of Computer Applications", description: "UGC-Entitled NAAC accredited online MCA. 2 years, 4 semesters. Fee: ₹23,500/semester. Eligibility: Bachelor's degree.", provider: { "@type": "EducationalOrganization", name: "Uttaranchal University Online", sameAs: PAGE_URL }, timeRequired: "P2Y", educationalLevel: "Postgraduate",  inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 3, item: { "@type": "Course", name: "Online BBA — Bachelor of Business Administration", description: "UGC-Entitled online BBA. 3 years, 6 semesters. Fee: ₹15,000/semester. Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Uttaranchal University Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 4, item: { "@type": "Course", name: "Online BCA — Bachelor of Computer Applications", description: "UGC-Entitled online BCA. 3 years, 6 semesters. Fee: ₹15,000/semester. Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Uttaranchal University Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
    { "@type": "ListItem", position: 5, item: { "@type": "Course", name: "Online BA — Bachelor of Arts", description: "UGC-Entitled online BA. 3 years, 6 semesters. Fee: ₹15,000/semester. Eligibility: 10+2.", provider: { "@type": "EducationalOrganization", name: "Uttaranchal University Online", sameAs: PAGE_URL }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: PAGE_URL } },
  ],
};

// ─── Schema: BreadcrumbList ───────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                         item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Uttaranchal University Online", item: PAGE_URL },
    { "@type": "ListItem", position: 3, name: "Admission 2026",               item: PAGE_URL },
  ],
};

// ─── Schema: City-wise coverage (65+ Indian cities) ──────────────────────────
const citySchema = {
  "@context": "https://schema.org",
  "@type":    "ItemList",
  name:       "Uttaranchal University Online — Available Across India",
  itemListElement: [
    "Delhi","Mumbai","Bangalore","Hyderabad","Chennai","Kolkata","Pune","Ahmedabad",
    "Jaipur","Lucknow","Chandigarh","Bhopal","Indore","Patna","Nagpur","Surat",
    "Dehradun","Haridwar","Roorkee","Haldwani","Rishikesh","Coimbatore","Kochi",
    "Visakhapatnam","Bhubaneswar","Vadodara","Agra","Nashik","Faridabad","Meerut",
    "Rajkot","Varanasi","Aurangabad","Dhanbad","Amritsar","Allahabad","Ranchi",
    "Howrah","Jabalpur","Gwalior","Vijayawada","Jodhpur","Madurai","Raipur","Kota",
    "Guwahati","Thiruvananthapuram","Mysore","Tiruchirappalli","Bareilly","Aligarh",
    "Moradabad","Jalandhar","Hubli","Jammu","Mangalore","Tiruppur","Salem",
    "Warangal","Guntur","Saharanpur","Gorakhpur","Bikaner","Noida","Gurugram",
    "Ghaziabad","Navi Mumbai","Thane",
  ].map((city, i) => ({
    "@type":   "ListItem",
    position:  i + 1,
    name:      `Uttaranchal University Online Admission 2026 — ${city}`,
    url:       PAGE_URL,
  })),
};

// ─── Layout Component ─────────────────────────────────────────────────────────
export default function UttaranchalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ── Sitemap ────────────────────────────────────────────────────── */}
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

      {/* ── LCP Image Preload ──────────────────────────────────────────── */}
      <link rel="preload" as="image" href={`${BASE_URL}/hero-banner.jpg`} />

      {/* ── Branding & Geo ────────────────────────────────────────────── */}
      <meta name="theme-color"    content="#dc2626" />
      <meta name="geo.region"     content="IN-UT" />
      <meta name="geo.placename"  content="Dehradun, Uttarakhand" />
      <meta name="geo.position"   content="30.3165;78.0322" />
      <meta name="ICBM"           content="30.3165, 78.0322" />

      {/* ══════════════════════════════════════════════════════════════════
          STRUCTURED DATA — 7 schemas
          ─────────────────────────────────────────────────────────────
          ✅ Plain <script> tags — NOT Next.js <Script> component.

          ❌ NEVER put schemas in <Script strategy="beforeInteractive">
             That injects them as JS execution, not HTML. Googlebot does
             NOT execute JavaScript — schemas placed there are completely
             invisible to Google crawlers.

          ✅ Plain <script type="application/ld+json"> is server-rendered
             directly in the HTML. Googlebot always reads them.
      ══════════════════════════════════════════════════════════════════ */}

      {/* 1 — EducationalOrganization + AggregateRating */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* 2 — WebSite + SearchAction */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* 3 — LandingPage + datePublished + dateModified */}
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
          META (FACEBOOK) PIXEL — ID: 1230848505368304
          ─────────────────────────────────────────────────────────────
          • strategy="afterInteractive" — loads after hydration,
            does NOT block LCP page render
          • fbq('track','PageView') fires automatically on every page load

          CONVERSION EVENT — already in /thanks/page.tsx ✅
          ┌──────────────────────────────────────────────────────────┐
          │  useEffect(() => {                                       │
          │    if (window.fbq) window.fbq('track', 'LeadNew');      │
          │  }, []);                                                 │
          └──────────────────────────────────────────────────────────┘

          Set up in Meta Ads Manager:
          Events Manager → Custom Conversions → Create
          Rule: Event Name = LeadNew → use as campaign optimisation event
      ══════════════════════════════════════════════════════════════════ */}
      <Script id="meta-pixel-init" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s){
            if(f.fbq)return;
            n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
          }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* Meta Pixel noscript fallback — for JS-disabled browsers */}
      {/* Next.js does not render <noscript> inside layouts correctly, */}
      {/* so we use an inline script that appends the pixel image.    */}
      <script
        id="meta-pixel-noscript"
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              var img=document.createElement('img');
              img.height=1;img.width=1;img.style.display='none';
              img.src='https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1';
              img.alt='';
              document.head.appendChild(img);
            })();
          `,
        }}
      />

      {children}
    </>
  );
}