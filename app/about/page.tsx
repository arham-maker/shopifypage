import type { Metadata } from "next";
import {
  AboutAgencySection,
  AboutHeroBanner,
  AboutOriginSection,
  IncludedFeaturesSection,
  ProcessClientsSection,
  ProcessTestimonialsSection,
  TestimonialsFaqSection,
} from "@/components/original";

export const metadata: Metadata = {
  title: "About Us | Shopify Page",
  description:
    "Learn about Shopify Page, a top-performing Shopify agency helping businesses build conversion-driven stores, scale growth, and achieve e-commerce success since 2015.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroBanner />
      <ProcessClientsSection />
      <AboutOriginSection />
      <AboutAgencySection />
      <IncludedFeaturesSection />
      <ProcessTestimonialsSection />
      <TestimonialsFaqSection />
    </>
  );
}
