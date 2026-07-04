import "./Hero.css";
import heroBg from "../../../assets/images/blog-1.webp";
import lineSvg from "../../../assets/images/line.svg";
function Hero() {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="container hero-content-container d-flex flex-column align-items-center justify-content-center text-center">
        {/* Subtitle */}
        <span className="hero-subtitle mb-3 text-uppercase">
          Shop With Confidence – Quality Vehicles
        </span>

        {/* Main Title */}
        <div className="hero-overlay" style={{ zIndex: 0 }}></div>
        <h1 className="hero-title mb-4">
          Discover Our Best Deals On <br />
          New And Used <span className="highlight-text">
            Cars

          </span>
        </h1>

        {/* Search box placed directly below title */}
        {/* Search form placed directly below title */}
        <div className="search-box d-flex align-items-center bg-white rounded-pill shadow-sm px-3 py-2 mx-auto mt-4">
          <div className="select-wrapper flex-fill me-2 position-relative">
            <select className="form-select custom-select w-100" defaultValue="">
              <option disabled value="">Car Condition</option>
              <option>New</option>
              <option>Used</option>
            </select>
            <i className="bi bi-chevron-down position-absolute end-0 top-50 translate-middle-y me-2"></i>
          </div>
          <div className="select-wrapper flex-fill me-2 position-relative">
            <select className="form-select custom-select w-100" defaultValue="">
              <option disabled value="">Car Brand</option>
              <option>Toyota</option>
              <option>Honda</option>
              <option>Ford</option>
            </select>
            <i className="bi bi-chevron-down position-absolute end-0 top-50 translate-middle-y me-2"></i>
          </div>
          <div className="select-wrapper flex-fill me-2 position-relative">
            <select className="form-select custom-select w-100" defaultValue="">
              <option disabled value="">Car Model</option>
              <option>Camry</option>
              <option>Civic</option>
              <option>Mustang</option>
            </select>
            <i className="bi bi-chevron-down position-absolute end-0 top-50 translate-middle-y me-2"></i>
          </div>
          <button className="btn btn-warning btn-gradient rounded-pill flex-shrink-0">Search</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;