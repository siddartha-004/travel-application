import React, { useContext } from 'react'
import "./NavigationBar.css";
import HomeIcon from '@mui/icons-material/Home';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import {NavLink} from "react-router-dom"
import {loginContext} from"../../contexts/loginContext";
function NavigationBar() {
  let [currentUser,error,userLoginStatus,loginUser,logoutUser]=useContext(loginContext);
  const activeLink={
    color:"#ffaa00",
    fontSize:"1.2rem",
    fontWeight:"bold"
  };
  const inactiveLink={
    color:"#EEF0F2",
    fontSize:"1.2rem",
  }
  return (
    <nav class="navbar navbar-expand-sm rounded-top">
  <div class="container-fluid">
    <div class="navbar-brand"><img src="https://static.vecteezy.com/system/resources/previews/000/404/637/original/logo-of-nature-organic-farming-vector.jpg" width="40px" className='shadow rounded-circle border border-warning-subtle border-2' alt="can't reload"/></div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <NavLink className="nav-link" to="/" style={({ isActive })=>{return isActive?activeLink:inactiveLink;}}><HomeIcon/>Home</NavLink>
        </li>
        <li class="nav-item">
         <NavLink className="nav-link" to="/register" style={({ isActive })=>{return isActive?activeLink:inactiveLink;}}><HowToRegIcon/>Register</NavLink>
        </li>
        <li class="nav-item">
         <NavLink className="nav-link" to="/login" style={({ isActive })=>{return isActive?activeLink:inactiveLink;}}><LoginIcon/>Login</NavLink>
        </li>
        <li class="nav-item">
         <NavLink className="nav-link" to="/blog" style={({ isActive })=>{return isActive?activeLink:inactiveLink;}}><BookRoundedIcon/>Blog</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavigationBar
