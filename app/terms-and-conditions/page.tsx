import type { Metadata } from "next";
import { TermsHeroBanner, TermsPageSection } from "@/components/original";

export const metadata: Metadata = {
  title: "Terms And Conditions | Shopify EcomSolution",
  description:
    "Read the terms and conditions for using Shopify EcomSolution services, including legal contract binding, revision policy, refund policy, delivery, and communication policies.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <TermsHeroBanner />
      <TermsPageSection />
    </>
  );
}
