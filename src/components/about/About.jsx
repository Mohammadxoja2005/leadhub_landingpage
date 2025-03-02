import React from "react";

const About = () => {
  return (
    <div className="row align-items-center">
      <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1200">
        <img src="images/media/Success.jpg" alt="about" className="m-auto" />
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
              We provide dedicated support to ensure you get the most out of our platform. Our team is available to assist with technical questions, onboarding guidance, and troubleshooting—no bots, just expert assistance for our software</p>
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
