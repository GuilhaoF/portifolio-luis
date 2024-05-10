// components/Layout.tsx
import { ReactNode } from 'react';
import { MenuBarNav } from './menubar-nav';


type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen">
      <MenuBarNav />
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}