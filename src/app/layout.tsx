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
  weight: ["400", "500", "600", "700"], // Note: use 'weight' key (not weights)
});

export const metadata: Metadata = {
  title: "Ac Service",
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
