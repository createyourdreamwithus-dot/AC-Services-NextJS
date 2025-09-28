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
    <html lang="en-IN">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Rajan AC Services",
              image: "https://www.acservices.info/images/Logo/Logo.png",
              url: "https://www.acservices.info",
              telephone: "+91-9361259524",
              address: {
                "@type": "PostalAddress",
                streetAddress: "No.2, Moolachatram Main Road, MMC",
                addressLocality: "Chennai",
                addressRegion: "TN",
                postalCode: "600051",
                addressCountry: "IN",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "00:00",
                  closes: "23:59",
                },
              ],
              priceRange: "₹₹",
            }),
          }}
        />
      </head>
      <body
        className={`${josefin.className} bg-gray-50 text-gray-900 flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
        <PhoneButton />
        <BackToTop />
      </body>
    </html>
  );
}
