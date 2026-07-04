import "./LatestBlog.css";

import lineSvg from "../../../assets/images/line.svg";

import blog1 from "../../../assets/images/blog-1.webp";
import blog2 from "../../../assets/images/blog-2.webp";

const blogs = [
  {
    id: 1,
    image: blog1,
    date: "February 18, 2026",
    title: "We strive to deliver a superior experience with AutoVault Rock!",
  },
  {
    id: 2,
    image: blog2,
    date: "February 18, 2026",
    title: "The Latest Trends in Car You Should Know About!",
  },
];

function LatestBlog() {
  return (
    <section className="latest-blog-section">

      <div className="container">

        <div className="latest-blog-wrapper">

          {/* LEFT */}

          <div className="blog-left">

            <span className="section-subtitle">
              Latest Blog
            </span>

            <h2 className="section-title">

              Our Latest

              <span className="highlight">

                Blog

                <img
                  src={lineSvg}
                  alt=""
                  className="title-line"
                />

              </span>

            </h2>

            <p>

              Welcome to AutoVault where innovation
              drives every journey. Discover a range
              of premium vehicles and expert insights
              to elevate your driving experience.

            </p>

            <a href="#">
              Read All Blog
            </a>

          </div>

          {/* RIGHT */}

          <div className="blog-right">

            {blogs.map((blog) => (

              <div
                className="blog-card"
                key={blog.id}
              >

                <div className="blog-image">

                  <img
                    src={blog.image}
                    alt=""
                  />

                </div>

                <div className="blog-content">

                  <span className="blog-date">
                    {blog.date}
                  </span>

                  <h3>
                    {blog.title}
                  </h3>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default LatestBlog;