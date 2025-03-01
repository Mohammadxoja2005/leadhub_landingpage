import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../../components/header/Header";
import Footer from "../../../../components/footer/Footer";
import CopyRight from "../../../../components/footer/CopyRight";
import ScrollspyNav from "react-scrollspy-nav";

const RefundPolicy = () => {
    return (
        <div className="doc-container main-page-wrapper">
            <Helmet>
                <title>
                    Refund Policy || Leadhub-Saas & Software
                </title>
            </Helmet>
            {/* End Page SEO Content */}

            <Header />
            {/* End Header */}

            {/* =====================================================
				Terms and Condition
			===================================================== */}

            <div className="terms_and_policy">
                <div className="container">
                    {/*<ScrollspyNav*/}
                    {/*    scrollTargetIds={["opt1", "opt2", "opt3", "opt4", "opt5", "opt6"]}*/}
                    {/*    activeNavClass="active"*/}
                    {/*    offset={170}*/}
                    {/*    scrollDuration="300"*/}
                    {/*>*/}
                        <div className="row align-items-start">
                            {/*<div className="col-lg-4 sidenav-sticky">*/}
                            {/*    <ul className="nav nav-tabs">*/}
                            {/*        <li className="nav-item">*/}
                            {/*            <a className="nav-link active" href="#opt1">*/}
                            {/*                1. Website terms of use*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*        <li className="nav-item">*/}
                            {/*            <a className="nav-link" href="#opt2">*/}
                            {/*                2. Terms and conditions*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*        <li className="nav-item">*/}
                            {/*            <a className="nav-link" href="#opt3">*/}
                            {/*                3. Privacy policy*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*        <li className="nav-item">*/}
                            {/*            <a className="nav-link" href="#opt4">*/}
                            {/*                4. Cookie policy*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*        <li className="nav-item">*/}
                            {/*            <a className="nav-link" href="#opt5">*/}
                            {/*                5. Third Party Links*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*        <li className="nav-item">*/}
                            {/*            <a className="nav-link" href="#opt6">*/}
                            {/*                6. GDPR*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</div>*/}

                            <div className="col-lg-8">
                                {/* Tab panes */}
                                <div className="tab-content ">
                                    <div id="opt1">
                                        <h2 className="font-gilroy-bold">Refund Policy</h2>
                                        <div className="update-date">LAST UPDATED: March 01, 2025</div>
                                        <h3>Introduction</h3>
                                        <p>
                                            Thank you for purchasing from Leadhub. We strive to ensure your satisfaction with our services. Please read this Refund Policy carefully to understand your rights and our obligations regarding refunds.
                                        </p>
                                        {/*<ul>*/}
                                        {/*    <li>*/}
                                        {/*        <a href="#">Privacy policy</a>*/}
                                        {/*    </li>*/}
                                        {/*    <li>*/}
                                        {/*        <a href="#">Terms and conditions</a>*/}
                                        {/*    </li>*/}
                                        {/*</ul>*/}
                                        <h3>1. Eligibility for Refunds</h3>
                                        <p>
                                            Subscriptions:

                                            You may cancel your subscription at any time. Refunds are prorated based on the unused portion of your subscription.

                                            No refunds are provided for cancellations made after 14 days of purchase.
                                        </p>
                                        <h3>2. How to Request a Refund</h3>
                                        <p>
                                            To request a refund, please contact us at muhammadxojaofficial@gmail.com with the following information:
                                            <br/>
                                            <br/>

                                            Your full name.
                                            <br/>
                                            <br/>

                                            Order number or proof of purchase.
                                            <br/>
                                            <br/>

                                            A detailed explanation of the issue.
                                            <br/>
                                            <br/>

                                            We will review your request and respond within 5 business days.
                                        </p>
                                        <h3>3. Processing Refunds</h3>
                                        <p>
                                            Approved Refunds:
                                            <br/>
                                            <br/>
                                            If your refund request is approved, we will process the refund to the original payment method within 7–10 business days.
                                            <br/>
                                            Please note that it may take additional time for the refund to appear in your account, depending on your payment provider.
                                            <br/>
                                            <br/>
                                            Denied Refunds:

                                            If your refund request is denied, we will provide a detailed explanation of the decision.
                                        </p>
                                        <h3>4. Contact Us</h3>
                                        <p>
                                            If you have any questions about this Refund Policy, please contact us at:
                                            <br/>
                                            <br/>

                                            Email: muhammadxojaofficial@gmail.com
                                            <br/>
                                            <br/>
                                            Phone: +1 (205) 341-7523
                                            <br/>
                                            <br/>
                                            Address: Qoraqamish, Tashkent, 100012, Uzbekistan
                                        </p>
                                    </div>
                                </div>
                                {/*  /.tab-content */}
                            </div>
                        </div>
                    {/*</ScrollspyNav>*/}
                </div>
            </div>

            {/*<footer class    Name="theme-footer-one pt-130 md-pt-70">*/}
            {/*    <div className="top-footer">*/}
            {/*        <div className="container">*/}
            {/*            <Footer />*/}
            {/*        </div>*/}
            {/*        /!* /.container *!/*/}
            {/*    </div>*/}
            {/*    /!* /.top-footer *!/*/}

            {/*    <div className="container">*/}
            {/*        <div className="bottom-footer-content">*/}
            {/*            <CopyRight />*/}
            {/*        </div>*/}
            {/*        /!*  /.bottom-footer *!/*/}
            {/*    </div>*/}
            {/*</footer>*/}
            {/* /.theme-footer-one */}
        </div>
    );
};

export default RefundPolicy;
