interface Lp2PortfolioPreviewProps {
  previewUrl: string;
}

export function Lp2PortfolioPreview({ previewUrl }: Lp2PortfolioPreviewProps) {
  return (
    <>
      <nav className="portfolio-page-nav">
        <a className="back-btn" href="/lp">
          <i className="fas fa-angle-left" /> Back
        </a>
        <a href="/lp" className="logo">
          <img src="/assets/images/one-line-logo.png" alt="Shopify Page" />
        </a>
      </nav>
      <iframe
        className="portfolio-viewframe"
        src={previewUrl}
        title="Shopify store preview"
      />
    </>
  );
}
