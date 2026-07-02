import type { Metadata } from "next";
import {
  ConversionCtaSection,
  CustomShopifyThemeAboutSection,
  CustomShopifyThemeBlueIntroSection,
  CustomShopifyThemeDarkFeaturesSection,
  CustomShopifyThemeHeroBanner,
  CustomShopifyThemePartnerSection,
  ProcessTestimonialsSection,
  TestimonialsFaqSection,
} from "@/components/original";

export const metadata: Metadata = {
  title: "Custom Shopify Theme | Shopify Page",
  description:
    "Get a next-level Shopify and Shopify Plus store with custom design, development, migration, and maintenance from Shopify Page.",
};

export default function CustomShopifyThemePage() {
  return (
    <>
      <CustomShopifyThemeHeroBanner />
      <CustomShopifyThemePartnerSection />
      <CustomShopifyThemeBlueIntroSection />
      <CustomShopifyThemeAboutSection />
      <CustomShopifyThemeDarkFeaturesSection />
      <ProcessTestimonialsSection />
      <ConversionCtaSection />
      <TestimonialsFaqSection />
    </>
  );
}
