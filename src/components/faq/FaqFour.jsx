import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";

const FaqContent = [
    {
        title: "What is Leadhub?",
        desc: "Leadhub is a sales pipeline CRM built to help small businesses organize leads, monitor sales activities, and boost deal closures.",
        expand: "a",
    },
    {
        title: "How does Leadhub work?",
        desc: `Leadhub helps small business sales teams streamline their workflow by organizing leads and sales data in one easy-to-use CRM. It automates follow-ups to keep prospects engaged and provides valuable insights into sales performance, enabling teams to optimize their strategy and close more deals efficiently.`,
        expand: "b",
    },
    {
        title: "How will Leadhub’s CRM solution help me improve sales?\n?",
        desc: `Leadhub’s CRM simplifies lead management, making it easier to track prospects, identify opportunities, and monitor key sales activities. It streamlines workflows, allowing your team to stay focused on closing deals and driving revenue growth. With automated follow-ups and reminders, Leadhub boosts productivity by eliminating repetitive tasks. Real-time analytics provide insights into team performance, helping sales reps and managers prioritize the most impactful business processes.`,
        expand: "c",
    },
    {
        title: "What is a CRM in sales?",
        desc: `A CRM, or Customer Relationship Management tool, helps sales teams organize leads, track interactions, and build strong customer relationships. LeadHub streamlines your sales process by consolidating customer data, automating follow-ups, and ensuring no opportunity slips through the cracks.`,
        expand: "d",
    }
];

const FaqFour = () => {
    return (
        <div
            className="accordion-style-four"
            data-aos="fade-up"
            data-aos-duration="1200"
        >
            <div className="faq-wrraper">
                <Accordion preExpanded={["b"]} allowZeroExpanded>
                    {FaqContent.map((item, i) => (
                        <AccordionItem className="card" key={i} uuid={item.expand}>
                            <AccordionItemHeading className="card-header">
                                <AccordionItemButton>
                                    <h5 className="mb-0">
                                        <button className="btn btn-link">{item.title}</button>
                                        {" "}
                                    </h5>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            {/* Accordion Heading */}
                            <AccordionItemPanel className="card-body fadeInUp">
                                <p>{item.desc}</p>
                            </AccordionItemPanel>
                            {/* Accordion Body Content */}
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};

export default FaqFour;
