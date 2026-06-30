import type { Metadata } from "next";
import {
  TestimonialsFaqSection,
  TestimonialsHeroBanner,
  TestimonialsPageSection,
} from "@/components/original";

export const metadata: Metadata = {
  title: "Testimonials | Shopify EcomSolution",
  description:
    "Read Shopify EcomSolution client testimonials and reviews from e-commerce brands, Shopify store owners, and marketing clients.",
};

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHeroBanner />
      <TestimonialsPageSection />
      <TestimonialsFaqSection />
    </>
  );
}
