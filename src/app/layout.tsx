import type { Metadata, Viewport } from "next";
import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/footer";
import { DemoProvider } from "@/lib/demo";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "KAPAPI · 오늘은 어떤 일을 끝낼까요?",
  description: "파일을 올리고 한 줄로 설명하면, 카파피가 작업자를 배정하고 결과를 전달합니다.",
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
