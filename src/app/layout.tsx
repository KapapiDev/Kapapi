import type { Metadata, Viewport } from "next";

import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/footer";
import { DemoProvider } from "@/lib/demo-store";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "KAPAPI — 일 던져놔. 결과만 받아.",
  description:
    "할 일을 등록하면 전문가들이 가격과 완료시간을 제안하고, 카파피가 가장 적합한 작업자를 자동으로 배정해 결과를 가져옵니다.",
};

export const viewport: Viewport = {
  themeColor: "#f7f7f4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <DemoProvider>
          <a className="k-skip" href="#main">
            본문으로 건너뛰기
          </a>
          <Nav />
          <main id="main">{children}</main>
          <SiteFooter />
        </DemoProvider>
      </body>
    </html>
  );
}
