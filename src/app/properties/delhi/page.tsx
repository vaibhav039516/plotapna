import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Property in Delhi | Flats, Houses & Plots for Sale in Delhi | PlotApna",

  description:
    "Explore properties in Delhi including flats, apartments, independent houses, villas, residential plots and commercial properties. Find Delhi real estate listings on PlotApna.",

  keywords: [
    "property in Delhi",
    "property for sale in Delhi",
    "flats for sale in Delhi",
    "houses for sale in Delhi",
    "plots for sale in Delhi",
    "residential property in Delhi",
    "Delhi real estate",
    "buy property in Delhi",
    "Delhi property",
    "property dealers in Delhi",
  ],

  alternates: {
    canonical: "https://plotapna.com/properties/delhi",
  },

  openGraph: {
    title: "Property in Delhi | Flats, Houses & Plots | PlotApna",
    description:
      "Find flats, houses, villas, plots and commercial properties for sale in Delhi on PlotApna.",
    url: "https://plotapna.com/properties/delhi",
    siteName: "PlotApna",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function DelhiPropertiesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">

          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-200">
              Delhi Real Estate
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Property in Delhi – Buy Flats, Houses & Plots
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50">
              Discover residential and commercial property in Delhi on
              PlotApna. Explore flats, apartments, independent houses,
              villas, residential plots and commercial properties available
              for sale across Delhi.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/search"
                className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 shadow hover:bg-gray-100"
              >
                Search Properties
              </Link>

              <Link
                href="/post-property"
                className="rounded-lg border border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-blue-700"
              >
                Post Your Property
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold md:text-4xl">
          Find the Right Property in Delhi
        </h2>

        <div className="mt-6 max-w-5xl space-y-5 text-lg leading-8 text-gray-700">
          <p>
            Delhi is one of India's most important real estate markets, with
            strong demand for residential homes, apartments, builder floors,
            independent houses, plots and commercial properties. Whether you
            are looking to buy a home for your family, invest in property or
            find a commercial space, Delhi offers a wide range of real estate
            opportunities.
          </p>

          <p>
            PlotApna helps property buyers discover listings across different
            parts of Delhi. You can explore properties based on location,
            property type and other requirements to find options that match
            your needs.
          </p>

          <p>
            If you are planning to buy property in Delhi, comparing multiple
            locations and property types can help you make a more informed
            decision. PlotApna provides a simple platform for discovering and
            comparing available properties.
          </p>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">

          <h2 className="text-3xl font-bold md:text-4xl">
            Types of Property Available in Delhi
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-gray-600">
            Explore different types of residential and commercial properties
            depending on your budget, location and investment requirements.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">
                Flats & Apartments in Delhi
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Find apartments and flats suitable for families, professionals
                and investors. Compare properties based on location, size,
                amenities and price.
              </p>

              <Link
                href="/search"
                className="mt-5 inline-block font-semibold text-blue-600"
              >
                Explore Flats →
              </Link>
            </div>

            <div className="rounded-xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">
                Houses & Builder Floors
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Explore independent houses, villas and builder floors across
                different residential areas of Delhi.
              </p>

              <Link
                href="/search"
                className="mt-5 inline-block font-semibold text-blue-600"
              >
                Explore Houses →
              </Link>
            </div>

            <div className="rounded-xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">
                Plots for Sale in Delhi
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Explore residential plots and land opportunities for buyers
                interested in building a home or investing in land.
              </p>

              <Link
                href="/search"
                className="mt-5 inline-block font-semibold text-blue-600"
              >
                Explore Plots →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* POPULAR AREAS */}
      <section className="mx-auto max-w-6xl px-6 py-16">

        <h2 className="text-3xl font-bold md:text-4xl">
          Popular Areas for Property in Delhi
        </h2>

        <p className="mt-4 max-w-4xl text-lg leading-8 text-gray-600">
          Delhi has many established residential and commercial locations.
          Property demand can vary significantly between areas depending on
          connectivity, infrastructure, amenities and proximity to employment
          hubs.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {[
            "Dwarka",
            "Rohini",
            "Janakpuri",
            "Vasant Kunj",
            "Saket",
            "Greater Kailash",
            "Lajpat Nagar",
            "Mayur Vihar",
            "Pitampura",
            "Karol Bagh",
            "Uttam Nagar",
            "Najafgarh",
          ].map((area) => (
            <div
              key={area}
              className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
            >
              <h3 className="font-semibold text-gray-900">
                Property in {area}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Explore residential property and real estate opportunities in
                {` ${area}, Delhi`}.
              </p>

              <Link
                href="/search"
                className="mt-3 inline-block text-sm font-semibold text-blue-600"
              >
                View properties →
              </Link>
            </div>
          ))}

        </div>
      </section>

      {/* BUYING GUIDE */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">

          <h2 className="text-3xl font-bold md:text-4xl">
            Things to Consider Before Buying Property in Delhi
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="rounded-xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">
                1. Choose the Right Location
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Consider connectivity, nearby schools, hospitals, markets,
                public transportation and accessibility to major employment
                areas before choosing a property.
              </p>
            </div>

            <div className="rounded-xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">
                2. Set Your Property Budget
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Determine your total budget before beginning your property
                search. Include registration, taxes, maintenance and other
                transaction-related expenses where applicable.
              </p>
            </div>

            <div className="rounded-xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">
                3. Verify Property Documents
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Buyers should carefully verify ownership documents, approvals,
                title information and other relevant legal records before
                completing a property transaction.
              </p>
            </div>

            <div className="rounded-xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">
                4. Compare Multiple Properties
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Comparing properties in different locations can help buyers
                understand available options and choose a property that best
                matches their requirements.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY PLOTAPNA */}
      <section className="mx-auto max-w-6xl px-6 py-16">

        <h2 className="text-3xl font-bold md:text-4xl">
          Why Search for Delhi Property on PlotApna?
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          <div className="rounded-xl border p-6">
            <h3 className="text-xl font-bold">
              Easy Property Discovery
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Browse property listings and discover homes, plots and other
              real estate opportunities in Delhi.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="text-xl font-bold">
              Multiple Property Types
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Explore flats, apartments, houses, villas, plots and commercial
              properties through one platform.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="text-xl font-bold">
              List Your Property
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Property owners can list their properties on PlotApna and make
              them available to potential buyers.
            </p>
          </div>

        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pb-16">

          <h2 className="text-3xl font-bold">
            Delhi Real Estate Market
          </h2>

          <div className="mt-6 max-w-5xl space-y-5 text-lg leading-8 text-gray-700">

            <p>
              The Delhi real estate market includes a diverse range of
              residential and commercial properties. Buyers can find
              apartments, builder floors, independent houses, villas, plots
              and commercial spaces in different parts of the city.
            </p>

            <p>
              When searching for property for sale in Delhi, location is an
              important factor. Buyers often consider connectivity to major
              roads, metro stations, business districts, educational
              institutions, healthcare facilities and everyday amenities.
            </p>

            <p>
              Whether you are looking for a flat for your family, a house with
              more space or a plot for future construction, researching the
              local market and comparing available properties can help you
              identify suitable opportunities.
            </p>

            <p>
              PlotApna aims to make property discovery easier by bringing
              property listings together in one online marketplace. Buyers
              can search available listings while property owners can list
              their properties for potential buyers.
            </p>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 py-16">

          <h2 className="text-3xl font-bold md:text-4xl">
            Frequently Asked Questions About Property in Delhi
          </h2>

          <div className="mt-10 space-y-6">

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold">
                What types of property can I find in Delhi?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                You can find flats, apartments, independent houses, builder
                floors, villas, residential plots and commercial properties
                depending on available listings.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold">
                How can I search for property in Delhi?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                You can use PlotApna's property search to explore available
                listings and find properties based on your requirements.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold">
                Can I list my property for sale in Delhi?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Yes. Property owners can use PlotApna to list their property
                and provide information that potential buyers can review.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold">
                What should I check before buying property in Delhi?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Buyers should evaluate the location, property condition,
                ownership, relevant documents, approvals, pricing and other
                transaction details before purchasing.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">

          <h2 className="text-3xl font-bold md:text-4xl">
            Looking for Property in Delhi?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Explore available properties on PlotApna or list your property
            and connect with potential buyers.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href="/search"
              className="rounded-lg bg-white px-7 py-3 font-semibold text-blue-700 hover:bg-gray-100"
            >
              Search Properties
            </Link>

            <Link
              href="/post-property"
              className="rounded-lg border border-white px-7 py-3 font-semibold text-white hover:bg-white hover:text-blue-700"
            >
              List Your Property
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}