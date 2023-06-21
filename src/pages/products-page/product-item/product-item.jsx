import { Link } from "react-router-dom";
import product from "../../../../public/images/product.jpg";
export const ProductItem = ({ id, name, price, img }) => {
  console.log(img);
  return (
    <li className="products__item" key={id}>
      <Link to="/one-product">
        <img className="products__item-img" src={img} alt="product" />
        <div className="products__item-info">
          <p className="products__item-name">{name}</p>
          <span>{price}$</span>
        </div>
      </Link>
    </li>
  );
};
