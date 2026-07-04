import "./About.css";
import about1 from "../../../assets/images/about-3.webp";
import about2 from "../../../assets/images/about-2.webp";
import about3 from "../../../assets/images/about-1.webp";


function About() {
  return (
    <section className="about-section py-5 about-bg">
      <div className="container">
        <div className="about-content">
          {/* LEFT COLUMN - Image collage */}
          <div className="left-col">
            <div className="image-wrapper">
              <img src={about1} alt="Showroom 1" className="large-img" loading="lazy" />
              <img src={about2} alt="Showroom 2" className="medium-img" loading="lazy" />
              <img src={about3} alt="Showroom 3" className="small-img" loading="lazy" />
              {/* Floating statistics card */}
              <div className="stats-card">
                <div className="stats-number">1000+</div>
                <div className="stats-label">Car Sold Already</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Text content */}
          <div className="right-col">
            <h5 className="section-subtitle">About Us</h5>
            <h2 className="section-title">
              Driven by Excellence:<br />
              Your Trusted Partner<br />
              for Premium <span className="highlight-vehicles">
                Vehicles

              </span>
            </h2>
            <p className="about-description">
              Welcome to AutoVault, where innovation drives every journey. Discover a premium collection of luxury and performance vehicles designed to elevate your driving experience with quality, trust, and exceptional service.
            </p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
