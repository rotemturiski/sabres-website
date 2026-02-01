import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Program } from "@/components/home/program";
import { Audience } from "@/components/home/audience";
import { Alumni } from "@/components/home/alumni";
import { FAQ } from "@/components/home/faq";
import { OurStory } from "@/components/home/our-story";
import { Contact } from "@/components/home/contact";
import { Suspense } from "react";
import {
  SITE_URL,
  OG_IMAGE_PATH,
  ORGANIZATION_NAME,
  seoContent,
} from "@/lib/seo";
import type { Language } from "@/lib/i18n";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const lang: Language = params.lng === "he" ? "he" : "en";
  const seo = seoContent[lang];
  const canonicalUrl = lang === "he" ? `${SITE_URL}/?lng=he` : SITE_URL;
  const ogImageUrl = `${SITE_URL}${OG_IMAGE_PATH}`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: SITE_URL,
        he: `${SITE_URL}/?lng=he`,
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonicalUrl,
      siteName: ORGANIZATION_NAME,
      locale: seo.ogLocale,
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: ORGANIZATION_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [ogImageUrl],
    },
  };
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <div className="flex flex-col gap-44 md:gap-[220px]">
        <Hero />
        <About />
        {/* <Themes /> */}
        <Program />
        <Alumni />
        <OurStory />
        <Audience />
        <FAQ />
        <Contact />
      </div>
    </Suspense>
  );
}
