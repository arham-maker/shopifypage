import type { Metadata } from "next";
import {
  ConversionCtaSection,
  DoneForYouAboutSection,
  DoneForYouBlueIntroSection,
  DoneForYouDarkFeaturesSection,
  DoneForYouHeroBanner,
  DoneForYouPartnerSection,
  ProcessTestimonialsSection,
  TestimonialsFaqSection,
} from "@/components/original";

export const metadata: Metadata = {
  title: "Done For You | Shopify EcomSolution",
  description:
    "From product hunting to delivery, Shopify EcomSolution handles product sourcing, shipping, and day-to-day operations so you can focus on growing your business.",
};

export default function DoneForYouPage() {
  return (
    <>
      <DoneForYouHeroBanner />
      <DoneForYouPartnerSection />
      <DoneForYouBlueIntroSection />
      <DoneForYouAboutSection />
      <DoneForYouDarkFeaturesSection />
      <ProcessTestimonialsSection />
      <ConversionCtaSection />
      <TestimonialsFaqSection />
    </>
  );
}
