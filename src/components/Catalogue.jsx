import { useEffect, useState } from "react";
import Slider from "./Slider/Slider";

const Catalogue = () => {
  const [imagesCollection, setImagesCollection] = useState([]);

  useEffect(() => {
    setImagesCollection(JSON.parse(localStorage.getItem("AllProducts")));
    console.log("Mudei a coleção");
  }, []);
  return (
    <div className="container">
      <div className="">
        <Slider imagesCollection={imagesCollection} />
      </div>
    </div>
  );
};

export default Catalogue;
