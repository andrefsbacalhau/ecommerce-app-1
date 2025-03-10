import React, { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";

const Store = () => {
  const [productsApi, setProductsApi] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  //Controller to prevent race condition
  const abortControllerRef = useRef(null);

  //Fetching all data
  useEffect(() => {
    if (localStorage.getItem("AllProducts")) {
      getFromStorage();
    } else {
      getFromApi();
    }
  }, []);

  //If not first time get Products from LocalStorage
  const getFromStorage = () => {
    setProductsApi(JSON.parse(localStorage.getItem("AllProducts")));
    console.log("Data fetched from storage.");
  };

  //If is the first time get Products from API
  const getFromApi = () => {
    const url =
      "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&country=US&sort=freshness&currency=USD&sizeSchema=US&limit=48&lang=en-US";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "11e8e88782mshb3fee4981c1d292p183ef8jsn63f61a1dcbd1",
        "x-rapidapi-host": "asos2.p.rapidapi.com",
      },
    };

    const fetchAllProducts = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      setIsLoading(true);

      try {
        //---Fetch from API-----
        const response = await fetch(url, options, {
          signal: abortControllerRef.current?.signal,
        });
        const products = await response.json();

        //-----Feed the State----
        setProductsApi(
          //products ordered by name
          products.products.sort((a, b) => a.name.localeCompare(b.name))
        );

        //------Insert in storage----
        //Translate results to strings
        //products ordered by name
        const productsApiStorage = JSON.stringify(
          products.products.sort((a, b) => a.name.localeCompare(b.name))
        );
        //Create LocalStorage
        localStorage.setItem("AllProducts", productsApiStorage);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted");
          return;
        }
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllProducts();
    console.log("Data fetched from API");
  };

  //Loading screen
  if (isLoading) {
    return (
      <div className="w-full grid place-items-center h-100 bg-black/30 my-14 mt-5 lg:mt-15">
        <h1 className="font-display text-5xl text-white text-center">
          Getting those sneakers ready just for you, please hold on...
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

  return (
    <div className="container grid place-items-center">
      <div className="flex flex-wrap justify-center items-center space-y-5 gap-x-5 ">
        {productsApi.map((item) => (
          <ProductCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Store;
