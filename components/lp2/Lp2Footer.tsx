import { SITE_EMAIL, SITE_PHONE, SITE_PHONE_HREF } from "@/lib/site-contact";

export function Lp2Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row align-items-center">
            {/*<div class="col-md-4">*/}
            {/*   <div class="trslpilot"><img src="/assets/images/trustpilot.png" alt=""></div>*/}
            {/*</div>*/}
            <div className="col-md-6">
              <div className="certi"><img src="/assets/images/certificate.png" alt="" /></div>
            </div>
            <div className="col-md-6 text-right">
              <div className="gettouch gettouchRight">
                <h5>Get in Touch</h5>
                <a href={SITE_PHONE_HREF}>{SITE_PHONE}</a>
                <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="custom-popup-layout">
    <div class="custom-main-popup">
       <div class="row">
          <div class="col-md-6">
             <img src="" alt="">
          </div>
          <div class="col-md-6">
          </div>
       </div>
    </div>
       </div> */}
      </footer>
      <div className="copyright">
        <div className="container">
          <div className="row align-items-center pt-3">
            <div className="col-md-12 text-center">
              <p>Copyright © 2026 Shopify Page All Rights Reserved. <a href="/privacy-policy" target="_blank">Privacy
                  Policy</a> <a href="/terms-and-conditions" target="_blank">Terms and Conditions</a></p>
            </div>
            <p className="distxt pt-3 pb-4 text-center">Shopify Page is an independent company
              that provides design and development services for
              e-commerce solutions. We are not affiliated, associated,
              authorized, endorsed by, or in any way officially
              connected with Shopify Inc., or any of its subsidiaries
              or affiliates. The name "Shopify" as well as related
              names, marks, emblems, and images are registered
              trademarks of their respective owners.</p>
            {/*<div class="col-md-4 text-right">*/}
            {/*   <ul class="social">*/}
            {/*      <li><a target="_blank" href="#"><i class="fab fa-facebook-f"></i></a></li>*/}
            {/*      <li><a target="_blank" href="#"><i class="fab fa-twitter"></i></a></li>*/}
            {/*      <li><a target="_blank" href="#/"><i class="fab fa-linkedin-in"></i></a></li>*/}
            {/*      <li><a target="_blank" href="#"><i class="fab fa-instagram"></i></a></li>*/}
            {/*   </ul>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

