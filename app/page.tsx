import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Guide } from "@/components/sections/guide";
import { Plan } from "@/components/sections/plan";
import { Stakes } from "@/components/sections/stakes";
import { ManifestoBlock } from "@/components/sections/manifesto-block";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Guide />
      <Plan />
      <Stakes />
      <ManifestoBlock />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
