import Link from "next/link";

export const metadata = {
  title: "Properties for Sale in Gurgaon | Buy Property in Gurgaon | PlotApna",
  description:
    "Find properties for sale in Gurgaon including plots, flats, houses and commercial properties. Explore property listings, prices, locations and details on PlotApna.",
  alternates: {
    canonical: "https://plotapna.com/properties/gurgaon",
  },
  openGraph: {
    title: "Properties for Sale in Gurgaon | PlotApna",
    description:
      "Explore plots, houses, flats and other properties for sale in Gurgaon on PlotApna.",
    url: "https://plotapna.com/properties/gurgaon",
    siteName: "PlotApna",
    type: "website",
  },
};

export default function GurgaonPropertiesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
            PlotApna Real Estate
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Properties for Sale in Gurgaon
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Explore plots, houses, flats, apartments and commercial
            properties for sale in Gurgaon. Find property listings by
            location, price and property type on PlotApna.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/search"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Search Properties
            </Link>

            <Link
              href="/post-property"
              className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-800 hover:bg-gray-100"
            >
              List Your Property
            </Link>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Find Property in Gurgaon
          </h2>

          <p className="mt-3 max-w-3xl text-gray-600">
            Whether you are looking to buy a home, invest in land or find a
            commercial property, explore different property options available
            in Gurgaon.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/search?type=Plot"
              className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                Plots for Sale
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Find residential and investment plots in Gurgaon.
              </p>
            </Link>

            <Link
              href="/search?type=House"
              className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                Houses for Sale
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Explore houses and independent homes in Gurgaon.
              </p>
            </Link>

            <Link
              href="/search?type=Flat"
              className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                Flats for Sale
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Browse flats and apartments available in Gurgaon.
              </p>
            </Link>

            <Link
              href="/search?type=Commercial"
              className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                Commercial Property
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Discover commercial property and investment opportunities.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-gray-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Popular Areas in Gurgaon
          </h2>

          <p className="mt-3 max-w-3xl text-gray-600">
            Explore property opportunities across some of the major residential
            and commercial areas of Gurgaon.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Golf Course Road",
              "Golf Course Extension Road",
              "Sohna Road",
              "Dwarka Expressway",
              "New Gurgaon",
              "Sector 57",
              "Sector 67",
              "Sector 82",
            ].map((location) => (
              <div
                key={location}
                className="rounded-lg border border-gray-200 bg-white p-4 font-medium text-gray-800"
              >
                Property in {location}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PlotApna */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Why Search Property on PlotApna?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Browse Property Listings
              </h3>
              <p className="mt-2 text-gray-600">
                Explore available properties and compare listings based on
                location, price and property type.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Buy Directly
              </h3>
              <p className="mt-2 text-gray-600">
                Connect with property owners and sellers through individual
                property listings.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                List Your Property
              </h3>
              <p className="mt-2 text-gray-600">
                Property owners can list plots, houses, flats and other
                properties on PlotApna.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-gray-50 px-6 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Buy Property in Gurgaon
          </h2>

          <div className="mt-5 space-y-4 leading-7 text-gray-600">
            <p>
              Gurgaon, also known as Gurugram, is one of the major real estate
              markets in the Delhi NCR region. The city offers a wide range of
              residential and commercial property options, including
              apartments, independent houses, plots and commercial spaces.
            </p>

            <p>
              Buyers looking for property in Gurgaon can explore different
              locations depending on their budget, preferred property type and
              investment objectives. Areas around major roads and business
              districts continue to attract residential and commercial
              development.
            </p>

            <p>
              PlotApna provides a platform where property owners can list their
              properties and buyers can discover available listings online.
              Browse property listings, review available information and
              contact sellers directly through the platform.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-2xl bg-gray-900 px-8 py-12 text-center text-white">
          <h2 className="text-3xl font-bold">
            Looking to Buy or Sell Property in Gurgaon?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Explore property listings on PlotApna or list your property and
            reach potential buyers.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              href="/search"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 hover:bg-gray-100"
            >
              Browse Properties
            </Link>

            <Link
              href="/post-property"
              className="rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white hover:bg-gray-800"
            >
              Post Property
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}