import type { Metadata, Viewport } from "next";
import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/footer";
import { DemoProvider } from "@/lib/demo";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "KAPAPI · 일이 먼저 올라오는 온라인 업무 플랫폼",
  description: "해야 할 일을 QUEST로 올리고, 작업자들이 가격과 완료시간을 제안하면 카파피가 조건과 이력을 바탕으로 맞는 제안을 추천합니다.",
};

export const viewport: Viewport = { themeColor: "#fbfbf9", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>
        <DemoProvider>
          <a className="skip" href="#main">본문으로 건너뛰기</a>
          <Nav />
          <main id="main">{children}</main>
          <SiteFooter />
        </DemoProvider>
      </body>
    </html>
  );
}
