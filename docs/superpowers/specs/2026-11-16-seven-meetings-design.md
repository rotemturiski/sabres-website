# The Seven Meetings — design

**Date:** 2026-11-16
**Status:** approved

## Problem

The site describes the programme only in the abstract. `components/home/program.tsx`
shows five process stages — application, group formation, group sessions,
independent meetups, wrap-up — and a stat pill reading "4 months / 7 meetings".

Nothing says what those seven meetings actually are. A prospective participant
reading the page learns how the process works but not what they would spend an
evening doing, and that is the part that makes the programme appealing. It is
also the most concrete, searchable content the site could carry: the page is
~730 words today, with no text answering a question anyone types into Google.

## Scope

Add the seven meetings to the existing programme section. One new block inside
`components/home/program.tsx`, its copy in `lib/i18n.ts`. No new page, no new
route, no change to the five stages above it.

## Decisions

Settled with the user before design:

| Question | Decision |
| --- | --- |
| Placement | Inside the existing programme section, below the stat pill. Not a separate section. |
| Visual language | The site's own card language, with a playful twist — not a literal scrapbook. |
| Card content | Title only, as in the reference image. No description line. |

**Why not the literal scrapbook.** The reference image is paper texture, tape and
a handwritten heading. Two problems. It reads as pasted-on against the rest of
the site, which is clean and gradient-soft. More decisively, `app/layout.tsx`
loads Poppins with `subsets: ["latin"]`, so Hebrew already falls back to a system
font — a handwritten display font would style the English and leave the Hebrew,
the primary audience, untouched. The charm therefore has to come from layout,
not typography, where it costs nothing in either language.

## Design

### Placement

`components/home/program.tsx`, appended after the existing stat pill. The pill
claims "7 meetings"; the cards then show them.

A small label above the row — "שבעת המפגשים" / "The Seven Meetings" — orients the
reader. It is a label inside the section, not a section heading; the section keeps
its single `<h2>`.

### The card

- White, `rounded-xl`, `border-zinc-200`, soft shadow — the same card language as
  the rest of the site.
- A short orange tape strip pinned across the top edge, slightly rotated.
- The meeting number, large, in the brand orange (`--primary`, `#ff964f`).
- The meeting title below it in the brand navy (`--foreground`, `#293041`).
- Each card carries a small deterministic rotation, alternating roughly ±1–2° by
  index, so the row reads as pinned-up paper rather than a table. Deterministic,
  not random, so server and client markup match.
- On hover the card straightens to 0° and lifts slightly.

### Layout

`grid-cols-2 sm:grid-cols-4 lg:grid-cols-7` — the same stack-to-row pattern the
five stages above already use. Seven items over two columns leaves one card alone
on the final mobile row; that is accepted rather than worked around.

### Motion

`whileInView` with a per-index stagger, matching the five-stage row, so the two
blocks animate as one section.

### Content

New `meetings` key under `program` in `lib/i18n.ts`, in both locales, plus the
matching addition to the type block at the top of the file:

```ts
meetings: {
  label: string;
  items: string[];
};
```

| # | English | Hebrew |
| --- | --- | --- |
| 1 | Opening night | ערב היכרות |
| 2 | Where I come from: a picnic | מאיפה אני בא — פיקניק |
| 3 | A trip | טיול |
| 4 | Talk on Zionism | שיחה על ציונות |
| 5 | The Sabres Maccabiah | מכביית סברס |
| 6 | Group-led initiative | יוזמה של הקבוצה |
| 7 | Farewell dinner | ארוחת פרידה |

The reference image reads "A trip to Jerusalem". With a Jerusalem cohort now
opening, naming Jerusalem as the destination reads oddly for the Jerusalem group,
so the destination is dropped in both locales.

### RTL

The grid inherits document direction, so the Hebrew row reads right-to-left on its
own — the numbers are digits and need no special handling. This works because
`middleware.ts` sets `dir` on the server; nothing further is needed here.

## Out of scope

- A description line per meeting. Decided against; revisit if the titles prove
  too cryptic.
- Per-cohort schedules or dates on the cards. The meetings are the same shape
  every cohort; dates change every cohort and would need maintaining.
- Anything touching the five stages, the stat pill, or the rest of the page.

## Verification

- `npx tsc --noEmit` clean.
- Both locales render seven cards: `lang="he"` right-to-left, `lang="en"`
  left-to-right.
- No horizontal overflow at a 375px viewport.
- Card rotations identical between server HTML and hydrated DOM — no hydration
  warning in the console.
