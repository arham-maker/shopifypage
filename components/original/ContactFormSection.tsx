export function ContactFormSection() {
  return (
    <section className="contactSec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="common-heading">
              <h2>Get In <span>Touch</span></h2>
              <p>We value your feedback and inquiries. Whether you
                have a question about our services, need
                assistance with your Shopify store, or just want
                to say hello, we're here to help!</p>
            </div>
          </div>
          <div className="col-md-10">
            <form action="#" method="POST" className="contact-form" id="form1">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="input">
                    <label htmlFor="first-name">First
                      Name</label>
                    <input type="text" name="popupname" required id="first-name" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" name="popupname1" required id="last-name" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="popupemail" required id="email" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input">
                    <label htmlFor="phone">Phone number</label>
                    <input type="text" name="phone" required id="phone" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input">
                    <label htmlFor="url">Website URL</label>
                    <input type="text" name="website_url" required id="url" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input">
                    <label htmlFor="company">Company
                      Name</label>
                    <input type="text" name="company" required id="company" />
                    <input type="hidden" name="source" defaultValue="Contact us" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input">
                    <label htmlFor="goal">Message</label>
                    <textarea name="message" id="" rows={3} required defaultValue={""} />
                  </div>
                </div>
                <div className="col-lg-12">
                  <span className="hdng">How can we help you grow?
                    (Check all that apply)</span>
                  <div className="checkbox-wrap">
                    <label htmlFor="chck1">
                      <input type="checkbox" name="service[]" id="chck1" defaultValue="Shopify Custom Theme Development" />
                      Shopify Custom Theme Development
                    </label>
                    <label htmlFor="chck2">
                      <input type="checkbox" name="service[]" id="chck2" defaultValue="Shopify Store Setup" />
                      Shopify Store Setup
                    </label>
                    <label htmlFor="chck3">
                      <input type="checkbox" name="service[]" id="chck3" defaultValue="Theme customization" />
                      Theme customization
                    </label>
                    <label htmlFor="chck4">
                      <input type="checkbox" name="service[]" id="chck4" defaultValue="Migration to Shopify Plus" />
                      Migration to Shopify Plus
                    </label>
                    <label htmlFor="chck5">
                      <input type="checkbox" name="service[]" id="chck5" defaultValue="App integration" /> App
                      integration
                    </label>
                    <label htmlFor="chck6">
                      <input type="checkbox" name="service[]" id="chck6" defaultValue="Shopify Site Speed" />
                      Shopify Site Speed
                    </label>
                    <label htmlFor="chck7">
                      <input type="checkbox" name="service[]" id="chck7" defaultValue="SEO" /> SEO
                    </label>
                    <label htmlFor="chck8">
                      <input type="checkbox" name="service[]" id="chck8" defaultValue="Social Media Ads" />
                      Social Media Ads
                    </label>
                    <label htmlFor="chck9">
                      <input type="checkbox" name="service[]" id="chck9" defaultValue="Other" /> Other
                    </label>
                  </div>
                </div>
                <div className="col-md-12 flex-col ">
                  <div className="checkbox-wrap2 pb-2">
                    <input type="checkbox" id="check2" required name="check2" />
                    <label style={{ color: 'white' }} htmlFor="check2"> Message and data rates
                      may apply. Reply STOP to opt-out,
                      Text Help for help. 4
                      messages/month.</label>
                  </div>
                  <div className="checkbox-wrap2">
                    <input type="checkbox" id="check3" required name="check3" />
                    <label style={{ color: 'white' }} htmlFor="check3"> I Agree and accepts <a target="_blank" href="terms-and-conditions">Terms
                      Conditions</a> and <a target="_blank" href="privacy-policy">Privacy
                        Policy</a></label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <input type="hidden" name="g-recaptcha-response" />
                  <button type="submit" className="submit">Submit
                    Your Query</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


