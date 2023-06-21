import { useSelector } from "react-redux";
import { ProductItem } from "../products-page/product-item/product-item.jsx";
import { Footer } from "../../components/footer/footer.jsx";
export const Man = () => {
  const productsList = useSelector((state) => state.manList.productsList);
  return (
    <>
      <ul className="products__list">
        {productsList.map(({ id, name, img, price }) => {
          return <ProductItem key={id} name={name} img={img} price={price} />;
        })}
      </ul>
      <Footer />
    </>
  );
};
