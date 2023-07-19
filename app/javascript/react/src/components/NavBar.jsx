import React from "react";
import ReactDOM from "react-dom";
import "/app/assets/stylesheets/NavBar.css";

const NavBar = () => {
  return (
    // <div className="navbar">
    <div className="topnav">
      <div className="links">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>

      <img
        className="avatar"
        src="https://kitt.lewagon.com/placeholder/users/ssaunier"
        alt="User Avatar"
      />
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<NavBar />, document.getElementById("navbar"));
});

export default NavBar;
