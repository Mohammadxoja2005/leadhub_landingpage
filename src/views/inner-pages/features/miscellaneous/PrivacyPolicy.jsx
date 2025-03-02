import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet";
import Header from "../../../../components/header/Header";
import Footer from "../../../../components/footer/Footer";
import CopyRight from "../../../../components/footer/CopyRight";
import ScrollspyNav from "react-scrollspy-nav";

const PrivacyPolicy = () => {
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [scriptError, setScriptError] = useState(false);

    useEffect(() => {
        // Function to load the Termly script
        const loadTermlyScript = () => {
            const scriptId = 'termly-jssdk';

            // Check if the script is already loaded
            // if (document.getElementById(scriptId)) {
            //     console.log('Termly script already loaded.');
            //     // setScriptLoaded(true);
            //     return;
            // }

            // Create the script element
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://app.termly.io/embed-policy.min.js';
            script.async = true;

            script.onload = () => {
                console.log('Termly script loaded successfully.');
                setScriptLoaded(true);
            };

            script.onerror = () => {
                console.error('Failed to load Termly script.');
                setScriptError(true);
            };

            // Append the script to the document
            document.body.appendChild(script);
        };

        // Call the function to load the script
        loadTermlyScript();
    }, []);

    return (
        <div>
            <Helmet>
                <title>
                    Privacy Policy || Leadhub-Saas & Software
                </title>
            </Helmet>
            {/* End Page SEO Content */}

            {/*<Header />*/}
            {/* End Header */}

            {/* =====================================================
				Terms and Condition
			===================================================== */}
            <div>
                {/* Render the div for Privacy Policy embed */}
                <div
                    name="termly-embed"
                    data-id="338264cd-2266-4884-a18c-45f1ec36642d" // Replace with your Privacy Policy data-id
                >
                    <p style={{display: scriptLoaded ? 'block' : 'none'}}> Loading Privacy Policy...</p>
                </div>

                {/* Fallback message if script fails to load */}
                {scriptError && (
                    <div style={{padding: '20px', border: '1px solid #ffcccc', backgroundColor: '#fff3f3'}}>
                        <p>
                            If you cannot see the Privacy Policy, it is most likely because of your browser
                            settings or an ad blocker. Please{' '}
                            <a
                                href="https://app.termly.io/policy-viewer/policy.html?policyUUID=338264cd-2266-4884-a18c-45f1ec36642d" // Replace with the actual link to your Privacy Policy
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{color: '#007bff', textDecoration: 'underline'}}
                            >
                                click here to view the Privacy Policy
                            </a>
                            .
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PrivacyPolicy;
