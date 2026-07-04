import "./WhyChoose.css";
import choose1 from "../../../assets/images/why-choose-bg.webp";
import choose2 from "../../../assets/images/why-choose-bg.webp";
import lineSvg from "../../../assets/images/line.svg";

function WhyChoose() {
  return (
    <section className="whychoose-section">

      {/* Left Images */}
      <div className="whychoose-images">
        <img src={choose1} alt="Luxury Car" className="top-image" />
        <img src={choose2} alt="Luxury Car" className="bottom-image" />
      </div>

      {/* Right Content */}
      <div className="whychoose-content">

        <span className="why-subtitle">
          Why Choose Us
        </span>

        <h2 className="why-title">
          Why Choose{" "}
          <span className="highlight">
            Us
            <img
              src={lineSvg}
              alt="underline"
              className="title-line"
            />
          </span>
        </h2>

        <div className="why-grid">

          <div className="why-item">
            <div className="why-icon">
              <i className="bi bi-cash-stack"></i>
            </div>

            <div>
              <h4>Competitive Pricing</h4>

              <p>
                Whether you're looking for a brand-new model
                or a certified pre-owned vehicle, we offer
                competitive prices for every budget.
              </p>
            </div>
          </div>

          <div className="why-item">
            <div className="why-icon">
              <i className="bi bi-headset"></i>
            </div>

            <div>
              <h4>24 Hour Support</h4>

              <p>
                Our dedicated support team is available
                anytime to help you before and after
                your purchase.
              </p>
            </div>
          </div>

          <div className="why-item">
            <div className="why-icon">
              <i className="bi bi-geo-alt"></i>
            </div>

            <div>
              <h4>GPS On Every Vehicle</h4>

              <p>
                Every vehicle comes equipped with
                advanced GPS technology for safety
                and convenience.
              </p>
            </div>
          </div>

          <div className="why-item">
            <div className="why-icon">
              <i className="bi bi-tools"></i>
            </div>

            <div>
              <h4>Expert Maintenance</h4>

              <p>
                Certified technicians ensure every
                vehicle is inspected and maintained
                to the highest standards.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;