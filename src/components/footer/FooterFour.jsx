import React from "react";
import { Link } from "react-router-dom";

const linksFooterContent = [
  {
    itemName: "Home",
    routePath: "/",
  },
  {
    itemName: "Product",
    routePath: "/product-customer-support",
  },
  {
    itemName: "Pricing",
    routePath: "/pricing-pm",
  },
  {
    itemName: "About us",
    routePath: "/about-pm",
  },
  {
    itemName: "Features",
    routePath: "/solution-management",
  },
  {
    itemName: "Blog",
    routePath: "/blog-v4",
  },
  {
    itemName: "Help & Support",
    routePath: "/login",
  },
  {
    itemName: "API documentation",
    routePath: "/doc-full-width",
  },
];

const legalFooterContent = [
  {
    itemName: "Terms & conditions",
    routePath: "/terms-conditions",
  },
  {
    itemName: "Privacy policy",
    routePath: "/privacy-policy",
  },
  {
    itemName: "Refund policy",
    routePath: "/refund-policy",
  },
  {
    itemName: "",
    routePath: "/refund-policy",
  },
];

const productsFooterContent = [
  {
    itemName: "Take the tour",
    routePath: "/product-customer-support",
  },
  {
    itemName: "Team",
    routePath: "/team-5",
  },
  {
    itemName: "Self Service",
    routePath: "/features-customer-support",
  },
  {
    itemName: "News",
    routePath: "/blog-v3",
  },
  {
    itemName: "About us",
    routePath: "/about-doc",
  },
  {
    itemName: "Contact",
    routePath: "/contact-cs",
  },
];

const FooterFour = () => {
  return (
    <div className="row justify-content-end">
      <div className="col-xl-4 col-lg-3 col-12 footer-about-widget">
        <div className="logo">
          <a style={{color: "purple", fontSize: "30px"}} href="/">
            Leadhub
          </a>
        </div>
        <ul className="font-rubik mt-10">
          <li>
            {/*<a href="mailto:leadhubapp@gmail.com">leadhubapp@gmail.com</a>*/}
          </li>
          <li>
            <a href="tel:+761 412 3224">+1 (205) 341-7523</a>
          </li>
        </ul>
      </div>
      {/* /.footer-list */}

      {/*<div className="col-lg-3 col-md-4 footer-list">*/}
      {/*  <h5 className="footer-title font-slab">Legal</h5>*/}
      {/*  <ul>*/}
      {/*    {legalFooterContent.map((list, i) => (*/}
      {/*        <li key={i}>*/}
      {/*          <Link to={list.routePath}>{list.itemName}</Link>*/}
      {/*        </li>*/}
      {/*    ))}*/}
      {/*  </ul>*/}
      {/*</div>*/}

      <div className="col-lg-3 col-md-4 footer-list">
        {/*<h5 className="footer-title font-slab">Links</h5>*/}
        {/*<ul>*/}
        {/*  {linksFooterContent.map((list, i) => (*/}
        {/*    <li key={i}>*/}
        {/*      <Link to={list.routePath}>{list.itemName}</Link>*/}
        {/*    </li>*/}
        {/*  ))}*/}
        {/*</ul>*/}
      </div>

      {/* /.footer-list */}
      {/* /.footer-list */}

      <div className="col-xl-2 col-lg-3 col-md-4 footer-list">
        {/*<h5 className="footer-title font-slab">Products</h5>*/}
        {/*<ul className="pe-5">*/}
        {/*  {productsFooterContent.map((list, i) => (*/}
        {/*    <li key={i}>*/}
        {/*      <Link to={list.routePath}>{list.itemName}</Link>*/}
        {/*    </li>*/}
        {/*  ))}*/}
        {/*</ul>*/}
      </div>
      <div className="col-lg-3 col-md-4 footer-list">
        <h5 className="footer-title font-slab">Legal</h5>
        <ul>
          {legalFooterContent.map((list, i) => (
              <li key={i}>
                <Link to={list.routePath}>{list.itemName}</Link>
              </li>
          ))}
        </ul>
      </div>
      {/* /.footer-list */}
    </div>
  );
};

export default FooterFour;
