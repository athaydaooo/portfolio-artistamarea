import { ThemeProvider } from "@/components/providers/ThemeProvider.tsx";
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ThemeProvider forcedDark>{children}</ThemeProvider>;
};

export default Layout;
