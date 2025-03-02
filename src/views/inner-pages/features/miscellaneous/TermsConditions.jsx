import React, {useEffect, useState} from "react";

const TermsConditions = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [scriptError, setScriptError] = useState(false);

  useEffect(() => {
    const loadTermlyScript = () => {
      const scriptId = 'termly-jssdk';

      // Check if the script is already loaded
      // if (document.getElementById(scriptId)) {
      //   console.log('Termly script already loaded.');
      //   setScriptLoaded(true);
      //   return;
      // }

      // Create the script element
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://app.termly.io/embed-policy.min.js';
      script.async = true;

      // Handle script load success
      script.onload = () => {
        console.log('Termly script loaded successfully.');
        setScriptLoaded(true);
      };

      // Handle script load error
      script.onerror = () => {
        console.error('Failed to load Termly script.');
        setScriptError(true);
      };

      // Append the script to the document
      document.body.appendChild(script);
    };

    loadTermlyScript();
  }, []);
  return (
      <div>
        {/* Render the div for Termly embed */}
        <div
            name="termly-embed"
            data-id="62875174-cc01-4b76-87b9-c1012f4800b5"
            style={{ display: scriptLoaded ? 'block' : 'none' }} // Hide if script didn't load
        >
          Loading Terms and Conditions...
        </div>

        {/* Fallback message if script fails to load */}
        {scriptError && (
            <div style={{ padding: '20px', border: '1px solid #ffcccc', backgroundColor: '#fff3f3' }}>
              <p>
                If you cannot see the terms and conditions, it is most likely because of your browser
                settings or an ad blocker. Please{' '}
                <a
                    href="https://app.termly.io/policy-viewer/policy.html?policyUUID=62875174-cc01-4b76-87b9-c1012f4800b5" // Replace with the actual link
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#007bff', textDecoration: 'underline' }}
                >
                  click here to view the terms and conditions
                </a>
                .
              </p>
            </div>
        )}
      </div>

      // <div className="doc-container main-page-wrapper">
    //   <Helmet>
    //     <title>
    //       Terms & Conditions || Leadhub-Saas & Software
    //     </title>
    //   </Helmet>
    //   {/* End Page SEO Content */}
    //
    //   <Header />
    //   {/* End Header */}
    //
    //   {/* =====================================================
	// 			Terms and Condition
	// 		===================================================== */}
    //
    //   {/*<div className="terms_and_policy">*/}
    //   {/*  <div className="container">*/}
    //   {/*    /!*<ScrollspyNav*!/*/}
    //   {/*    /!*  scrollTargetIds={["opt1"]}*!/*/}
    //   {/*    /!*  activeNavClass="active"*!/*/}
    //   {/*    /!*  offset={170}*!/*/}
    //   {/*    /!*  scrollDuration="300"*!/*/}
    //   {/*    /!*>*!/*/}
    //   {/*      <div className="row align-items-start">*/}
    //   {/*        <div className="col-lg-4 sidenav-sticky">*/}
    //   {/*          <ul className="nav nav-tabs">*/}
    //   {/*            <li className="nav-item">*/}
    //   {/*              <a className="nav-link active" href="#opt1">*/}
    //   {/*                1. Terms and conditions*/}
    //   {/*              </a>*/}
    //   {/*            </li>*/}
    //   {/*            /!*<li className="nav-item">*!/*/}
    //   {/*            /!*  <a className="nav-link" href="#opt2">*!/*/}
    //   {/*            /!*    2. Terms and conditions*!/*/}
    //   {/*            /!*  </a>*!/*/}
    //   {/*            /!*</li>*!/*/}
    //   {/*            /!*<li className="nav-item">*!/*/}
    //   {/*            /!*  <a className="nav-link" href="#opt3">*!/*/}
    //   {/*            /!*    3. Privacy policy*!/*/}
    //   {/*            /!*  </a>*!/*/}
    //   {/*            /!*</li>*!/*/}
    //   {/*            /!*<li className="nav-item">*!/*/}
    //   {/*            /!*  <a className="nav-link" href="#opt4">*!/*/}
    //   {/*            /!*    4. Cookie policy*!/*/}
    //   {/*            /!*  </a>*!/*/}
    //   {/*            /!*</li>*!/*/}
    //   {/*            /!*<li className="nav-item">*!/*/}
    //   {/*            /!*  <a className="nav-link" href="#opt5">*!/*/}
    //   {/*            /!*    5. Third Party Links*!/*/}
    //   {/*            /!*  </a>*!/*/}
    //   {/*            /!*</li>*!/*/}
    //   {/*            /!*<li className="nav-item">*!/*/}
    //   {/*            /!*  <a className="nav-link" href="#opt6">*!/*/}
    //   {/*            /!*    6. GDPR*!/*/}
    //   {/*            /!*  </a>*!/*/}
    //   {/*            /!*</li>*!/*/}
    //   {/*          </ul>*/}
    //   {/*        </div>*/}
    //
    //   {/*        <div className="col-lg-8">*/}
    //   {/*          /!* Tab panes *!/*/}
    //   {/*          <div className="tab-content ">*/}
    //   {/*            <div id="opt1">*/}
    //   {/*              <h2 className="font-gilroy-bold">Terms & Conditions</h2>*/}
    //   {/*              <div className="update-date">LAST UPDATED: March 01, 2025</div>*/}
    //   {/*              <h3> AGREEMENT TO OUR LEGAL TERMS</h3>*/}
    //   {/*              <p>*/}
    //   {/*                We are Muhammadxo’ja Rustamxo’jayev Baxtiyor o’g’li (“Company,” “we,” “us,” “our”), a company registered in Uzbekistan at Qoraqamish, Tashkent, Toshkent, Toshkent 100012.*/}
    //   {/*                <br/>*/}
    //   {/*                <br/>*/}
    //   {/*                We operate the website leadhub.is (the “Site”), as well as any other related products and services that refer or link to these legal terms (the “Legal Terms”) (collectively, the “Services”).*/}
    //   {/*                <br/>*/}
    //   {/*                <br/>*/}
    //   {/*                LeadHub is a powerful and intuitive CRM platform designed to help businesses manage leads, track customer interactions, and close deals more efficiently. Our tool provides seamless contact management, automated lead tracking, and real-time analytics to optimize your sales pipeline. Whether you’re a small business or a growing enterprise, LeadHub simplifies customer relationship management to boost your productivity and revenue.*/}
    //   {/*                <br/>*/}
    //   {/*                <br/>*/}
    //   {/*                You can contact us by phone at +1 (205) 341-7523, email at muhammadxojaoificial@gmail.com, or by mail to Qoraqamish, Tashkent, Toshkent, Toshkent 100012, Uzbekistan.*/}
    //   {/*                <br/>*/}
    //   {/*                <br/>*/}
    //   {/*                These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”), and Muhammadxo’ja Rustamxo’jayev Baxtiyor o’g’li, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.*/}
    //   {/*                <br/>*/}
    //   {/*                <br/>*/}
    //   {/*                Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms from time to time. We will alert you about any changes by updating the “Last updated” date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.*/}
    //   {/*                <br/>*/}
    //   {/*                <br/>*/}
    //   {/*                The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.*/}
    //   {/*                <br/>*/}
    //   {/*                <br/>*/}
    //   {/*                We recommend that you print a copy of these Legal Terms for your records.*/}
    //   {/*              </p>*/}
    //   {/*              <h3>1. OUR SERVICES</h3>*/}
    //   {/*              <p>*/}
    //   {/*                The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.*/}
    //   {/*                <br/>*/}
    //   {/*                <br/>*/}
    //   {/*                LeadHub is designed to assist users in complying with data protection regulations, including the General Data Protection Regulation (GDPR) for individuals within the European Union and relevant U.S. privacy laws such as the California Consumer Privacy Act (CCPA). Users are responsible for ensuring that their data collection, storage, and processing activities comply with applicable legal requirements.                    </p>*/}
    //   {/*              <h3>2. INTELLECTUAL PROPERTY RIGHTS</h3>*/}
    //   {/*              <p>*/}
    //   {/*                The servers and databases that power Ticket Tailor are*/}
    //   {/*                located in the EU in Ireland. We inevitably use a small*/}
    //   {/*                number of third parties, some of which are outside of the*/}
    //   {/*                EU, to provide our ticketing service and we have contracts*/}
    //   {/*                with each of them that oblige them to comply with the*/}
    //   {/*                GDPR. You can find the full list of these third parties*/}
    //   {/*                and what we use them for here.*/}
    //   {/*              </p>*/}
    //   {/*            </div>*/}
    //   {/*          </div>*/}
    //   {/*          /!*  /.tab-content *!/*/}
    //   {/*        </div>*/}
    //   {/*      </div>*/}
    //   {/*    /!*</ScrollspyNav>*!/*/}
    //   {/*  </div>*/}
    //   {/*</div>*/}
    //
    //   {/*<footer className="theme-footer-one pt-130 md-pt-70">*/}
    //   {/*  <div className="top-footer">*/}
    //   {/*    <div className="container">*/}
    //   {/*      <Footer />*/}
    //   {/*    </div>*/}
    //   {/*    /!* /.container *!/*/}
    //   {/*  </div>*/}
    //   {/*  /!* /.top-footer *!/*/}
    //
    //   {/*  <div className="container">*/}
    //   {/*    <div className="bottom-footer-content">*/}
    //   {/*      <CopyRight />*/}
    //   {/*    </div>*/}
    //   {/*    /!*  /.bottom-footer *!/*/}
    //   {/*  </div>*/}
    //   {/*</footer>*/}
    //   {/* /.theme-footer-one */}
    // </div>
  );
};

export default TermsConditions;
