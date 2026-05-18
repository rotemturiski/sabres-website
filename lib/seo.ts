import type { Language } from "./i18n";

export const SITE_URL = "https://sabres.community";
export const OG_IMAGE_PATH = "/og-image.png";
export const ORGANIZATION_NAME = "Sabres Community";
export const ORG_EMAIL = "sabres.projects@gmail.com";
export const ORG_INSTAGRAM = "https://instagram.com/sabres.community";
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
      "Sabres is a group-based aliya integration program connecting new olim and veteran Israelis through shared experiences, open dialogue, and lasting friendships.",
    keywords:
      "sabres, aliya, olim, new immigrants Israel, zionism, Israeli community, olim chadashim, aliyah program, meet Israelis, olim community, aliyah integration program, young olim, Hebrew Israeli friends, aliyah for young adults, Israeli mentorship, new olim social network",
    ogLocale: "en_US",
  },
  he: {
    title: "סברס | תכנית לעולים חדשים וישראלים — עלייה, ציונות, שייכות",
    description:
      "סברס היא תכנית קבוצתית שנולדה מתכנית רבין למנהיגות, המחברת בין עולים חדשים לישראלים ותיקים דרך חוויות משותפות, שיח פתוח וחברויות לאורך זמן.",
    keywords:
      "סברס, תכנית רבין, עלייה, עליה, ציונות, עולים חדשים, קליטת עלייה, קהילה ישראלית, חברויות בישראל, קהילה לעולים, צברים ועולים, מנהיגות צעירה, עולים בני 20-30, אנגלו-סקסים בישראל, אולפן חברתי",
    ogLocale: "he_IL",
  },
};
