import { Hero } from "@/components/hero";
import { AccountSection, CaseSection, EvolutionSection, ResultSection, RoutingProof, UrgentSection } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <RoutingProof />
      <CaseSection />
      <UrgentSection />
      <ResultSection />
      <EvolutionSection />
      <AccountSection />
    </>
  );
}
