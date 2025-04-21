// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">📚 BookHunt</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/mylist">My Reading List</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
