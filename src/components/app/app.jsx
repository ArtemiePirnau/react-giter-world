import {
  BrowserRouter as Router,
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from "react";

import { Header } from "../header/header.jsx";
import { HomePage } from "../../pages/home-page/home-page.jsx";
import { ProductsPage } from "../../pages/products-page/products-page.jsx";
import { OneProduct } from "../../pages/one-product/one-product.jsx";
import { AboutUs } from "../../pages/about-us/about-us.jsx";
import { Contacts } from "../../pages/contacts/contacts.jsx";
import { ParfumeryCategories } from "../../pages/products-page/parfumery-categories/parfumery-categories.jsx";
import { CosmeticsCategories } from "../../pages/products-page/cosmetics-category/cosmetics-category.jsx";
import { BodyCare } from "../../pages/bodycare/bodycare.jsx";
import { MakeUp } from "../../pages/makeup/makeup.jsx";
import { FaceCare } from "../../pages/facecare/facecare.jsx";
import { Man } from "../../pages/man/man.jsx";
import { Woman } from "../../pages/woman/woman.jsx";
import { Unisex } from "../../pages/unisex/unisex.jsx";
const App = () => {
  const [isHide, setHide] = useState(false);

  const toggleHide = () => {
    setHide(!isHide);
  };

  return (
    <div className={isHide ? "app hide" : "app"}>
      <HashRouter basename="/">
        <Header toggleHide={toggleHide} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products-page" element={<ProductsPage />} />
          <Route path="/one-product" element={<OneProduct />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route
            path="/products-page/parfumery"
            element={<ParfumeryCategories />}
          />
          <Route path="/products-page/parfumery/man" element={<Man />} />
          <Route path="/products-page/parfumery/woman" element={<Woman />} />
          <Route path="/products-page/parfumery/unisex" element={<Unisex />} />
          <Route
            path="/products-page/cosmetics"
            element={<CosmeticsCategories />}
          />
          <Route path="/products-page/cosmetics/makeup" element={<MakeUp />} />
          <Route
            path="/products-page/cosmetics/body-care"
            element={<BodyCare />}
          />
          <Route
            path="/products-page/cosmetics/face-care"
            element={<FaceCare />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
};
export default App;
