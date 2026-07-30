import type { Metadata } from "next";
import { Sora, Inter, IBM_Plex_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-space-grotesk", // kept same CSS variable name so no other files need changing
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: "GK Digital Solutions | Digital Marketing Agency in Hyderabad",
  description:
    "GK Digital Solutions is a Hyderabad-based digital marketing agency helping businesses grow with expert SEO, Google Ads, Meta Ads, WhatsApp marketing, website design & lead generation.",
  keywords: [
    "GK Digital Solutions",
    "GK Digital Solutions Hyderabad",
    "digital marketing agency Hyderabad",
    "Meta ads agency Hyderabad",
    "Google ads agency Kukatpally",
    "SEO agency Hyderabad",
  ],
  metadataBase: new URL("https://gkdigitalsolutions.in"),
  alternates: {
    canonical: "https://gkdigitalsolutions.in",
  },
  openGraph: {
    title: "GK Digital Solutions | Digital Marketing Agency in Hyderabad",
    description:
      "Hyderabad-based digital marketing agency running Meta, Google and WhatsApp campaigns for interior design, real estate, hospitality and skin & hair clinics.",
    url: "https://gkdigitalsolutions.in",
    siteName: "GK Digital Solutions",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/GK_Digital_w_Logo.png",
    shortcut: "/GK_Digital_w_Logo.png",
    apple: "/GK_Digital_w_Logo.png",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://gkdigitalsolutions.in/#organization",
  name: "GK Digital Solutions",
  alternateName: "GK Digital Solutions Hyderabad",
  description:
    "GK Digital Solutions is a Hyderabad-based digital marketing agency running Meta, Google and WhatsApp campaigns for interior design, real estate, hospitality and skin & hair clinics.",
  url: "https://gkdigitalsolutions.in",
  logo: "https://gkdigitalsolutions.in/GK_Digital_w_Logo.png",
  image: "https://gkdigitalsolutions.in/GK_Digital_w_Logo.png",
  telephone: "", // add your business phone number here, e.g. "+91XXXXXXXXXX"
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "301/4, 4th floor, Alluri Trade Centre, KPHB Rd, Bhagya Nagar Colony",
    addressLocality: "Kukatpally, Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500072",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.4849, // approximate KPHB coordinates - adjust if you have exact GBP lat/lng
    longitude: 78.3915,
  },
  areaServed: {
    "@type": "City",
    name: "Hyderabad",
  },
  sameAs: [
    // add your live social/profile URLs here, e.g.:
    // "https://www.linkedin.com/company/gk-digital-solutions",
    // "https://www.instagram.com/gkdigitalsolutions",
    // "https://www.facebook.com/gkdigitalsolutions",
    // "https://g.co/kgs/your-google-business-profile-link",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}