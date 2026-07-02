import type { Metadata } from "next";
import { MarqueeTopbarGate } from "@/components/MarqueeTopbarGate";
import { SiteChrome } from "@/components/SiteChrome";
import { ZendeskWidget } from "@/components/ZendeskWidget";
import "./globals.css";
import "./marquee-topbar.css";
import "./original-layout.css";
import "./original-style.css";

export const metadata: Metadata = {
  title: "Shopify Page | Shopify Design and Growth Agency",
  description:
    "A reference Shopify agency homepage built with Next.js App Router, reusable React sections, responsive layouts, and original placeholder assets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" href="/assets/images/favicon.png" type="image/png" />
      </head>
      <body className="min-h-full flex flex-col">
        <MarqueeTopbarGate />
        <SiteChrome>{children}</SiteChrome>
        <ZendeskWidget />
      </body>
    </html>
  );
}
