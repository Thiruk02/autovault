import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../../assets/images/logo.svg";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header-container ${isScrolled ? "is-scrolled" : ""}`}> 
      {/* Header wrapper that contains logo and the rest */}
      <div className="header-inner d-flex align-items-center">
        {/* Logo – spans both top bar and navigation */}
        <div className="brand-logo-wrapper me-4">
          <a href="/" className="d-flex align-items-center text-decoration-none">
            <img src={logo} alt="AutoVault" className="navbar-logo" />
          </a>
        </div>
        {/* Right side – top info bar and main navigation */}
        <div className="header-right flex-grow-1">
          {/* Top Information Bar */}
          <div className="top-info-bar py-3 d-none d-lg-block">
            <div className="container-fluid d-flex justify-content-between align-items-center">
              <div className="contact-details d-flex gap-4">
                <div className="contact-item d-flex align-items-center gap-2">
                  <div className="icon-wrapper"><i className="bi bi-telephone-fill"></i></div>
                  <div className="contact-text">
                    <span className="label">Call Us Now</span>
                    <span className="value">+12505550199</span>
                  </div>
                </div>
                <div className="contact-item d-flex align-items-center gap-2">
                  <div className="icon-wrapper"><i className="bi bi-envelope-fill"></i></div>
                  <div className="contact-text">
                    <span className="label">Send US Email</span>
                    <span className="value">AutoVault@gmail.com</span>
                  </div>
                </div>
                <div className="contact-item d-flex align-items-center gap-2">
                  <div className="icon-wrapper"><i className="bi bi-geo-alt-fill"></i></div>
                  <div className="contact-text">
                    <span className="label">Our Location</span>
                    <span className="value">M5T 2L9 Toronto, Canada</span>
                  </div>
                </div>
              </div>
              <div className="social-links d-flex align-items-center gap-3">
                <span className="follow-label">Follow Us On:</span>
                <div className="social-icons d-flex gap-2">
                  <a href="#" className="social-icon"><i className="bi bi-twitter-x"></i></a>
                  <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="social-icon"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Navigation Bar */}
          <div className="main-navigation-bar">
            <div className="container-fluid d-flex align-items-center justify-content-between">
              {/* Navigation Links */}
              <nav className={`nav-menu-links d-flex align-items-center ${isMobileOpen ? "is-open" : ""}`}>
                <div className="nav-menu-item has-dropdown">
                  <a href="/" className="nav-menu-link">Home <i className="bi bi-chevron-down"></i></a>
                  <div className="submenu">
                    <a href="#">Modern Home</a>
                    <a href="#">Classic Home</a>
                    <a href="#">Minimalist Home</a>
                  </div>
                </div>
                <div className="nav-menu-item has-dropdown">
                  <a href="/inventory" className="nav-menu-link">Inventory <i className="bi bi-chevron-down"></i></a>
                  <div className="submenu">
                    <a href="#">Grid Listing</a>
                    <a href="#">List Listing</a>
                    <a href="#">Map Split View</a>
                  </div>
                </div>
                <div className="nav-menu-item has-dropdown">
                  <a href="/listings" className="nav-menu-link">Listings <i className="bi bi-chevron-down"></i></a>
                  <div className="submenu">
                    <a href="#">Add New Listing</a>
                    <a href="#">Manage Listings</a>
                  </div>
                </div>
                <div className="nav-menu-item has-dropdown">
                  <a href="#" className="nav-menu-link">Page <i className="bi bi-chevron-down"></i></a>
                  <div className="submenu">
                    <a href="/about">About Us</a>
                    <a href="#">Services</a>
                    <a href="#">FAQ</a>
                    <a href="#">404 Page</a>
                  </div>
                </div>
                <div className="nav-menu-item has-dropdown">
                  <a href="#" className="nav-menu-link">Shop <i className="bi bi-chevron-down"></i></a>
                  <div className="submenu">
                    <a href="#">Shop Products</a>
                    <a href="/contact">Contact</a>
                    <a href="#">Checkout</a>
                  </div>
                </div>
                <div className="nav-menu-item">
                  <a href="#" className="nav-menu-link">Contact</a>
                </div>
              </nav>

              {/* Action Buttons */}
              <div className="nav-actions-wrapper d-flex align-items-center gap-3">
                <button className="btn-profile d-none d-sm-flex align-items-center gap-2">
                  <i className="bi bi-person"></i>
                  <span>Profile</span>
                </button>
                <button className="btn-add-car d-flex align-items-center gap-2">
                  <i className="bi bi-car-front"></i>
                  <span>Add Car</span>
                </button>
                <button className={`hamburger-toggle d-lg-none ${isMobileOpen ? "active" : ""}`} onClick={() => setIsMobileOpen(!isMobileOpen)}>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
