export function PackagePopupSecondary() {
  return (
    <div className="popup2">
      <div className="closePop">
        <i className="fas fa-times" />
      </div>
      <div className="container">
        <div className="pop-inner">
          <h4 />
          <h3 />
          <p>Build a Successful
            E-Commerce Business
            on Shopify.</p>
          <form id="popupform">
            <input type="hidden" id="package_html" name="package_html" className="package_html" defaultValue="" />
            <div className="fld">
              <input type="text" placeholder="Full Name" name="popupname" required />
            </div>
            <div className="fld">
              <input type="email" placeholder="Email Address" name="popupemail" required />
            </div>
            <div className="fld">
              <input id="phone" type="tel" placeholder="Phone Number" name="phone" className="phone-input" required />
              <input type="hidden" name="package_name" defaultValue="Basic Shopify" />
              <input type="hidden" name="package_cost" defaultValue="$299" />
              <input type="hidden" name="package_cat" defaultValue="web" />
              <input type="hidden" name="full_url" id="" defaultValue="index" />
              <input type="hidden" name="msclkid" defaultValue="" />
              <input type="hidden" name="gclid" defaultValue="" />
              <input type="hidden" name="fbclid" defaultValue="" />
              <input type="hidden" name="__keyword" defaultValue="" />
              <input type="hidden" name="__device" defaultValue="" />
              <input type="hidden" name="__utm_source" defaultValue="" />
              <input type="hidden" name="__utm_campaign" defaultValue="" />
              <input type="hidden" name="__utm_content" defaultValue="" />
              <input type="hidden" name="__utm_term" defaultValue="" />
              <input type="hidden" name="__matchtype" defaultValue="" />
              <input type="hidden" name="__adgroupid" defaultValue="" />
            </div>
            <div className="checkbox-wrap2">
              <input type="checkbox" id="check2" required name="check2" />
              <label style={{color: 'black'}} htmlFor="check2"> Message
                and data rates may apply. Reply STOP to opt-out,
                Text Help for help. 4 messages/month.</label>
            </div>
            <div className="checkbox-wrap2">
              <input type="checkbox" id="check3" required name="check3" />
              <label style={{color: 'black'}} htmlFor="check3"> I Agree
                and accepts <a target="_blank" href="terms-and-conditions">Terms
                  Conditions</a> and <a target="_blank" href="privacy-policy">Privacy
                  Policy</a></label>
            </div>
            {/*<h6 class="agree"><input type="checkbox" name="check" id=""> I agree and accept the <a*/}
            {/*        href="#">Terms &*/}
            {/*        Conditions</a> and <a href="#">Privacy Policy</a>.</h6>*/}
            <div className="sbt">
              <input type="hidden" />
              <button className="theme-btn">Get Started</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}



