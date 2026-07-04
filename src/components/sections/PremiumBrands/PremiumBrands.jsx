import "./PremiumBrands.css";
import jeep from "../../../assets/images/brand-1.svg";
import ford from "../../../assets/images/brand-2.svg";
import mazda from "../../../assets/images/brand-3.svg";
import bmw from "../../../assets/images/brand-4.svg";
import honda from "../../../assets/images/brand-5.svg";
import audi from "../../../assets/images/brand-6.svg";
import lineSvg from "../../../assets/images/line.svg";

const brands = [
    { id: 1, logo: jeep, name: "Jeep" },
    { id: 2, logo: ford, name: "Ford" },
    { id: 3, logo: mazda, name: "Mazda" },
    { id: 4, logo: bmw, name: "BMW" },
    { id: 5, logo: honda, name: "Honda" },
    { id: 6, logo: audi, name: "Audi" },
];

function PremiumBrands() {
    return (
        <section className="premium-brand-section">

            <div className="container">

                <div className="section-header text-center">

                    <span className="section-subtitle">
                        Car Brand
                    </span>

                    <h2 className="section-title">
                        Our Premium{" "}
                        <span className="highlight">
                            Brands
                            <img src={lineSvg} alt="" className="title-line" />
                        </span>
                    </h2>

                </div>

                <div className="brand-grid">

                    {brands.map((brand) => (

                        <div className="brand-box" key={brand.id}>

                            <img src={brand.logo} alt={brand.name} />

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default PremiumBrands;