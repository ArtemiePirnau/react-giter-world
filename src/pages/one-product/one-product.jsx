import Rater from "react-rater";

import { Footer } from "../../components/footer/footer.jsx";
import { Recommended } from "../one-product/recommended/recommended.jsx";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { NoMatching } from "../../components/no-matching/no-matching.jsx";
import parfume from "../../../public/images/parfumery.jpg";
import buy from "../../../public/images/buy.svg";

import "react-rater/lib/react-rater.css";

export const OneProduct = () => {
  const { name } = useParams();
  const productsList = useSelector((state) => state.parfumeryList.productsList);

  const product = productsList.find((product) => String(product.name) === name);

  if (!product) {
    return <NoMatching />;
  }
  return (
    <div className="one-product">
      <h3 className="special-title">Больше о</h3>
      <h2 className="special-subtitle services__subtitle">{product.name}</h2>
      <div className="one-product__inner section">
        <img className="one-product__img" src={product.img} alt="parfume" />
        <div className="one-product__info">
          <div className="one-product__details">
            <Rater total={5} rating={3} interactive={true} />
            <p className="one-product__views">
              <span>124</span> отзыва
            </p>
          </div>
          <h3 className="one-product__title">{product.name}</h3>
          <div className="one-product__instock">
            <p className="one-product__available">Доступность</p>
            <p className="one-product__stock">В наличии</p>
          </div>
          <p className="one-product__text">
            Дарит ощущение уникальность и одновременно заставляет почувствовать
            себя неотъемлемой частью окружающего природного мира.
          </p>
          <div className="one-product__buy">
            <p className="one-product__price">
              <span>{product.price}</span> $
            </p>
            <button className="one-product__btn">
              <span>Купить</span>
              <img
                className="one-product__cart"
                src={buy}
                alt="shopping cart"
              />
            </button>
          </div>
        </div>
      </div>
      <Recommended />
      <Footer />
    </div>
  );
};
