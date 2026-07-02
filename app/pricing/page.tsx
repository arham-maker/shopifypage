import type { Metadata } from "next";
import {
  PricingHeroBanner,
  PricingPageFaqSection,
  PricingPagePlansSection,
} from "@/components/original";

export const metadata: Metadata = {
  title: "Pricing | Shopify Page",
  description:
    "Explore Shopify Page pricing plans for Shopify websites, social media marketing, and search engine marketing.",
};

export default function PricingPage() {
  return (
    <>
      <PricingHeroBanner />
      <PricingPagePlansSection />
      <PricingPageFaqSection />
    </>
  );
}
