# Seven Meetings Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Show the seven group meetings as a row of pinned-up cards inside the existing programme section.

**Architecture:** Copy lives in `lib/i18n.ts` under `home.program.meetings`, as every other string on this site does. A new client component, `components/home/seven-meetings.tsx`, derives its own language from the query string — the pattern every other component here follows — and `components/home/program.tsx` renders it after the stat pill. No new route, no new page section.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind v4, framer-motion.

**Spec:** `docs/superpowers/specs/2026-11-16-seven-meetings-design.md`

## Global Constraints

- **No test runner exists in this project.** `package.json` scripts are `dev`, `build`, `start`, `lint` only; there is no vitest/jest/playwright config and no test files. Do NOT add one for this feature. The red/green gate in every task below is `npx tsc --noEmit` plus a rendered-output assertion against the dev server. This is deliberate and matches how the rest of this codebase is verified.
- **Run every command from** `C:\Users\rotem\OneDrive\Desktop\sabres-website`. The Bash tool resets its working directory between calls, so `cd` in each command.
- **`lib/i18n.ts` has CRLF line endings.** Multi-line exact-match replacements that assume `\n` will silently fail to match. Edit it with the Edit tool or with line-based `sed`, not with multi-line string matching.
- **Every string is added to both locales.** `en` and `he` are separate branches of the same `content` object; the type block at the top of the file enforces this, and `tsc` is what catches a miss.
- Brand colours come from `app/globals.css` tokens — `--primary` `#ff964f`, `--foreground` `#293041`. Use the Tailwind tokens (`text-primary`, `text-foreground`), never literal hex.
- Meeting 3 is **"A trip" / "טיול"** with no destination. The reference image said "A trip to Jerusalem"; a Jerusalem cohort is now opening and naming Jerusalem reads oddly for that group.
- Never start a dev server with the Bash tool. Use `preview_start` with the `sabres` configuration.

---

### Task 1: Meeting copy in both locales

**Files:**
- Modify: `lib/i18n.ts` — type block at `program` (around line 58), `en` content (around line 234), `he` content (around line 481)

**Interfaces:**
- Consumes: nothing.
- Produces: `content[lang].home.program.meetings`, shaped `{ label: string; items: string[] }`, with exactly 7 entries in `items`. Task 2 reads this and nothing else.

- [ ] **Step 1: Add the type, so the compiler demands the content**

In `lib/i18n.ts`, inside the `program` block of the big `Record<Language, {...}>` type, after `sessionsValue: string;`, add:

```ts
        meetings: {
          label: string;
          items: string[];
        };
```

- [ ] **Step 2: Run the type checker to verify it fails**

```bash
cd "C:/Users/rotem/OneDrive/Desktop/sabres-website" && npx tsc --noEmit
```

Expected: FAIL, twice — one error per locale, each reading roughly `Property 'meetings' is missing in type ... but required in type '{ label: string; items: string[]; }'`. Two errors is the point: it proves the type is reaching both branches.

- [ ] **Step 3: Add the English content**

In the `en` branch, in `home.program`, immediately after `sessionsValue: "7",`:

```ts
        meetings: {
          label: "The Seven Meetings",
          items: [
            "Opening night",
            "Where I come from: a picnic",
            "A trip",
            "Talk on Zionism",
            "The Sabres Maccabiah",
            "Group-led initiative",
            "Farewell dinner",
          ],
        },
```

- [ ] **Step 4: Run the type checker to verify one error remains**

```bash
cd "C:/Users/rotem/OneDrive/Desktop/sabres-website" && npx tsc --noEmit
```

Expected: FAIL, now once — the `he` branch only. If it passes here, the English block landed in the wrong branch; find it and move it.

- [ ] **Step 5: Add the Hebrew content**

In the `he` branch, in `home.program`, immediately after `sessionsValue: "7",`:

```ts
        meetings: {
          label: "שבעת המפגשים",
          items: [
            "ערב היכרות",
            "מאיפה אני בא — פיקניק",
            "טיול",
            "שיחה על ציונות",
            "מכביית סברס",
            "יוזמה של הקבוצה",
            "ארוחת פרידה",
          ],
        },
```

- [ ] **Step 6: Run the type checker to verify it passes**

```bash
cd "C:/Users/rotem/OneDrive/Desktop/sabres-website" && npx tsc --noEmit; echo "exit: $?"
```

Expected: no output, `exit: 0`.

- [ ] **Step 7: Verify both locales really have seven items**

```bash
cd "C:/Users/rotem/OneDrive/Desktop/sabres-website" && grep -c '"\(Opening night\|Where I come from: a picnic\|A trip\|Talk on Zionism\|The Sabres Maccabiah\|Group-led initiative\|Farewell dinner\)"' lib/i18n.ts && grep -c '"\(ערב היכרות\|מאיפה אני בא — פיקניק\|טיול\|שיחה על ציונות\|מכביית סברס\|יוזמה של הקבוצה\|ארוחת פרידה\)"' lib/i18n.ts
```

