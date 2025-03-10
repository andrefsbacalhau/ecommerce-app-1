import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { BsCartX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { NavbarContext } from "../contexts/NavbarContext";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  const { setCartIsOpen } = useContext(NavbarContext);

  const navigate = useNavigate();

  return (
    <>
      {cart ? (
        <div className="overflow-y-scroll space-y-5 px-3">
          {cart.map((cartItem) => (
            // ----Cart Item Container----
            <div
              className="w-full p-3 flex flex-col lg:flex-row items-center gap-3 bg-black/5"
              key={cartItem.id}
            >
              {/* ----Left Side/Cart Item Image----- */}
              <div>
                <img
                  src={`https://${cartItem.media.images[0].url}`}
                  alt=""
                  className="size-50 md:size-70 lg:size-70 aspect-square"
                />
              </div>

              {/* ----Right Side / Info / Options---- */}
              <div className="w-full flex flex-col justify-between font-display text-black text-lg lg:text-2xl p-3">
                {/* ----Cart Item Info---- */}
                <div>
                  <h1
                    className="text-2xl lg:text-4xl hover:underline cursor-pointer"
                    onClick={() => {
                      navigate(`/product/${cartItem.id}`), setCartIsOpen(false);
                    }}
                  >
                    {cartItem.name}
                  </h1>
                  <h1 className="text-base lg:text-2xl">
                    Size: {cartItem.size}
                  </h1>

                  <h1 className="text-base">
                    Per Unit: {cartItem.productPrice}€
                  </h1>
                </div>

                {/* -----Cart Item Options/Remove from cart----- */}
                <div className="w-full flex items-center justify-between text-4xl lg:mt-5">
                  {/* ----Cart Item options---- */}
                  <div className="space-x-5">
                    <button
                      className="cursor-pointer"
                      onClick={() => decreaseQuantity(cartItem)}
                    >
                      -
                    </button>
                    <span>{cartItem.quantity}</span>
                    <button
                      className="cursor-pointer"
                      onClick={() => increaseQuantity(cartItem)}
                    >
                      +
                    </button>
                  </div>

                  {/* ----Remove Cart Item from cart---- */}
                  <div>
                    <BsCartX
                      size={50}
                      className="cursor-pointer"
                      onClick={() => removeFromCart(cartItem)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Cart;
