import React from "react";

const Coupon = () => {
  return (
    <div className="coupon-section d-flex flex-column">
      <div className="coupon-form d-lg-flex align-items-center">
        <input type="text" placeholder="Enter your code" />
        <button className="theme-btn-seven md-mt-20 sm-mb-20">
          Apply Coupne
        </button>
      </div>
      {/* <!-- /.coupon-form --> */}
      <div className="mt-auto">
        <button className="theme-btn-seven update-cart-button">
          Update cart
        </button>
      </div>
    </div>
  );
};

export default Coupon;
