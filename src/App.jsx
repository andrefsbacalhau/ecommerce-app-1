import Navbar from "./components/Navbar";
import Catalogue from "./components/Catalogue";
import About from "./components/About";
import Contacts from "./components/Contacts";
import underground from "./assets/background/underground.jpg";
import Store from "./components/Store";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <div class="w-full h-screen overflow-x-hidden">
      <img
        src={underground}
        alt=""
        className="size-full inset-0 fixed object-cover -z-10 brightness-70"
      />
      <div className="static">
        <Navbar />
      </div>
      {/* ---------------------------------WHITE LINE ---- */}
      <div className="white-bar mt-25 lg:mt-30 xl:mt-40"></div>
      <div className="grid place-items-center">
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
      {/* ---------------------------------WHITE LINE --- */}
      <div className="white-bar"></div>
      <Footer />
    </div>
  );
};

export default App;
