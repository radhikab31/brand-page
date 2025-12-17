import React from "react";
import {Link, NavLink} from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between height-[25px] p-4">
        <Link to="/">
          <img src="./brandLogo.jpg" alt="Brand Logo" className="size-12" />
        </Link>
        <div id="nav-container" className="flex gap-8 text-lg font-medium">
          <NavLink to="/" className={({isActive}) => `${isActive ? "text-amber-900" : "text-black"}`}>
            Home
          </NavLink>
          <NavLink to="/menu" className={({isActive}) => `${isActive ? "text-amber-900" : "text-black"}`}>
            Menu
          </NavLink>
          <NavLink to="/location" className={({isActive}) => `${isActive ? "text-amber-900" : "text-black"}`}>
            Location
          </NavLink>
          <NavLink to="/about" className={({isActive}) => `${isActive ? "text-amber-900" : "text-black"}`}>
            About
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => `${isActive ? "text-amber-900" : "text-black"}`}>
            Contact
          </NavLink>
        </div>

        <NavLink to="/login">
          <button id="login-btn" className="py-2 px-6 rounded-sm bg-red-700 text-white ">
            Login
          </button>
        </NavLink>
      </nav>
    </header>
  );
}
