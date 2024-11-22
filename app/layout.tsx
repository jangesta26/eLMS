import { ThemeProvider } from "@/context/ContextThemeProvider";
import "./globals.css";
import Head from "./head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <Head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
  );
}
