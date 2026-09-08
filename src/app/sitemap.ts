import { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {

  return [

    {
      url: "https://plotapna.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },


    {
      url: "https://plotapna.com/search",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },


    {
      url: "https://plotapna.com/post-property",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },


    {
      url: "https://plotapna.com/login",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },


  ];

}