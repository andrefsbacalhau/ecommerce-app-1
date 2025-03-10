import React, { createContext, useState } from "react";

export const NavbarContext = createContext();

const NavbarContextProvider = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  return (
    <NavbarContext.Provider
      value={{ menuIsOpen, cartIsOpen, setMenuIsOpen, setCartIsOpen }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarContextProvider;
