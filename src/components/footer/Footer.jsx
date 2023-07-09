import React from "react";

const Footer = () => {
    return (
        <>
            {/* line */}
            <div className="w-full h-px bg-[#ABB2BF] mt-20 mb-8"></div>
            {/* footer */}
            <div  className="px-5 max-w-[1560px] mx-auto">
                {/* top */}
                <div className="flex justify-between gap-y-10 flex-wrap">
                    {/* left */}
                    <div className="mx-auto md:mx-0">
                        <div className=" flex items-center gap-8 mb-3 ">
                            {/* logo */}
                            <div className=" flex gap-2 items-center text-2xl text-white font-bold">
                                <span>Prithul Niraula</span>
                            </div>
                            {/* email */}
                            <span className="text-[#ABB2BF]">
                                priniraula@gmail.com
                            </span>
                        </div>
                        {/* disc */}
                        <div className="text-[#ffffff]">
                            <p>
                                Honours Mathematics student @ University of Waterloo
                            </p>
                        </div>
                    </div>
                    {/* right */}
                    <div className=" mx-auto md:mx-0">
                        {/* title */}
                        <h2 className=" text-white text-2xl font-medium mb-3">
                            Media
                        </h2>
                        {/* media */}
                        <div className="flex items-center gap-2">
                            <a href="#">
                                <img
                                    src={require("./imgs/discord.png")}
                                    width="40px"
                                    height="40px"
                                    alt=""
                                />
                            </a>
                            <a href="https://www.linkedin.com/in/prithul-niraula-8a5315196/">
                                <img
                                    src={require("./imgs/linkedin.png")}
                                    width="40px"
                                    height="40px"
                                    alt=""
                                />
                            </a>
                            <a href="https://github.com/priniraula">
                                <img
                                    src={require("./imgs/github.png")}
                                    width="40px"
                                    height="40px"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                </div>
                {/* bottom */}
                <div className="text-center text-[#ABB2BF] pb-8 mt-12"></div>
            </div>
        </>
    );
};
export default Footer;
