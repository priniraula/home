import React from "react";
import ProjectCard from "../components/project_card/Project_card";

import personalWebsiteImg from "./imgs/pic1.png";
import mazeGenImg from "./imgs/pic2.png";
import neigeImg from "./imgs/pic3.png";
import musicTrackerImg from "./imgs/pic4.png";

const Project_page = () => {
    const projects = [
        {
            img: neigeImg,
            langs: ["C, C++"],
            title: "Neige Programmming Lang",
            disc: "Programming language created with C and C++",
            github: "https://github.com/priniraula/Neige",
        },
        {
            img: musicTrackerImg,
            langs: ["Node.js, React.js, FFMPEG"],
            title: "Music Tracker Dev",
            disc: "Music tracking website built using React",
            github: "https://github.com/priniraula/music-tracker-dev",
        },
        {
            img: mazeGenImg,
            langs: ["Java, JavaSwing"],
            title: "Amaze v4",
            disc: "Maze generator using Kruskals and Prims algorithm",
            github: "https://github.com/priniraula/Amaze-v4",
        },
        {
            img: personalWebsiteImg,
            langs: ["React.js, Node.js, Tailwind css"],
            title: "Personal Website",
            disc: "The current website",
            github: "https://github.com/priniraula/personal-website",
        },
    ];

    return (
        <>
            <div className="px-5 max-w-[1560px] mx-auto mt-10 py-10">
                {/* top */}
                <div className=" flex justify-between items-center gap-5">
                    {/* left */}
                    <div
                        // data-aos="fade-down"
                        className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2"
                    >
                        <div className="">
                            <span className="text-[#C778DD]">#</span>projects
                        </div>
                        <div className="line w-2/3 h-px bg-[#C778DD]"></div>
                    </div>
                    {/* right */}
                    {/* <div className=" text-white font-medium">
                        <a href="">
                            <span>View all ~~&gt;</span>
                        </a>
                    </div> */}
                </div>
                {/* bottom */}
                <div className="flex flex-wrap justify-between gap-4 my-12">
                    {/* cards */}
                    {projects.map(({ img, langs, title, disc, github }) => {
                        return (
                            <>
                                <ProjectCard
                                    img={img}
                                    langs={langs}
                                    title={title}
                                    disc={disc}
                                    github={github}
                                />
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
export default Project_page;
