import type { Metadata } from "next";
import "./style.css";
import {
  Noto_Serif_Gujarati as NotoSerifGujarati,
  Noto_Serif as NotoSerif,
} from "next/font/google";

import React from "react";
import TopMenu from "@/components/organisms/top-menu/TopMenu.tsx";
import Footer from "@/components/sections/footer/Footer.tsx";
import { ThemeProvider } from "@/components/providers/ThemeProvider.tsx";

const notoSerif = NotoSerif({
  weight: "300",
});
const notoSerifGujarati = NotoSerifGujarati({
  weight: "300",
});

export const metadata: Metadata = {
  title: "Unipage",
  description: "Universal page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${notoSerif.className} ${notoSerifGujarati.className} bg-white text-black dark:bg-black dark:text-white`}
      >
        <ThemeProvider>
          <main>
            <TopMenu
              sections={[
                { name: "galeria", slug: "/" },
                { name: "videos", slug: "/videos" },
                { name: "o último frame", slug: "/o-ultimo-frame" },
                { name: "sobre mim", slug: "/sobre-mim" },
              ]}
            />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
