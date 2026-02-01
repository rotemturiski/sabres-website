export type Language = "en" | "he";

// Accepts either Next.js ReadonlyURLSearchParams or URLSearchParams-like objects.
export function getLangFromSearchParams(
  searchParams: { get(name: string): string | null } | null | undefined
): Language {
  const lng = searchParams?.get("lng");
  return lng === "he" ? "he" : "en";
}

export function isRtl(lang: Language) {
  return lang === "he";
}

export const content: Record<
  Language,
  {
    header: {
      navLinks: Array<{ name: string; href: string }>;
      donateCta: string;
      applyCta: string;
      langToggle: { ariaLabel: string; labelWhenEn: string; labelWhenHe: string };
      menuToggleAriaLabel: string;
      yahavAriaLabel: string;
    };
    footer: {
      donateCta: string;
      donateDescription: string;
      brandDescription: string;
      programHeading: string;
      contactHeading: string;
      links: {
        about: string;
        timeline: string;
        themes: string;
        apply: string;
      };
      copyright: string;
    };
    home: {
      hero: {
        badge: string;
        titleLine1: string;
        titleHighlight: string;
        subtitle: string;
        applyNow: string;
        learnMore: string;
      };
      about: {
        heading: string;
        subheadingPrefix: string;
        subheadingSuffix: string;
        features: Array<{
          title: string;
          description: string;
        }>;
      };
      program: {
        heading: string;
        subheading: string;
        steps: Array<{
          title: string;
          description: string;
        }>;
        cohortPeriodLabel: string;
        cohortPeriodValue: string;
        sessionsLabel: string;
        sessionsValue: string;
      };
      alumni: {
        heading: string;
        subheading: string;
        topImageAlt: string;
        testimonials: Array<{ name: string; quote: string }>;
        cta: string;
      };
      ourStory: {
        heading: string;
        storyHtml: string;
        team: Array<{
          name: string;
          title: string;
          image: string;
          imageObjectPositionClassName?: string;
        }>;
      };
      audience: {
        heading: string;
        description: string;
        registrationFeeHeading: string;
        registrationFeeAmount: string;
        registrationFeeNote: string;
        requirementsHeading: string;
        requirements: string[];
      };
      faq: {
        heading: string;
        subheading: string;
        faqs: Array<{ question: string; answer: string }>;
        stillHaveQuestionsHeading: string;
        stillHaveQuestionsBody: string;
        emailUs: string;
        instagram: string;
        imageAlt: string;
      };
      contact: {
        heading: string;
        subheading: string;
        applyCta: string;
        emailCardTitle: string;
        instagramCardTitle: string;
      };
    };
  }
