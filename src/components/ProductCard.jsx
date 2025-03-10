import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const ProductCard = ({ item }) => {
  const { id, name, price, imageUrl } = item;

  const { setPrice, setItem } = useContext(CartContext);

  const attachItem = () => {
    setPrice(price.current.value);
    setItem(item);
  };

  return (
    <div
      key={id}
      className="flex flex-col items-center w-[350px] h-[520px] p-5 bg-black/60 border border-black/30"
    >
      <div className="w-full cursor-pointer overflow-hidden">
        <img
          src={`https://${imageUrl}`}
          alt={name}
          className="w-full h-full object-cover hover:scale-[1.05] transition-all duration-600 drop-shadow-2xl"
        />
      </div>
      <div className="h-[30%] w-full flex flex-col justify-between py-2">
        <h2
          className="w-full text-2xl font-display text-white tracking-wide text-end cursor-pointer hover:underline transition-all duration-800"
          onClick={() => attachItem()}
        >
          <Link to={`/product/${id}`}>{name}</Link>
        </h2>
        <div className="flex items-center mt-2">
          <Link
            to={`/product/${id}`}
            className="w-40 bg-white font-display text-4xl text-center tracking-wide cursor-pointer border border-white hover:bg-black hover:text-white transition-all duration-600"
            onClick={() => {
              attachItem();
            }}
          >
            +
          </Link>

          <h2 className="w-full font-display text-white text-end text-2xl">
            {price.current.value}€
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
