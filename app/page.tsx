import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Program } from "@/components/home/program";
import { Themes } from "@/components/home/themes";
import { Audience } from "@/components/home/audience";
import { Contact } from "@/components/home/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Themes />
      <Program />
      <Audience />
      <Contact />
    </>
  );
}
