import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const isBookDetails = location.pathname.startsWith("/book/");

  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">📚 BookHunt</Link>
      <div className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/mylist"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          My List
        </NavLink>
        <Link
          to="/book/1" // Keep any sample route
          className={isBookDetails ? "active" : ""}
        >
          Book Details
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
