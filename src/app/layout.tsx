import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import BackToTop from "@/Components/BackToTop/BackToTop";
import { WhatsAppButton } from "@/Components/WhatsAppButton/WhatsAppButton";
import { PhoneButton } from "@/Components/PhoneButton/PhoneButton";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rajan AC Services – AC, Washing Machine & RO Installation in Chennai",
  description:
    "Rajan AC Services offers expert installation and repair services for Air Conditioners, Washing Machines, and RO Water Purifiers in Chennai. Fast, affordable, and reliable service you can trust.",
  keywords: [
    "AC service Chennai",
    "Washing machine repair",
    "RO installation",
    "AC installation Chennai",
    "Rajan AC Services",
    "Home appliance repair Chennai",
  ],
  authors: [{ name: "Rajan AC Services", url: "https://www.acservices.info" }],
  creator: "Rajan AC Services",
  openGraph: {
    title: "Rajan AC Services – Expert AC, Washing Machine & RO Installation",
    description:
      "Reliable and affordable installation & maintenance services for ACs, Washing Machines, and RO Purifiers in Chennai. Book your service now!",
    url: "https://www.acservices.info",
    siteName: "Rajan AC Services",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://www.acservices.info",
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
      <body
        className={`${josefin.className} bg-gray-50 text-gray-900 flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
        <PhoneButton/>
        <BackToTop />

      </body>
    </html>
  );
}
