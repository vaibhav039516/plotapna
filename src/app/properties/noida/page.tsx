import Link from "next/link";

export const metadata = {
  title:
    "Property in Noida | Flats, Houses & Plots for Sale in Noida | PlotApna",

  description:
    "Explore properties in Noida including flats, apartments, independent houses, villas, residential plots and commercial properties. Find Noida real estate listings on PlotApna.",

  keywords: [
    "property in Noida",
    "property for sale in Noida",
    "flats for sale in Noida",
    "houses for sale in Noida",
    "plots for sale in Noida",
    "residential property in Noida",
    "Noida real estate",
    "buy property in Noida",
    "Noida property",
  ],

  alternates: {
    canonical: "https://plotapna.com/properties/noida",
  },

  openGraph: {
    title: "Property in Noida | Flats, Houses & Plots | PlotApna",

    description:
      "Find flats, houses, villas, plots and commercial properties for sale in Noida on PlotApna.",

    url: "https://plotapna.com/properties/noida",

    siteName: "PlotApna",

    type: "website",
  },
};

export default function NoidaPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}
      <section className="bg-blue-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <p className="font-semibold uppercase tracking-wide text-blue-700">
            PlotApna Real Estate
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Property in Noida
            <br />
            Buy Flats, Houses & Plots
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Explore properties for sale in Noida including apartments,
            flats, independent houses, villas, residential plots and
            commercial properties. Search Noida property listings by
            location, property type and budget on PlotApna.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href="/search?city=Noida"
              className="rounded-xl bg-blue-700 px-7 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Search Noida Properties
            </Link>

            <Link
              href="/post-property"
              className="rounded-xl border border-gray-300 px-7 py-3 font-semibold text-gray-800 transition hover:bg-gray-100"
            >
              List Your Property
            </Link>

          </div>

        </div>
      </section>


      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-6 py-16">

        <h2 className="text-3xl font-bold text-gray-900">
          Explore the Noida Real Estate Market
        </h2>

        <p className="mt-5 leading-8 text-gray-600">
          Noida is one of the major real estate markets in the Delhi NCR
          region. The city offers a wide range of residential and
          commercial properties, from apartments and independent houses
          to residential plots and commercial spaces.
        </p>

        <p className="mt-5 leading-8 text-gray-600">
          Property buyers can explore different parts of Noida based on
          their preferred location, budget, property type and investment
          objectives. Areas along major roads, expressways and established
          sectors offer a variety of residential and commercial
          opportunities.
        </p>

        <p className="mt-5 leading-8 text-gray-600">
          PlotApna allows property owners to list properties online while
          helping buyers discover available property listings in Noida.
          Users can browse listings, review property information and
          explore properties based on their requirements.
        </p>

      </section>


      {/* PROPERTY TYPES */}
      <section className="bg-gray-50 px-6 py-16">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-3xl font-bold text-gray-900">
            Types of Property Available in Noida
          </h2>

          <p className="mt-3 max-w-3xl text-gray-600">
            Explore different residential and commercial property options
            available across Noida.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border bg-white p-6 shadow-sm">

              <h3 className="text-xl font-bold text-gray-900">
                Flats & Apartments
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Explore apartments and flats suitable for individuals,
                couples and families looking for homes in Noida.
              </p>

              <Link
                href="/search?city=Noida&type=Apartment"
                className="mt-5 inline-block font-semibold text-blue-700"
              >
                View Apartments →
              </Link>

            </div>


            <div className="rounded-2xl border bg-white p-6 shadow-sm">

              <h3 className="text-xl font-bold text-gray-900">
                Houses & Villas
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Find independent houses, villas and residential homes
                available in different parts of Noida.
              </p>

              <Link
                href="/search?city=Noida&type=Independent%20House"
                className="mt-5 inline-block font-semibold text-blue-700"
              >
                View Houses →
              </Link>

            </div>


            <div className="rounded-2xl border bg-white p-6 shadow-sm">

              <h3 className="text-xl font-bold text-gray-900">
                Residential Plots
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Explore residential plots for buyers interested in
                constructing a home or investing in land.
              </p>

              <Link
                href="/search?city=Noida&type=Plot"
                className="mt-5 inline-block font-semibold text-blue-700"
              >
                View Plots →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* POPULAR LOCATIONS */}
      <section className="mx-auto max-w-6xl px-6 py-16">

        <h2 className="text-3xl font-bold text-gray-900">
          Popular Locations to Buy Property in Noida
        </h2>

        <p className="mt-3 max-w-3xl text-gray-600">
          Explore property opportunities across popular sectors and
          developing areas of Noida.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl border p-6">

            <h3 className="text-xl font-bold">
              Sector 150
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              A prominent residential area with apartments and
              residential developments.
            </p>

          </div>


          <div className="rounded-2xl border p-6">

            <h3 className="text-xl font-bold">
              Noida Expressway
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              A major growth corridor connecting Noida with
              Greater Noida and surrounding areas.
            </p>

          </div>


          <div className="rounded-2xl border p-6">

            <h3 className="text-xl font-bold">
              Sector 137
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              A residential locality known for apartment communities
              and connectivity to major parts of Noida.
            </p>

          </div>


          <div className="rounded-2xl border p-6">

            <h3 className="text-xl font-bold">
              Sector 75
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              A developed residential location with apartments,
              housing societies and local amenities.
            </p>

          </div>


          <div className="rounded-2xl border p-6">

            <h3 className="text-xl font-bold">
              Sector 62
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              An established Noida area with residential and
              commercial development.
            </p>

          </div>


          <div className="rounded-2xl border p-6">

            <h3 className="text-xl font-bold">
              Greater Noida West
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              A growing residential market offering a range of
              apartments and housing developments.
            </p>

          </div>

        </div>

      </section>


      {/* BUYING GUIDE */}
      <section className="bg-blue-50 px-6 py-16">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-3xl font-bold text-gray-900">
            Things to Consider When Buying Property in Noida
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">

            <div className="rounded-xl bg-white p-6">
              <h3 className="font-bold">
                Location
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Consider connectivity, nearby infrastructure,
                schools, hospitals, offices and everyday amenities.
              </p>
            </div>


            <div className="rounded-xl bg-white p-6">
              <h3 className="font-bold">
                Budget
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Compare property prices and consider additional
                costs associated with purchasing a property.
              </p>
            </div>


            <div className="rounded-xl bg-white p-6">
              <h3 className="font-bold">
                Property Documents
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Review ownership and property documents carefully
                and seek professional advice where appropriate.
              </p>
            </div>


            <div className="rounded-xl bg-white p-6">
              <h3 className="font-bold">
                Property Type
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Decide whether an apartment, independent house,
                villa or plot best matches your requirements.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* WHY PLOTAPNA */}
      <section className="mx-auto max-w-6xl px-6 py-16">

        <h2 className="text-3xl font-bold text-gray-900">
          Find Noida Properties on PlotApna
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          <div>
            <h3 className="text-xl font-bold">
              Explore Listings
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              Browse available property listings and compare
              options based on location and property type.
            </p>
          </div>


          <div>
            <h3 className="text-xl font-bold">
              Connect With Sellers
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              Review individual property listings and connect
              with sellers where contact options are available.
            </p>
          </div>


          <div>
            <h3 className="text-xl font-bold">
              List Your Property
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              Property owners can list houses, flats, plots and
              other properties on PlotApna.
            </p>
          </div>

        </div>

      </section>


      {/* FAQ */}
      <section className="bg-gray-50 px-6 py-16">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions About Property in Noida
          </h2>

          <div className="mt-8 space-y-8">

            <div>

              <h3 className="text-lg font-bold">
                What types of property can I find in Noida?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Buyers can explore apartments, flats, independent
                houses, villas, residential plots and commercial
                properties depending on available listings.
              </p>

            </div>


            <div>

              <h3 className="text-lg font-bold">
                Which areas of Noida are popular for property?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Popular areas include Sector 150, Sector 137,
                Sector 75, Sector 62, the Noida Expressway corridor
                and Greater Noida West.
              </p>

            </div>


            <div>

              <h3 className="text-lg font-bold">
                How can I search for property in Noida?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Use PlotApna's property search to explore listings
                by location, property type and other available
                search criteria.
              </p>

            </div>


            <div>

              <h3 className="text-lg font-bold">
                Can property owners list properties in Noida?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Yes. Property owners can use PlotApna to list
                available properties and reach potential buyers.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-blue-700 px-6 py-16 text-white">

        <div className="mx-auto max-w-5xl text-center">

          <h2 className="text-3xl font-bold">
            Find Property in Noida
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Explore flats, houses, plots and other properties
            available in Noida on PlotApna.
          </p>

          <Link
            href="/search?city=Noida"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3 font-semibold text-blue-700 transition hover:bg-gray-100"
          >
            Explore Noida Properties
          </Link>

        </div>

      </section>

    </main>
  );
}