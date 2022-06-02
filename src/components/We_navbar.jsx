import React from "react";
import { NavLink } from "react-router-dom";

const We_navbar =() => {
    return(
        <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
  <div className="container-fluid ">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-lg-0 fs-4">
        <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/we_home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/we_about">About</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link" to="/we_services">Services</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link" to="/we_contact">Contact</NavLink>
        </li>
      </ul>
      <NavLink className="navbar-brand fw-bolder fs-1 ms-3  " to="/">We 5 Company</NavLink>
      {/* <NavLink to="/login" className="btn btn-outline-primary ms-auto px-4 rounded-pill ">
          <i className="fa fa-sign-in me-2"></i>Login</NavLink>
      <NavLink to="/register" className="btn btn-outline-primary ms-2 px-4 rounded-pill ">
         <i className="fa fa-user-plus me-2"></i>Register</NavLink>
      <NavLink to="/dashboard" className="btn btn-outline-primary ms-2 px-4 rounded-pill ">
          <i className="fa fa-sign-out me-2"></i>Dashboard</NavLink> */}
    </div>
  </div>
</nav>
        </div>
    );
}

export default We_navbar;




