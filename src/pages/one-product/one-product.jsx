import Rater from "react-rater";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { Footer } from "../../components/footer/footer.jsx";
import { Recommended } from "../one-product/recommended/recommended.jsx";
import { NoMatching } from "../../components/no-matching/no-matching.jsx";
import buy from "../../../public/images/buy.svg";

import "react-rater/lib/react-rater.css";

export const OneProduct = () => {
  const { t } = useTranslation();
  const { name } = useParams();
  const productsList = useSelector((state) => state.parfumeryList.productsList);

  const product = productsList.find((product) => String(product.name) === name);

  if (!product) {
    return <NoMatching />;
  }
  return (
    <div className="one-product">
      <h3 className="special-title">{t("oneproducttitle")}</h3>
      <h2 className="special-subtitle services__subtitle">{product.name}</h2>
      <div className="one-product__inner section">
        <img className="one-product__img" src={product.img} alt="parfume" />
        <div className="one-product__info">
          <div className="one-product__details">
            <Rater total={5} rating={3} interactive={true} />
          </div>
          <h3 className="one-product__title">{product.name}</h3>
          <div className="one-product__instock">
            <p className="one-product__stock">In stock</p>
          </div>
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
