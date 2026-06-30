import type { Metadata } from "next";
import { RefundsHeroBanner, RefundsPageSection } from "@/components/original";

export const metadata: Metadata = {
  title: "Refunds & Dispute | Shopify EcomSolution",
  description:
    "Review Shopify EcomSolution refund and dispute policies, including steps to file a refund dispute and conditions for refund eligibility.",
};

export default function RefundsPage() {
  return (
    <>
      <RefundsHeroBanner />
      <RefundsPageSection />
    </>
  );
}
