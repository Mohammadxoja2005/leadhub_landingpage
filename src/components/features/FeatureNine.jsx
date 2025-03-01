import React from "react";

const FeatureContent = [
  {
    icon: "ils_15",
    meta: "Join Our Platform",
    subTitle: `Get started in just 5 minutes. The setup is quick, seamless, and hassle-free—no technical skills required.`,
  },
  {
    icon: "ils_16",
    meta: "Manage Your Leads",
    subTitle: `Choose a pricing plan that fits your needs. Track and convert directly from your dashboard.`,
  },
  {
    icon: "ils_17",
    meta: "Start Closing Deals",
    subTitle: `Receive payments, track detailed sales data, and engage leads with direct messaging`,
  },
];

const FeatureNine = () => {
  return (
    <div className="row justify-content-center">
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="block-style-fourteen">
            <div className="illustration">
              <img src={`images/assets/${val.icon}.svg`} alt="icon" />
            </div>
            <div className="title">{val.meta}</div>
            <p className="font-rubik">{val.subTitle}</p>
          </div>
          {/* /.block-style-fourteen */}
        </div>
      ))}
    </div>
    // /.row
  );
};

export default FeatureNine;
