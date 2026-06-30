"use client";

import { useEffect } from "react";

export function SiteScripts() {
  useEffect(() => {
    let cancelled = false;

    const loadScript = (src: string) =>
      new Promise<void>((resolve, reject) => {
        const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);

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

    const boot = async () => {
      await loadScript("/assets/js/jquery.js");

      if (!cancelled) {
        await loadScript("/assets/js/custom.js");
      }
    };

    boot();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
