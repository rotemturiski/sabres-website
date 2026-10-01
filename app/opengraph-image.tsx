import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ORGANIZATION_NAME } from "@/lib/seo";

// Generates the link-preview card shown by WhatsApp, Instagram, Facebook and
// friends. og:title and og:description are already localized per language, so
// the card itself stays language-neutral - the logo carries the brand.
export const alt = ORGANIZATION_NAME;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/sabres.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          // Same two soft brand washes the site itself uses.
          backgroundImage:
            "radial-gradient(circle at 88% 8%, rgba(253, 171, 61, 0.42) 0%, rgba(253, 171, 61, 0.16) 38%, rgba(255,255,255,0) 70%)," +
            "radial-gradient(circle at 10% 95%, rgba(102, 148, 87, 0.38) 0%, rgba(102, 148, 87, 0.14) 34%, rgba(255,255,255,0) 68%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={720} height={193} alt={ORGANIZATION_NAME} />
        <div
          style={{
            marginTop: 44,
            fontSize: 40,
            color: "#293041",
            letterSpacing: "-0.5px",
          }}
        >
          Building Bridges, Creating Belonging
        </div>
      </div>
    ),
    size
  );
}
