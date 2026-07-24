"use client";

export function Lp2ProcessSection() {
  return (
    <section className="processSec" style={{backgroundImage: 'url(/assets/images/banner3.html)'}}>
      <div className="container">
        <div className="mn-hd text-center">
          <h4><span>OUR EASY PROCESS</span>How we build Shopify stores</h4>
        </div>
        <div className="text-center">
          <p className="customPara">We use a proven approach to create attractive and fully functional <br /> Shopify
            stores for our clients. Here's how we work:</p>
        </div>
        <ul className="procsList">
          <li>
            <div className="prcsWrp">
              <div className="row">
                <div className="col-md-6"><img src="/assets/images/ic04.png" alt="" /></div>
                <div className="col-md-6 text-right">
                  <h5>01</h5>
                </div>
              </div>
              <h4>Share your project <br /> details</h4>
              <p>Tell us about your project goals, target audience, and any specific requirements to kickstart
                our Shopify store design process.</p>
            </div>
          </li>
          <li>
            <div className="prcsWrp">
              <div className="row">
                <div className="col-md-6"><img src="/assets/images/ic05.png" alt="" /></div>
                <div className="col-md-6 text-right">
                  <h5>02</h5>
                </div>
              </div>
              <h4>Design and <br /> development</h4>
              <p>Our team will then craft a custom Shopify store tailored to your brand, ensuring seamless
                functionality and an engaging user experience.</p>
            </div>
          </li>
          <li>
            <div className="prcsWrp">
              <div className="row">
                <div className="col-md-6"><img src="/assets/images/ic06.png" alt="" /></div>
                <div className="col-md-6 text-right">
                  <h5>03</h5>
                </div>
              </div>
              <h4>Finalize and <br /> launch</h4>
              <p>After your suggested revisions and testing, we will launch your Shopify store, ensuring it's
                optimized for success and customer satisfaction.</p>
            </div>
          </li>
        </ul>
        <div className="btns_group text-center">
          {/*  				<a href="https://Shopify Page.com/crm/web-design/brief.php?type=custom-website-design" class="getstarted ">Get started <i class="fal fa-arrow-circle-right"></i></a>*/}
          <a href="#" className="getstarted popbtn">Let's Get Started <i className="fal fa-arrow-circle-right" /></a>
          <a
            href="#"
            className="chat-btn"
            data-open-chat
            onClick={(e) => {
              e.preventDefault();
              window.setButtonURL?.(e);
            }}
          >
            <i className="fal fa-comment-alt" /> Chat Now{" "}
          </a>
        </div>
      </div>
    </section>
  );
}

