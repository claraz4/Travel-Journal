import React from "react";
import "../styles.css"
import worldIcon from  "../world-icon.png";

export default function Navbar() {
    return (
        <div className="navbar--container">
            <img className="navbar--world" src={worldIcon}/>
            <h3 className="navbar--title">my travel journal.</h3>
        </div>
    )
}