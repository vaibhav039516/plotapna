import { MetadataRoute } from "next";
import { supabase } from "@/lib/supabase";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {


  const baseUrl = "https://plotapna.com";


  // Fetch live properties for Google indexing
  const { data: properties } = await supabase
    .from("properties")
    .select("id, updated_at");



  const propertyUrls =
    properties?.map((property) => ({
      url: `${baseUrl}/property/${property.id}`,
      lastModified: property.updated_at
        ? new Date(property.updated_at)
        : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })) || [];




  return [

    // Homepage
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },


    // Search
    {
      url: `${baseUrl}/search`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },


    // Main SEO City Pages

    {
      url: `${baseUrl}/properties/gurgaon`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },


    {
      url: `${baseUrl}/properties/noida`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },


    {
      url: `${baseUrl}/properties/delhi`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },


    {
      url: `${baseUrl}/properties/bangalore`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },


    {
      url: `${baseUrl}/properties/mumbai`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },



    // SEO Landing Pages

    {
      url: `${baseUrl}/plots-for-sale-gurgaon`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },


    {
      url: `${baseUrl}/flats-for-sale-gurgaon`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },


    {
      url: `${baseUrl}/houses-for-sale-gurgaon`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },


    {
      url: `${baseUrl}/plots-for-sale-noida`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },


    {
      url: `${baseUrl}/property-in-gurgaon`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },

    {
  url: `${baseUrl}/properties/gurgaon`,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.9,
},

{
  url: `${baseUrl}/properties/noida`,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.9,
},

{
  url: `${baseUrl}/properties/delhi`,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.9,
},

{
  url: `${baseUrl}/properties/mumbai`,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.9,
},

    // Dynamic property pages

    ...propertyUrls,


  ];

}

