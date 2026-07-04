import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteShell } from "@/components/layout/SiteShell";

export const metadata: Metadata = {
  title: "Belema Girma — Full Stack Developer",
  description:
    "Belema Girma is a Full Stack Developer specializing in React, Next.js, Node.js, NestJS, and PostgreSQL, building clean, scalable, and responsive digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Urbanist:wght@100..900&family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${GeistSans.className} min-h-screen flex flex-col antialiased transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
