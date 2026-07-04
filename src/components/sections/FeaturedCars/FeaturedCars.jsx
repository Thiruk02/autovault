import { useState, useEffect } from "react";
import "./FeaturedCars.css";

import lineSvg from "../../../assets/images/line.svg";

import car1 from "../../../assets/images/car-featured.webp";
import car2 from "../../../assets/images/car-amazing-1.webp";
import car3 from "../../../assets/images/car-amazing-2.webp";
import car4 from "../../../assets/images/car-amazing-3.webp";

const cars = [
  {
    id: 1,
    name: "Mercedes-Benz AMG GT",
    image: car1,
    oldPrice: "$55,000",
    price: "$48,000",
    transmission: "Automatic",
    mileage: "500 mi",
    fuel: "Gasoline",
    featured: true,
    photos: "1/5",
    videos: "1/1",
  },
  {
    id: 2,
    name: "Audi RS7 Sportback",
    image: car2,
    oldPrice: "$52,000",
    price: "$46,000",
    transmission: "Automatic",
    mileage: "620 mi",
    fuel: "Gasoline",
    featured: true,
    photos: "1/6",
    videos: "1/2",
  },
  {
    id: 3,
    name: "BMW M4 Competition",
    image: car3,
    oldPrice: "$49,000",
    price: "$42,000",
    transmission: "Automatic",
    mileage: "450 mi",
    fuel: "Gasoline",
    featured: true,
    photos: "1/7",
    videos: "1/2",
  },
  {
    id: 4,
    name: "Porsche 911 GT3",
    image: car4,
    oldPrice: "$90,000",
    price: "$84,000",
    transmission: "Automatic",
    mileage: "300 mi",
    fuel: "Gasoline",
    featured: true,
    photos: "1/8",
    videos: "1/3",
  },
];

function FeaturedCars() {

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {

      setActiveIndex((prev) =>
        prev === cars.length - 1 ? 0 : prev + 1
      );

    }, 4000);

    return () => clearInterval(timer);

  }, []);

  const activeCar = cars[activeIndex];

  return (

    <section className="featured-section">

      <div className="container">

        <div className="section-header text-center">

          <span className="section-subtitle">

            FEATURED CARS

          </span>

          <h2 className="section-title">

            Our Featured

            <span className="highlight">

              Cars

              <img
                src={lineSvg}
                alt=""
                className="title-line"
              />

            </span>

          </h2>

        </div>

        <div className="featured-wrapper">

          <div className="featured-image">

            <img
              src={activeCar.image}
              alt={activeCar.name}
            />

            <div className="image-top">

              <span className="featured-badge">

                Featured

              </span>

            </div>

            <div className="image-bottom">

              <span>

                <i className="bi bi-camera-fill"></i>

                {activeCar.photos}

              </span>

              <span>

                <i className="bi bi-film"></i>

                {activeCar.videos}

              </span>

            </div>

          </div>
          <div className="featured-card">

            <div className="price-box">

              <span className="old-price">
                {activeCar.oldPrice}
              </span>

              <h3>{activeCar.price}</h3>

            </div>

            <h2>{activeCar.name}</h2>

            <div className="car-specs">

              <div className="spec">

                <i className="bi bi-sliders"></i>

                <span>{activeCar.transmission}</span>

              </div>

              <div className="spec">

                <i className="bi bi-speedometer2"></i>

                <span>{activeCar.mileage}</span>

              </div>

              <div className="spec">

                <i className="bi bi-fuel-pump"></i>

                <span>{activeCar.fuel}</span>

              </div>

            </div>

            <div className="card-footer">

              <div className="left-buttons">

                <button className="icon-btn">

                  <i className="bi bi-heart"></i>

                </button>

                <button className="icon-btn">

                  <i className="bi bi-arrow-repeat"></i>

                </button>

              </div>

              <button className="details-btn">

                View Details

              </button>

            </div>

          </div>

        </div>

        <div className="slider-dots">

          {cars.map((_, index) => (

            <button
              key={index}
              className={
                activeIndex === index
                  ? "dot active"
                  : "dot"
              }
              onClick={() => setActiveIndex(index)}
            />

          ))}

        </div>

      </div>

    </section>

  );
}

export default FeaturedCars;