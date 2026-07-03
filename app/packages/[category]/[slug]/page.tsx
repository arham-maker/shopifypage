import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  PackageDetailHeroBanner,
  PackageDetailSection,
} from "@/components/original";
import { getAllPackagePaths, getPackage } from "@/lib/packages";

interface PackagePageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllPackagePaths();
}

export async function generateMetadata({
  params,
}: PackagePageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const pkg = getPackage(category, slug);

  if (!pkg) {
    return { title: "Package Not Found | Shopify Page" };
  }

  return {
    title: `${pkg.title} | Shopify Page`,
    description: pkg.description,
  };
}

export default async function PackagePage({ params }: PackagePageProps) {
  const { category, slug } = await params;
  const pkg = getPackage(category, slug);

  if (!pkg) {
    notFound();
  }

  return (
    <>
      <PackageDetailHeroBanner />
      <PackageDetailSection pkg={pkg} />
    </>
  );
}
