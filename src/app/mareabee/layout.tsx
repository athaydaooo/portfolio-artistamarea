import { Metadata } from "next";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "ARTISTA MAREA",
  description: "Portifolio de arte",
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
