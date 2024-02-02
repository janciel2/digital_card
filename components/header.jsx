import React from "react";
import profpic  from "../images/pic.jpg";
import "../css/header.css"

export default function Header() {
  return (
    <>
      <header>
        <img alt="profpic" src={profpic} className="profile"/>

        <div className="main-title">
            <h1>Janciel Fidel M. Pedrano</h1>
            <h3>Frontend Developer</h3>
            <h4>Janciel's Website</h4>
        </div>

        <div className="buttons">
            <button id="email">Email</button>
            <button id="linkedin">LinkedIn</button>
        </div>
      </header>
    </>
  );
}
