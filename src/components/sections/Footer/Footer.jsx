import "./Footer.css";
import logo from "../../../assets/images/footer-logo.svg";

function Footer() {
    return (
        <footer className="footer">

            <div className="container">

                <div className="footer-grid">

                    {/* Logo */}

                    <div className="footer-about">

                        <img
                            src={logo}
                            alt="AutoVault"
                            className="footer-logo"
                        />

                        <p>
                            AutoVault offers premium luxury cars with
                            exceptional customer service and a modern
                            buying experience.
                        </p>

                        <h5>Newsletter</h5>

                        <div className="newsletter">

                            <input
                                type="email"
                                placeholder="Your email address"
                            />

                            <button>
                                Subscribe
                            </button>

                        </div>

                    </div>

                    {/* Legal */}

                    <div className="footer-links">

                        <h4>Legal</h4>

                        <a href="#">Privacy Policy</a>

                        <a href="#">Terms & Conditions</a>

                        <a href="#">Cookie Policy</a>

                        <a href="#">Disclaimer</a>

                    </div>

                    {/* Contact */}

                    <div className="footer-contact">
                        <h4>Contact Us</h4>

                        <p>
                            <i className="bi bi-telephone-fill"></i>
                            <span>
                                <strong>Call Us Now</strong>
                                <small>+1 250 555 0199</small>
                            </span>
                        </p>

                        <p>
                            <i className="bi bi-envelope-fill"></i>
                            <span>
                                <strong>Send Us Email</strong>
                                <small>autovault@gmail.com</small>
                            </span>
                        </p>

                        <p>
                            <i className="bi bi-geo-alt-fill"></i>
                            <span>
                                <strong>Our Location</strong>
                                <small>Toronto, Canada</small>
                            </span>
                        </p>

                        <p>
                            <i className="bi bi-clock-fill"></i>
                            <span>
                                <strong>Working Hours</strong>
                                <small>Monday - Friday : 8:30 AM - 5:30 PM</small>
                            </span>
                        </p>
                    </div>

                </div>

                <hr />

                <div className="footer-bottom">

                    <p>
                        © 2026 AutoVault. All Rights Reserved.
                    </p>

                    <div className="socials">
                        <p>
                            Follow us
                        </p>

                        <a href="#"><i className="bi bi-facebook"></i></a>

                        <a href="#"><i className="bi bi-twitter-x"></i></a>

                        <a href="#"><i className="bi bi-instagram"></i></a>

                        <a href="#"><i className="bi bi-linkedin"></i></a>

                        <a href="#"><i className="bi bi-youtube"></i></a>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;