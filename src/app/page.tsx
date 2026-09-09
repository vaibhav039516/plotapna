"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const currentUser = localStorage.getItem(
      "plotapna_current_user"
    );

    setIsLoggedIn(!!currentUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem(
      "plotapna_current_user"
    );

    setIsLoggedIn(false);
  };


  const categories = [
    {
      name: "Apartments",
      type: "Apartment",
      image: "/properties/property-1.jpg",
    },
    {
      name: "Independent Houses",
      type: "Independent House",
      image: "/properties/property-5.jpg",
    },
    {
      name: "Villas",
      type: "Villa",
      image: "/properties/property-4.jpg",
    },
    {
      name: "Plots",
      type: "Plot",
      image: "/properties/property-3.jpg",
    },
    {
      name: "Land",
      type: "Land",
      image: "/properties/property-3.jpg",
    },
    {
      name: "Commercial",
      type: "Commercial",
      image: "/properties/property-2.jpg",
    },
  ];


  const featuredProperties = [
    {
      id:"1",
      title:"Premium 3 BHK Apartment",
      location:"Sector 65, Gurgaon",
      price:"₹1.85 Cr",
      image:"/properties/property-1.jpg",
    },
    {
      id:"2",
      title:"Residential Plot",
      location:"Sector 150, Noida",
      price:"₹72 Lakh",
      image:"/properties/property-3.jpg",
    },
    {
      id:"3",
      title:"Luxury Villa",
      location:"Whitefield, Bangalore",
      price:"₹3.25 Cr",
      image:"/properties/property-4.jpg",
    },
  ];


  const cities=[
    "Gurgaon",
    "Delhi",
    "Noida",
    "Mumbai",
    "Bangalore",
    "Hyderabad",
  ];



