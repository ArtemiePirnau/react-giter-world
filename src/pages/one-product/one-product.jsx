import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import { Footer } from "../../components/footer/footer.jsx";
import { Recommended } from "../one-product/recommended/recommended.jsx";

import parfume from "../../../public/images/parfumery.jpg";
import buy from "../../../public/images/buy.svg";

export const OneProduct = () => {
  return (
    <div className="one-product">
      <h3 className="special-title">Больше о</h3>
      <h2 className="special-subtitle services__subtitle">Имя Духи</h2>
      <div className="one-product__inner section">
        <img className="one-product__img" src={parfume} alt="parfume" />
        <div className="one-product__info">
          <div className="one-product__details">
            <Rater total={5} rating={3} interactive={true} />
            <p className="one-product__views">
              <span>124</span> отзыва
            </p>
          </div>
          <h3 className="one-product__title">
            Название парфюма и мини-описание
          </h3>
          <div className="one-product__instock">
            <p className="one-product__available">Доступность</p>
            <p className="one-product__stock">В наличии</p>
          </div>
          <p className="one-product__text">
            Дарит ощущение уникальность и и одновременно заставляет
            почувствовать себя неотъемлемой частью окружающего природного мира.
          </p>
          <div className="one-product__buy">
            <p className="one-product__price">
              <span>249.99</span>$
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