Expected: `7` then `7`.

- [ ] **Step 8: Commit**

```bash
cd "C:/Users/rotem/OneDrive/Desktop/sabres-website" && git add lib/i18n.ts && git commit -m "content: name the seven meetings in both locales

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

---

### Task 2: The seven-meetings block

**Files:**
- Create: `components/home/seven-meetings.tsx`
- Modify: `components/home/program.tsx` — import at the top, render after the stat pill (the `<div className="mt-16 text-center">` block that closes around line 94)

**Interfaces:**
- Consumes: `content[lang].home.program.meetings` from Task 1.
- Produces: `export function SevenMeetings()`, no props. `program.tsx` is its only caller.

**Why a separate file:** every component under `components/home/` derives its own language with `getLangFromSearchParams(useSearchParams())`. Following that keeps `program.tsx` from growing past its current ~100 lines and lets this block be read on its own.

**Why framer-motion owns the rotation:** the cards are tilted, animate in, and straighten on hover — three transforms on one element. Tailwind classes like `hover:rotate-0` lose to the inline transform framer-motion writes, so every transform is a motion value here and the className carries no transform utilities.

- [ ] **Step 1: Create the component**

Create `components/home/seven-meetings.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { content, getLangFromSearchParams } from "@/lib/i18n";

// Fixed, not random: the server and the client must render the same transform
// or React reports a hydration mismatch.
const TILTS = [-2, 1.5, -1, 2, -1.5, 1, -2];

