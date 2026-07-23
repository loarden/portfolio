import type { Metadata } from "next";
import { Anton, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SnowBackground from "./components/SnowBackground";
import LenisProvider from "./components/LenisProvider";
import RouteEffects from "./components/RouteEffects";
import { contactSection } from "./data/portfolio";
import ContactSection from "./components/sections/ContactSection";
import SiteNav from "./components/sections/SiteNav";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Örs Biacsi — Full-Stack Engineer",
  description:
    "Building robust, scalable applications across the stack. Focused on performance, precision, and high-impact digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-full bg-background text-on-surface selection:bg-primary selection:text-surface">
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
          rel="stylesheet"
        />
        <SnowBackground />
        <LenisProvider>
          <RouteEffects />
          <SiteNav />
          <main className="mx-auto max-w-[1200px] px-margin-mobile md:px-8">
            {children}
            <ContactSection
              label={contactSection.label}
              prompt={contactSection.prompt}
              email={contactSection.email}
              socialLinks={contactSection.socialLinks}
              cvHref={contactSection.cvHref}
              attribution={contactSection.attribution}
              copyright={contactSection.copyright}
            />
          </main>
        </LenisProvider>
      </body>
    </html>
  );
}
