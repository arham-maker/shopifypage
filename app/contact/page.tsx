import type { Metadata } from "next";
import { ContactFormSection, ContactHeroBanner } from "@/components/original";

export const metadata: Metadata = {
  title: "Contact Us | Shopify Page",
  description:
    "Contact Shopify Page for Shopify store design, development, marketing, migration, app integration, speed optimization, SEO, and social media ads.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHeroBanner />
      <ContactFormSection />
    </>
  );
}
