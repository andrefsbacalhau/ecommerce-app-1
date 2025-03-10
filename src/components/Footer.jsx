import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full font-display2 text-xl flex flex-col-reverse lg:flex-row justify-between text-center gap-10 py-5 md:mt-5 lg:mt-10">
      <div className="section">
        <h1 className="section-title">Partners</h1>
        <ul>
          <li>Inês Acessórios</li>
          <li>Rute Estética & Bem-Estar</li>
          <li>A Lua Pet</li>
        </ul>
      </div>
      <div className="section">
        <h1 className="section-title">Address</h1>
        <p>Av. Virgílio Ferreira, Lote 760</p>
        <p>1950-339 - Lisboa</p>
      </div>
      <div className="section">
        <h1 className="section-title">Contact Us</h1>
        <div className="">
          <p>andrefsbacalhau@gmail.com</p>
          <p>+351 967176163</p>
          <div className="flex justify-center space-x-4 mt-4">
            <FaFacebookF size={20} className="cursor-pointer" />
            <FaInstagram size={20} className="cursor-pointer" />
            <FaXTwitter size={20} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