return (

<main className="min-h-screen bg-white">


<nav className="border-b bg-white">

<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">


<Link
href="/"
className="text-2xl font-bold text-blue-700"
>
PLOTAPNA
</Link>


<div className="hidden gap-8 md:flex">

<Link href="/search?purpose=Buy">
Buy
</Link>

<Link href="/search?purpose=Rent">
Rent
</Link>

<Link href="/search">
Projects
</Link>

<Link href="/search?type=Commercial">
Commercial
</Link>

</div>



<div className="flex items-center gap-3">


{
isLoggedIn ?

<>

<Link
href="/dashboard"
className="rounded-lg border px-4 py-2"
>
Dashboard
</Link>


<button
onClick={handleLogout}
className="text-red-600"
>
Logout
</button>

</>

:

<>

<Link
href="/login"
className="rounded-lg border px-4 py-2"
>
Login
</Link>

</>

}



<Link
href="/post-property"
className="rounded-lg bg-blue-700 px-5 py-2 text-white"
>
Post Property
</Link>


</div>


</div>

</nav>





<section className="bg-blue-50 px-6 py-20">


<div className="mx-auto max-w-6xl text-center">


<p className="font-semibold text-blue-700">
INDIA'S PROPERTY MARKETPLACE
</p>


<h1 className="mt-4 text-4xl font-bold text-gray-900 md:text-6xl">

Buy, Sell & Rent Properties in India

<br/>

Find Your Perfect Home

</h1>


<p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">

Explore apartments, houses, villas, plots and commercial
properties across India. Search properties by location,
budget and property type on PlotApna.

</p>



<div className="mx-auto mt-10 max-w-5xl rounded-2xl bg-white p-3 shadow-xl">


<div className="flex flex-col gap-3 md:flex-row">


<select className="rounded-xl border px-5 py-4">

<option>Buy</option>
<option>Rent</option>

</select>


<select className="rounded-xl border px-5 py-4">

<option>Gurgaon</option>
<option>Delhi</option>
<option>Noida</option>

</select>


<input
placeholder="Search locality, sector or project"
className="flex-1 rounded-xl border px-5 py-4"
/>



<Link
href="/search"
className="rounded-xl bg-blue-700 px-8 py-4 text-white text-center"
>
Search
</Link>


</div>


</div>


</div>

</section>






<section className="mx-auto max-w-7xl px-6 py-16">


<h2 className="text-3xl font-bold">
Explore Properties
</h2>


<p className="mt-2 text-gray-600">
Find residential and commercial properties across India.
</p>



<div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">


{
categories.map((item)=>(


<Link
key={item.name}
href={`/search?type=${item.type}`}
className="rounded-xl border p-4 text-center hover:shadow"
>


<img
src={item.image}
alt={item.name}
className="h-32 w-full rounded-lg object-cover"
/>


<h3 className="mt-3 font-semibold">
{item.name}
</h3>


</Link>


))

}


</div>


</section>






<section className="bg-gray-50 px-6 py-16">


<div className="mx-auto max-w-7xl">


<h2 className="text-3xl font-bold">
Featured Properties
</h2>



<div className="mt-8 grid gap-6 md:grid-cols-3">


{
featuredProperties.map((property)=>(


<div
key={property.id}
className="rounded-xl bg-white shadow"
>


<img
src={property.image}
alt={property.title}
className="h-56 w-full object-cover rounded-t-xl"
/>


<div className="p-5">

<h3 className="font-bold text-xl">
{property.title}
</h3>


<p className="text-gray-600">
{property.location}
</p>


<p className="mt-3 font-bold">
{property.price}
</p>


<Link
href={`/property/${property.id}`}
className="mt-5 block rounded-lg border p-3 text-center text-blue-700"
>
View Property
</Link>


</div>


</div>


))

}


</div>


</div>

</section>






<section className="mx-auto max-w-7xl px-6 py-16">


<h2 className="text-3xl font-bold">
Popular Cities for Property
</h2>


<div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-6">


{
cities.map(city=>(

<Link
key={city}
href={`/search?city=${city}`}
className="rounded-xl border p-4 text-center hover:border-blue-600"
>
Property in {city}
</Link>

))

}


</div>


</section>






<section className="bg-gray-50 px-6 py-16">


<div className="mx-auto max-w-5xl">


<h2 className="text-3xl font-bold">
Find Properties Across India with PlotApna
</h2>


<p className="mt-5 leading-8 text-gray-600">

PlotApna is an online real estate marketplace where buyers,
sellers and property owners can discover residential and
commercial properties. Search flats, apartments, houses,
plots and land based on location and budget.

</p>


<div className="mt-8 grid gap-4 md:grid-cols-3">


<Link
href="/properties/gurgaon"
className="rounded-xl border bg-white p-5 font-semibold"
>
Properties in Gurgaon
</Link>


<Link
href="/search?city=Noida"
className="rounded-xl border bg-white p-5 font-semibold"
>
Properties in Noida
</Link>


<Link
href="/search?city=Delhi"
className="rounded-xl border bg-white p-5 font-semibold"
>
Properties in Delhi
</Link>


</div>


</div>

</section>







<section className="px-6 py-16">


<div className="mx-auto max-w-5xl">


<h2 className="text-3xl font-bold">
Frequently Asked Questions
</h2>


<div className="mt-8 space-y-6">


<div>
<h3 className="font-semibold">
How can I buy property on PlotApna?
</h3>

<p className="text-gray-600">
Search properties, view details and contact sellers.
</p>
</div>


<div>
<h3 className="font-semibold">
Can I sell my property on PlotApna?
</h3>

<p className="text-gray-600">
Yes. Owners can list properties and connect with buyers.
</p>
</div>


<div>
<h3 className="font-semibold">
What properties are available?
</h3>

<p className="text-gray-600">
Apartments, houses, villas, plots, land and commercial properties.
</p>
</div>


</div>


</div>

</section>







<section className="bg-blue-700 px-6 py-16 text-white">


<div className="mx-auto max-w-6xl text-center">


<h2 className="text-3xl font-bold">
Have a Property to Sell or Rent?
</h2>


<p className="mt-3">
List your property on PlotApna and reach potential buyers.
</p>


<Link
href="/post-property"
className="mt-6 inline-block rounded-xl bg-white px-7 py-3 text-blue-700"
>
Post Your Property
</Link>


</div>


</section>





<footer className="bg-gray-950 px-6 py-10 text-gray-400">


<div className="mx-auto max-w-7xl">


<h3 className="text-xl font-bold text-white">
PLOTAPNA
</h3>


<p className="mt-2">
Your place. Your future.
</p>


</div>


</footer>



</main>

);

}