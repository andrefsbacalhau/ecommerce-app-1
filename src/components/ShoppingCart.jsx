import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import Cart from "./Cart";

const ShoppingCart = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const { cart } = useContext(CartContext);

  // UseEffect and reduce to calculate the Total amount
  useEffect(() => {
    if (cart) {
      const price = cart.reduce((accumulator, cartItem) => {
        return (accumulator += cartItem.productPrice * cartItem.quantity);
      }, 0);

      setTotalPrice(price);
    }
  }, [cart]);

  return (
    <div className="w-full h-full z-100 relative bg-black/95 text-white backdrop-blur-xl p-5 md:p-5 lg:p-10">
      <h1 className="font-display text-white text-3xl md:text-4xl mb-2">
        Shopping Cart
      </h1>
      <div className="h-120 sm:h-130 md:h-150 lg:h-200 xl:h-120 overflow-auto bg-white py-3">
        <Cart />
      </div>
      {totalPrice > 0 ? (
        <>
          <div className="font-display text-2xl text-end my-3">
            Total: {totalPrice}€
          </div>
          <div className="flex justify-between ">
            <button className="w-35 bg-black text-white font-display text-xl font-bold tracking-wider px-3 py-1 border border-white cursor-pointer">
              Need Help?
            </button>
            <button className="w-35 bg-white text-black font-display text-xl font-bold tracking-wider px-3 py-3 border border-black cursor-pointer">
              Checkout
            </button>
          </div>
        </>
      ) : (
        <div className="font-display text-center mt-5">Cart is empty</div>
      )}
    </div>
  );
};

export default ShoppingCart;
