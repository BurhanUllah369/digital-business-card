import React from "react";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Interests from "./components/Interests";
import About from "./components/About";

export default function App(){
    return (
        <div className="body">
            <Info/>
            <About/>
            <Interests/>
            <Footer/>
        </div>
    )
}