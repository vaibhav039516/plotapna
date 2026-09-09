import Link from "next/link";
import type { Metadata } from "next";


export const metadata: Metadata = {

  title:
    "Properties in Mumbai | Buy Flats, Houses & Real Estate in Mumbai | PlotApna",

  description:
    "Find properties in Mumbai including apartments, flats, houses, villas and residential properties. Explore verified Mumbai real estate listings on PlotApna.",

  keywords:[
    "properties in Mumbai",
    "property in Mumbai",
    "flats for sale in Mumbai",
    "apartments in Mumbai",
    "houses for sale in Mumbai",
    "Mumbai real estate",
    "buy property Mumbai"
  ],

};


export default function MumbaiPropertiesPage(){


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


const propertyTypes=[

{
title:"Flats in Mumbai",
link:"/search?type=Apartment&city=Mumbai"
},

{
title:"Luxury Apartments",
link:"/search?type=Apartment&city=Mumbai"
},

{
title:"Residential Houses",
link:"/search?type=Independent%20House&city=Mumbai"
},

{
title:"Plots in Mumbai",
link:"/search?type=Plot&city=Mumbai"
},

{
title:"Commercial Property",
link:"/search?type=Commercial&city=Mumbai"
}

];



return (

<main className="min-h-screen bg-white">


{/* HERO */}

<section className="bg-blue-50 px-6 py-20">

<div className="mx-auto max-w-6xl text-center">


<h1 className="text-4xl font-bold text-gray-900 md:text-6xl">

Properties in Mumbai

</h1>


<p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">

Explore apartments, flats, houses, villas and residential properties
for sale in Mumbai. Find your dream home with PlotApna.

</p>


<Link

href="/search?city=Mumbai"

className="mt-8 inline-block rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white"

>

Search Mumbai Properties

</Link>


</div>

</section>




{/* INTRO */}

<section className="mx-auto max-w-6xl px-6 py-14">


<h2 className="text-3xl font-bold text-gray-900">

Buy Property in Mumbai

</h2>


<p className="mt-5 leading-8 text-gray-600">

Mumbai is one of India's most premium real estate markets and a major
business hub. From luxury apartments in South Mumbai to affordable homes
in Navi Mumbai and Thane, the city offers diverse opportunities for
home buyers and investors.

PlotApna helps you discover residential and commercial properties across
Mumbai with easy search options and detailed property information.

</p>


</section>





{/* PROPERTY TYPES */}

<section className="bg-gray-50 px-6 py-14">


<div className="mx-auto max-w-6xl">


<h2 className="text-3xl font-bold text-gray-900">

Explore Property Types in Mumbai

</h2>



<div className="mt-8 grid gap-5 md:grid-cols-3">


{
propertyTypes.map((item)=>(

<Link

key={item.title}

href={item.link}

className="rounded-2xl bg-white p-6 shadow hover:shadow-lg"

>

<h3 className="text-xl font-semibold text-blue-700">

{item.title}

</h3>


<p className="mt-2 text-gray-600">

Find verified listings on PlotApna

</p>


</Link>


))

}


</div>


</div>


</section>






{/* LOCATIONS */}

<section className="mx-auto max-w-6xl px-6 py-14">


<h2 className="text-3xl font-bold text-gray-900">

Popular Areas to Buy Property in Mumbai

</h2>



<div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">


{

locations.map((location)=>(

<Link

key={location}

href={`/search?city=${location}`}

className="rounded-xl border p-4 text-center font-medium hover:border-blue-600 hover:text-blue-700"

>

{location}

</Link>

))


}


</div>


</section>






{/* WHY MUMBAI */}

<section className="bg-blue-700 px-6 py-16 text-white">


<div className="mx-auto max-w-6xl">


<h2 className="text-3xl font-bold">

Why Invest in Mumbai Real Estate?

</h2>


<ul className="mt-6 space-y-3 text-blue-100">


<li>
✓ India's leading financial and business hub
</li>


<li>
✓ Strong demand for residential properties
</li>


<li>
✓ Excellent connectivity through metro, rail and highways
</li>


<li>
✓ High potential for long-term real estate investment
</li>


</ul>


</div>


</section>







{/* FAQ */}

<section className="mx-auto max-w-6xl px-6 py-14">


<h2 className="text-3xl font-bold text-gray-900">

Frequently Asked Questions

</h2>


<div className="mt-6 space-y-5">


<div>

<h3 className="font-semibold">
Which are the best areas to buy property in Mumbai?
</h3>

<p className="text-gray-600">
Popular locations include Bandra, Andheri, Powai, Navi Mumbai,
Thane and South Mumbai.
</p>

</div>



<div>

<h3 className="font-semibold">
Is Mumbai good for real estate investment?
</h3>

<p className="text-gray-600">
Mumbai remains one of India's strongest real estate markets because
of employment opportunities and limited land availability.
</p>

</div>


</div>


</section>





{/* CTA */}

<section className="px-6 py-12 text-center">


<h2 className="text-3xl font-bold">

Find Your Mumbai Property Today

</h2>


<p className="mt-3 text-gray-600">

Search apartments, houses and plots available on PlotApna.

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