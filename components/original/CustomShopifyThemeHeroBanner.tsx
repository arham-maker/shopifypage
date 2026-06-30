export function CustomShopifyThemeHeroBanner() {
  return (
    <div className="mainBanner spad innerBanner">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-7">
            <div className="banner-content">
              {/*<img src="/assets/images/banner/2.png" class="img-fluid" alt="">*/}
              <h1>Get a Next-Level Online Store for <br />Shopify
                and Shopify Plus</h1>
              <div className="btnSec">
                <a href="#" className="white-btn pop-main">Get a Free
                  Consultation</a>
                <a href="pricing" className="btnText">Check Out
                  Our Pricing </a>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <figure>
              <img src="/assets/images/banner/1.png" className="img-fluid" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

