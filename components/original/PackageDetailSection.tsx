import type { Package } from "@/lib/packages";

interface PackageDetailSectionProps {
  pkg: Package;
}

export function PackageDetailSection({ pkg }: PackageDetailSectionProps) {
  const popupRel = pkg.popupCat === "dropshipping" ? "dropshipping" : undefined;

  return (
    <section className="refundpage pacakgeDetailPg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="pckg-box active">
              <h3>{pkg.title}</h3>
              <p>{pkg.description}</p>
              <h4>
                {pkg.price}
                {pkg.monthly ? <sub>/month</sub> : null}{" "}
                <span>{pkg.comparePrice}</span>
              </h4>
              {pkg.priceNotes?.map((note) => (
                <p key={note}>{note}</p>
              ))}
              <br />
              <br />
              <div className="p-bottom">
                <a
                  href="#"
                  className="white-btn pkgetstrd-btn pckg-pop"
                  rel={popupRel}
                >
                  Get Started
                </a>
                <a href="#" className="white-btn chat-btn">
                  <i className="fas fa-comment-alt" /> Chat Now
                </a>
              </div>
              <ul className="d-none">
                {pkg.features.map((feature) => (
                  <li key={feature.text}>{feature.text}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="refund-con-box-container">
              <div className="refund-con-box">
                <ul>
                  {pkg.features.map((feature) => (
                    <li key={feature.text}>
                      {feature.heading ? <span>{feature.text}</span> : feature.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