> = {
  en: {
    header: {
      navLinks: [
        { name: "About", href: "#about" },
        { name: "Alumni", href: "#alumni" },
        { name: "FAQ", href: "#faq" },
        { name: "Our Story", href: "#our-story" },
        { name: "Contact", href: "#contact" },
      ],
      donateCta: "Help Us Grow",
      applyCta: "Apply Now",
      langToggle: {
        ariaLabel: "Switch language to Hebrew",
        labelWhenEn: "עברית",
        labelWhenHe: "English",
      },
      menuToggleAriaLabel: "Toggle menu",
      yahavAriaLabel: "Visit Yahav website",
    },
    footer: {
      donateCta: "Help Sabres Grow!",
      donateDescription:
        "Your contribution helps us continue building meaningful connections and expanding the program.",
      brandDescription:
        "Building friendships between Olim and veteran Israelis to foster a connected, multicultural society.",
      programHeading: "Program",
      contactHeading: "Contact Us",
      links: {
        about: "About",
        timeline: "Timeline",
        themes: "Themes",
        apply: "Apply",
      },
      copyright: "Sabres Community. All rights reserved.",
    },
    home: {
      hero: {
        badge: "Applications Open for 2026 Cohort",
        titleLine1: "Building Bridges,",
        titleHighlight: "Creating Belonging.",
        subtitle:
          "Connecting new Olim and veteran Israelis to foster mutual understanding and lasting human connections.",
        applyNow: "Apply Now",
        learnMore: "Learn More",
      },
      about: {
        heading: "Why Sabres?",
        subheadingPrefix:
          "Sabres was created in response to growing social isolation, with a simple goal: ",
        subheadingSuffix:
          " bringing people together around real conversations and shared experiences.",
        features: [
          {
            title: "The Challenge",
            description:
              "Many young Olim struggle to adapt, with ~30% leaving within five years. Meanwhile, veteran Israelis often lack meaningful interaction with Olim.",
          },
          {
            title: "Our Mission",
            description:
              "To build friendships between Olim and veteran Israelis, helping both sides feel genuine connection, belonging, and mutual responsibility.",
          },
          {
            title: "Our Vision",
            description:
              "A connected, multicultural Israeli society that welcomes Olim with compassion and strengthens a shared sense of belonging.",
          },
        ],
      },
      program: {
        heading: "Program Structure",
        subheading:
          "A structured five-stage journey designed to create meaningful connections.",
        steps: [
          {
            title: "Application",
            description: "Participants complete a form and attend a personal interview.",
          },
          {
            title: "Group Formation",
            description:
              "Diverse groups of new and veteran Israelis are formed, led by trained group leaders.",
          },
          {
            title: "Group Sessions",
            description:
              "Seven tri-weekly meetings including discussions, workshops, dinners, and trips.",
          },
          {
            title: "Independent Meetups",
            description:
              "Informal gatherings organized by participants to deepen relationships outside formal sessions.",
          },
          {
            title: "Wrap-Up & Alumni",
            description:
              "Final reflection session and integration into the alumni community for continued involvement.",
          },
        ],
        cohortPeriodLabel: "Cohort Period",
        cohortPeriodValue: "Half a year",
        sessionsLabel: "Sessions",
        sessionsValue: "7",
      },
      alumni: {
        heading: "Alumni Experiences",
        subheading: "Hear from those who have been part of the Sabres journey.",
        topImageAlt: "Sabres alumni",
        testimonials: [
          {
            name: "Koyo",
            quote:
              "I joined Sabres two months after moving to Israel. While I was excited about starting a new life in a new country, away from the environment and friends I had grown up with, it was also a time when I often found myself reflecting on what true friendship really means. Each Sabres meeting was a space where I could connect with others from the heart and also reconnect with myself. At Sabres, you meet people who are willing to truly face and accept you as you are.",
          },
          {
            name: "Naama",
            quote:
              "My experience at Sabres was truly meaningful. What began as a structured program quickly grew into something much deeper. With every meetup, the conversations became more open, the connections more genuine, and the sense of community stronger. By the end of Sabres, we weren't just participants - we had become real friends. Seeing Sabres's vision come to life was something I'm grateful to have been part of. Who thought a bunch of strangers would become friends? :)",
          },
          {
            name: "Ben",
            quote:
              "Sabres met and exceeded every expectation I had. Everyone involved was amazing and I know I've made some friends for life.",
          },
        ],
        cta: "I Want In!",
      },
      ourStory: {
        heading: "Our Story",
        storyHtml:
          "We founded Sabres through our studies in the Rabin Leadership Program at Reichman University.<br /><br />Before the program, we didn&apos;t know each other at all - we each came from a completely different academic background, some of us from the Israeli school and others from the International School. <br /><br />Some of us were new Olim, others were native Israelis, and outside of this framework, there was really no way for us to meet or connect.<br /><br />The program brought us together, and we quickly realized that without it, our paths probably never would have crossed. <br /><br />That experience is what sparked the idea for Sabres - creating a platform where people can meet, connect, and expand their social circles in ways that simply wouldn&apos;t happen otherwise.",
        team: [
          {
            name: "Rotem Fredi Turiski",
            title: "Co-Founder & CEO",
            image: "/staff/rotem.jpeg",
          },
          {
            name: "Shir Lever",
            title: "Co-Founder & VP",
            image: "/staff/shir.jpeg",
            imageObjectPositionClassName: "object-[center_20%]",
          },
          {
            name: "Naomi Rubin",
            title: "Co-Founder & Head of Operations",
            image: "/staff/neomi.jpg",
          },
          {
            name: "Naama Novak Zohar",
            title: "Co-Founder & Head of Programming",
            image: "/staff/nama.jpg",
          },
          {
            name: "Kamryn Felbel",
            title: "Co-Founder & Head of Alumni",
            image: "/staff/kami.jpg",
          },
        ],
      },
      audience: {
        heading: "Who is this for?",
        description:
          "We are looking for Olim and Native-born Israelis who want to be part of something bigger.",
        registrationFeeHeading: "Registration Fee",
        registrationFeeAmount: "₪250",
        registrationFeeNote: "Commitment fee for the full program",
        requirementsHeading: "Requirements",
        requirements: [
          "Ages 23 - 33 (approx.)",
          "Basic level of English",
          "Commitment to attend all sessions",
          "Interest in personal development & community",
        ],
      },
      faq: {
        heading: "Frequently Asked Questions",
        subheading: "Everything you need to know about Sabres.",
        faqs: [
          {
            question: "Who is Sabres for?",
            answer:
              "Sabres is for young adults (ages 23 - 33)  -  Olim and native Israelis  -  who are curious about meeting people from different backgrounds and building real connections over time.",
          },
          {
            question: "How much does the program cost?",
            answer:
              "The full program costs 250 NIS in total, covering all sessions. The fee helps ensure commitment, but Sabres is subsidized so cost won't be a barrier to participation.",
          },
          {
            question: "What actually happens in the program?",
            answer:
              "Participants meet in a small, facilitated group seven times over several months. Sessions include things like a shared meal where everyone brings food that represents where they come from, a group hike or trip around the country, learning and open conversations, and simple hangouts  -  like spending time together at the beach.",
          },
          {
            question: "Is this a political program?",
            answer:
              "No. Sabres is not affiliated with any political party or religious movement. The program creates space for different perspectives and personal experiences, without promoting a specific agenda.",
          },
          {
            question: "Who runs Sabres?",
            answer:
              "Sabres was founded and is run day-to-day by a dedicated team that leads the program, works with participants, and shapes the overall experience. The initiative operates under the umbrella of Yahav  -  Mechanchim LeTzionut, an educational nonprofit organization focused on values-based learning, identity, and social cohesion in Israeli society. Yahav provides organizational support, guidance, and infrastructure, while the Sabres team focuses on building the program and the community around it.",
          },
          {
            question: "Do I need to commit to the full program?",
            answer:
              "Yes. Sabres is built as a group process that develops over time, so participants are expected to commit to all sessions and be an active part of the group.",
          },
        ],
        stillHaveQuestionsHeading: "Still have questions?",
        stillHaveQuestionsBody:
          "If you didn&apos;t find the answer you were looking for, feel free to reach out.",
        emailUs: "Email Us",
        instagram: "Instagram",
        imageAlt: "Sabres community",
      },
      contact: {
        heading: "Ready to Connect?",
        subheading:
          "Join the Sabres network. Managed by professionals from top industries, supported by talented leaders, and built for you.",
        applyCta: "Apply for 2026 Cohort",
        emailCardTitle: "Email Us",
        instagramCardTitle: "Follow Us",
      },
    },
  },
  he: {
    header: {
      navLinks: [
        { name: "עלינו", href: "#about" },
        { name: "בוגרים", href: "#alumni" },
        { name: "שאלות נפוצות", href: "#faq" },
        { name: "הסיפור שלנו", href: "#our-story" },
        { name: "צרו קשר", href: "#contact" },
      ],
      donateCta: "תמכו בעשייה שלנו",
      applyCta: "הגישו מועמדות",
      langToggle: {
        ariaLabel: "החלפת שפה לאנגלית",
        labelWhenEn: "עברית",
        labelWhenHe: "English",
      },
      menuToggleAriaLabel: "פתיחת תפריט",
      yahavAriaLabel: "מעבר לאתר יהב",
    },
    footer: {
      donateCta: "עזרו לסברס לצמוח!",
      donateDescription:
        "התרומה שלכם עוזרת לנו להמשיך לבנות קשרים משמעותיים ולהרחיב את הקהילה.",
      brandDescription:
        "בניית חברויות בין עולים לבין ישראלים ותיקים כדי לטפח חברה ישראלית מחוברת ורב־תרבותית.",
      programHeading: "התכנית",
      contactHeading: "צרו קשר",
      links: {
        about: "עלינו",
        timeline: "מבנה התכנית",
        themes: "נושאי התכנית",
        apply: "הגשת מועמדות",
      },
      copyright: "Sabres Community. כל הזכויות שמורות.",
    },
    home: {
      hero: {
        badge: "ההרשמה למחזור 2026 פתוחה",
        titleLine1: "יוצרים חיבורים,",
        titleHighlight: "בונים קהילה.",
        subtitle:
          "מחברים בין עולים חדשים לבין ישראלים ותיקים כדי לטפח הבנה הדדית וקשרים אנושיים שנשארים לאורך זמן.",
        applyNow: "הגישו מועמדות",
        learnMore: "למדו עוד",
      },
      about: {
        heading: "למה סברס?",
        subheadingPrefix:
          "סברס נוצרה כמענה לעלייה בבדידות החברתית, עם מטרה פשוטה: ",
        subheadingSuffix:
          " לחבר בין אנשים דרך שיחות אמיתיות וחוויות משותפות.",
        features: [
          {
            title: "האתגר",
            description:
              "עולים רבים מתקשים להשתלב, וכ־30% עוזבים את הארץ תוך חמש שנים. במקביל, לישראלים ותיקים לרוב חסרה אינטראקציה משמעותית עם עולים.",
          },
          {
            title: "המשימה שלנו",
            description:
              " לבנות חברויות בין עולים לבין ישראלים ותיקים, כך ששני הצדדים יחוו חיבור אמיתי ויחזקו את תחושת השייכות והאחריות ההדדית בחברה השיראלית.",
          },
          {
            title: "החזון שלנו",
            description:
              "חברה ישראלית מחוברת ורב־תרבותית שמקבלת עולים בחמלה ומחזקת תחושת שייכות משותפת.",
          },
        ],
      },
      program: {
        heading: "מבנה התכנית",
        subheading:
          "מסע מובנה של חמישה שלבים שנועד ליצור קשרים משמעותיים.",
        steps: [
          {
            title: "הגשת מועמדות",
            description: "המשתתפים ממלאים טופס ועוברים ראיון אישי.",
          },
          {
            title: "הרכבת קבוצה",
            description:
              "נבנות קבוצות מגוונות של עולים וישראלים ותיקים, בהובלת מנחים שהוכשרו לכך.",
          },
          {
            title: "מפגשי קבוצה",
            description:
              "שבעה מפגשים אחת לשלושה שבועות הכוללים שיחות, סדנאות, ארוחות וטיולים.",
          },
          {
            title: "מפגשים עצמאיים",
            description:
              "מפגשים לא פורמליים שמאורגנים על ידי המשתתפים כדי להעמיק את הקשרים גם מחוץ למפגשים הרשמיים.",
          },
          {
            title: "סיכום ובוגרים",
            description:
              "מפגש סיכום ושילוב בקהילת הבוגרים להמשך מעורבות לאורך זמן.",
          },
        ],
        cohortPeriodLabel: "משך המחזור",
        cohortPeriodValue: "חצי שנה",
        sessionsLabel: "מפגשים",
        sessionsValue: "7",
      },
      alumni: {
        heading: "חוויות בוגרים",
        subheading: "שמעו ממי שכבר היה חלק מהמסע של סברס.",
        topImageAlt: "בוגרי סברס",
        testimonials: [
          {
            name: "קויו",
            quote:
              "הצטרפתי לסברס חודשיים אחרי שעליתי לישראל. למרות שהתרגשתי להתחיל חיים חדשים במדינה חדשה, רחוק מהסביבה ומהחברים שגדלתי איתם, זו גם הייתה תקופה שבה מצאתי את עצמי הרבה חושבת מהי חברות אמיתית. כל מפגש של סברס היווה עבורי מרחב שבו יכולתי להתחבר לאחרים מהלב וגם להתחבר מחדש לעצמי. בסברס פוגשים אנשים שמוכנים באמת לפגוש ולקבל אותך כמו שאתה.",
          },
          {
            name: "נעמה",
            quote:
              "החוויה שלי בסברס הייתה משמעותית באמת. מה שהתחיל כתכנית מובנית הפך מהר מאוד למשהו הרבה יותר עמוק. עם כל מפגש השיחות נעשו פתוחות יותר, הקשרים נעשו אמיתיים יותר, ותחושת הקהילה התחזקה. בסוף סברס כבר לא היינו רק משתתפים - הפכנו לחברים אמיתיים. לראות את החזון של סברס קורם עור וגידים זה משהו שאני אסירת תודה שהייתי חלק ממנו. מי היה מאמין שחבורה של זרים תהפוך לחברים? :)",
          },
          {
            name: "בן",
            quote:
              "סברס ענתה על כל הציפיות שלי ואף מעבר לכך. כל מי שהיה מעורב היה מדהים, ואני יודע שיצאתי עם חברים לחיים.",
          },
        ],
        cta: "אני רוצה להצטרף!",
      },
      ourStory: {
        heading: "הסיפור שלנו",
        storyHtml:
          "הקמנו את סברס במסגרת הלימודים שלנו בתכנית רבין למנהיגות באוניברסיטת רייכמן.<br /><br />לפני התכנית לא הכרנו בכלל - כל אחת ואחד הגיעו מרקע אקדמי אחר לגמרי, חלקנו מבית הספר הישראלי וחלקנו מבית הספר הבינלאומי.<br /><br />חלקנו היינו עולים, אחרים ישראלים ילידי הארץ, ומחוץ למסגרת הזו פשוט לא הייתה באמת דרך בה היינו יכולים להיפגש או להתחבר.<br /><br />התכנית חיברה בינינו, ומהר מאוד הבנו שבלעדיה כנראה שהדרכים שלנו לא היו מצטלבות.<br /><br />החוויה הזו היא מה שהעלתה את הרעיון לסברס -   ליצור פלטפורמה שבה אנשים יכולים להיפגש, להתחבר ולהרחיב את המעגל החברתי שלהם.",
        team: [
          {
            name: "רותם פרדי טוריסקי",
            title: "מייסד שותף ומנכ\"ל",
            image: "/staff/rotem.jpeg",
          },
          {
            name: "שיר לבער",
            title: "מייסדת שותפה וסמנכ\"לית",
            image: "/staff/shir.jpeg",
            imageObjectPositionClassName: "object-[center_20%]",
          },
          {
            name: "נעמי רובין",
            title: "מייסדת שותפה ומנהלת תפעול",
            image: "/staff/neomi.jpg",
          },
          {
            name: "נעמה נובק זהר",
            title: "מייסדת שותפה ומנהלת תכנים",
            image: "/staff/nama.jpg",
          },
          {
            name: "קמי פלבל",
            title: "מייסדת שותפה ומנהלת בוגרים",
            image: "/staff/kami.jpg",
          },
        ],
      },
      audience: {
        heading: "למי זה מתאים?",
        description:
          "אנחנו מחפשים עולים וישראלים ילידי הארץ שרוצים להיות חלק ממשהו גדול יותר.",
        registrationFeeHeading: "דמי הרשמה",
        registrationFeeAmount: "₪250",
        registrationFeeNote: "דמי רצינות עבור התכנית המלאה",
        requirementsHeading: "דרישות",
        requirements: [
          "גילאים 23 - 33",
          "אנגלית ברמה בסיסית",
          "מחויבות להשתתפות בכל המפגשים",
          "עניין בהתפתחות אישית ובקהילה",
        ],
      },
      faq: {
        heading: "שאלות נפוצות",
        subheading: "כל מה שצריך לדעת על סברס.",
        faqs: [
          {
            question: "למי סברס מיועדת?",
            answer:
              "סברס מיועדת לצעירים (גילאים 23 - 33)  -  עולים וישראלים  -  שרוצים להכיר אנשים מרקעים שונים ולבנות קשרים אמיתיים לאורך זמן.",
          },
          {
            question: "כמה עולה להשתתף בתכנית?",
            answer:
              "עלות התכנית המלאה היא 250 ש\"ח בסך הכול, והיא כוללת את כל המפגשים. התשלום עוזר לשמור על מחויבות, אבל התכנית מסובסדת כדי שלא תהיה מניעה כלכלית להשתתפות.",
          },
          {
            question: "מה קורה בפועל בתכנית?",
            answer:
              "המשתתפים נפגשים בקבוצה קטנה ומונחית שבע פעמים לאורך כמה חודשים. המפגשים כוללים למשל ארוחה משותפת שבה כל אחד מביא אוכל שמייצג את המקום שממנו הוא מגיע, טיול , למידה ושיחות פתוחות, וגם זמן פשוט ביחד  -   בחוף הים.",
          },
          {
            question: "זו תכנית פוליטית?",
            answer:
              "לא. סברס לא מזוהה עם אף מפלגה פוליטית או זרם דתי. התכנית יוצרת מרחב לנקודות מבט וחוויות שונות, בלי לקדם אג׳נדה מסוימת.",
          },
          {
            question: "מי מפעיל את סברס?",
            answer:
              "סברס הוקמה ומופעלת ביום־יום על ידי צוות מסור שמוביל את התכנית, עובד עם המשתתפים ומעצב את החוויה הכוללת. היוזמה פועלת תחת המטרייה של יהב  -  מחנכים לציונות, עמותה חינוכית ללא מטרות רווח המתמקדת בלמידה ערכית, זהות ולכידות חברתית בחברה הישראלית. יהב מספקת תמיכה ארגונית, ליווי ותשתיות, בעוד צוות סברס מתמקד בבניית התכנית והקהילה סביבה.",
          },
          {
            question: "צריך להתחייב לכל התכנית?",
            answer:
              "כן. סברס היא תהליך קבוצתי שנבנה לאורך זמן, ולכן מצופה מהמשתתפים להתחייב לכל המפגשים ולהיות חלק פעיל בקבוצה.",
          },
        ],
        stillHaveQuestionsHeading: "עדיין יש שאלות?",
        stillHaveQuestionsBody:
          "אם לא מצאתם תשובה למה שחיפשתם, אתם מוזמנים ליצור קשר.",
        emailUs: "שלחו לנו מייל",
        instagram: "אינסטגרם",
        imageAlt: "קהילת סברס",
      },
      contact: {
        heading: "מוכנים להתחבר?",
        subheading:
          "",
        applyCta: "הגש/י מועמדות למחזור 2026",
        emailCardTitle: "שלחו מייל",
        instagramCardTitle: "עקבו אחרינו",
      },
    },
  },
};

