import { Footer } from "../../components/footer/footer.jsx";
import { Header } from "../../components/header/header.jsx";
import { Catalog } from "./catalog/catalog.jsx";
import { ProductsList } from "./products-list/products-list.jsx";

export const ProductsPage = ({ productsList }) => {
  return (
    <div className="products-page">
      <div className="products-page__inner">
        <Catalog />
        <ProductsList productsList={productsList} />
      </div>
      <Footer />
    </div>
  );
};
