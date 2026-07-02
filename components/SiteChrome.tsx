"use client";

import { usePathname } from "next/navigation";
import {
  GlobalPopups,
  SiteFooter,
  SiteHeader,
  SiteScripts,
} from "@/components/original";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLandingPage = pathname.startsWith("/lp");

  if (isLandingPage) {
    return <>{children}</>;
  }

  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
      <GlobalPopups />
      <SiteScripts />
    </>
  );
}
