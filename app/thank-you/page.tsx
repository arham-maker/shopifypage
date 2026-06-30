import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Shopify EcomSolution",
  description: "Thank you for contacting Shopify EcomSolution.",
};

export default function ThankYouPage() {
  return (
    <section className="contactSec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="common-heading">
              <h2>Thank <span>You</span></h2>
              <p>
                Your submission was received. Our team will get back to you
                shortly at the email address you provided.
              </p>
              <Link href="/" className="white-btn">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
