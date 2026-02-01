import {
  SITE_URL,
  ORGANIZATION_NAME,
  ORG_EMAIL,
  ORG_INSTAGRAM,
  PARENT_ORG_NAME,
  seoContent,
} from "@/lib/seo";

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORGANIZATION_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/sabres.png`,
    email: ORG_EMAIL,
    sameAs: [ORG_INSTAGRAM],
    description: seoContent.en.description,
    parentOrganization: {
      "@type": "Organization",
      name: PARENT_ORG_NAME,
    },
    founder: [
      { "@type": "Person", name: "Rotem Fredi Turiski" },
      { "@type": "Person", name: "Shir Lever" },
      { "@type": "Person", name: "Naomi Rubin" },
      { "@type": "Person", name: "Naama Novak Zohar" },
      { "@type": "Person", name: "Kamryn Felbel" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
