import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Every URL in an hreflang set needs its own entry listing the whole set,
  // itself included - otherwise the Hebrew page is never declared as a page.
  const languages = {
    en: SITE_URL,
    he: `${SITE_URL}/?lng=he`,
  };

  return [
    {
      url: SITE_URL,
      lastModified,
      alternates: { languages },
    },
    {
      url: `${SITE_URL}/?lng=he`,
      lastModified,
      alternates: { languages },
    },
  ];
}
