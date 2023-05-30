import { ProductItem } from "../product-item/product-item.jsx";
export const ProductsList = ({ productsList }) => {
  return (
    <ul className="products__list">
      {productsList.map(({ id, name, price }) => {
        return <ProductItem key={id} name={name} price={price} />;
      })}
    </ul>
  );
};
