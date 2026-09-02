import { Hero } from "@/components/hero";
import {
  AutopilotSection,
  FlagshipCase,
  HowItWorks,
  MessyMiddle,
  PlayerEntrySection,
  ResultLoopSection,
  TimeAttackSection,
  TrustSection,
} from "@/components/landing";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <MessyMiddle />
      <FlagshipCase />
      <TrustSection />
      <TimeAttackSection />
      <ResultLoopSection />
      <AutopilotSection />
      <PlayerEntrySection />
    </>
  );
}
