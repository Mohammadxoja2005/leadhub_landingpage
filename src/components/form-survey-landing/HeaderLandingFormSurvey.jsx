import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import HeaderPopupForm from "../form/HeaderPopupForm";
import MegaMenuLanding from "../../components/header/mega-menu/MegaMenuLanding";

Modal.setAppElement("#root");

const HeaderLandingFormSurvey = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {/* =============================================
				Theme Main Menu
			==============================================  */}
      <div
        className={
          navbar
            ? "theme-main-menu sticky-menu  theme-menu-six bg-none fixed"
            : "theme-main-menu sticky-menu  theme-menu-six bg-none"
        }
      >
        <div className="d-flex align-items-center">
          <div className="logo order-lg-1">
            <Link to="/event-organizer">
              <img src="images/logo/deski_06.svg" alt="brand" />
            </Link>
          </div>
          {/* End logo */}

          <div className="right-widget ms-xl-5 order-lg-3">
            <ul className="d-flex align-items-center">
              <li>
                <Link
                  to="/login"
                  className="signIn-action d-flex align-items-center"
                >
                  <img src="images/icon/120.svg" alt="icon" />
                  <span>login</span>
                </Link>
              </li>
              <li>
                <button
                  className="demo-button d-none d-sm-block"
                  onClick={toggleModalOne}
                >
                  <span>Request A Demo</span>
                </button>
              </li>
            </ul>
          </div>

          <nav
            id="mega-menu-holder"
            className="navbar navbar-expand-lg ms-lg-auto order-lg-2"
          >
            <div className="container nav-container">
              <div className="mob-header">
                <button className="toggler-menu" onClick={handleClick}>
                  <div className={click ? "active" : ""}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </div>
              {/* End Header */}

              <div
                className="navbar-collapse collapse landing-menu-onepage"
                id="navbarSupportedContent"
              >
                <div className="d-lg-flex justify-content-between align-items-center">
                  <Scrollspy
                    className="navbar-nav  main-side-nav font-gordita"
                    items={[
                      "home",
                      "feature",
                      "product",
                      "feedback",
                      "pricing",
                    ]}
                    currentClassName="active"
                    offset={-500}
                  >
                    <li className="nav-item dropdown position-static">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#home"
                        data-toggle="dropdown"
                      >
                        Home
                      </a>
                      <div className="dropdown-menu">
                        <MegaMenuLanding />
                      </div>
                    </li>
                    <li className="nav-item">
                      <a href="#feature" className="nav-link">
                        Features
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#product" className="nav-link">
                        Product
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#feedback" className="nav-link">
                        Feedback
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#pricing" className="nav-link">
                        Pricing
                      </a>
                    </li>
                  </Scrollspy>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* /.theme-main-menu */}

      {/* Mobile Menu Start */}
      <div className={click ? "mobile-menu  menu-open" : "mobile-menu"}>
        <div className="logo order-md-1">
          <Link to="/event-organizer">
            <img src="images/logo/deski_06.svg" alt="brand" />
          </Link>
          <div className="fix-icon text-dark" onClick={handleClick}>
            <img src="images/icon/close.svg" alt="icon" />
          </div>
          {/* Mobile Menu close icon */}
        </div>

        <Scrollspy
          className="navbar-nav"
          id="theme-menu-list"
          items={["home", "feature", "product", "feedback", "pricing"]}
          currentClassName="active"
          offset={-200}
        >
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={handleClick}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#feature" className="nav-link" onClick={handleClick}>
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#product" className="nav-link" onClick={handleClick}>
              Product
            </a>
          </li>
          <li className="nav-item">
            <a href="#feedback" className="nav-link" onClick={handleClick}>
              Feedback
            </a>
          </li>
          <li className="nav-item">
            <a href="#pricing" className="nav-link" onClick={handleClick}>
              Pricing
            </a>
          </li>
        </Scrollspy>
      </div>
      {/* Mobile Menu End */}

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal  modal-contact-popup-one"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="box_inner ">
          <main className="main-body box_inner modal-content clearfix">
            <button className="close" onClick={toggleModalOne}>
              <img src="images/icon/close.svg" alt="close" />
            </button>
            {/* End close icon */}

            <div className="left-side">
              <div className="d-flex flex-column justify-content-between h-100">
                <div className="row">
                  <div className="col-xl-10 col-lg-8 m-auto">
                    <blockquote>
                      “I never dreamed about success. I worked for it.”
                    </blockquote>
                    <span className="bio">—Estée Lauder</span>
                  </div>
                </div>
                <img
                  src="images/assets/ils_18.svg"
                  alt=""
                  className="illustration mt-auto"
                />
              </div>
            </div>
            {/* /.left-side */}

            <div className="right-side">
              <h2 className="form-title">Contact us</h2>
              <HeaderPopupForm />
            </div>
            {/*  /.right-side */}
          </main>
          {/* /.main-body */}
        </div>
      </Modal>
      {/* End  Modal For Request a demo */}
    </>
  );
};

export default HeaderLandingFormSurvey;
