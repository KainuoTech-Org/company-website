import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SocialSidebar from "@/components/ui-custom/SocialSidebar";
import Chatbot from "@/components/ui-custom/Chatbot";
import LoadingScreen from "@/components/ui-custom/LoadingScreen";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kainuo Innovision Tech | Digital Craftsmanship",
  description: "Full-cycle digital product agency specializing in bespoke websites, apps, and digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-[#F9F7F2] text-[#1A1A1A] font-sans flex flex-col min-h-screen`}
      >
        <LoadingScreen />
        <LanguageProvider>
          <Navbar />
          <SocialSidebar />
          <main className="flex-grow pt-24">
            {children}
          </main>
          <Footer />
          {/* <Chatbot /> */}
        </LanguageProvider>
      </body>
    </html>
  );
}
