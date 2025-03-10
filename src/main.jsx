import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./contexts/CartContext.jsx";
import NavbarContextProvider from "./contexts/NavbarContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContextProvider>
      <NavbarContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NavbarContextProvider>
    </CartContextProvider>
  </StrictMode>
);
