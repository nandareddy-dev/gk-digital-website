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
  title: "GK Digital Solutions | Digital Marketing Agency",
  description:
    "GK Digital Solutions helps businesses grow with expert SEO, Google Ads, social media marketing, website design & lead generation.",
  icons: {
    icon: "/GK_Digital_w_Logo.png",
    shortcut: "/GK_Digital_w_Logo.png",
    apple: "/GK_Digital_w_Logo.png",
  },
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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}