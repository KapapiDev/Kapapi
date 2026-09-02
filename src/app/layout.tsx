import type { Metadata, Viewport } from "next";
import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/footer";
import { DemoProvider } from "@/lib/demo";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "KAPAPI · 맡길 업무만 등록하세요",
  description: "의뢰를 등록하면 전문가 배정부터 결과 전달까지 카파피가 진행합니다.",
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
