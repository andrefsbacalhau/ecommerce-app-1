import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState();
  const [item, setItem] = useState([]);
  const [selectedSize, setSelectedSize] = useState();

  const addToCart = (item) => {
    // Check if cart already has same item and same size
    const isFound = cart.find(
      (cartItem) => cartItem.id === item.id && cartItem.size === item.size
    );

    if (isFound) {
      //If last condition is true we just increase it's amount
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id && cartItem.size === item.size
            ? {
                ...isFound,
                quantity: isFound.quantity + 1,
              }
            : cartItem
        )
      );
      console.log("Quantity of the product updated in cart.");
    } else {
      //if we dont have the item in cart, add item to cart, including a quantity and addedInCart attributes
      setCart([...cart, { ...item, quantity: 1, addedInCart: true }]);
      console.log("Product added to cart.");
    }
  };

  const increaseQuantity = (item) => {
    const isFound = cart.find(
      (cartItem) => cartItem.id === item.id && cartItem.size === item.size
    );

    setCart(
      cart.map((cartItem) =>
        cartItem.id === item.id && cartItem.size === item.size
          ? { ...isFound, quantity: isFound.quantity + 1 }
          : cartItem
      )
    );

    console.log("Product quantity increased.");
  };

  const decreaseQuantity = (item) => {
    const isFound = cart.find(
      (cartItem) => cartItem.id === item.id && cartItem.size === item.size
    );

    setCart(
      cart.map((cartItem) =>
        cartItem.id === item.id &&
        cartItem.size === item.size &&
        item.quantity > 1
          ? { ...isFound, quantity: isFound.quantity - 1 }
          : cartItem
      )
    );

    console.log("Product quantity decreased.");
  };

  const removeFromCart = (item) => {
    const newCart = cart.filter((cartItem) => {
      if (!(cartItem.id === item.id && cartItem.size === item.size)) {
        return cartItem;
      }
    });

    setCart([...newCart]);

    console.log("Product removed from cart.");
  };

  const updateCartLocalStorage = () => {
    localStorage.setItem("Cart", JSON.stringify(cart));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        price,
        setPrice,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        item,
        setItem,
        selectedSize,
        setSelectedSize,
        removeFromCart,
        updateCartLocalStorage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
