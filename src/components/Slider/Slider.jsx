import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Slider = ({ imagesCollection }) => {
  const [slide, setSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const navigate = useNavigate();

  //Cart Context
  const { setPrice } = useContext(CartContext);

  useEffect(() => {
    if (!autoplay) return;
    const slideInterval = setInterval(nextSlide, 3500);
    return () => clearInterval(slideInterval);
  }, [slide]);

  const nextSlide = () => {
    setSlide(slide === imagesCollection.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? imagesCollection.length - 1 : slide - 1);
  };

  return (
    <div className="grid place-items-center">
      <div className="w-100 h-120 md:w-150 md:h-170 xl:w-110 xl:h-130 flex overflow-x-hidden relative">
        {imagesCollection.map((image, index) => (
          <div
            className={`min-w-full min-h-full relative ${
              slide === index ? "" : "hidden"
            } transition-all duration-500`}
            key={index}
          >
            <img
              src={`https://${image.imageUrl}`}
              alt=""
              className="size-full absolute aspect-square"
            />
            <button
              className="absolute bottom-2 right-2 text-lg tracking-wider xl:text-2xl font-display bg-black/20 text-white p-2 cursor-pointer hover:bg-black transition-all duration-500"
              onClick={() => {
                navigate(`/product/${image.id}`),
                  setPrice(image.price.current.value);
              }}
            >
              See more
            </button>
            <div className="w-[95%] absolute top-0 left-3 bg-black/20 px-5 py-2 flex items-end mt-3">
              <h2 className="font-display tracking-wider  text-white text-3xl md:text-4xl">
                {image.name}
              </h2>
              <span className="font-display tracking-wider text-white text-2xl md:text-3xl">
                {image.price.current.value}€
              </span>
            </div>
          </div>
        ))}
        <BiChevronLeft
          className="absolute size-10 text-black/60 shadow rounded-full bg-white left-2 top-[50%] cursor-pointer hover:bg-black/10 transition-all duration-500"
          onClick={prevSlide}
        />
        <BiChevronRight
          className="absolute size-10 text-black/60 shadow rounded-full bg-white right-2 top-[50%] cursor-pointer hover:bg-black/10 transition-all duration-500"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default Slider;
