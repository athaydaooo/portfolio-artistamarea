import type { Metadata } from "next";
import {
  Noto_Serif as NotoSerif,
  Noto_Serif_Gujarati as NotoSerifGujarati,
} from "next/font/google";
import "./style.css";

import TopMenu from "@/components/organisms/top-menu/TopMenu.tsx";
import { ThemeProvider } from "@/components/providers/ThemeProvider.tsx";
import FooterSection from "@/components/sections/footer/index.tsx";
import React from "react";

const notoSerif = NotoSerif({
  weight: "300",
  preload: false,
});
const notoSerifGujarati = NotoSerifGujarati({
  weight: "300",
  preload: false,
});

export const metadata: Metadata = {
  title: "Artista Marea",
  description: "Portfólio da Artista Marea",
  icons: {
    icon: "/favicon.ico",
  },
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
                { name: "modelo", slug: "/model" },
                {
                  name: "filmografia",
                  items: [
                    { name: "skasu", slug: "/skasu-cristo-e-oxala" },
                    { name: "dj sets", slug: "/videos" },
                    { name: "o Último frame", slug: "/o-ultimo-frame" },
                  ],
                },
                { name: "sobre mim", slug: "/about" },
              ]}
            />
            {children}
            <FooterSection />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
