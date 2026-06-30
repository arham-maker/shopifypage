import type { Metadata } from "next";
import { ContactFormSection, ContactHeroBanner } from "@/components/original";

export const metadata: Metadata = {
  title: "Contact Us | Shopify EcomSolution",
  description:
    "Contact Shopify EcomSolution for Shopify store design, development, marketing, migration, app integration, speed optimization, SEO, and social media ads.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHeroBanner />
      <ContactFormSection />
    </>
  );
}
