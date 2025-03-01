import React from "react";
import {Link} from "react-router-dom";

const PricingContent = [
  {
    title: "Essential",
    price: "15",
    priceMeta: "per user/month",
    packageName: "pc1",
    skewClass: "skew-right",
    priceList: [
      {
        list: "7-day free trial",
        listClass: "",
      },
      {
        list: "Lead history to track interactions",
        listClass: "",
      },
      {
        list: "Basic contact and deal management",
        listClass: "",
      },
      {
        list: "No automated lead assignment",
        listClass: "disable",
      },
      {
        list: "No email integration for follow-ups",
        listClass: "disable",
      },
    ],
    animatinDelay: "0",
  },
  {
    title: "Advanced",
    price: "29",
    priceMeta: "per user/month",
    packageName: "pc2",
    skewClass: "skew-left",
    priceList: [
      {
        list: "7-day free trial",
        listClass: "",
      },
      {
        list: "Lead history to track interactions",
        listClass: "",
      },
      {
        list: "Basic contact and deal management",
        listClass: "",
      },
      {
        list: "Automated lead assignment",
        listClass: "",
      },
      {
        list: "No email integration for follow-ups",
        listClass: "disable",
      },
    ],
    animatinDelay: "100",
  },
  {
    title: "Professional",
    price: "39",
    priceMeta: "per user/month",
    packageName: "pc3",
    skewClass: "skew-right",
    priceList: [
      {
        list: "7-day free trial",
        listClass: "",
      },
      {
        list: "Lead history to track interactions",
        listClass: "",
      },
      {
        list: "Basic contact and deal management",
        listClass: "",
      },
      {
        list: "Automated lead assignment",
        listClass: "",
      },
      {
        list: "Email integration for follow-ups",
        listClass: "",
      },
    ],
    animatinDelay: "200",
  },
];

const PricingThree = () => {
  return (
    <div className="row justify-content-center">
      {PricingContent.map((item, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={item.animatinDelay}
        >
          <div className={`pr-table-wrapper ${item.skewClass}`}>
            <div className={`pack-name font-slab ${item.packageName}`}>
              <span>{item.title}</span>
            </div>
            <div className="price font-slab">${item.price}</div>
            <p className="user-condition">{item.priceMeta}</p>
            <img src="images/shape/114.svg" alt="shape" className="line" />
            <ul>
              {item.priceList.map((val, i) => (
                <li className={val.listClass} key={i}>
                  {val.list}
                </li>
              ))}
            </ul>
            <Link to="/coming-soon" className="subscribe-btn font-rubik">
              Subscribe Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingThree;
