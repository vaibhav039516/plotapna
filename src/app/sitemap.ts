import { MetadataRoute } from "next";
import { supabase } from "@/lib/supabase";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {


  const { data: properties } = await supabase
    .from("properties")
    .select("id, created_at")
    .order("created_at", {
      ascending: false,
    });



  const propertyUrls =
    properties?.map((property) => ({

      url:
        `https://plotapna.com/property/${property.id}`,

      lastModified:
        new Date(property.created_at),

      changeFrequency:
        "weekly" as const,

      priority:
        0.8,

    })) || [];




  return [


    {
      url:
        "https://plotapna.com",

      lastModified:
        new Date(),

      changeFrequency:
        "daily",

      priority:
        1,

    },


    {
      url:
        "https://plotapna.com/search",

      lastModified:
        new Date(),

      changeFrequency:
        "daily",

      priority:
        0.9,

    },


    {
      url:
        "https://plotapna.com/post-property",

      lastModified:
        new Date(),

      changeFrequency:
        "weekly",

      priority:
        0.7,

    },


    ...propertyUrls,


  ];

}