import React from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";

const NavBar = () => {
  return (
  <div className="navbar">
    <div className="topnav">
      <div className="links">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>

    </div>
      <img
        className="avatar"
        src="https://kitt.lewagon.com/placeholder/users/ssaunier"
        alt="User Avatar"
      />
  </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("navbar"));
root.render(<NavBar />);

export default NavBar;
