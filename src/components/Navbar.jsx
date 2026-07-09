import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  return (
    <div className="py-2 px-5 mt-2 shadow-2xl rounded-lg">
      <main className="flex items-center justify-center sm:justify-between flex-wrap">
        <div className="navigation gap-5 flex">
          <NavLink to="/" className={`nav-link`}>
            Home
          </NavLink>
          <NavLink to="/about" className={`nav-link`}>
            About
          </NavLink>
          <NavLink to="/wishlist" className={`nav-link`}>
            Wishlist
          </NavLink>
        </div>
        <div className="logo flex items-center gap-2">
          <h1 className="font-semibold text-lg">Researcher Product</h1>
          <img src={logo} alt="helmy logo" className="w-20 rounded-full" />
        </div>
      </main>
    </div>
  );
}
