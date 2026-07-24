"use client";

import { useEffect, useRef } from "react";

const BANNER_SLIDES = [
  "/assets/images/banner-slider/5.webp",
  "/assets/images/banner-slider/1.webp",
  "/assets/images/banner-slider/2.webp",
  "/assets/images/banner-slider/3.webp",
  "/assets/images/banner-slider/4.webp",
  "/assets/images/banner-slider/6.webp",
];

export function Lp2HeroBanner() {
  const swiperRef = useRef<HTMLDivElement>(null);
  const swiperInstance = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    let cancelled = false;
    let attempts = 0;

    const initSwiper = () => {
      if (cancelled || !swiperRef.current || swiperInstance.current) {
        return;
      }

      const SwiperCtor = window.Swiper;
      if (!SwiperCtor) {
        if (attempts < 50) {
          attempts += 1;
          window.setTimeout(initSwiper, 100);
        }
        return;
      }

      swiperInstance.current = new SwiperCtor(swiperRef.current, {
        effect: "cards",
        grabCursor: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        rewind: true,
      });
    };

    initSwiper();

    return () => {
      cancelled = true;
      swiperInstance.current?.destroy();
      swiperInstance.current = null;
    };
  }, []);

  return (
    <div className="mainBanner2">
      <a href="#counter" className="an-scroll-bottom d-none d-md-block">
        <img src="/assets/images/banner-slider/arrow-bottom.webp" alt="arrow-bottom" />
      </a>
      <div className="container">
        <div className="bannerCont">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="mainCont2">
                <h2>Build a Shopify store that drives results.</h2>
                <p>
                  Shopify is a top choice for online businesses. Whether you&apos;re starting fresh or moving an
                  established business to Shopify, we&apos;ll help your brand reach its full potential. Our Shopify
                  store development ensures maximum lead generation and exponential sales growth.
                </p>
                <ul>
                  <li>Mobile-responsive Shopify designs for all devices</li>
                  <li>Ongoing maintenance and updates for Shopify stores</li>
                  <li>Expert in-house team of designers, developers, and marketers</li>
                </ul>
                <div className="banner-btn">
                  <a href="#" className="banner-mainBtn getstarted popbtn">
                    Let&apos;s Get Started
                  </a>
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
            </div>
            <div className="col-md-6 d-none d-md-block position-relative">
              <div className="banner-images">
                <img src="/assets/images/banner/back.png" className="banner-back" alt="" />
              </div>
              <div className="banner-circle">
                <div className="swiper mySwiper" ref={swiperRef}>
                  <div className="swiper-wrapper">
                    {BANNER_SLIDES.map((src) => (
                      <div className="swiper-slide" key={src}>
                        <img src={src} alt="" width={596} height={545} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <img className="shopifybadge" src="/assets/images/shopifybadge.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
