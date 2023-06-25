import { Link } from "react-router-dom";
export const ProductItem = ({ id, name, price, img }) => {
  return (
    <li className="products__item" key={id}>
      <Link to={`/one-product/${name}`}>
        <img className="products__item-img" src={img} alt="product" />
        <div className="products__item-info">
          <p className="products__item-name">{name}</p>
          <span>{price}$</span>
        </div>
      </Link>
    </li>
  );
};
