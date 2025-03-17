import type React from "react";
import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Providers from "@/components/RQProvider";

export const metadata: Metadata = {
  title: "LoL 도감",
  description: "리그오브레전드의 간단한 정보들을 확인하세요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-kr">
      <Providers>
        <body>
          <div className="min-h-screen bg-gradient-to-b from-background to-background/90">
            <Header />
            <main className="container mx-auto px-4 py-6">{children}</main>
          </div>
        </body>
      </Providers>
    </html>
  );
}
