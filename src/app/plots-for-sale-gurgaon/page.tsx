import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Plots for Sale in Gurgaon | Residential Plots & Land in Gurgaon | PlotApna",

  description:
    "Find plots for sale in Gurgaon including residential plots, land and plot investment opportunities. Explore Gurgaon plot listings on PlotApna.",

  keywords: [
    "plots for sale in Gurgaon",
    "plot for sale in Gurgaon",
    "residential plots in Gurgaon",
    "land for sale in Gurgaon",
    "plots in Gurgaon",
    "Gurgaon plots",
    "buy plot in Gurgaon",
    "residential land in Gurgaon",
    "plot investment Gurgaon",
    "property in Gurgaon",
  ],

  alternates: {
    canonical: "https://plotapna.com/plots-for-sale-gurgaon",
  },

  openGraph: {
    title: "Plots for Sale in Gurgaon | PlotApna",
    description:
      "Explore residential plots, land and plot investment opportunities in Gurgaon on PlotApna.",
    url: "https://plotapna.com/plots-for-sale-gurgaon",
    siteName: "PlotApna",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const locations = [
  "Dwarka Expressway",
  "Sohna Road",
  "New Gurgaon",
  "Sector 79",
  "Sector 80",
  "Sector 95",
  "Sector 102",
  "Sector 103",
  "Sector 111",
];

export default function GurgaonPlotsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">

          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-200">
            Gurgaon Real Estate
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Plots for Sale in Gurgaon
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50">
            Explore residential plots, land and plot investment opportunities
            in Gurgaon. Find available plot listings across different
            locations and compare properties on PlotApna.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href="/search"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 shadow hover:bg-gray-100"
            >
              Search Plots
            </Link>

            <Link
              href="/post-property"
              className="rounded-lg border border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-blue-700"
            >
              Sell Your Plot
            </Link>

          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-6 py-16">

        <h2 className="text-3xl font-bold md:text-4xl">
          Find Residential Plots for Sale in Gurgaon
        </h2>

        <div className="mt-6 max-w-5xl space-y-5 text-lg leading-8 text-gray-700">

          <p>
            Gurgaon, also known as Gurugram, is one of the major real estate
            markets in the National Capital Region. The city has experienced
            significant development in residential, commercial and
            infrastructure projects, creating demand for different types of
            property.
          </p>

          <p>
            For buyers interested in land ownership, residential plots can
            offer an alternative to buying a completed apartment or house.
            A plot may allow an owner to plan and construct a property
            according to their future requirements, subject to applicable
            approvals and regulations.
          </p>

          <p>
            PlotApna provides a platform where property owners can list plots
            and buyers can discover available land and real estate listings.
            You can explore properties based on your preferred location and
            requirements.
          </p>

        </div>
      </section>

      {/* WHY BUY A PLOT */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">

          <h2 className="text-3xl font-bold md:text-4xl">
            Why Consider Buying a Plot in Gurgaon?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">
                Build Your Own Home
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                A residential plot can provide flexibility to plan the layout,
                design and construction of a future home according to your
                requirements.
              </p>
            </div>

            <div className="rounded-xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">
                Long-Term Investment
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Land is often considered by buyers as a long-term real estate
                investment. Location, infrastructure and future development
                can influence the attractiveness of a plot.
              </p>
            </div>

            <div className="rounded-xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">
                Location Flexibility
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Gurgaon has developed across multiple residential corridors,
                giving buyers different locations to consider based on their
                budget and requirements.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* POPULAR LOCATIONS */}
      <section className="mx-auto max-w-6xl px-6 py-16">

        <h2 className="text-3xl font-bold md:text-4xl">
          Popular Locations to Explore Plots in Gurgaon
        </h2>

        <p className="mt-4 max-w-4xl text-lg leading-8 text-gray-600">
          Buyers searching for plots in Gurgaon can compare different
          residential corridors and sectors. Location should be evaluated
          based on connectivity, infrastructure, surrounding development and
          future requirements.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {locations.map((location) => (
            <div
              key={location}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold">
                Plots in {location}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Explore plot and land opportunities around {location},
                Gurgaon.
              </p>

              <Link
                href="/search"
                className="mt-4 inline-block font-semibold text-blue-600"
              >
                Search properties →
              </Link>
            </div>
          ))}

        </div>
      </section>

      {/* WHAT TO CHECK */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">

          <h2 className="text-3xl font-bold md:text-4xl">
            What to Check Before Buying a Plot in Gurgaon
          </h2>

          <p className="mt-4 max-w-4xl text-lg leading-8 text-gray-600">
            Buying land requires careful due diligence. Before making a
            purchase decision, buyers should independently verify the property
            and relevant documents with qualified professionals.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="rounded-xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">
                1. Ownership and Title
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Verify ownership records and title information to understand
                who legally owns the property and whether there are any
                relevant claims or encumbrances.
              </p>
            </div>

            <div className="rounded-xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">
                2. Land Use and Approvals
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Check the permitted land use, development status and applicable
                approvals before purchasing a plot.
              </p>
            </div>

            <div className="rounded-xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">
                3. Location and Connectivity
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Consider road connectivity, nearby infrastructure, public
                transportation, schools, hospitals and other facilities.
              </p>
            </div>

            <div className="rounded-xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">
                4. Plot Size and Dimensions
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Confirm the plot area, dimensions, boundaries and access to the
                property against the relevant records.
              </p>
            </div>

            <div className="rounded-xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">
                5. Total Purchase Cost
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Consider the complete cost of the transaction rather than only
                the advertised plot price.
              </p>
            </div>

            <div className="rounded-xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">
                6. Future Development
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Research planned infrastructure and surrounding development
                when evaluating a plot for long-term use or investment.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* BUYING GUIDE */}
      <section className="mx-auto max-w-6xl px-6 py-16">

        <h2 className="text-3xl font-bold md:text-4xl">
          How to Search for a Plot for Sale in Gurgaon
        </h2>

        <div className="mt-10 space-y-6">

          <div className="flex gap-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
              1
            </div>

            <div>
              <h3 className="text-xl font-bold">
                Decide Your Requirements
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Determine your preferred location, plot size, intended use
                and approximate budget.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
              2
            </div>

            <div>
              <h3 className="text-xl font-bold">
                Compare Available Listings
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Compare available properties and evaluate their location,
                pricing, size and other listing details.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
              3
            </div>

            <div>
              <h3 className="text-xl font-bold">
                Contact the Property Owner
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Contact the seller to obtain additional information and
                arrange a property visit where appropriate.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
              4
            </div>

            <div>
              <h3 className="text-xl font-bold">
                Complete Your Due Diligence
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Verify ownership, documents, approvals and other important
                details before proceeding with a transaction.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">

          <h2 className="text-3xl font-bold">
            Gurgaon Plot and Land Market
          </h2>

          <div className="mt-6 max-w-5xl space-y-5 text-lg leading-8 text-gray-700">

            <p>
              Gurgaon has become an important real estate destination in the
              Delhi NCR region. The city includes established residential
              neighbourhoods as well as developing areas where new
              infrastructure and residential projects continue to emerge.
            </p>

            <p>
              People searching for a plot for sale in Gurgaon may have
              different objectives. Some buyers may want to construct a
              residential property, while others may consider land as a
              long-term investment.
            </p>

            <p>
              The price and suitability of a plot can vary considerably
              depending on location, size, connectivity, development status
              and applicable regulations. Buyers should therefore compare
              multiple options rather than relying only on the advertised
              price.
            </p>

            <p>
              PlotApna makes it easier to discover property listings online.
              Property owners can list their plots and buyers can browse
              available opportunities through the platform.
            </p>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 py-16">

        <h2 className="text-3xl font-bold md:text-4xl">
          Frequently Asked Questions About Plots in Gurgaon
        </h2>

        <div className="mt-10 space-y-5">

          <div className="rounded-xl border bg-white p-6">
            <h3 className="text-lg font-bold">
              Where can I find plots for sale in Gurgaon?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Plot listings can be available across different sectors and
              developing areas of Gurgaon. Use PlotApna to explore currently
              available property listings.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6">
            <h3 className="text-lg font-bold">
              Can I buy a residential plot in Gurgaon?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Residential plots may be available in different parts of
              Gurgaon. Buyers should verify the permitted land use and
              applicable approvals before purchasing.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6">
            <h3 className="text-lg font-bold">
              What should I verify before buying a plot?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Buyers should carefully verify ownership, title, land use,
              approvals, plot dimensions, access and other relevant legal and
              transaction details.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6">
            <h3 className="text-lg font-bold">
              Can I sell my plot through PlotApna?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes. Property owners can use PlotApna to list their property and
              make the listing available to potential buyers.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">

          <h2 className="text-3xl font-bold md:text-4xl">
            Looking for a Plot in Gurgaon?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Explore available property listings on PlotApna or list your plot
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
              Sell Your Plot
            </Link>

          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="mx-auto max-w-6xl px-6 py-12">

        <h2 className="text-2xl font-bold">
          Explore More Property Searches
        </h2>

        <div className="mt-5 flex flex-wrap gap-4">

          <Link
            href="/properties/gurgaon"
            className="rounded-lg border px-5 py-3 font-medium text-blue-600 hover:bg-gray-50"
          >
            Property in Gurgaon
          </Link>

          <Link
            href="/properties/noida"
            className="rounded-lg border px-5 py-3 font-medium text-blue-600 hover:bg-gray-50"
          >
            Property in Noida
          </Link>

          <Link
            href="/properties/delhi"
            className="rounded-lg border px-5 py-3 font-medium text-blue-600 hover:bg-gray-50"
          >
            Property in Delhi
          </Link>

          <Link
            href="/search"
            className="rounded-lg border px-5 py-3 font-medium text-blue-600 hover:bg-gray-50"
          >
            All Properties
          </Link>

        </div>
      </section>

    </main>
  );
}