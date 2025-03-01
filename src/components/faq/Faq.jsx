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
        title: "Get started in minutes.",
        desc: `Setting up your CRM is quick and effortless. Customize your pipeline, manage leads efficiently, and start closing deals—all within a few clicks.`,
        expand: "a",
    },
    {
        title: "Manage your leads effortlessly",
        desc: `Onboard quickly with a seamless setup. Customize your workflow, automate follow-ups, and track leads efficiently—all in one place.`,
        expand: "b",
    }
];

const Faq = () => {
    return (
        <div className="accordion-style-two pe-5">
            <div className="faq-wrraper">
                <Accordion preExpanded={["a"]} allowZeroExpanded>
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

export default Faq;
