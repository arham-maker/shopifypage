import type { Metadata } from "next";
import {
  ConversionCtaSection,
  EcomMarketingAboutSection,
  EcomMarketingBlueIntroSection,
  EcomMarketingDarkFeaturesSection,
  EcomMarketingHeroBanner,
  ProcessTestimonialsSection,
  TestimonialsFaqSection,
} from "@/components/original";

export const metadata: Metadata = {
  title: "E-Commerce Marketing | Shopify EcomSolution",
  description:
    "Grow your online business with proven e-commerce marketing strategies including SEO, PPC, social media advertising, and email marketing for Shopify.",
};

export default function EcomMarketingPage() {
  return (
    <>
      <EcomMarketingHeroBanner />
      <EcomMarketingBlueIntroSection />
      <EcomMarketingAboutSection />
      <EcomMarketingDarkFeaturesSection />
      <ProcessTestimonialsSection />
      <ConversionCtaSection />
      <TestimonialsFaqSection />
    </>
  );
}
