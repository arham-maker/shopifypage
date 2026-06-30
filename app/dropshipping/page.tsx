import type { Metadata } from "next";
import {
  DropshippingAlsoGetSection,
  DropshippingBenefitsCtaSection,
  DropshippingBenefitsSection,
  DropshippingCompareSection,
  DropshippingCtaSection,
  DropshippingFaqSection,
  DropshippingHeroBanner,
  DropshippingPricingSection,
  DropshippingProcessSection,
  DropshippingTestimonialsSection,
} from "@/components/original";

export const metadata: Metadata = {
  title: "Top-Rated Dropshipping Services | Shopify EcomSolution",
  description:
    "Discover top-rated dropshipping services designed to streamline your eCommerce business. Explore Shopify dropshipping pricing plans and expert solutions.",
};

export default function DropshippingPage() {
  return (
    <div className="dropshipping-page">
      <DropshippingHeroBanner />
      <DropshippingPricingSection />
      <DropshippingCompareSection />
      <DropshippingBenefitsSection />
      <DropshippingProcessSection />
      <DropshippingBenefitsCtaSection />
      <DropshippingAlsoGetSection />
      <DropshippingTestimonialsSection />
      <DropshippingCtaSection />
      <DropshippingFaqSection />
    </div>
  );
}
