import type { Metadata } from "next";
import {
  ConversionCtaSection,
  ProcessClientsSection,
  ProcessHeroBanner,
  ProcessHowItWorksSection,
  ProcessTestimonialsSection,
  TestimonialsFaqSection,
} from "@/components/original";

export const metadata: Metadata = {
  title: "Process | Shopify EcomSolution",
  description:
    "Learn how Shopify EcomSolution builds high-converting Shopify stores through planning, design, development, launch, and ongoing support.",
};

export default function ProcessPage() {
  return (
    <>
      <ProcessHeroBanner />
      <ProcessClientsSection />
      <ProcessHowItWorksSection />
      <ProcessTestimonialsSection />
      <ConversionCtaSection />
      <TestimonialsFaqSection />
    </>
  );
}
