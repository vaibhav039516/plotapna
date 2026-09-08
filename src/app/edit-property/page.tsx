"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";


export default function EditPropertyPage() {

  const router = useRouter();

  const params = useParams();

  const id = params.id as string;



  const [loading,setLoading] = useState(true);

  const [saving,setSaving] = useState(false);



  const [user,setUser] = useState<any>(null);



  const [title,setTitle] = useState("");
  const [city,setCity] = useState("");
  const [location,setLocation] = useState("");
  const [type,setType] = useState("Apartment");
  const [purpose,setPurpose] = useState("Buy");
  const [price,setPrice] = useState("");
  const [area,setArea] = useState("");
  const [bedrooms,setBedrooms] = useState("");
  const [description,setDescription] = useState("");



  useEffect(()=>{

    const savedUser =
      localStorage.getItem(
        "plotapna_current_user"
      );


    if(!savedUser){

      router.push("/login");
      return;

    }


    setUser(
      JSON.parse(savedUser)
    );


    loadProperty();


  },[]);




  async function loadProperty(){


    const {data,error}=await supabase
      .from("properties")
      .select("*")
      .eq("id",id)
      .single();



    if(error){

      console.error(error);

      alert(
        "Property not found"
      );

      router.push("/dashboard");

      return;

    }



    setTitle(data.title);
    setCity(data.city);
    setLocation(data.location);
    setType(data.type);
    setPurpose(data.purpose);
    setPrice(String(data.price));
    setArea(String(data.area));
    setBedrooms(String(data.bedrooms || 0));
    setDescription(
      data.description || ""
    );



    setLoading(false);


  }





  async function updateProperty(
    e:React.FormEvent
  ){

    e.preventDefault();


    if(!user) return;



    setSaving(true);



    const {data:property}=await supabase
      .from("properties")
      .select("owner_email")
      .eq("id",id)
      .single();



    if(
      !property ||
      property.owner_email !== user.email
    ){

      alert(
        "You cannot edit this property"
      );

      setSaving(false);

      return;

    }





    const {error}=await supabase
      .from("properties")
      .update({

        title,
        city,
        location,
        type,
        purpose,
        price:Number(price),
        area:Number(area),
        bedrooms:Number(bedrooms),
        description

      })
      .eq("id",id);



    if(error){

      console.error(error);

      alert(
        "Unable to update property"
      );

      setSaving(false);

      return;

    }



    alert(
      "Property updated successfully"
    );


    router.push(
      `/property/${id}`
    );


  }





  if(loading){

    return(

      <main className="flex min-h-screen items-center justify-center">

        Loading...

      </main>

    );

  }




return(

<main className="min-h-screen bg-gray-50">


<header className="border-b bg-white">

<div className="mx-auto max-w-6xl flex justify-between px-6 py-4">


<Link
href="/"
className="text-2xl font-bold text-blue-600"
>
PLOTAPNA
</Link>



<Link
href="/dashboard"
className="text-gray-700"
>
Dashboard
</Link>


</div>

</header>





<section className="mx-auto max-w-3xl px-6 py-10">


<h1 className="text-3xl font-bold text-gray-900">

Edit Property

</h1>


<p className="mt-2 text-gray-600">

Update your property details

</p>





<form

onSubmit={updateProperty}

className="mt-8 space-y-5 rounded-2xl bg-white p-6 shadow"

>



<input

value={title}

onChange={(e)=>setTitle(e.target.value)}

placeholder="Property title"

className="w-full rounded-xl border px-4 py-3"

/>




<div className="grid md:grid-cols-2 gap-4">


<input

value={city}

onChange={(e)=>setCity(e.target.value)}

placeholder="City"

className="rounded-xl border px-4 py-3"

/>



<input

value={location}

onChange={(e)=>setLocation(e.target.value)}

placeholder="Location"

className="rounded-xl border px-4 py-3"

/>


</div>





<select

value={type}

onChange={(e)=>setType(e.target.value)}

className="w-full rounded-xl border px-4 py-3"

>


<option>Apartment</option>

<option>Independent House</option>

<option>Villa</option>

<option>Plot</option>

<option>Land</option>

<option>Commercial</option>


</select>






<select

value={purpose}

onChange={(e)=>setPurpose(e.target.value)}

className="w-full rounded-xl border px-4 py-3"

>


<option>Buy</option>

<option>Rent</option>


</select>







<div className="grid md:grid-cols-3 gap-4">


<input

type="number"

value={price}

onChange={(e)=>setPrice(e.target.value)}

placeholder="Price"

className="rounded-xl border px-4 py-3"

/>



<input

type="number"

value={area}

onChange={(e)=>setArea(e.target.value)}

placeholder="Area sq ft"

className="rounded-xl border px-4 py-3"

/>



<input

type="number"

value={bedrooms}

onChange={(e)=>setBedrooms(e.target.value)}

placeholder="Bedrooms"

className="rounded-xl border px-4 py-3"

/>


</div>






<textarea

value={description}

onChange={(e)=>setDescription(e.target.value)}

rows={6}

placeholder="Property description"

className="w-full rounded-xl border px-4 py-3"

/>






<button

disabled={saving}

className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"

>


{

saving

?

"Updating..."

:

"Save Changes"

}


</button>



</form>



</section>



</main>


);


}