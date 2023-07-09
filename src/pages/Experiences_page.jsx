import React from "react";

const Experiences_page = () => {
    const experiences = [
        {
            title: "Scrawlr Inc.",
            jobTitle: "Fullstack Developer",
            technologies: [
                "Node.js", 
                "Vue.js", 
                "React.js",
                "Dexie.js",
            ],
            date: "January 2023 - April 2023",
            content: [
                "Designed and implemented a ChatGPT webpage to simulate a conversational agent",
                "Created an IndexedDB database to store the chat logs and timestamps to preserve the message history",
                "Designed and implemented a webpage using croneworkers to query and display the Hackernews and Newscatcher feeds on different intervals",
                "Created a Dexie database to store the feeds and author details and implemented a robust search algorithm to efficiently query the desired feeds",
                "Created and maintained multiple CircleCI commands to efficiently generate project documentation, reports, mutation logs, code coverage logs and test cases reports of multiple projects"
            ],
        },
        {
            title: "Placeholder Inc.",
            jobTitle: "Software Engineer",
            technologies: [
                "Golang",
                "React.js",
                "SQL",
            ],
            date: "May 2022 - August 2022",
            content: [
                "Created phone number standardization API that converts all phone numbers into E164 Format with extensions using Google’s Phone Library",
                "Integrated the phone validation API into pipedrive and spacer (backend property listing page) to reformat over 96% of existing phone numbers",
                "Created React.js frontend components to handle phone validation and property lost configurations user interface using styled components",
                "Updated spacer and pipedrive database using SQL to save the timestamp of when the phone verification and property information was changed",
                "Enhanced and stress-tested the property matching algorithm using Golang’s built in testing library to ensure the matching algorithm produces correct outputs for most edge cases"
            ]
        },
        {
            title: "Purolator Inc.",
            jobTitle: "Frontend Developer",
            technologies: [
                "Node.js",
                "React.js",
            ],
            date: "September 2021 - December 2021",
            content: [
                "Designed and implemented an address validation system for Purolator Your Way app with a system that updates the users shipment addresses",
                "Revamped the entire purolator your way application from scratch using React.js, redux and styled components to improve code architecture",
                "Prototyped AWS Step functions integration to improve the business infrastructure of PYW’s back end application",
                "Enhanced and fixed various components of the app including verification code system, language toggle, and guest mode experience that had rendering and styling issues.",
                "Regularly updated JIRA for the purolator your way app to ensure that every team member is up to date with the tasks and issues",
            ]
        }
    ];

    return (
        <div className="px-5 max-w-[1560px] mx-auto pt-20 py-10 h-screen">
            <div className=" mb-12 text-[32px] font-medium text-white">
                <span className="text-[#C778DD]">#</span>
                experiences
            </div>
            <div className=" flex justify-start gap-10 flex-col">
                {experiences.map(
                    ({ title, jobTitle, technologies, date, content }) => {
                        return (
                            <div className="w-[90%]">
                                <div className="text-white">
                                    <h2 className=" font-semibold float-left text-[#C778DD] pr-2">{jobTitle}</h2>
                                    <h2 className=" font-semibold float-left">@ {title}</h2>
                                    <h2 className=" font-semibold float-right">{date}</h2>
                                </div>
                                <br/>
                                <div className="text-white italic font-light flex flex-row">
                                    {technologies.map((e) => {
                                        return <p className="pr-2">{e}</p>;
                                    })}
                                </div>
                                <div className=" flex flex-col gap-2 border-t border-[#ABB2BF] flex-wrap p-2 text-[#ABB2BF]">
                                    {content.map((e) => {
                                        return <span>&bull; {e}</span>;
                                    })}
                                </div>
                            </div>
                        );
                    }
                )}
            </div>
        </div>
    );
};
export default Experiences_page;
