import { useSelector } from "react-redux";
import { ProductItem } from "../products-page/product-item/product-item.jsx";
import { Footer } from "../../components/footer/footer.jsx";
import { getDataFromItem } from "../../reducer/womanItemsSlice.jsx";
export const Woman = () => {
  const productsList = useSelector((state) => state.womanList.productsList);
  return (
    <>
      <ul className="products__list">
        {productsList.map(({ id, name, img, price }) => {
          return (
            <ProductItem
              getDataFromItem={getDataFromItem}
              key={id}
              name={name}
              img={img}
              price={price}
            />
          );
        })}
      </ul>
      <Footer />
    </>
  );
};
