import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {

  title: {
    default: "PlotApna - Buy, Sell & Rent Properties in India",
    template: "%s | PlotApna",
  },


  description:
    "PlotApna is India's property search platform to buy, sell and rent residential plots, houses, flats and commercial properties. Search properties and list your property for free.",


  keywords: [
    "PlotApna",
    "buy property in India",
    "sell property online",
    "rent property",
    "plots for sale",
    "houses for sale",
    "flats for sale",
    "real estate India",
    "property listing website",
    "Gurgaon property",
    "Delhi NCR property",
  ],


  authors: [
    {
      name: "PlotApna",
    },
  ],


  creator: "PlotApna",


  metadataBase: new URL(
    "https://plotapna.com"
  ),


  openGraph: {

    title:
      "PlotApna - Find Your Perfect Property",

    description:
      "Buy, sell and rent properties across India. Discover plots, houses, apartments and commercial properties on PlotApna.",

    url:
      "https://plotapna.com",

    siteName:
      "PlotApna",

    locale:
      "en_IN",

    type:
      "website",

  },


  twitter: {

    card:
      "summary_large_image",

    title:
      "PlotApna - India's Property Marketplace",

    description:
      "Search properties, buy plots, sell houses and list properties easily with PlotApna.",

  },


  robots: {

    index:
      true,

    follow:
      true,

    googleBot: {

      index:
        true,

      follow:
        true,

    },

  },


};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (

    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">

        {children}

      </body>

    </html>

  );

}