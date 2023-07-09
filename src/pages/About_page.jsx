import React from "react";

const About_page = () => {
    const skills = [
        {
            title: "Languages",
            content: [
                "C++",
                "C",
                "Golang",
                "Java",
                "Javascript",
                "Lua",
                "Scheme",
                "HTML",
                "CSS",
            ],
        },
        {
            title: "Frameworks",
            content: ["React.js", "Vue.js", "Discord.js"],
        },
        {
            title: "Databases",
            content: ["Dexie.js", "PostreSQL", "SQLite"],
        },
    ];

    return (
        <div className="h-screen">
            <div className="px-5 max-w-[1560px] mx-auto pt-20 py-10">
                <div className=" mb-12">
                    <div className=" text-white w-2/3 font-semibold text-[32px]">
                        <div className="">
                            <span className="text-[#C778DD]">/</span>
                            about-me
                        </div>
                    </div>
                </div>
                <div className=" flex-wrap flex items-center justify-between">
                    <div className="md:w-[48%] w-full">
                        <p className="text-[#ABB2BF] ">
                            Hello! I am Prithul!
                            <br />
                            <br />
                            I am a 3rd year student in University of Waterloo.
                            <br />
                            <br />
                            I am currently looking for a coop position from September 2023 to December 2023. I am very passionate about learning new concepts of programming and I would love the opportunity to work together with you to learn more!
                            <br />
                            <br />
                            Please see my projects and past experiences to see all the knowledges I have retained so far!
                        </p>
                    </div>
                    <div className=" mx-auto">
                        <img
                            className="mx-auto"
                            src={require("./imgs/pic0.png")}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="px-5 max-w-[1560px] mx-auto">
                <div className=" mb-12 text-[32px] font-medium text-white">
                    <span className="text-[#C778DD]">#</span>
                    skills
                </div>
                <div className=" flex justify-around gap-4 flex-wrap">
                    {skills.map(({ title, content }) => {
                        return (
                            <div className="w-[90%] sm:w-[45%] md:w-[30%] lg:w-[30%] border border-[#ABB2BF]">
                                <div className=" text-white p-2">
                                    <h2 className=" font-semibold">{title}</h2>
                                </div>
                                <div className=" flex gap-2 border-t border-[#ABB2BF] flex-wrap p-2 text-[#ABB2BF]">
                                    {content.map((e) => {
                                        return <span>{e},</span>;
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export default About_page;
