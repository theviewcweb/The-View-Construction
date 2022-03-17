import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Pages/Home";
import Pools from "./Components/Pages/Pools";
import Landscapes from "./Components/Pages/Lanscapes";
import Tips from "./Components/Pages/Tips";
import ContactUs from "./Components/Pages/ContactUs";
import Nursery from "./Components/Pages/Nursery";

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/The-View-Construction/" element={<Home />} />
                    <Route path="/pools" element={<Pools />} />
                    <Route path="/landscapes" element={<Landscapes />} />
                    <Route path="/tips" element={<Tips />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/nursery" element={<Nursery />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
