"use client";

import { SITE_PHONE, SITE_PHONE_HREF } from "@/lib/site-contact";

export function Lp2Header() {
  return (
    <header>
      <div className="main-head">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-auto">
              <div className="logo">
                <a href="/">
                  <img src="/assets/images/one-line-logo.png" alt="" width={176} height={28} />
                </a>
              </div>
            </div>
            <div className="col-auto ms-auto text-end">
              <ul className="phnchat">
                <li><a href={SITE_PHONE_HREF}><i className="fas fa-phone-alt" />
                    {SITE_PHONE} </a></li>
                <li><a href="#" onClick={() => window.setButtonURL?.()}><i className="fas fa-comment-alt" /> Chat
                    Now</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

