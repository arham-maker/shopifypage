import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Lp2PortfolioPreview } from "@/components/lp2/Lp2PortfolioPreview";
import { resolveLp2PortfolioPreviewUrl } from "@/lib/lp2-portfolio";

export const metadata: Metadata = {
  title: "Portfolio | Shopify Page",
  description:
    "Preview Shopify store designs built by Shopify Page in a live demo view.",
};

interface LpPortfolioPageProps {
  searchParams: Promise<{ url?: string }>;
}

export default async function LpPortfolioPage({ searchParams }: LpPortfolioPageProps) {
  const { url } = await searchParams;
  const previewUrl = resolveLp2PortfolioPreviewUrl(url);

  if (!previewUrl) {
    notFound();
  }

  return <Lp2PortfolioPreview previewUrl={previewUrl} />;
}
