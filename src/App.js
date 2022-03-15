import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Pages/Home";
import Pools from "./Components/Pages/Pools";
import Landscapes from "./Components/Pages/Lanscapes";
import Maintenance from "./Components/Pages/Maintenance";
import OurTips from "./Components/Pages/OurTips";
import ContactUs from "./Components/Pages/ContactUs";
import Nursery from "./Components/Pages/Nursery";

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pools" element={<Pools />} />
                    <Route path="/landscapes" element={<Landscapes />} />
                    <Route path="/maintenance" element={<Maintenance />} />
                    <Route path="/our-tips" element={<OurTips />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/nursery" element={<Nursery />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
