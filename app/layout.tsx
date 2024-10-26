import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Header } from "../components/header";
import "./globals.css";


const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Portfolio Luis",
  description: "Este é o meu portfólio onde você pode encontrar meus projetos e informações sobre mim.",
  authors: [{ name: "Luis Felipe G Silva" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${jetbrainsMono.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
