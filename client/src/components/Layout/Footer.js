import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="footer">
                  <h3 className="footer-title">About Us</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut.
                  </p>
                  <ul className="footer-links">
                    <li>
                      <a href="#">
                        <i className="fa fa-map-marker text-danger" />
                        1734 Stonecoal Road
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-phone text-danger" />
                        +1 021-95-51-84
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope text-danger" />
                        email@email.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="footer">
                  <h3 className="footer-title">Categories</h3>
                  <ul className="footer-links">
                    <li>
                      <a href="#">Hot deals</a>
                    </li>
                    <li>
                      <a href="#">Laptops</a>
                    </li>
                    <li>
                      <a href="#">Smartphones</a>
                    </li>
                    <li>
                      <a href="#">Cameras</a>
                    </li>
                    <li>
                      <a href="#">Accessories</a>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="col-12 col-md-6 col-lg-3 ">
                <div className="footer">
                  <h3 className="footer-title">Informations</h3>
                  <ul className="footer-links">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Orders and Returns</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="footer">
                  <h3 className="footer-title">Services</h3>
                  <ul className="footer-links">
                    <li>
                      <a href="#">My Account</a>
                    </li>
                    <li>
                      <a href="#">View Cart</a>
                    </li>
                    <li>
                      <a href="#">Wishlist</a>
                    </li>
                    <li>
                      <a href="#">Track My Order</a>
                    </li>
                    <li>
                      <a href="#">Help</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="bottom-footer" className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <ul className="footer-payments">
                  <li>
                    <a href="#">
                    <i class="fa-brands fa-cc-visa text-secondary" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-credit-card text-secondary" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-cc-paypal text-secondary" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-cc-mastercard text-secondary" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-cc-discover text-secondary" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-cc-amex text-secondary" />
                    </a>
                  </li>
                </ul>
                <span className="copyright mb-3">
                  Copyright &copy; 2024. All Rights Reserved | This Project is made by{" "}
                  <a href="#" target="_blank" class="fs-5 fst-italic text-decoration-none" style={{color:"#DC3545"}}>
                    NovaShop
                  </a>.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>

    // <div className="footer">
    //   <p className="text-center mt-3">
    //     <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
    //     <Link to="/policy">Privacy Policy</Link>
    //   </p>
    //   <h5 className="text-center">All Right Reserved &copy; Aniket IKhar</h5>
    // </div>
  );
};

export default Footer;
