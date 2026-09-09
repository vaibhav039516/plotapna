import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
    "PlotApna is India's property marketplace to buy, sell and rent residential plots, houses, flats, apartments and commercial properties. Search verified properties and list your property online.",


  keywords: [
    "PlotApna",
    "buy property in India",
    "sell property online",
    "rent property",
    "plots for sale",
    "houses for sale",
    "flats for sale",
    "apartments for sale",
    "commercial property",
    "real estate India",
    "property listing website",
    "Gurgaon property",
    "Delhi NCR property",
    "Mumbai property",
    "Noida property",
  ],


  authors: [
    {
      name: "PlotApna",
    },
  ],


  creator: "PlotApna",


  publisher: "PlotApna",


  metadataBase: new URL(
    "https://plotapna.com"
  ),


  alternates: {
    canonical: "https://plotapna.com",
  },


  openGraph: {

    title:
      "PlotApna - India's Property Marketplace",


    description:
      "Discover plots, houses, apartments and commercial properties across India. Buy, sell and rent properties easily with PlotApna.",


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
      "PlotApna - Buy & Sell Properties Online",


    description:
      "Search properties, buy plots, sell houses and rent properties across India with PlotApna.",

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


      "max-image-preview":
        "large",


      "max-snippet":
        -1,


      "max-video-preview":
        -1,

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



{/* Ahrefs Web Analytics */}

<Script

src="https://analytics.ahrefs.com/analytics.js"

data-key="7AZ1W4jsNH48JIDswJWbzA"

strategy="afterInteractive"

/>



</body>


</html>

);

}