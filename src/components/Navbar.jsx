import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  // Check if the current URL path starts with "/book/"
  const isBookDetails = location.pathname.startsWith("/book/");

  return (
    <div className="navbar">
      {/* Logo that links to the homepage */}
      <Link to="/" className="navbar-logo">📚 BookHunt</Link>

      <div className="navbar-links">
        {/* NavLink automatically adds "active" class when the route matches */}
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

        {/* Custom active class logic for Book Details route */}
        <Link
          to="/book/1" // Just a sample route for highlighting
          className={isBookDetails ? "active" : ""}
        >
          Book Details
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