export function SevenMeetings() {
  const lang = getLangFromSearchParams(useSearchParams());
  const t = content[lang].home.program.meetings;

  return (
    <div className="mt-20">
      <p className="text-center text-sm font-medium uppercase tracking-wide text-muted-foreground">
        {t.label}
      </p>

      <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-7">
        {t.items.map((title, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 16, rotate: TILTS[index] }}
            whileInView={{ opacity: 1, y: 0, rotate: TILTS[index] }}
            whileHover={{ rotate: 0, y: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            className="relative flex flex-col items-center rounded-xl border border-zinc-200 bg-white px-4 pb-5 pt-8 text-center shadow-sm"
          >
            {/* the piece of tape */}
            <span
              aria-hidden
              className="absolute -top-2 left-1/2 h-4 w-12 -translate-x-1/2 -rotate-3 rounded-sm bg-primary/30"
            />
            <span className="text-2xl font-semibold text-primary">{index + 1}</span>
            <h3 className="mt-2 text-sm font-medium leading-snug text-foreground">
              {title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify it is not yet rendered**

```bash
cd "C:/Users/rotem/OneDrive/Desktop/sabres-website" && grep -c 'SevenMeetings' components/home/program.tsx
```

Expected: `0` — the component exists but nothing calls it. This is the red state for Step 5's check.

- [ ] **Step 3: Import it in `program.tsx`**

In `components/home/program.tsx`, after the line `import { content, getLangFromSearchParams } from "@/lib/i18n";`, add:

```tsx
import { SevenMeetings } from "@/components/home/seven-meetings";
```

- [ ] **Step 4: Render it after the stat pill**

In `components/home/program.tsx`, find the stat pill block — it begins `<div className="mt-16 text-center">` and ends with `</div>` just before `</Container>`. Insert `<SevenMeetings />` between that closing `</div>` and `</Container>`, so the tail of the component reads:

```tsx
             </div>
        </div>

        <SevenMeetings />
      </Container>
    </Section>
  );
}
```

- [ ] **Step 5: Type-check and lint**

```bash
cd "C:/Users/rotem/OneDrive/Desktop/sabres-website" && npx tsc --noEmit; echo "tsc: $?"; npm run lint
```

Expected: `tsc: 0`, and lint reporting no errors for `components/home/seven-meetings.tsx`.

- [ ] **Step 6: Start the preview**

Use `preview_start` with `name: "sabres"`. Do not use Bash to run the dev server.

- [ ] **Step 7: Verify all seven render, in both locales**

```bash
cd "C:/Users/rotem/OneDrive/Desktop/sabres-website" && for u in "http://localhost:3000/" "http://localhost:3000/?lng=he"; do echo "--- $u ---"; curl -s --max-time 40 "$u" | sed -e 's/<script[^>]*>.*<\/script>//g' -e 's/<[^>]*>/ /g' | tr -s ' \n' ' ' | grep -o 'Opening night\|Farewell dinner\|The Seven Meetings\|ערב היכרות\|ארוחת פרידה\|שבעת המפגשים' | sort -u; done
```

Expected: the English URL shows `Opening night`, `Farewell dinner`, `The Seven Meetings`; the Hebrew URL shows `ערב היכרות`, `ארוחת פרידה`, `שבעת המפגשים`.

- [ ] **Step 8: Verify card count, direction, and no overflow at mobile width**

Call `resize_window` with `preset: "mobile"`, navigate to `http://localhost:3000/?lng=he`, then run this with `javascript_tool`:

```js
const cards = [...document.querySelectorAll('h3')].filter(h => h.closest('.grid'));
({
  dir: document.documentElement.dir,
  vw: innerWidth,
  docScrollW: document.documentElement.scrollWidth,
  gridCols: getComputedStyle(document.querySelector('.grid-cols-2')).gridTemplateColumns,
})
```

Expected: `dir` is `"rtl"`, and `docScrollW` equals `vw` (375) — anything larger means the row overflows the viewport and the grid breakpoints need fixing. `gridTemplateColumns` should list two tracks at this width.

- [ ] **Step 9: Verify no hydration mismatch**

Call `read_console_messages` with `onlyErrors: true`.

Expected: no errors. A message containing "did not match" or "Hydration" means a tilt value differs between server and client — check that `TILTS` is a module-level constant and that nothing calls `Math.random()`.

- [ ] **Step 10: Screenshot for the record**

Scroll the block into view and take a screenshot at desktop width, then at mobile width. Confirm by eye: the tape sits on the top edge of each card, the cards are tilted at slightly different angles, and the numbers read 1 through 7 — right-to-left in Hebrew, left-to-right in English.

- [ ] **Step 11: Reset the viewport and stop the preview**

Call `resize_window` with `preset: "desktop"`, then `preview_stop` with the server id.

- [ ] **Step 12: Commit**

```bash
cd "C:/Users/rotem/OneDrive/Desktop/sabres-website" && git add components/home/seven-meetings.tsx components/home/program.tsx && git commit -m "feat(program): show the seven meetings as pinned-up cards

The programme section claimed '7 meetings' without ever saying what they
were. Seven cards now sit under the stat pill, each tilted a degree or two
so the row reads as paper rather than a table.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

---

### Task 3: Ship it

**Files:** none modified.

**Interfaces:** consumes Tasks 1 and 2.

- [ ] **Step 1: Confirm the working tree holds nothing unintended**

```bash
cd "C:/Users/rotem/OneDrive/Desktop/sabres-website" && git status --short
```

Expected: `M package-lock.json` and untracked `.claude/launch.json` and `.obsidian/` may appear — leave all three alone. Nothing else should be unstaged.

- [ ] **Step 2: Push**

```bash
cd "C:/Users/rotem/OneDrive/Desktop/sabres-website" && git push origin main 2>&1 | tail -3
```

Vercel deploys `main` automatically.

- [ ] **Step 3: Verify on production**

```bash
for i in $(seq 1 12); do
  out=$(curl -sL --max-time 25 "https://www.sabres.community/?lng=he")
  if echo "$out" | grep -q 'שבעת המפגשים'; then
    echo "=== LIVE (attempt $i) ==="
    echo "$out" | grep -o 'שבעת המפגשים\|ערב היכרות\|מכביית סברס\|ארוחת פרידה' | sort -u
    curl -sL --max-time 25 "https://www.sabres.community/" | grep -o 'The Seven Meetings\|Opening night\|Farewell dinner' | sort -u
    exit 0
  fi
  echo "attempt $i: not deployed yet"; sleep 25
done; echo "STILL OLD"
```

Expected: all four Hebrew strings and all three English strings.

---

## Self-review

**Spec coverage.** Placement below the stat pill — Task 2 Step 4. Card visual, tape, number, title — Task 2 Step 1. Deterministic tilt and hover straighten — Task 2 Step 1, checked in Step 9. `grid-cols-2 sm:grid-cols-4 lg:grid-cols-7` — Task 2 Step 1, checked in Step 8. `whileInView` stagger — Task 2 Step 1. Label above the row — Task 2 Step 1. Copy in both locales with the type block updated — Task 1. "A trip" without a destination — Task 1 Steps 3 and 5, and in Global Constraints. RTL inheritance — checked in Task 2 Step 8. Every spec verification item maps to a step.

**Type consistency.** `meetings` is `{ label: string; items: string[] }` in Task 1 Step 1, written with exactly those two keys in Steps 3 and 5, and read as `t.label` / `t.items` in Task 2 Step 1. The component is `SevenMeetings` in its definition, its import, and its call site.

**Known deviation from the skill's default.** There are no unit tests because the project has no test runner, and installing one for a presentational component is scope this feature did not ask for. Each task still has a red state and a green state: Task 1 uses `tsc` failing on a missing property, Task 2 uses a grep proving the component is unreferenced before it is wired in. If this project later grows a test setup, this component is a reasonable first candidate for a render test.
