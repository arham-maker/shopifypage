import type { Metadata } from "next";
import {
  Lp2BigBenefitSection,
  Lp2CategoriesSection,
  Lp2ConversationSection,
  Lp2CounterSection,
  Lp2CtaSection,
  Lp2CustomWebPkgSection,
  Lp2FaqSection,
  Lp2Footer,
  Lp2GuaranteeSection,
  Lp2Header,
  Lp2HeroBanner,
  Lp2PackagesSection,
  Lp2Popups,
  Lp2ProcessSection,
  Lp2Scripts,
  Lp2TrustedSection,
  Lp2TrustClientSection,
  Lp2UserBelowSection,
  Lp2WebDesignSection,
  Lp2WhyChooseSection,
} from "@/components/lp2";

export const metadata: Metadata = {
  title: "Expert Shopify Store Development Services - Shopify EcomSolution",
  description:
    "Boost your online presence with our professional Shopify store design and development services. Get started today!",
};

export default function Lp2Page() {
  return (
    <>
      <Lp2Header />
      <Lp2HeroBanner />
      <Lp2TrustedSection />
      <Lp2CounterSection />
      <Lp2WebDesignSection />
      <Lp2ProcessSection />
      <Lp2PackagesSection />
      <Lp2GuaranteeSection />
      <Lp2WhyChooseSection />
      <Lp2ConversationSection />
      <Lp2CustomWebPkgSection />
      <Lp2UserBelowSection />
      <Lp2BigBenefitSection />
      <Lp2CtaSection />
      <Lp2TrustClientSection />
      <Lp2FaqSection />
      <Lp2CategoriesSection />
      <Lp2Footer />
      <Lp2Popups />
      <Lp2Scripts />
    </>
  );
}
