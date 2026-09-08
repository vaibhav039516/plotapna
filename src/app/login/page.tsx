"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type User = {
  id: string;
  name: string;
  email: string;
  mobile: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();

  const [isSignup, setIsSignup] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setLoading(true);


    try {

      const normalizedEmail = email.trim().toLowerCase();


      // =========================
      // SIGN UP
      // =========================

      if (isSignup) {


        if (
          !name.trim() ||
          !normalizedEmail ||
          !mobile.trim() ||
          !password
        ) {

          setError("Please fill all fields.");
          setLoading(false);
          return;

        }


        // Check existing user

        const { data: existingUser } = await supabase
          .from("users")
          .select("*")
          .eq("email", normalizedEmail)
          .maybeSingle();



        if (existingUser) {

          setError(
            "An account with this email already exists."
          );

          setLoading(false);
          return;

        }



        // Create user

        const { data:newUser, error:createError } =
          await supabase
          .from("users")
          .insert({

            name:name.trim(),

            email:normalizedEmail,

            mobile:mobile.trim(),

            password:password

          })
          .select()
          .single();



        if(createError){

          console.error(createError);

          setError(createError.message);

          setLoading(false);

          return;

        }



        // Save current session

        localStorage.setItem(
          "plotapna_current_user",
          JSON.stringify(newUser)
        );



        console.log(
          "NEW USER CREATED",
          newUser
        );



        router.push("/dashboard");

        return;


      }




      // =========================
      // LOGIN
      // =========================


      if(
        !normalizedEmail ||
        !password
      ){

        setError(
          "Please enter email and password."
        );

        setLoading(false);

        return;

      }



      const {data:user,error:loginError}=

        await supabase
        .from("users")
        .select("*")
        .eq("email",normalizedEmail)
        .eq("password",password)
        .maybeSingle();




      if(loginError){

        console.error(loginError);

        setError(loginError.message);

        setLoading(false);

        return;

      }




      if(!user){

        setError(
          "Invalid email or password."
        );

        setLoading(false);

        return;

      }




      localStorage.setItem(
        "plotapna_current_user",
        JSON.stringify(user)
      );



      console.log(
        "LOGIN SUCCESS",
        user
      );



      router.push("/dashboard");



    } 
    catch(err){

      console.error(
        "AUTH ERROR",
        err
      );

      setError(
        "Something went wrong. Please try again."
      );

    }
    finally{

      setLoading(false);

    }

  }



  function switchMode(){

    setIsSignup(!isSignup);

    setName("");
    setEmail("");
    setMobile("");
    setPassword("");
    setError("");

  }



  return (

    <main className="min-h-screen bg-gray-50">


      <nav className="border-b bg-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">


          <Link
            href="/"
            className="text-2xl font-bold text-blue-700"
          >
            PLOTAPNA
          </Link>


          <Link
            href="/"
            className="text-sm text-gray-600"
          >
            Back to Home
          </Link>


        </div>

      </nav>



      <div className="flex min-h-[calc(100vh-73px)] items-center justify-center px-6 py-10">


        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">


          <div className="text-center">

            <h1 className="text-3xl font-bold text-gray-900">

              {
                isSignup
                ? "Create your account"
                : "Welcome back"
              }

            </h1>


            <p className="mt-2 text-gray-500">

              {
                isSignup
                ?
                "Join PlotApna and list your property."
                :
                "Login to manage your PlotApna properties."
              }

            </p>


          </div>




          {
            error && (

              <div className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">

                {error}

              </div>

            )
          }






          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >



            {
              isSignup && (

              <>

              <div>

              <label className="mb-2 block text-sm font-medium">

              Full Name

              </label>


              <input

              value={name}

              onChange={
                e=>setName(e.target.value)
              }

              className="w-full rounded-xl border px-4 py-3"

              placeholder="Enter your name"

              />


              </div>



              <div>

              <label className="mb-2 block text-sm font-medium">

              Mobile Number

              </label>


              <input

              value={mobile}

              onChange={
                e=>setMobile(e.target.value)
              }

              className="w-full rounded-xl border px-4 py-3"

              placeholder="Enter mobile number"

              />

              </div>


              </>

              )
            }






            <div>

            <label className="mb-2 block text-sm font-medium">

            Email

            </label>


            <input

            type="email"

            value={email}

            onChange={
              e=>setEmail(e.target.value)
            }

            className="w-full rounded-xl border px-4 py-3"

            placeholder="you@example.com"

            required

            />


            </div>






            <div>

            <label className="mb-2 block text-sm font-medium">

            Password

            </label>


            <input

            type="password"

            value={password}

            onChange={
              e=>setPassword(e.target.value)
            }

            className="w-full rounded-xl border px-4 py-3"

            placeholder="Enter password"

            required

            />


            </div>






            <button

            disabled={loading}

            className="w-full rounded-xl bg-blue-700 py-3.5 font-semibold text-white"

            >

            {
              loading
              ?
              "Please wait..."
              :
              isSignup
              ?
              "Create Account"
              :
              "Login"
            }


            </button>



          </form>






          <div className="mt-6 text-center text-sm">


          {
            isSignup
            ?
            "Already have an account?"
            :
            "Don't have an account?"
          }



          <button

          onClick={switchMode}

          className="ml-1 font-semibold text-blue-700"

          >

          {
            isSignup
            ?
            "Login"
            :
            "Sign up"
          }

          </button>


          </div>



        </div>


      </div>


    </main>

  );

}