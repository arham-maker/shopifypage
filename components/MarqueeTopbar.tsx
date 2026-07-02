const DISCLAIMER_SEGMENTS = [
  "Shopify Page is an independent company that provides design and development services for e-commerce solutions.",
  "We are not in any way officially connected with Shopify Inc., or any of its subsidiaries or affiliates.",
  'The name "Shopify" as well as related names, marks, emblems, and images are registered trademarks of their respective owners.',
] as const;

const DISCLAIMER_TEXT = DISCLAIMER_SEGMENTS.join(" ");

function MarqueeGroup() {
  return (
    <div className="marquee-topbar__group" aria-hidden="true">
      {DISCLAIMER_SEGMENTS.map((segment) => (
        <p key={segment} className="marquee-topbar__segment font-normal uppercase">
          {segment}
        </p>
      ))}
    </div>
  );
}

export function MarqueeTopbar() {
  return (
    <div className="marquee-topbar" role="region" aria-label="Legal disclaimer">
      <p className="sr-only">{DISCLAIMER_TEXT}</p>
      <div className="marquee-topbar__viewport">
        <div className="marquee-topbar__track">
          <MarqueeGroup />
          <MarqueeGroup />
        </div>
      </div>
    </div>
  );
}
