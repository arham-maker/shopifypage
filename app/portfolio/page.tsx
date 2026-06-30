import type { Metadata } from "next";
import { PortfolioGallerySection, PortfolioHeroBanner } from "@/components/original";

export const metadata: Metadata = {
  title: "Portfolio | Shopify EcomSolution",
  description:
    "Explore Shopify EcomSolution's award-winning Shopify portfolio and see how our e-commerce design and development work drives sales and brand visibility.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHeroBanner />
      <PortfolioGallerySection />
    </>
  );
}
