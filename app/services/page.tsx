import type { Metadata } from "next";
import {
  IncludedFeaturesSection,
  ProcessClientsSection,
  ProcessTestimonialsSection,
  ServicesBlueBoxSection,
  ServicesHeroBanner,
  TestimonialsFaqSection,
} from "@/components/original";

export const metadata: Metadata = {
  title: "Shopify Services | Shopify EcomSolution",
  description:
    "Shopify EcomSolution delivers all-inclusive Shopify services including store design, e-commerce marketing, and done-for-you solutions to help your business scale across languages, currencies, and locations.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroBanner />
      <ProcessClientsSection />
      <ServicesBlueBoxSection />
      <IncludedFeaturesSection />
      <ProcessTestimonialsSection />
      <TestimonialsFaqSection />
    </>
  );
}
