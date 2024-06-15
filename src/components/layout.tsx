// components/Layout.tsx
import { ReactNode } from "react";
import { MenuBarNav } from "./menubar-nav";
import { ThemeProvider } from "./theme-provider";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    
      <div>
        <MenuBarNav />
        <main>{children}</main>
      </div>
  );
}
