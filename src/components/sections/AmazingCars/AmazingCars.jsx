import { useState } from "react";
import "./AmazingCars.css";

import lineSvg from "../../../assets/images/line.svg";

import car1 from "../../../assets/images/car-featured.webp";
import car2 from "../../../assets/images/car-amazing-1.webp";
import car3 from "../../../assets/images/car-amazing-2.webp";
import car4 from "../../../assets/images/car-amazing-3.webp";

const cars = [
  {
    id: 1,
    name: "Nissan GT-R R34",
    image: car1,
    price: "$20,000",
    oldPrice: "$25,000",
    transmission: "Manual",
    mileage: "2,300 mi",
    fuel: "Gasoline",
    featured: true,
  },
  {
    id: 2,
    name: "Audi R8 Spyder",
    image: car2,
    price: "$85,000",
    oldPrice: "$95,000",
    transmission: "Automatic",
    mileage: "1,200 mi",
    fuel: "Gasoline",
    featured: true,
  },
  {
    id: 3,
    name: "Ford Mustang Shelby",
    image: car3,
    price: "$45,000",
    oldPrice: "$52,000",
    transmission: "Manual",
    mileage: "4,500 mi",
    fuel: "Gasoline",
    featured: false,
  },
  {
    id: 4,
    name: "Porsche 911 GT3",
    image: car4,
    price: "$120,000",
    oldPrice: "$135,000",
    transmission: "Automatic",
    mileage: "6,800 mi",
    fuel: "Gasoline",
    featured: true,
  },
];
function AmazingCars() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCar = cars[activeIndex];

  const prevIndex = (activeIndex - 1 + cars.length) % cars.length;
  const nextIndex = (activeIndex + 1) % cars.length;

  const previous = cars[prevIndex];
  const next = cars[nextIndex];

  const changeCar = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="amazing-section">
      <div className="container">

        {/* Header */}
        <div className="section-header text-center">
          <span className="section-subtitle">
            SELECT CAR
          </span>

          <h2 className="section-title">
            Our Amazing{" "}
            <span className="highlight">
              Car
              <img
                src={lineSvg}
                alt=""
                className="title-line"
              />
            </span>
          </h2>
        </div>

        {/* Coverflow */}
        <div className="carousel-controls">



        </div>
        <div className="coverflow">

          <div
            className="side-card left"
            onClick={() => changeCar(prevIndex)}
          >
            <img
              src={previous.image}
              alt={previous.name}
              className="side-image"
            />
          </div>

          <div className="center-card">

            <img
              src={activeCar.image}
              alt={activeCar.name}
              className="center-image"
            />

            <div className="price-tag">
              <span>{activeCar.oldPrice}</span>
              <h4>{activeCar.price}</h4>
            </div>

            {activeCar.featured && (
              <div className="featured-tag">
                Featured
              </div>
            )}

          </div>

          <div
            className="side-card right"
            onClick={() => changeCar(nextIndex)}
          >
            <img
              src={next.image}
              alt={next.name}
              className="side-image"
            />
          </div>

        </div>

        {/* Details Card */}
        <div className="details-card">

          <h2>{activeCar.name}</h2>

          <div className="specs">

            <div className="spec-item">
              <i className="bi bi-sliders"></i>
              <span>{activeCar.transmission}</span>
            </div>

            <div className="spec-item">
              <i className="bi bi-speedometer2"></i>
              <span>{activeCar.mileage}</span>
            </div>

            <div className="spec-item">
              <i className="bi bi-fuel-pump"></i>
              <span>{activeCar.fuel}</span>
            </div>
          </div>

          <div className="details-footer">

            <button className="view-btn">
              View Details
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AmazingCars;