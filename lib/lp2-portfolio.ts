export interface Lp2PortfolioItem {
  image: string;
  url: string;
}

export const lp2PortfolioItems: Lp2PortfolioItem[] = [
  { image: "/assets/images/portfolio/9.webp", url: "https://focal-theme-carbon.myshopify.com" },
  { image: "/assets/images/portfolio/11.webp", url: "https://beyours-theme-beauty.myshopify.com" },
  { image: "/assets/images/portfolio/15.webp", url: "https://wonder-theme-beauty.myshopify.com" },
  { image: "/assets/images/portfolio/8.webp", url: "https://sleek-glossy.myshopify.com" },
  { image: "/assets/images/portfolio/5.webp", url: "https://concept-theme-tech.myshopify.com" },
  { image: "/assets/images/portfolio/6.webp", url: "https://broadcast-clean.myshopify.com" },
  { image: "/assets/images/portfolio/12.webp", url: "https://shapes-preset-pantry.myshopify.com" },
  { image: "/assets/images/portfolio/2.webp", url: "https://normcore-fundamental.myshopify.com" },
  { image: "/assets/images/portfolio/10.webp", url: "https://pipeline-theme-fashion.myshopify.com" },
  { image: "/assets/images/portfolio/13.webp", url: "https://palo-alto-theme-vibrant.myshopify.com" },
  { image: "/assets/images/portfolio/7.webp", url: "https://chantilly.myshopify.com" },
  { image: "/assets/images/portfolio/16.webp", url: "https://blum-celia.myshopify.com" },
  { image: "/assets/images/portfolio/3.webp", url: "https://prestige-theme-allure.myshopify.com" },
  { image: "/assets/images/portfolio/14.webp", url: "https://stiletto-theme-vogue.myshopify.com" },
  { image: "/assets/images/portfolio/1.webp", url: "https://stretch-theme-sand.myshopify.com" },
  { image: "/assets/images/portfolio/4.webp", url: "https://impulse-theme-fashion.myshopify.com" },
];

export function getLp2PortfolioHref(url: string): string {
  return `/lp/portfolio?url=${encodeURIComponent(url)}`;
}

export function resolveLp2PortfolioPreviewUrl(raw: string | undefined): string | null {
  const fallback = "https://broadcast-clean.myshopify.com/";

  if (!raw?.trim()) {
    return fallback;
  }

  try {
    const parsed = new URL(raw.trim());
    if (parsed.protocol !== "https:" || !parsed.hostname.endsWith(".myshopify.com")) {
      return null;
    }

    return parsed.href.endsWith("/") ? parsed.href : `${parsed.href}/`;
  } catch {
    return null;
  }
}
