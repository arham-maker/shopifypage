"use client";

import Script from "next/script";

const ZENDESK_SNIPPET_SRC =
  "https://static.zdassets.com/ekr/snippet.js?key=923e51fa-97d5-49a2-9055-0fb23e466aba";

export function ZendeskWidget() {
  return (
    <>
      <Script
        id="ze-snippet"
        src={ZENDESK_SNIPPET_SRC}
        strategy="afterInteractive"
        onLoad={() => {
          const existing = document.querySelector<HTMLScriptElement>(
            'script[src="/assets/js/zendesk-widget.js"]',
          );

          if (existing) {
            return;
          }

          const initScript = document.createElement("script");
          initScript.src = "/assets/js/zendesk-widget.js";
          initScript.async = true;
          document.body.appendChild(initScript);
        }}
      />
    </>
  );
}
