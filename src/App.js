import "./App.css";
import Navbar from "./components/layout/navigation/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import MenuPage from "./components/pages/MenuPage";
import Footer from "./components/layout/footer/Footer";
import LocationModal from "./components/ui/popup/LocationModal";
import ProductDetails from "./components/ui/products/ProductDetails";

function App() {

  return (
    <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <LocationModal />
        <Footer />
    </div>
  );
}

export default App;
