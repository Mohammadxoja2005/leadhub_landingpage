import React from "react";

const About = () => {
  return (
    <div className="row align-items-center">
      <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1200">
        <img src="images/media/img_57.png" alt="about" className="m-auto" />
      </div>
      {/* End .col */}

      <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1200">
        <div className="text-wrapper">
          <div className="client-info font-rubik">
            {/*Over <span>150,000+ client</span>*/}
          </div>
          <div className="title-style-five">
            <h2>
              <span>Best CRM</span> & sales automation platform.
            </h2>
          </div>
          <p className="font-rubik">
            We understand that things don’t always go as planned. Whether you have questions or need help, We're here to personally assist you—no bots, no automated replies, just real, human support.
          </p>
          {/*<p className="font-rubik">*/}
          {/*  We aim to answer any query in less than 10 minutes.*/}
          {/*</p>*/}
          {/*<div className="name font-slab">Mitchell Garner</div>*/}
        </div>
        {/* /.text-wrapper */}
      </div>
      {/* End .col */}
    </div>
  );
};

export default About;
