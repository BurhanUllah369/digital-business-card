import React from "react";
import {FaTwitter, FaGithub, FaInstagram, FaFacebook} from "react-icons/fa";

export default function Footer(){
    return (
        <div className="footer">
            <FaTwitter className="icon" size={25}/>
            <FaFacebook className="icon" size={25}/>
            <FaGithub className="icon" size={25}/>
            <FaInstagram className="icon" size={25}/>
        </div>
    )
}