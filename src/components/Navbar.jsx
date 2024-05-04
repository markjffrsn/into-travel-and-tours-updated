import { NavLink } from "react-router-dom";
import Icons from "./Icons";
import Accounts from "./SocialLinks";
import "../css/App.css";

export default function Navbar() {
  // Backdrop for header in scroll

  window.addEventListener("scroll", function () {
    const navigationBar = document.querySelector("nav");
    const shouldStick = window.scrollY > 0;
    navigationBar.classList.toggle("sticky", shouldStick);
  });

  const toggleMobileMenu = () => {
    const header = document.querySelector(".desktop-nav");
    const mobileMenu = document.getElementById("mobile-items");
    const body = document.querySelector("body");

    if (header.classList.contains("open-menu")) {
      // Close mobile menu
      header.classList.remove("open-menu");
      mobileMenu.style.transform = "translateX(100%)";
      body.classList.remove("noscroll");
    } else {
      // Open mobile menu
      header.classList.add("open-menu");
      mobileMenu.removeAttribute("style");
      body.classList.add("noscroll");
    }
  };

  const btnHamburgerMenu = () => {
    toggleMobileMenu();
  };

  return (
    <header>
      <nav className="container-fluid desktop-nav">
        <a
          href="/"
          className="logo d-flex justify-content-center align-items-center"
          style={{
            gap: ".6rem",
          }}
        >
          {/* <img src="../img/logo.png" width="35px" height="35px" /> */}

          {Icons.logoDark}
        </a>
        <ul className="desktop-items">
          <li className="normal-link">
            <NavLink to="/" className="nav-item">
              Home
            </NavLink>
          </li>

          <li className="normal-link">
            <NavLink to="/tours" className="nav-item">
              Tour Package
            </NavLink>
          </li>

          <li className="normal-link">
            <NavLink to="/about" className="nav-item">
              About Us
            </NavLink>
          </li>

          <li className="normal-link">
            <NavLink to="/contact" className="nav-item">
              Contact Us
            </NavLink>
          </li>
        </ul>

        <div className="social-accounts">
          <a
            href={Accounts.facebook}
            target="_blank"
            className="acc-link facebook"
          >
            {Icons.facebook}
          </a>
          <a
            href={Accounts.instagram}
            target="_blank"
            className="acc-link instagram"
          >
            {Icons.instagram}
          </a>
          <a href={Accounts.tiktok} target="_blank" className="acc-link tiktok">
            {Icons.tiktok}
          </a>
          <a
            href={Accounts.whatsapp}
            target="_blank"
            className="acc-link whatsapp"
          >
            {Icons.whatsapp}
          </a>
        </div>

        {/* Hamburger Menu */}
        <a
          onClick={btnHamburgerMenu}
          id="btnMobileMenu"
          className="mobile-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </nav>

      {/* Mobile Menu Items */}
      <div
        className="mobile-items"
        id="mobile-items"
        style={{ transform: "translateX(100%)" }}
      >
        <ul>
          <li className="normal-link">
            <NavLink
              to="/"
              className="mobile-nav-item"
              onClick={btnHamburgerMenu}
            >
              Home
            </NavLink>
          </li>

          <li className="normal-link">
            <NavLink
              to="/tours"
              className="mobile-nav-item"
              onClick={btnHamburgerMenu}
            >
              Tour Package
            </NavLink>
          </li>

          <li className="normal-link">
            <NavLink
              to="/about"
              className="mobile-nav-item"
              onClick={btnHamburgerMenu}
            >
              About Us
            </NavLink>
          </li>

          <li className="normal-link">
            <NavLink
              to="/contact"
              className="mobile-nav-item"
              onClick={btnHamburgerMenu}
            >
              Contact Us
            </NavLink>
          </li>

          <hr className="hr" />

          <div className="social-accounts-mobile d-flex align-items-center justify-content-flex-start gap-1">
            <h6>Follow us on</h6>
            <a
              href={Accounts.facebook}
              target="_blank"
              className="acc-link facebook"
            >
              {Icons.facebook}
            </a>
            <a
              href={Accounts.instagram}
              target="_blank"
              className="acc-link instagram"
            >
              {Icons.instagram}
            </a>
            <a
              href={Accounts.tiktok}
              target="_blank"
              className="acc-link tiktok"
            >
              {Icons.tiktok}
            </a>
            {/* <a
							href={Accounts.whatsapp}
							target="_blank"
							className="acc-link whatsapp"
						>
							{Icons.whatsapp}
						</a> */}
          </div>
        </ul>
      </div>
    </header>
  );
}
