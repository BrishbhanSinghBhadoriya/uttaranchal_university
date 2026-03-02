import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import Script from "next/script";
import MobileStickyBar from "../components/MobileStickyBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Uttaranchal University Online Admission 2026 | Apply Now",
  description:
    "Uttaranchal University Online Admission 2026 – UGC‑Entitled degrees, NAAC accredited. MBA, MCA, BBA, BCA, BA. Online exams, 100% placement assistance. Apply now.",
  keywords: [
    "Uttaranchal University Online",
    "Uttaranchal Online Admission 2026",
    "MBA Online Admission",
    "MCA Online Admission",
    "BBA Online",
    "BCA Online",
    "BA Online",
    "Distance Education",
    "UGC Entitled",
    "NAAC Accredited",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Uttaranchal University Online Admission 2026 | Apply Now",
    description:
      "Enroll in UGC‑Entitled Online Programs (MBA, MCA, BBA, BCA, BA). Online exams, 100% placement assistance.",
    url: "https://onlineuniversityadmission.online/",
    siteName: "Uttaranchal University Online",
    images: [
      { url: "/hero-banner.jpg", width: 1200, height: 630, alt: "Uttaranchal University Online Programs" },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uttaranchal University Online Admission 2026 | Apply Now",
    description:
      "UGC‑Entitled Online Programs with online exams and 100% placement assistance. Apply now.",
    images: ["/hero-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* ---------------- SEO Schema ---------------- */}
        <Script id="ld-org" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Uttaranchal University Online",
            url: "https://onlineuniversityadmission.online/",
            logo: "/logo.png",
          })}
        </Script>

        <Script id="ld-website" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Uttaranchal University Online Admission 2026",
            url: "https://onlineuniversityadmission.online/",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://onlineuniversityadmission.online/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </Script>

        {/* ---------------- Meta Pixel Script ---------------- */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1230848505368304');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1230848505368304&ev=PageView&noscript=1"
            alt="fb-pixel"
          />
        </noscript>

        {children}
        <MobileStickyBar />
      </body>
    </html>
  );
}