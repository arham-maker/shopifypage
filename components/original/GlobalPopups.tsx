import {
  LeadOverlay,
  LeadOverlayDropshipping,
  LeadPopup,
  LeadPopupDropshipping,
  Overlay,
  PackagePopup,
  PackagePopupSecondary,
} from "@/components/original";

export function GlobalPopups() {
  return (
    <>
      <Overlay />
      <PackagePopup />
      <PackagePopupSecondary />
      <LeadOverlay />
      <LeadPopup />
      <LeadOverlayDropshipping />
      <LeadPopupDropshipping />
    </>
  );
}
