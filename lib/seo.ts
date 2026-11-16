import type { Language } from "./i18n";

export const SITE_URL = "https://www.sabres.community";
export const ORGANIZATION_NAME = "Sabres Community";
export const ORG_EMAIL = "sabres.projects@gmail.com";
export const ORG_INSTAGRAM = "https://instagram.com/sabres.community";
// The single form every CTA on the site points to - registration or interest,
// whichever is live. Change it here and all six links follow.
export const FORM_URL = "https://forms.gle/ep3gq8zFQaEYeC8X7";

// Every date on the site that names the current cohort. The badge, the
// programme subheading and the FAQ answer all read from here, so opening a
// new cohort is one edit instead of three.
//   start  - the month it opens, for the badge
//   window - the full run, phrased the way each language says it so that it
//            drops straight into a sentence
export const COHORT_DATES: Record<Language, { start: string; window: string }> = {
  en: { start: "April 2027", window: "April through July 2027" },
  he: { start: "אפריל 2027", window: "מאפריל עד יולי 2027" },
};

export const PARENT_ORG_NAME = "Yahav - Mechanchim LeTzionut";

export const seoContent: Record<
  Language,
  {
    title: string;
    description: string;
    keywords: string;
    ogLocale: string;
  }
> = {
  en: {
    title: "Sabres | Zionism, Friendship, Belonging",
    description:
      "A community for young adults building bridges between Olim and veteran Israelis. Through shared experiences and open dialogue - find belonging, friendship, and purpose.",
    keywords:
      "sabres, aliya, olim, new immigrants Israel, zionism, Israeli community, olim chadashim, aliyah program, meet Israelis, olim community, aliyah integration program, young olim, Hebrew Israeli friends, aliyah for young adults, Israeli mentorship, new olim social network",
    ogLocale: "en_US",
  },
  he: {
    title: "סברס | תכנית לעולים חדשים וישראלים — עלייה, ציונות, שייכות",
    description:
      "קהילה לצעירים שבונה גשרים בין עולים חדשים לישראלים ותיקים. דרך חוויות משותפות ושיח פתוח - מוצאים שייכות, חברות ומשמעות.",
    keywords:
      "סברס, תכנית רבין, עלייה, עליה, ציונות, עולים חדשים, קליטת עלייה, קהילה ישראלית, חברויות בישראל, קהילה לעולים, צברים ועולים, מנהיגות צעירה, עולים בני 20-30, אנגלו-סקסים בישראל, אולפן חברתי",
    ogLocale: "he_IL",
  },
};
