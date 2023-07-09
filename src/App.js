import React from "react";
import { Route, Routes } from "react-router";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

import Home_page from "./pages/Home_page";
import Project_page from "./pages/Project_page";
import About_page from "./pages/About_page";
import Experiences_page from "./pages/Experiences_page";

import "./App.css";
// aos animation library

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
    // useEffect(() => {
    //     Aos.init({ duration: 1000, delay: 500 });
    // }, []);
    
    return (
        <div className="bg-[#282C33]">
            <Navbar />

            <Routes>
                <Route path="/" element={<Home_page />} />
                <Route path="/about" element={<About_page />} />
                <Route path="/experiences" element={<Experiences_page />} />
                <Route path="/project" element={<Project_page />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
