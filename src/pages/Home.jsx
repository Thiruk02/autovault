import Navbar from "../components/layout/Navbar/Navbar";
import Hero from "../components/sections/Hero/Hero";
import Brands from "../components/sections/Brands/Brands";
import AmazingCars from "../components/sections/AmazingCars/AmazingCars";
import FeaturedCars from "../components/sections/FeaturedCars/FeaturedCars";
import About from "../components/sections/About/About";
import VideoSection from "../components/sections/VideoSection/VideoSection";
import PremiumBrands from "../components/sections/PremiumBrands/PremiumBrands";
import Testimonial from "../components/sections/Testimonials/Testimonials";
import WhyChoose from "../components/sections/WhyChoose/WhyChoose";
import LatestBlog from "../components/sections/LatestBlog/LatestBlog";
import CTA from "../components/sections/CTA/CTA";
import Footer from "../components/sections/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <AmazingCars />
      <FeaturedCars />
      <About />
      <VideoSection />
      <PremiumBrands />
      <Testimonial />
      <WhyChoose />
      <LatestBlog />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;