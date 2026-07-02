"use client";

import { useEffect } from "react";

export function Lp2Scripts() {
  useEffect(() => {
    let cancelled = false;

    const loadScript = (src: string) =>
      new Promise<void>((resolve, reject) => {
        const existing = document.querySelector<HTMLScriptElement>(
          `script[src="${src}"]`,
        );

        if (existing) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.async = false;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Unable to load ${src}`));
        document.body.appendChild(script);
      });

    const loadStylesheet = (href: string) => {
      if (document.querySelector(`link[href="${href}"]`)) return;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    };

    const boot = async () => {
      loadStylesheet(
        "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
      );
      loadStylesheet("/assets/css/layout.css");
      loadStylesheet("/assets/css/scrollable.css");
      loadStylesheet("/assets/css/style-2.css");

      await loadScript("/assets/js/jquery.js");
      if (cancelled) return;

      await loadScript("/assets/js/scrollable.js");
      if (cancelled) return;

      await loadScript(
        "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",
      );
      if (cancelled) return;

      await loadScript("/assets/js/lp2-custom.js");
      if (cancelled) return;

      await loadScript("/assets/js/lp2-forms.js");
    };

    boot();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}

