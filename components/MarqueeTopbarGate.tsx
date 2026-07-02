"use client";

import { usePathname } from "next/navigation";
import { MarqueeTopbar } from "@/components/MarqueeTopbar";

const MARQUEE_ROUTES = new Set(["/", "/lp2"]);

export function MarqueeTopbarGate() {
  const pathname = usePathname();

  if (!MARQUEE_ROUTES.has(pathname)) {
    return null;
  }

  return <MarqueeTopbar />;
}
