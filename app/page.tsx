import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Program } from "@/components/home/program";
import { Audience } from "@/components/home/audience";
import { Alumni } from "@/components/home/alumni";
import { FAQ } from "@/components/home/faq";
import { OurStory } from "@/components/home/our-story";
import { Contact } from "@/components/home/contact";

export default function Home() {
  return (
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
  );
}
