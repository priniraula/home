import React from "react";
import { Link } from "react-router-dom";

const Home_page = () => {
    return (
        <>
            <div className="px-5 max-w-[1560px] mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap">
                <div
                    data-aos="fade-right"
                    className=" w-10/12 sm:w-8/12 mx-auto"
                >
                    <h1 className="font-semibold text-[32px] text-white mb-3">
                        Prithul is a{" "}
                        <span className="text-[#C778DD]">
                            student @ University of Waterloo
                        </span>
                    </h1>
                    <p className="text-[#ABB2BF] my-6">
                        with 3 previous coop experiences.
                    </p>
                    <Link to="/about">
                        <button className="text-white font-medium py-2 px-4 border duration-200 border-[#C778DD] hover:bg-[#C778DD33]">
                            About me!
                        </button>
                    </Link>
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-delay="400"
                    className="mx-auto"
                >
                </div>
            </div>
            <div className=" px-5 py-10">
            </div>
        </>
    );
};
export default Home_page;
