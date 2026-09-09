import Link from "next/link";
import type { Metadata } from "next";


export const metadata: Metadata = {

  title:
    "Properties in Mumbai | Buy Flats, Apartments, Houses & Plots in Mumbai | PlotApna",

  description:
    "Find properties in Mumbai including flats, apartments, villas, houses and plots for sale. Explore verified Mumbai real estate listings across Bandra, Andheri, Powai, Thane and Navi Mumbai on PlotApna.",

  keywords: [
    "properties in Mumbai",
    "property in Mumbai",
    "buy property Mumbai",
    "flats for sale in Mumbai",
    "apartments in Mumbai",
    "houses for sale in Mumbai",
    "plots for sale in Mumbai",
    "Mumbai real estate",
    "residential property Mumbai",
    "commercial property Mumbai",
  ],

  alternates: {
    canonical: "https://plotapna.com/properties/mumbai",
  },

  openGraph: {
    title:
      "Properties in Mumbai | Buy Flats, Houses & Plots | PlotApna",

    description:
      "Discover verified residential and commercial properties in Mumbai with PlotApna.",

    url:
      "https://plotapna.com/properties/mumbai",

    siteName:
      "PlotApna",

    type:
      "website",
  },

};



export default function MumbaiPropertiesPage() {


const locations = [

"South Mumbai",
"Andheri",
"Bandra",
"Powai",
"Thane",
"Navi Mumbai",
"Borivali",
"Chembur"

];



const propertyTypes = [

{
title:"Flats for Sale in Mumbai",
link:"/search?type=Apartment&city=Mumbai"
},

{
title:"Luxury Apartments in Mumbai",
link:"/search?type=Apartment&city=Mumbai"
},

{
title:"Independent Houses in Mumbai",
link:"/search?type=Independent%20House&city=Mumbai"
},

{
title:"Plots for Sale in Mumbai",
link:"/search?type=Plot&city=Mumbai"
},

{
title:"Commercial Properties Mumbai",
link:"/search?type=Commercial&city=Mumbai"
}

];



const schema = {

"@context":"https://schema.org",

"@type":"RealEstateAgent",

"name":"PlotApna",

"url":"https://plotapna.com",

"description":
"Online real estate marketplace to discover properties, flats, houses, plots and commercial properties across India.",

"areaServed":"Mumbai",

"sameAs":[]

};



const faqSchema = {

"@context":"https://schema.org",

"@type":"FAQPage",

"mainEntity":[

{

"@type":"Question",

"name":"Which are the best areas to buy property in Mumbai?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"Popular areas to buy property in Mumbai include Bandra, Andheri, Powai, South Mumbai, Navi Mumbai and Thane."

}

},


{

"@type":"Question",

"name":"Is Mumbai real estate a good investment?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"Mumbai is one of India's strongest real estate markets because of employment opportunities, infrastructure development and limited land availability."

}

}

]

};



return (

<main className="min-h-screen bg-white">


<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html:JSON.stringify(schema)
}}
/>


<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html:JSON.stringify(faqSchema)
}}
/>



<section className="bg-blue-50 px-6 py-20">

<div className="mx-auto max-w-6xl text-center">


<h1 className="text-4xl font-bold text-gray-900 md:text-6xl">

Properties in Mumbai

</h1>


<p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">

Find verified flats, apartments, houses, villas and plots for sale in Mumbai.
Explore premium residential and commercial properties across Mumbai with PlotApna.

</p>



<Link

href="/search?city=Mumbai"

className="mt-8 inline-block rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white"

>

Search Mumbai Properties

</Link>


</div>

</section>





<section className="mx-auto max-w-6xl px-6 py-14">


<h2 className="text-3xl font-bold text-gray-900">

Buy Property in Mumbai

</h2>


<p className="mt-5 leading-8 text-gray-600">

Mumbai is India's financial capital and one of the most premium real estate markets.
From luxury apartments in South Mumbai to affordable homes in Navi Mumbai and Thane,
PlotApna helps buyers discover residential and commercial properties with easy search
options and detailed listings.

</p>


</section>





<section className="bg-gray-50 px-6 py-14">


<div className="mx-auto max-w-6xl">


<h2 className="text-3xl font-bold text-gray-900">

Explore Mumbai Property Types

</h2>



<div className="mt-8 grid gap-5 md:grid-cols-3">


{propertyTypes.map((item)=>(

<Link

key={item.title}

href={item.link}

className="rounded-2xl bg-white p-6 shadow hover:shadow-lg"

>

<h3 className="text-xl font-semibold text-blue-700">

{item.title}

</h3>


<p className="mt-2 text-gray-600">

Explore latest property listings on PlotApna.

</p>


</Link>

))}


</div>

</div>

</section>





<section className="mx-auto max-w-6xl px-6 py-14">


<h2 className="text-3xl font-bold">

Popular Locations in Mumbai

</h2>


<div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">


{locations.map((location)=>(

<Link

key={location}

href={`/search?city=${location}`}

className="rounded-xl border p-4 text-center font-medium hover:border-blue-600 hover:text-blue-700"

>

{location}

</Link>

))}


</div>

</section>





<section className="bg-blue-700 px-6 py-16 text-white">


<div className="mx-auto max-w-6xl">


<h2 className="text-3xl font-bold">

Why Invest in Mumbai Real Estate?

</h2>


<ul className="mt-6 space-y-3 text-blue-100">


<li>✓ India's largest financial and business hub</li>

<li>✓ Strong residential property demand</li>

<li>✓ Excellent metro and infrastructure growth</li>

<li>✓ High long-term investment potential</li>


</ul>


</div>


</section>





<section className="mx-auto max-w-6xl px-6 py-14">


<h2 className="text-3xl font-bold">

Frequently Asked Questions

</h2>



<div className="mt-6 space-y-5">


<div>

<h3 className="font-semibold">

Which are the best areas to buy property in Mumbai?

</h3>

<p className="text-gray-600">

Bandra, Andheri, Powai, South Mumbai, Navi Mumbai and Thane are popular locations.

</p>

</div>



<div>

<h3 className="font-semibold">

Is Mumbai good for real estate investment?

</h3>

<p className="text-gray-600">

Mumbai remains one of India's strongest property markets due to high demand and limited land availability.

</p>

</div>


</div>


</section>





<section className="px-6 py-12 text-center">


<h2 className="text-3xl font-bold">

Find Your Mumbai Property Today

</h2>


<p className="mt-3 text-gray-600">

Search flats, houses, plots and commercial properties on PlotApna.

</p>


<Link

href="/post-property"

className="mt-6 inline-block rounded-xl bg-blue-700 px-8 py-4 text-white"

>

Post Your Property

</Link>


</section>


</main>

);

}