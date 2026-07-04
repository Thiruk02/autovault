import { useState } from "react";
import "./Brands.css";
import brand1 from "../../../assets/images/brand-1.svg";
import brand2 from "../../../assets/images/brand-2.svg";
import brand3 from "../../../assets/images/brand-3.svg";
import brand4 from "../../../assets/images/brand-4.svg";
import brand5 from "../../../assets/images/brand-5.svg";
import brand6 from "../../../assets/images/brand-6.svg";
import lineSvg from "../../../assets/images/line.svg";

const brandsData = [
  { id: 1, name: "Jeep", logo: brand1, count: "4 Car" },
  { id: 2, name: "Ford", logo: brand2, count: "4 Car" },
  { id: 3, name: "Mercedes", logo: brand3, count: "4 Car" },
  { id: 4, name: "BMW", logo: brand4, count: "1 Car" },
  { id: 5, name: "Honda", logo: brand5, count: "3 Car" },
  { id: 6, name: "Audi", logo: brand6, count: "2 Car" },
];

function Brands() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 3;

  const maxIndex = brandsData.length - visibleCards;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="brands-section-wrapper py-5">
      <div className="container">

        {/* Section Heading */}
        <div className="section-header text-center mb-5">
          <span className="section-subtitle text-uppercase">Car Brand</span>
          <h2 className="section-title">
            Browse By <span className="highlight-text">
              Car
              <img src={lineSvg} alt="decoration" className="title-underline-decor" />
            </span> Make
          </h2>
        </div>

        {/* Brands Scroll Container */}
        <div className="brands-carousel-container">

          <div
            className="brands-row"
            style={{
              transform: `translateX(-${currentIndex * 33.333}%)`
            }}
          >
            {brandsData.map((brand) => (
              <div className="brand-card-col" key={brand.id}>
                <div className="brand-card-item">
                  <div className="brand-logo-container">
                    <img src={brand.logo} alt={brand.name} className="brand-logo-img" />
                  </div>
                  <h4 className="brand-name">{brand.name}</h4>
                  <span className="brand-count">{brand.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots (Visual/Static) */}
        <div className="brands-pagination">

          {Array.from({ length: maxIndex + 1 }).map((_, index) => (

            <span
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />

          ))}

        </div>

      </div>
    </section>
  );
}

export default Brands;
