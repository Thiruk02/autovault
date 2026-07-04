import "./Testimonials.css";
import { useState } from "react";

import lineSvg from "../../../assets/images/line.svg";

import person1 from "../../../assets/images/testi-1.webp";
import person2 from "../../../assets/images/testi-2.webp";

const reviews = [
  {
    id: 1,
    name: "Masahiro Moro",
    designation: "CEO Of Mazda",
    review:
      "The vehicle quality and customer service exceeded my expectations. Every step of the buying experience felt premium and professional.",
  },
  {
    id: 2,
    name: "Akio Toyoda",
    designation: "Chairman Of Toyota",
    review:
      "AutoVault made purchasing a luxury vehicle effortless. The staff were knowledgeable, transparent and incredibly helpful.",
  },
  {
    id: 3,
    name: "Oliver Zipse",
    designation: "CEO Of BMW",
    review:
      "From the showroom to delivery, everything was handled with excellence. I highly recommend AutoVault for premium vehicles.",
  },
  {
    id: 4,
    name: "Jim Farley",
    designation: "CEO Of Ford",
    review:
      "Outstanding service and an impressive collection of vehicles. The entire process was smooth and enjoyable.",
  },
];

function Testimonial() {

  const [activeIndex, setActiveIndex] = useState(0);

  const activeReview = reviews[activeIndex];

  return (

    <section className="testimonial-section">

      <div className="container">

        {/* Heading */}

        <div className="section-header text-center">

          <span className="section-subtitle">
            TESTIMONIAL
          </span>

          <h2 className="section-title">

            What Our Client

            <span className="highlight">

              Says

              <img
                src={lineSvg}
                alt=""
                className="title-line"
              />

            </span>

          </h2>

        </div>

        {/* Main Content */}

        <div className="testimonial-wrapper">

          {/* Left Images */}

          <div className="testimonial-images">

            <div className="small-image">

              <img
                src={person1}
                alt="Customer"
              />

            </div>

            <div className="large-image">

              <img
                src={person2}
                alt="Customer"
              />

            </div>

          </div>

          {/* Right Review */}

          <div className="testimonial-content">

            <div className="stars">

              ★★★★★

            </div>

            <p className="review-text">

              {activeReview.review}

            </p>

            <h3>

              {activeReview.name}

            </h3>

            <span className="designation">

              {activeReview.designation}

            </span>

            {/* Pagination */}

            <div className="testimonial-dots">

              {reviews.map((item, index) => (

                <button

                  key={item.id}

                  className={
                    activeIndex === index
                      ? "dot active"
                      : "dot"
                  }

                  onClick={() =>
                    setActiveIndex(index)
                  }

                ></button>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Testimonial;