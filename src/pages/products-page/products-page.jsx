import { Footer } from "../../components/footer/footer.jsx";
import { Catalog } from "./catalog/catalog.jsx";
import { ProductsList } from "./products-list/products-list.jsx";

export const ProductsPage = () => {
  return (
    <div className="products-page">
      <div className="products-page__inner">
        <Catalog />
        <ProductsList />
      </div>
      <Footer />
    </div>
  );
};
