"use client";

import { usePathname } from "next/navigation";

const serviceRoutes = ["services", "custom-shopify-theme", "ecom-marketing", "done-for-you"];

const getRoute = (pathname: string) => pathname.replace(/^\/|\/$/g, "");

const getItemClassName = (isActive: boolean, className?: string) =>
  [className, isActive ? "active" : ""].filter(Boolean).join(" ") || undefined;

export function SiteHeader() {
  const pathname = usePathname();
  const route = getRoute(pathname);
  const isServicesActive = serviceRoutes.includes(route);

  return (
    <header className="spad">
      <div className="main-header">
        <div className="container-fluid">
          <div className="menu-Bar">
            <span />
            <span />
            <span />
          </div>
          <div className="row align-items-center">
            <div className="col-md-3">
              <a href="/" className="logo">
                <img style={{maxWidth: 150}} src="/assets/images/logo-white.png" width="300px" alt="" />
                {/*<h2 class="text-white">Shopify EcomSolution</h2>*/}
              </a>
            </div>
            <div className="col-md-9 text-end">
              <div className="menuWrap">
                <ul className="menu">
                  <li className={getItemClassName(isServicesActive, "dropdown")}>
                    <a href="services">Services</a>
                    <ul className="dropdown-list">
                      <li className={getItemClassName(route === "custom-shopify-theme")}><a href="custom-shopify-theme">Shopify
                          services</a></li>
                      <li className={getItemClassName(route === "ecom-marketing")}><a href="ecom-marketing">E-Commerce
                          Marketing</a></li>
                      <li className={getItemClassName(route === "done-for-you")}><a href="done-for-you">Done
                          for You</a></li>
                      {/*<li><a href="ebook.php">E-book</a></li>*/}
                      {/* <li><a href="how-its-work.php">How Its Works</a></li> */}
                    </ul>
                  </li>
                  <li className={getItemClassName(route === "dropshipping")}><a href="dropshipping">Dropshipping</a></li>
                  <li className={getItemClassName(route === "about")}><a href="about">About Us</a></li>
                  <li className={getItemClassName(route === "portfolio")}><a href="portfolio">Portfolio</a></li>
                  <li className={getItemClassName(route === "process")}><a href="process">Process</a></li>
                  <li className={getItemClassName(route === "pricing")}><a href="pricing">Pricing</a></li>
                  <li className={getItemClassName(route === "faq")}><a href="faq">FAQs</a></li>
                  <li className={getItemClassName(route === "testimonials")}><a href="testimonials">Testimonials</a></li>
                  <li className={getItemClassName(route === "contact")}><a href="contact" className="hdr-btn">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}



