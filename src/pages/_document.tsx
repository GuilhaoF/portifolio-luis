import { ThemeProvider } from "@/components/theme-provider";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-Br">
      <Head />
      <body>
        <ThemeProvider>
          <Main />
          <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  );
}
