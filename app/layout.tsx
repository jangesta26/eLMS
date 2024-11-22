'use client'
import { ThemeProvider } from "@/context/ContextThemeProvider";
import "./globals.css";
import Head from "./head";
import { useEffect, useState } from "react";
import Loader from "@/components/Common/Loader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
        <Head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
          >
            {
              loading ? <Loader /> :children
            }
          </ThemeProvider>
        </body>
      </html>
  );
}
