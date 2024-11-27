import { Metadata } from "next";
import React from "react";
import "./style.css";

import {
  Noto_Serif_Gujarati as NotoSerifGujarati,
  Noto_Serif as NotoSerif,
} from "next/font/google";
import TopMenu from "@/components/organisms/top-menu/TopMenu.tsx";
import Footer from "@/components/sections/footer/Footer.tsx";

const notoSerif = NotoSerif({
  weight: "300",
});
const notoSerifGujarati = NotoSerifGujarati({
  weight: "300",
});

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "ARTISTA MAREA",
  description: "Portifolio de arte",
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={`${notoSerif.className} ${notoSerifGujarati.className}`}>
      <TopMenu
        sections={[
          { name: "galeria", slug: "/" },
          { name: "videos", slug: "/videos" },
          { name: "sobre mim", slug: "/sobre-mim" },
        ]}
      />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
