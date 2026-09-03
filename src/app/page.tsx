"use client";

import { Hero } from "@/components/hero";
import { WorkerHero } from "@/components/worker-hero";
import { AccountSection, ResultFlowSection, UrgentSection } from "@/components/sections";
import { useMode } from "@/lib/mode";

/**
 * One landing, two surfaces of the same account.
 *
 * D-035: the 발주자 side is 업무 입력 → KAPAPI → 결과, so it carries the upload and
 * one piece of evidence that the result actually comes back. The 작업자 side is the
 * market, because proposing 가격 + 완료시간 is what that person is here to do.
 */
export default function Home() {
  const { mode } = useMode();

  if (mode === "worker") {
    return (
      <>
        <WorkerHero />
        <UrgentSection />
        <AccountSection />
      </>
    );
  }

  return (
    <>
      <Hero />
      <ResultFlowSection />
      <AccountSection />
    </>
  );
}
