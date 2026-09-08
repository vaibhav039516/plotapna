"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";


type User = {
  name: string;
  mobile: string;
  email: string;
};


type Property = {
  id: string;
  title: string;
  city: string;
  location: string;
  type: string;
  purpose: string;
  price: number;
  area: number;
  bedrooms: number;
  owner_email: string;
  created_at: string;
};



export default function DashboardPage() {


  const router = useRouter();


  const [user,setUser] = useState<User | null>(null);

  const [myProperties,setMyProperties] = useState<Property[]>([]);

  const [loadingProperties,setLoadingProperties] = useState(true);



  // Check logged-in user

  useEffect(()=>{


    const savedUser =
      localStorage.getItem(
        "plotapna_current_user"
      );


    if(!savedUser){

      router.push("/login");

      return;

    }



    try{


      const parsedUser = JSON.parse(savedUser);

      setUser(parsedUser);


    }
    catch{


      localStorage.removeItem(
        "plotapna_current_user"
      );

      router.push("/login");


    }


  },[router]);





  // Load user's properties

  useEffect(()=>{


    if(user){

      loadMyProperties();

    }


  },[user]);






  async function loadMyProperties(){


    if(!user) return;



    setLoadingProperties(true);



    const {

      data,

      error

    } = await supabase


    .from("properties")


    .select("*")


    .eq(
      "owner_email",
      user.email
    )


    .order(
      "created_at",
      {
        ascending:false
      }
    );





    if(error){


      console.error(
        "Loading error:",
        error
      );


      setMyProperties([]);


    }
    else{


      setMyProperties(
        data || []
      );


    }



    setLoadingProperties(false);


  }







  // Delete property


  async function deleteProperty(
    id:string
  ){


    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this property?"
      );



    if(!confirmDelete) return;





    const {

      error

    } = await supabase


    .from("properties")


    .delete()


    .eq(
      "id",
      id
    );





    if(error){


      alert(
        "Unable to delete property: "
        +
        error.message
      );


      return;


    }




    alert(
      "Property deleted successfully"
    );



    loadMyProperties();



  }







  function logout(){


    localStorage.removeItem(
      "plotapna_current_user"
    );


    router.push("/login");


  }







  if(!user){


    return (

      <main className="flex min-h-screen items-center justify-center">

        Loading...

      </main>

    );


  }








  return (


    <main className="min-h-screen bg-gray-50">





      <header className="border-b bg-white">


        <div className="mx-auto max-w-7xl flex justify-between px-6 py-4">


          <Link

          href="/"

          className="text-2xl font-bold text-blue-600"

          >

            PLOTAPNA

          </Link>





          <div className="flex gap-4">



            <Link

            href="/search"

            className="text-gray-700"

            >

              Search

            </Link>






            <button

            onClick={logout}

            className="rounded-lg border px-4 py-2"

            >

              Logout

            </button>



          </div>



        </div>


      </header>








      <section className="mx-auto max-w-7xl px-6 py-10">



        <h1 className="text-3xl font-bold">

          Welcome, {user.name}

        </h1>




        <p className="mt-2 text-gray-600">

          Manage your posted properties.

        </p>








        <div className="mt-10 rounded-2xl bg-white p-6 shadow">





          <div className="flex justify-between items-center">


            <h2 className="text-xl font-bold">

              My Properties

            </h2>





            <Link

            href="/post-property"

            className="rounded-lg bg-blue-600 px-4 py-2 text-white"

            >

              + Post Property

            </Link>




          </div>








          {


          loadingProperties ? (



            <p className="mt-6 text-gray-500">

              Loading properties...

            </p>



          )



          :



          myProperties.length === 0 ? (




            <div className="mt-8 text-center">


              <div className="text-5xl">

                🏠

              </div>



              <p className="mt-3 text-gray-500">

                No properties posted yet

              </p>



            </div>



          )



          :




          (



          <div className="mt-8 grid gap-6 md:grid-cols-3">





          {

          myProperties.map(
            (property)=>(




            <div

            key={property.id}

            className="rounded-xl border bg-white p-5 shadow-sm"

            >





              <h3 className="font-bold text-lg">

                {property.title}

              </h3>





              <p className="mt-2 text-sm text-gray-600">

                📍 {property.location}, {property.city}

              </p>





              <p className="mt-3 font-bold">

                ₹{property.price.toLocaleString("en-IN")}

              </p>





              <p className="mt-2 text-sm text-gray-500">

                {property.type} • {property.bedrooms} BHK

              </p>







              <div className="mt-5 flex gap-2">





                <Link

                href={`/property/${property.id}`}

                className="flex-1 rounded-lg bg-blue-600 px-3 py-2 text-center text-white text-sm"

                >

                  View

                </Link>







                <Link

                href={`/edit-property/${property.id}`}

                className="flex-1 rounded-lg bg-yellow-500 px-3 py-2 text-center text-white text-sm"

                >

                  Edit

                </Link>








                <button

                onClick={()=>
                  deleteProperty(property.id)
                }

                className="flex-1 rounded-lg bg-red-600 px-3 py-2 text-white text-sm"

                >

                  Delete

                </button>





              </div>





            </div>





          ))

          }





          </div>



          )


          }





        </div>





      </section>






    </main>


  );

}