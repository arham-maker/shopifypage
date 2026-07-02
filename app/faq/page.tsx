import type { Metadata } from "next";
import { FaqHeroBanner, FaqPageSection } from "@/components/original";

export const metadata: Metadata = {
  title: "FAQs | Shopify Page",
  description:
    "Find answers to frequently asked questions about Shopify Page services, Shopify setup, migrations, marketing, product sourcing, PPC, and custom store design.",
};

export default function FaqPage() {
  return (
    <>
      <FaqHeroBanner />
      <FaqPageSection />
    </>
  );
}
