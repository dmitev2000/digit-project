import "./App.css";
import Navbar from "./components/layout/navigation/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import MenuPage from "./components/pages/MenuPage";
import Footer from "./components/layout/footer/Footer";
import LocationModal from "./components/ui/popup/LocationModal";
import ProductCustomization from "./components/ui/products/ProductCustomization";
import Register from "./components/ui/auth/Register";
import Login from "./components/ui/auth/Login";
import OurCompany from "./components/pages/OurCompany";
import OurCoffee from "./components/pages/OurCoffee";
import OurService from "./components/pages/OurService";
import Planet from "./components/pages/Planet";
import Suppliers from "./components/pages/Suppliers";
import GiftCards from "./components/pages/GiftCards";
import OfficeFoods from "./components/pages/OfficeFoods";
import People from "./components/pages/People";
import CardsPage from "./components/pages/CardsPage";
import ScrollToTop from "./components/ui/scrollTop/ScrollTopComponent";

function App() {
  return (
    <div className="app">
      <Navbar />

      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/gift-cards" element={<CardsPage />} />
          <Route path="/our-company" element={<OurCompany />} />
          <Route path="/our-coffee" element={<OurCoffee />} />
          <Route path="/our-service" element={<OurService />} />
          <Route path="/planet" element={<Planet />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/cgc-sales" element={<GiftCards />} />
          <Route path="/office" element={<OfficeFoods />} />
          <Route path="/people" element={<People />} />
          <Route path="/our-company" element={<OurCompany />} />
          <Route
            path="/product/customization/:id"
            element={<ProductCustomization />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ScrollToTop>
      <LocationModal />
      <Footer />
    </div>
  );
}

export default App;
