import React from "react";
import laura from "./laura.jpg";
import {FaEnvelope, FaLinkedin} from "react-icons/fa";

export default function Info(){
    return (
        <div className="info">
            <img src={laura} alt=""></img>
            <h1>Laura Smith</h1>
            <h2>Frontend Developer</h2>
            <p>laurasmith.website</p>
            <button className="email"><FaEnvelope className="fa"/>Email</button>
            <button className="linkedin"><FaLinkedin className="fa"/>LinkedIn</button>
        </div>
    )
}