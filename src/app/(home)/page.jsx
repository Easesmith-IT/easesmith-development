import { Companies } from "@/components/sections/companies";
import { CTAButton } from "@/components/sections/CTA-button";
import { FistFightALion } from "@/components/sections/fist-fight-lion/fist-fight-lion";
import { FreeBonuses } from "@/components/sections/free-bonuses/free-bonuses";
import { Guarantees } from "@/components/sections/guarantee/guarantees";
import { Hero } from "@/components/sections/hero";
import { FiveReasons } from "@/components/sections/reasons/five-resaons";
import { Stats } from "@/components/sections/stats";
import { WebsitesAndResults } from "@/components/sections/websites-and-results/websites-and.results";

export default function Home() {
  return (
    <section>
      <Hero />
      <Companies />
      <Stats />
      <FiveReasons />
      <WebsitesAndResults />
      <Guarantees />
      <FreeBonuses />
      <FistFightALion />
      <CTAButton />
    </section>
  );
}
