import { Hero } from "@/components/hero";
import { AccountSection, CaseSection, ResultSection, RoutingProof, UrgentSection } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <RoutingProof />
      <CaseSection />
      <UrgentSection />
      <ResultSection />
      <AccountSection />
    </>
  );
}
