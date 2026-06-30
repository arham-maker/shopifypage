import type { Metadata } from "next";
import { GlobalPopups, SiteFooter, SiteHeader, SiteScripts } from "@/components/original";
import "./original-layout.css";
import "./original-style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify EcomSolution | Shopify Design and Growth Agency",
  description:
    "A reference Shopify agency homepage built with Next.js App Router, reusable React sections, responsive layouts, and original placeholder assets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <link rel="icon" href="/assets/images/favicon.png" type="image/png" />
      </head>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
        <GlobalPopups />
        <SiteScripts />
      </body>
    </html>
  );
}
