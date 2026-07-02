"use client";

export function Lp2TrustClientSection() {
  return (
    <section className="trustClientSection" style={{backgroundImage: 'url(/assets/images/banner8.html)'}}>
      <div className="container">
        <div className="padX12">
          <div className="trustClientSec-hd">
            <h6>Customer feedback says it all. </h6>
          </div>
          <div className="trustClientSec-main">
            <div className="row">
              <div className="col-md-6">
                <div className="trustClientSec-card">
                  <div className="trustClientSec-cardHead">
                    <div className="profileImage">
                      <img src="/assets/images/trust-client/profile1.png" alt="Profile" />
                    </div>
                    <div className="profileCont">
                      <h6>So far, the BEST agency!</h6>
                      <div className="ratingIcon">
                        <i className="fas fa-star fa-fw" />
                        <i className="fas fa-star fa-fw" />
                        <i className="fas fa-star fa-fw" />
                        <i className="fas fa-star fa-fw" />
                        <i className="fas fa-star fa-fw" />
                      </div>
                    </div>
                  </div>
                  <div className="trustClientSec-cardBody">
                    <p>It was nice how they took my feedback seriously. The team at Shopify Page
                      made sure my ideas were heard and incorporated into the final design. My store
                      looks amazing, and sales have skyrocketed. Great work!</p>
                  </div>
                  <div className="trustClientSec-cardFoot">
                    <p>Samuel Christian | <b> $3,000,000 </b> in Revenue</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="trustClientSec-card">
                  <div className="trustClientSec-cardHead">
                    <div className="profileImage">
                      <img src="/assets/images/trust-client/profile2.png" alt="Profile" />
                    </div>
                    <div className="profileCont">
                      <h6>Iâ€™m thrilled with the results!</h6>
                      <div className="ratingIcon">
                        <i className="fas fa-star fa-fw" />
                        <i className="fas fa-star fa-fw" />
                        <i className="fas fa-star fa-fw" />
                        <i className="fas fa-star fa-fw" />
                        <i className="fas fa-star fa-fw" />
                      </div>
                    </div>
                  </div>
                  <div className="trustClientSec-cardBody">
                    <p>I love how they were willing to help and provide recommendations. They made my
                      store look stunning and user-friendly. Their expertise and dedication have truly
                      paid off, and my revenue has increased significantly. </p>
                  </div>
                  <div className="trustClientSec-cardFoot">
                    <p>Benjamin Groff | <b> $400,000 </b> In Revenue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="trustClientSec-note">
            <p>We know affordability matters, so we've reduced our price, making it easy for you to get a
              conversion-boosting Shopify theme at the cheapest rates. Hurry, this offer is for a limited time
              only!
            </p>
          </div>
          <div className="btns_group text-center">
            {/*  	 	 	 	 <a href="https://Shopify Page.com/crm/web-design/brief.php?type=custom-website-design" class="getstarted ">Get started <i class="fal fa-arrow-circle-right"></i></a>*/}
            <a href="#" className="getstarted popbtn">Get Started <i className="fal fa-arrow-circle-right" /></a>
            <a href="#" onClick={() => window.setButtonURL?.()} className="chat-btn"><i className="fal fa-comment-alt" />
              Chat Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}

