import React from "react";
import ReactDOM from "react-dom";
import "/app/assets/stylesheets/NavBar.css";

const NavBar = () => {
  return (
    // <div className="navbar navbar-expand-sm navbar-light navbar-lewagon">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="/">
    //       <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/logo.png" alt="Le Wagon" />
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto">
    //         <li className="nav-item active">
    //           <a className="nav-link" href="/">
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Messages
    //           </a>
    //         </li>
    //         <li className="nav-item dropdown">
    //           <div
    //             className="dropdown-menu dropdown-menu-end"
    //             aria-labelledby="navbarDropdown"
    //           >
    //             <a className="dropdown-item" href="#">
    //               Action
    //             </a>
    //             <a className="dropdown-item" href="#">
    //               Another action
    //             </a>
    //             <a className="dropdown-item" data-turbo-method="delete" href="#">
    //               Log out
    //             </a>
    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
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
        // id="navbarDropdown"
        // data-bs-toggle="dropdown"
        // aria-haspopup="true"
        // aria-expanded="false"
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
