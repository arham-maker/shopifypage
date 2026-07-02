import type { Metadata } from "next";
import { PrivacyHeroBanner, PrivacyPageSection } from "@/components/original";

export const metadata: Metadata = {
  title: "Privacy Policy | Shopify Page",
  description:
    "Learn how Shopify Page collects, uses, and protects your personal data in compliance with GDPR and our privacy policy principles.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PrivacyHeroBanner />
      <PrivacyPageSection />
    </>
  );
}
