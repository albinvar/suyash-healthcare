import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "सुयश हेल्थ केअर सेंटर | Suyash Health Care Centre",
  description: "उत्कृष्ट वैद्यकीय उपकरणे आणि आरोग्य सेवा प्रदान करणारे आरोग्य केंद्र. Premium medical equipment and healthcare services provider.",
  keywords: ["healthcare", "medical equipment", "health centre", "वैद्यकीय उपकरणे", "आरोग्य सेवा"],
  authors: [{ name: "Suyash Health Care Centre" }],
  openGraph: {
    title: "सुयश हेल्थ केअर सेंटर",
    description: "उत्कृष्ट वैद्यकीय उपकरणे आणि आरोग्य सेवा",
    type: "website",
    locale: "mr_IN",
    alternateLocale: ["en_US", "hi_IN"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mr" className="scroll-smooth">
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
