import { Hero } from "@/components/hero";
import { AccountSection, ResultFlowSection } from "@/components/sections";

/**
 * The 발주자 surface. D-035: 업무 입력 → KAPAPI → 결과, so it carries the upload and
 * one piece of evidence that the result actually comes back.
 *
 * The 작업자 surface is /board — the work list itself, not a page in front of it.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <ResultFlowSection />
      <AccountSection />
    </>
  );
}
