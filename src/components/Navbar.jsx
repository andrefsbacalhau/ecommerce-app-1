import React, { createContext, useContext, useEffect, useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import ShoppingCart from "./ShoppingCart";
import { NavbarContext } from "../contexts/NavbarContext";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate();

  const { cart } = useContext(CartContext);
  const { menuIsOpen, cartIsOpen, setMenuIsOpen, setCartIsOpen } =
    useContext(NavbarContext);

  return (
    <nav className="w-full text-xl flex justify-evenly lg:justify-between items-center px-5 md:px-10 py-6 fixed z-200 backdrop-blur-lg bg-black/40">
      {/* ----------------------------------NAVBAR LEFT SIDE---- */}
      {/* ---Desktop Menu --- */}
      <div className="w-full hidden xl:flex gap-10 ">
        <Link to="/" className="navbar-link">
          Store
        </Link>
        <Link to="/catalogue" className="navbar-link">
          Catalogue
        </Link>
        <Link to="/about" className="navbar-link">
          About
        </Link>
        <Link to="/contacts" className="navbar-link">
          Contacts
        </Link>
      </div>

      {/* ----Mobile Menu Button---- */}
      <div className="w-full flex xl:hidden text-white cursor-pointer">
        {/* Select which icon to appear depending on Mobile Menu status */}
        {menuIsOpen ? (
          <IoCloseOutline
            size={40}
            onClick={() => {
              setMenuIsOpen(!menuIsOpen), setCartIsOpen(false);
            }}
          />
        ) : (
          <CgMenuLeftAlt
            size={40}
            onClick={() => {
              setMenuIsOpen(!menuIsOpen), setCartIsOpen(false);
            }}
          />
        )}
      </div>

      {/* -----------------------------------NAVBAR CENTER----- */}
      <div className="w-full flex items-end justify-center">
        <h1
          className="bg-black/50 font-display text-white text-center px-2 pt-5 text-3xl lg:text-6xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          ANDREFSB
        </h1>
        <span
          className="w-20 text-xl text-end font-display pt-4 lg:pt-10 px-1 bg-white cursor-pointer"
          onClick={() => navigate("/")}
        >
          the store
        </span>
      </div>

      {/* -----------------------------------NAVBAR LEFT-SIDE------ */}
      <div className="w-full flex justify-end items-center">
        {/* ----Socials---- */}
        <div className="w-[100px] hidden flex-row gap-2 justify-between items-center p-3 text-white bg-black/80 rounded-tl-xl rounded-bl-xl">
          <FaFacebookF size={20} className="cursor-pointer" />
          <FaInstagram size={20} className="cursor-pointer" />
          <FaXTwitter size={20} className="cursor-pointer" />
        </div>

        {/* -----Cart Button---- */}
        <div className="flex text-white relative cursor-pointer">
          {/* Cart quantity to show only if Cart is closed */}
          {!cartIsOpen && (
            <span
              className={`absolute left-6 -top-3 bg-black rounded-full px-2`}
            >
              {cart && cart.length > 0 ? cart.length : ""}
            </span>
          )}

          {/* Select which icon to appear depending on Cart status */}
          {cartIsOpen ? (
            <IoCloseOutline
              size={40}
              onClick={() => {
                setCartIsOpen(!cartIsOpen), setMenuIsOpen(false);
              }}
            />
          ) : (
            <FiShoppingCart
              size={40}
              onClick={() => {
                setCartIsOpen(!cartIsOpen), setMenuIsOpen(false);
              }}
            />
          )}
        </div>
      </div>

      {/* --------------------------------MOBILE MENU (LINKS) WHEN OPEN--- */}
      <div
        className={`w-full h-screen xl:hidden absolute z-200 top-25 lg:top-30 ${
          menuIsOpen ? "left-0" : "-left-300"
        } grid place-items-center pb-30 bg-black/95 transition-all duration-800`}
      >
        <Link
          to="/"
          className="navbar-link-mobile"
          onClick={() => setMenuIsOpen(false)}
        >
          Store
        </Link>
        <Link
          to="/catalogue"
          className="navbar-link-mobile"
          onClick={() => setMenuIsOpen(false)}
        >
          Catalogue
        </Link>
        <Link
          to="/about"
          className="navbar-link-mobile"
          onClick={() => setMenuIsOpen(false)}
        >
          About
        </Link>
        <Link
          to="/contacts"
          className="navbar-link-mobile"
          onClick={() => setMenuIsOpen(false)}
        >
          Contacts
        </Link>
      </div>

      {/* --------------------------------------Shopping Cart when open--- */}
      <div
        className={`w-full 2xl:w-[50%] h-screen absolute z-200 top-25 lg:top-30  ${
          cartIsOpen ? "left-0 2xl:left-[50%]" : "left-700"
        } grid place-items-center transition-all duration-800`}
      >
        <ShoppingCart className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
