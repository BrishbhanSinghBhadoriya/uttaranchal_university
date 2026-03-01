import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import MobileStickyBar from "./components/MobileStickyBar";
import Script from "next/script"; 

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
    images: [{ url: "/hero-banner.jpg", width: 1200, height: 630, alt: "Uttaranchal University Online Programs" }],
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Uttaranchal University Online",
              url: "https://onlineuniversityadmission.online/",
              logo: "/logo.png",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Uttaranchal University Online Admission 2026",
              url: "https://onlineuniversityadmission.online/",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://onlineuniversityadmission.online/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {children}
        <MobileStickyBar />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17973411670"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17973411670');
          `}
        </Script>

      </body>
    </html>
  );
}