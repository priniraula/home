import React from "react";
import { Route, Routes } from "react-router";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

import HomePage from "./pages/Home_page";
import ProjectPage from "./pages/Project_page";
import AboutPage from "./pages/About_page";
import ExperiencesPage from "./pages/Experiences_page";

import "./App.css";
import { useEffect } from "react";

function App() {
    
    return (
        <div className="bg-[#282C33]">
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/experiences" element={<ExperiencesPage />} />
                <Route path="/project" element={<ProjectPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
