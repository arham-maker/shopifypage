export function Lp2Popups() {
  return (
    <div>
      <div className="overlay" />
      <div className="popupmain" id="popuppack">
        <a id="close1" className="closeico1" href="#" title=""><i /></a>
        <div className="mmpopup">
          <div className="imgbx">
            <img src="/assets/images/img1.jpg" alt="" />
          </div>
          <div className="formpop">
            <div className="popup-all-cont">
              <h5>Get a <span>FREE Consultation</span></h5>
              <h4>Let&apos;s Build Your <span>Dream Store!</span></h4>
              <p><span>Fill in the details and our Shopify experts will reach out to you shortly.</span></p>
              <form className="popupForm">
                <input type="text" name="name" placeholder="Full Name" required />
                <input type="email" name="email" placeholder="Email Address" required />
                <input type="tel" name="number" placeholder="Phone Number" required />
                <textarea name="message" placeholder="Business Industry / Message" required defaultValue="" />
                <input type="hidden" name="pageUrl" defaultValue="lp" />
                <input type="hidden" name="location" defaultValue="Package Popup" />
                <input type="hidden" name="package_name" defaultValue="" />
                <input type="hidden" name="package_cost" defaultValue="" />
                <input type="hidden" name="package_cat" defaultValue="" />
                <button type="submit" className="theme-btn">Get Started Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="popupmain" id="auto-popup">
        <a id="close1" className="closeico1" href="#" title="">
          <i />
        </a>
        <div className="mmpopup">
          <div className="imgbx">
            <img src="/assets/images/img1.jpg" alt="" />
          </div>
          <div className="formpop">
            <div className="popup-all-cont">
              <h5>Wait! Don&apos;t Miss Out</h5>
              <h4>Get a <span>FREE Logo Design</span> with our package!</h4>
              <p>
                <span>
                  Elevate your brand without extra cost. Don&apos;t
                  miss out – upgrade your business identity now!
                </span>
              </p>
              <form id="leadForm" className="popupForm">
                <input type="text" name="name" placeholder="Full Name" required />
                <input type="email" name="email" placeholder="Email Address" required />
                <input type="tel" name="number" placeholder="Phone Number" required />
                <textarea name="message" placeholder="Business Industry" required defaultValue="" />
                <input type="hidden" name="pageUrl" defaultValue="lp" />
                <input type="hidden" name="location" defaultValue="Website Popup" />
                <button type="submit" className="theme-btn">Get Started Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="popupmain" id="popuppack2">
        <a id="close1" className="closeico1" href="#" title=""><i /></a>
        <div className="mmpopup">
          <div className="imgbx">
            <img src="/assets/images/img1.jpg" alt="" />
          </div>
          <div className="formpop">
            <h4 />
            <p />
            <span className="mb-3 lh-1 d-block text-center">Let us boost your sales with our expert design and
              development services. Get started today and watch your revenue soar!</span>
            <form className="popupForm">
              <input type="text" name="name" placeholder="Full Name" required />
              <input type="email" name="email" placeholder="Email Address" required />
              <input type="tel" name="number" placeholder="Phone Number" required />
              <textarea name="message" placeholder="Business Industry / Message" required defaultValue="" />
              <input type="hidden" name="pageUrl" defaultValue="lp" />
              <input type="hidden" name="location" defaultValue="Package Popup 2" />
              <input type="hidden" name="package_name" defaultValue="" />
              <input type="hidden" name="package_cost" defaultValue="" />
              <input type="hidden" name="package_cat" defaultValue="" />
              <input type="hidden" id="popuppackage" name="popuppackage" defaultValue="" />
              <button type="submit" className="theme-btn">Get Started Now</button>
            </form>
          </div>
        </div>
      </div>
      <div className="popupmain1" id="closingPopup1">
        <a id="close1" className="closeico1" href="#" title=""><i /></a>
        <div className="mmpopup">
          <div className="imgbx">
            <img src="/assets/images/img1.jpg" alt="" />
            <div className="cont">
              <h6>Get 10 free</h6>
              <h5>
                <span>Social Media Banners</span>
                Featuring Your Products
              </h5>
            </div>
          </div>
          <div className="formpop">
            <div className="formpop-main">
              <div className="formpop-hd">
                <h6>Wait! Don&apos;t Miss Out</h6>
                <h5>Our Exclusive Offer!</h5>
                <p>Get 10 free social media banners featuring your products. Fill out the from to claim your
                  discount and enhance your online presence today!</p>
              </div>
              <form className="popupForm">
                <input type="text" name="name" placeholder="Full Name" required />
                <input type="email" name="email" placeholder="Email Address" required />
                <input type="tel" name="number" placeholder="Phone Number" required />
                <textarea name="message" placeholder="Business Industry / Message" required defaultValue="" />
                <input type="hidden" name="pageUrl" defaultValue="lp" />
                <input type="hidden" name="location" defaultValue="Exit Popup" />
                <button type="submit" className="theme-btn">Claim My Offer</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
