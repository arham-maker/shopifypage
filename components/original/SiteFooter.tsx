export function SiteFooter() {
  return (
    <footer className="spad">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <a href="/" className="flogo">
              <img style={{maxWidth: 200}} src="/assets/images/logo-white.png" alt="" />
              {/*<h2 class="text-white">Shopify EcomSolution</h2>*/}
            </a>
            <p className="ft-para">Shopify EcomSolution is the leading
              Shopify agency that covers various
              solutions to help you grow your online
              business to success.</p>
          </div>
          <div className="col-md-3">
            <div className="widget ft-pad">
              <h6>Services</h6>
              <ul className="ft-links">
                <li><a href="custom-shopify-theme">Shopify
                    Services</a></li>
                <li><a href="ecom-marketing">E-Commerce
                    Marketing</a></li>
                <li><a href="done-for-you">Done For
                    You</a></li>
                <li><a href="dropshipping">Dropshipping</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="widget">
              <h6>Quick Links</h6>
              <ul className="ft-links">
                <li><a href="contact">Contact Us</a></li>
                <li><a href="portfolio">Portfolio</a></li>
                <li><a href="process">Process</a></li>
                <li><a href="pricing">Pricing</a></li>
                <li><a href="testimonials">Testimonials</a></li>
                <li><a href="faq">FAQs</a></li>
                {/*<li><a href="ebook.php">E-book</a></li>*/}
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="widget">
              <h6>Contact Information</h6>
              <div className="ft-info">
                <a href="tel:+1 (682) 267-0492"><i className="fas fa-phone" /> +1 (682) 267-0492</a>
                <a href="mailto:support@shopifypage.com"><i className="fas fa-envelope" />
                  support@shopifypage.com</a>
                {/*<p><i class="fas fa-map-marker-alt"></i>650 California St, San Francisco, CA</p>*/}
              </div>
              {/* <h6>Follow Us</h6>
                          <ul class="footer-group">
                              <li><a target="_blank"
                                      href="https://www.facebook.com/ShopifyProfs/"><i
                                          class="fab fa-facebook-f"></i></a></li>
                              <li><a target="_blank"
                                      href="https://www.linkedin.com/company/shopify-profs/"><i
                                          class="fab fa-linkedin-in"></i></a></li> */}
              {/*<li><a target="_blank" href="#"><i class="fab fa-twitter"></i></a></li>*/}
              {/*<li><a target="_blank" href="#"><i class="fab fa-instagram"></i></a></li>*/}
              {/*<li><a target="_blank" href=""><i class="fab fa-youtube"></i></a></li>*/}
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="row">
            <div className="col-md-6">
              <p>© Shopify EcomSolution 2026. All rights
                reserved.</p>
            </div>
            <div className="col-md-6">
              <ul className="terms-list">
                <li><a href="terms-and-conditions">Terms of
                    Services</a></li>
                <li><a href="privacy-policy">Privacy
                    Policy</a></li>
                <li><a href="refunds">Refunds &amp;
                    Dispute</a></li>
              </ul>
            </div>
          </div>
          <p className="distxt">Shopifyecomsolution independent company
            that provides design and development services for
            e-commerce solutions. We are not affiliated, associated,
            authorized, endorsed by, or in any way officially
            connected with Shopify Inc., or any of its subsidiaries
            or affiliates. The name "Shopify" as well as related
            names, marks, emblems, and images are registered
            trademarks of their respective owners.</p>
        </div>
      </div>
    </footer>
  );
}



