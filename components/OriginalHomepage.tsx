import {
  AwardsSection,
  BuildPromoteGrowSection,
  ConversionCtaSection,
  FaqSection,
  HeroBanner,
  IdealPartnerSection,
  IncludedFeaturesSection,
  PortfolioSection,
  PricingSection,
  ProfitIndustriesSection,
  ReachServicesSection,
  StoreServicesSection,
  TestimonialsSection,
} from "@/components/original";

export function OriginalHomepage() {
  return (
    <>
      <HeroBanner />
      <ReachServicesSection />
      <ProfitIndustriesSection />
      <BuildPromoteGrowSection />
      <ConversionCtaSection />
      <StoreServicesSection />
      <PortfolioSection />
      <IdealPartnerSection />
      <AwardsSection />
      <PricingSection />
      <IncludedFeaturesSection />
      <TestimonialsSection />
      <FaqSection />
    </>
  );
}
