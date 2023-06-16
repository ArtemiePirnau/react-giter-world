import { useSelector } from "react-redux";
import { ProductItem } from "../product-item/product-item.jsx";
export const ProductsList = () => {
  const productsList = useSelector((state) => state.parfumeryList.productsList);
  return (
    <ul className="products__list">
      {productsList.map(({ id, name, img, price }) => {
        return <ProductItem key={id} name={name} img={img} price={price} />;
      })}
    </ul>
  );
};
