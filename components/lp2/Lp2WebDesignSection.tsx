import { getLp2PortfolioHref, lp2PortfolioItems } from "@/lib/lp2-portfolio";

export function Lp2WebDesignSection() {
  return (
    <section className="webdesignSec">
      <div className="webdesignSec-head">
        <h6>SEE WHAT WE'VE BEEN UP TO</h6>
        <div className="row">
          <div className="col-md-4">
            <h3>Shopify stores we've built</h3>
          </div>
          <div className="col-md-8">
            <p>We're dedicated to excellence and innovation, showcasing diverse projects across industries.
              Discover the passion and effort we put into crafting solutions that meet your needs.</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-4 mt-5 mb-5">
          {lp2PortfolioItems.map((item) => (
            <div className="col-lg-3 col-md-4" key={item.url}>
              <div className="port-card">
                <a href={getLp2PortfolioHref(item.url)}>
                  <img src={item.image} alt="" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
