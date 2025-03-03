import React from "react";
import { Helmet } from "react-helmet";
import HeaderLandingMobileApp from "../../components/header/landing/HeaderLandingMobileApp";
import MobileAppPortfolio from "../../components/portfolio/MobileAppPortfolio";
import MobileAppScreenSlider from "../../components/portfolio/MobileAppScreenSlider";
import TestimonialThree from "../../components/testimonial/TestimonialThree";
import BrandThree from "../../components/brand/BrandThree";
import FooterSeven from "../../components/footer/FooterSeven";
import CopyRightThree from "../../components/footer/CopyRightThree";
import FancyFeatureTewentyThree from "../../components/features/FancyFeatureTewentyThree";
import PricingSeven from "../../components/pricing/PricingSeven";

const MobileAppLanding = () => {
  return (
    <div className="main-page-wrapper font-gordita">
      <Helmet>
        <title>
          {" "}
          Mobile App Landing || Deski-Saas & Software React Template
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLandingMobileApp />
      {/* End Mobile App Landing Header */}

      {/* =============================================
            Theme Hero Banner
        ==============================================  */}
      <div className="hero-banner-ten" id="home">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-11 col-md-8 m-auto">
              <h1
                className="hero-heading"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                Build your Product by Deski App.
              </h1>
              <p
                className="hero-sub-heading"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                Deski delivered blazing fast performance, striking word solution
              </p>
            </div>
          </div>
          {/* End .row */}

          <div className="d-sm-flex align-items-center justify-content-center button-group">
            <a
              href="#"
              className="d-flex align-items-center ios-button"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <img src="images/icon/apple.svg" alt="icon" className="icon" />
              <div>
                <span>Download on the</span>
                <strong>App store</strong>
              </div>
            </a>
            <a
              href="#"
              className="d-flex align-items-center windows-button"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="350"
            >
              <img
                src="images/icon/playstore.svg"
                alt="icon"
                className="icon"
              />
              <div>
                <span>Get it on</span>
                <strong>Google play</strong>
              </div>
            </a>
          </div>
        </div>
        {/* End .container */}

        <div className="icon-box-one">
          <img src="images/logo/logo-39.png" alt="icon" />
        </div>
        <div className="icon-box-two">
          <img src="images/logo/logo-40.png" alt="icon" />
        </div>
        <div className="icon-box-three">
          <img src="images/logo/logo-41.png" alt="icon" />
        </div>
        <div className="icon-box-four">
          <img src="images/logo/logo-42.png" alt="icon" />
        </div>
        <div className="icon-box-five">
          <img src="images/logo/logo-43.png" alt="icon" />
        </div>
        <div className="icon-box-six">
          <img src="images/logo/logo-44.png" alt="icon" />
        </div>
        <div className="icon-box-seven">
          <img src="images/logo/logo-45.png" alt="icon" />
        </div>
        <div className="icon-box-eight">
          <img src="images/logo/logo-46.png" alt="icon" />
        </div>
      </div>
      {/* /.hero-banner-ten */}

      {/* =============================================
            App Screen Preview
        ==============================================  */}
      <div className="app-screen-preview-one">
        <div className="container">
          <div className="app-preview-slider-one arrow-middle-center ">
            <MobileAppPortfolio />
          </div>
        </div>
        {/* End .container */}

        <img
          src="images/shape/bg5.svg"
          alt="shape"
          className="shapes round-bg"
        />
        <img
          src="images/shape/216.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/217.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <img
          src="images/shape/218.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <img
          src="images/shape/219.svg"
          alt="shape"
          className="shapes shape-four"
        />
      </div>
      {/* /.app-screen-preview-one  */}

      {/* =============================================
				Fancy Feature Twenty Two
			==============================================  */}
      <div
        className="fancy-feature-twentyTwo mpt-200 pt-130 md-mt-80 sm-pt-100"
        id="product"
      >
        <div className="container">
          <div className="title-style-ten mb-40 md-mb-20">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <h2>The Product we work with.</h2>
              </div>
              <div className="col-lg-5">
                <p className="md-pt-20">
                  Commonly used in the graphic, print& publishing industris for
                  previewing visual mockups.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <FancyFeatureTewentyThree />
          </div>
        </div>
      </div>
      {/* /.fancy-feature-twentyTwo */}

      {/* 	=============================================
            Fancy Feature Twenty Five
        ==============================================  */}
      <div
        className="fancy-feature-twentyFive lg-container pt-200 md-pt-100"
        id="features"
      >
        <div className="container">
          <div className="block-style-twentyFive">
            <div className="row align-items-center">
              <div
                className="col-xl-7 col-lg-6 col-md-10 m-auto"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="screen-container">
                  <img src="images/assets/screen_24.png" alt="screen" />
                </div>
                {/*  /.screen-container */}
              </div>
              <div
                className="col-xl-5 col-lg-6"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="text-wrapper ps-xl-5">
                  <h6>
                    Over <span>150,000+ client</span>
                  </h6>
                  <h3 className="title">Award winning application.</h3>
                  <p>
                    Commonly used in the graphic, prit quis & publishing indust
                    for previewing lorem visual mockups.
                  </p>
                </div>
                {/* /.text-wrapper */}
              </div>
            </div>
          </div>
          {/* /.block-style-twentyFive */}

          <div className="block-style-twentyFive mt-200 md-mt-100">
            <div className="row align-items-center">
              <div
                className="col-xl-7 col-lg-6 col-md-10 m-auto text-center text-lg-right order-lg-last"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="screen-container">
                  <img
                    src="images/shape/bg6.svg"
                    alt="shape"
                    className="ms-auto bg-round-shape"
                  />
                  <div className="block-content">
                    <div className="row align-items-center">
                      <div className="col-sm-6">
                        <div className="feature-meta">
                          <div className="icon d-flex align-items-end">
                            <img src="images/icon/136.svg" alt="" />
                          </div>
                          <h4>
                            Friendly <br /> user interface
                          </h4>
                        </div>
                        {/* /.feature-meta */}
                      </div>
                      {/* End .col */}

                      <div className="col-sm-6">
                        <div className="feature-meta">
                          <div className="icon d-flex align-items-end">
                            <img src="images/icon/137.svg" alt="" />
                          </div>
                          <h4>
                            SEO <br />
                            Optimization
                          </h4>
                        </div>
                        {/* /.feature-meta */}
                        <div className="feature-meta">
                          <div className="icon d-flex align-items-end">
                            <img src="images/icon/138.svg" alt="" />
                          </div>
                          <h4>
                            Quality & fast <br />
                            support
                          </h4>
                        </div>
                        {/* /.feature-meta */}
                      </div>
                      {/* End .col */}
                    </div>
                  </div>
                  {/*  /.block-content */}
                </div>
                {/* /.screen-container */}
              </div>
              <div
                className="col-xl-5 col-lg-6"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="text-wrapper order-lg-first">
                  <h6>
                    <span>Best Solution</span>
                  </h6>
                  <h3 className="title">Why you choose desk app?</h3>
                  <p>Things go wrong have We’ve understand.</p>
                  <ul>
                    <li>Amazing communication.</li>
                    <li>Best trendinf designing experience.</li>
                    <li>Email & Live chat.</li>
                  </ul>
                </div>
                {/*  /.text-wrapper */}
              </div>
            </div>
          </div>
          {/* /.block-style-twentyFive */}
        </div>
      </div>
      {/*  /.fancy-feature-twentyFive */}

      {/* 	=============================================
            App Screen Preview
        ==============================================  */}
      <div className="app-screen-preview-two mt-200 md-mt-130">
        <div className="container">
          <div className="title-style-eleven text-center mb-120 md-mb-70">
            <h2>App Screenshot</h2>
          </div>
        </div>

        <div className="app-preview-slider-two arrow-none">
          <MobileAppScreenSlider />
        </div>
        {/* /.app-preview-slider-two */}
      </div>
      {/* /.app-screen-preview-two */}

      {/* =====================================================
            Pricing Section Seven
        ===================================================== */}
      <div className="pricing-section-seven pt-200 md-pt-130" id="pricing">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-10 col-md-10 m-auto">
              <div className="title-style-eleven text-center mb-100 md-mb-70">
                <h2>No hidden charge, Choose your plan.</h2>
              </div>
            </div>
          </div>

          <div className="pricing-table-area-seven">
            <div className="row align-items-center justify-content-center">
              <PricingSeven />
            </div>
          </div>
          {/* /.pricing-table-area-seven */}
        </div>
      </div>
      {/* /.pricing-section-seven */}

      {/* =====================================================
            Client Feedback Slider Seven
        ===================================================== */}
      <div
        className="client-feedback-slider-seven mt-250 md-mt-100"
        id="feedback"
      >
        <div className="inner-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 m-auto">
                <img src="images/icon/143.svg" alt="icon" className="m-auto" />
                <div className="title-style-eleven text-center mt-30">
                  <h2>Check what’s our client say about us.</h2>
                </div>
                {/* /.title-style-eleven */}
              </div>
            </div>

            <div className="row">
              <div className="col-xl-8 col-lg-10 m-auto">
                <div className="clientSliderFive  mt-80 md-mt-50">
                  <TestimonialThree />
                </div>
                <img
                  src="images/shape/156.svg"
                  alt="shape"
                  className="shapes shape-one"
                />
                <img
                  src="images/shape/157.svg"
                  alt="shape"
                  className="shapes shape-two"
                />
                <img
                  src="images/shape/158.svg"
                  alt="shape"
                  className="shapes shape-three"
                />
              </div>
            </div>
          </div>
        </div>
        {/*  /.inner-container */}
        <img src="images/shape/bg7.svg" alt="shape" className="bg-image" />
      </div>
      {/* /.client-feedback-slider-six */}

      {/* =====================================================
            Useable Tools
        ===================================================== */}
      <div className="useable-tools-section-three mt-200 mb-200 md-mt-120 md-mb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="title-style-ten">
                <h6>Our Partners</h6>
                <h2>Who is using deski.</h2>
              </div>
              <p className="sub-text">
                Share content across apps. Evernote connects with the
                productivity tools you already use, so you can work your way.
              </p>
            </div>
          </div>
        </div>
        {/* /.container */}
        <div className="logo-wrapper brand-bg-white d-flex flex-wrap justify-content-center align-items-center">
          <BrandThree />
        </div>
        {/* /.logo-wrapper */}
      </div>
      {/* /.useable-tools-section-three */}

      {/* =====================================================
            Fancy Short Banner Twelve
        ===================================================== */}
      <div className="fancy-short-banner-twelve">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-10 col-lg-11 m-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="title-style-ten text-center">
                <h2>Love our deski application? Download now!</h2>
                <p className="pt-25 pb-45">
                  Try it risk free — we don’t charge any cancellation fees
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
            <div className="d-sm-flex align-items-center justify-content-center button-group">
              <a href="#" className="d-flex align-items-center ios-button">
                <img
                  src="images/icon/apple-black.svg"
                  alt="icon"
                  className="icon"
                />
                <div>
                  <span>Download on the</span>
                  <strong>App store</strong>
                </div>
              </a>
              <a href="#" className="d-flex align-items-center windows-button">
                <img
                  src="images/icon/playstore.svg"
                  alt="icon"
                  className="icon"
                />
                <div>
                  <span>Get it on</span>
                  <strong>Google play</strong>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* /.container */}
        <img
          src="images/shape/220.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/221.svg"
          alt="shape"
          className="shapes shape-two"
        />
      </div>
      {/* /.fancy-short-banner-twelve */}

      {/* =====================================================
				Footer Style Seven
			===================================================== */}
      <footer className="theme-footer-seven mt-120 md-mt-100">
        <div className="lg-container">
          <div className="container inner-btn-black">
            <FooterSeven />
          </div>

          <div className="container">
            <div className="bottom-footer">
              <CopyRightThree />
            </div>
          </div>
        </div>
        {/* /.lg-container */}
      </footer>
      {/* /.theme-footer-seven */}
    </div>
  );
};

export default MobileAppLanding;
