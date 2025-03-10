import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  //Fetching product data
  useEffect(() => {
    const url = `https://asos2.p.rapidapi.com/products/v4/detail?id=${id}&lang=en-US&store=US&sizeSchema=US&currency=USD`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "11e8e88782mshb3fee4981c1d292p183ef8jsn63f61a1dcbd1",
        "x-rapidapi-host": "asos2.p.rapidapi.com",
      },
    };

    const fetchProduct = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url, options);
        const product = await response.json();
        const allStoredProducts = JSON.parse(
          localStorage.getItem("AllProducts")
        );
        const storedProduct = allStoredProducts.filter(
          (item) => item.id === product.id
        );
        const productPrice = storedProduct[0].price.current.value;

        setProduct({ ...product, productPrice });
        console.log("Product loaded.");
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setSelectedSize();
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  //Loading screen
  if (isLoading) {
    return (
      <div className="w-full grid place-items-center h-100 bg-black/30 my-14 mt-5 lg:mt-15">
        <h1 className="font-display text-5xl text-white text-center">
          Cleaning and fetching your sneaker, please hold on...
        </h1>
        <p className="font-display text-xl text-white text-center">
          If it's taking to long, please refresh the page pressing F5.{" "}
        </p>
      </div>
    );
  }

  //Error screen
  if (error) {
    return <div>Something went wrong! Please, try again.</div>;
  }

  //Cart Context
  const { addToCart, item, setItem, selectedSize, setSelectedSize } =
    useContext(CartContext);

  //updating item info to be sent to cart
  const updateSelectedSize = (e) => {
    setSelectedSize(e.target.value);
    setItem({ ...product, size: e.target.value });
  };

  //validate before sent to cart
  const addToCartHandler = (item) => {
    if (!selectedSize) {
      return alert("Please, pick a size.");
    } else {
      addToCart(item);
    }
  };

  return (
    product && (
      <>
        <div className="container flex flex-col justify-between">
          {/* ----Title/ Product name---- */}
          <div className="mb-5 px-4 lg:px-5">
            <h1 className="title">{product.name}</h1>
            <button onClick={() => console.log(item)}>CLICAAAAA</button>
            <h1 className="title text-end mt-5 px-2">
              {product.productPrice} €
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
            {/* imgs-container */}
            <div className="px-5">
              <div className="min-w-60 lg:min-w-120 grid grid-cols-2 place-items-center gap-2">
                <div>
                  <img
                    src={`https://${product.media.images[0].url}`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-full">
                  <img
                    src={`https://${product.media.images[1].url}`}
                    alt=""
                    className="object-cover"
                  />
                </div>
                <div className="h-full">
                  <img
                    src={`https://${product.media.images[2].url}`}
                    alt=""
                    className="object-cover"
                  />
                </div>
                <div className="h-full">
                  <img
                    src={`https://${product.media.images[3].url}`}
                    alt=""
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            {/* text-container */}
            <div className="p-5">
              <div className="flex flex-col">
                {/* ----Size picker---- */}
                <div className="mb-10 flex flex-col items-center justify-normal">
                  <h1 className="font-display text-white text-xl">
                    Pick your size:
                  </h1>
                  <div className="flex space-x-3">
                    <div className="size-container">
                      <input
                        type="radio"
                        name="size"
                        className="size-input"
                        value="40"
                        id="40"
                        onClick={(e) => updateSelectedSize(e)}
                      />
                      <label htmlFor="40" className="sizeLabel">
                        40
                      </label>
                    </div>

                    <div className="size-container">
                      <input
                        type="radio"
                        name="size"
                        className="size-input"
                        value="41"
                        id="41"
                        onClick={(e) => updateSelectedSize(e)}
                      />
                      <label htmlFor="41" className="sizeLabel">
                        41
                      </label>
                    </div>
                    <div className="size-container">
                      <input
                        type="radio"
                        name="size"
                        className="size-input"
                        value="42"
                        id="42"
                        onClick={(e) => updateSelectedSize(e)}
                      />
                      <label htmlFor="42" className="sizeLabel">
                        42
                      </label>
                    </div>
                    <div className="size-container">
                      <input
                        type="radio"
                        name="size"
                        className="size-input"
                        value="43"
                        id="43"
                        onClick={(e) => updateSelectedSize(e)}
                      />
                      <label htmlFor="43" className="sizeLabel">
                        43
                      </label>
                    </div>
                    <div className="size-container">
                      <input
                        type="radio"
                        name="size"
                        className="size-input"
                        value="44"
                        id="44"
                        onClick={(e) => updateSelectedSize(e)}
                      />
                      <label htmlFor="44" className="sizeLabel">
                        44
                      </label>
                    </div>
                  </div>
                  {/* ---end of Size picker----- */}
                  {/* ----Add to Cart button---- */}
                  <button
                    className="bg-white w-50 mt-2 font-display text-2xl tracking-wider px-2 py-1 cursor-pointer"
                    onClick={() => addToCartHandler(item)}
                  >
                    Add to cart now
                  </button>
                </div>

                {/* ---Item Full Info--- */}
                <div className="mb-5">
                  <h1 className="description-title">Description:</h1>
                  <p
                    className="description-text"
                    dangerouslySetInnerHTML={{
                      __html: product.brand.description,
                    }}
                  ></p>
                </div>

                <div className="mb-5">
                  <h1 className="aditional-title">Materials:</h1>
                  <p
                    className="aditional-text"
                    dangerouslySetInnerHTML={{
                      __html: product.info.aboutMe,
                    }}
                  ></p>
                </div>
                <div className="mb-5">
                  <h1 className="aditional-title">How to keep it tidy:</h1>
                  <p className="aditional-text">{product.info.careInfo}</p>
                </div>

                <p className="item-ref">
                  Item Category: {product.productType.name}
                </p>
                <p className="item-ref">Item ref.: {product.productCode}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default ProductDetails;
