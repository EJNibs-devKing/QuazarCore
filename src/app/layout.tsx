import type { Metadata } from "next";
import { Inter, Orbitron, Exo_2 } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThreeHero from "@/components/ThreeHero";
import FloatingOrbs from "@/components/FloatingOrbs";
import ScrollToTop from "@/components/ScrollToTop";
import PageLoader from "@/components/PageLoader";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: '--font-exo',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: "QuazarCore | Salesforce & Cloud Architecture Excellence",
  description: "Transform your business through Salesforce and cloud architecture solutions. QuazarCore delivers enterprise digital transformation with cutting-edge technology.",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody className={`${inter.variable} ${orbitron.variable} ${exo2.variable} font-sans`}>
        <PageLoader />
        <ThreeHero />
        <FloatingOrbs />
        <Navigation />
        {children}
        <Footer />
        <ScrollToTop />
      </ClientBody>
    </html>
  );
}
