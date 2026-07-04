import "./CTA.css";

function CTA() {
  return (
    <section className="cta-section">

      <div className="container">

        <div className="cta-wrapper">

          {/* Left */}

          <div className="cta-content">

            <span className="cta-subtitle">
              CONTACT US
            </span>

            <h2>
              If You Have Any
              <br />
              Questions Please
              <br />
              Call Us
            </h2>

          </div>

          {/* Right */}

          <div className="cta-phone">

            <div className="phone-icon">

              <i className="bi bi-telephone-fill"></i>

            </div>

            <div>


              <h3>+1250 5550199</h3>

            </div>

          </div>

          {/* Decorative Circle */}

          <div className="circle one"></div>
          <div className="circle two"></div>

        </div>

      </div>

    </section>
  );
}

export default CTA;