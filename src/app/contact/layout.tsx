import React from "react";
import { ThemeProvider } from "../../components/providers/ThemeProvider.tsx";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Layout;
