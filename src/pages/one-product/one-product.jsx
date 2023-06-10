import StarsRating from "react-star-rate";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import { Header } from "../../components/header/header.jsx";
import { Footer } from "../../components/footer/footer.jsx";
import { Recommended } from "../one-product/recommended/recommended.jsx";

import parfume from "../../../public/images/parfumery.jpg";
import buy from "../../../public/images/buy.svg";
export const OneProduct = () => {
  return (
    <div className="one-product">
      <h3 className="special-title">More About</h3>
      <h2 className="special-subtitle services__subtitle">Name Parfume</h2>
      <div className="one-product__inner section">
        <img className="one-product__img" src={parfume} alt="parfume" />
        <div className="one-product__info">
          <div className="one-product__details">
            <Rater total={5} rating={3} interactive="true" />
            <p className="one-product__views">
              <span>124</span> REVIEWS
            </p>
          </div>
          <h3 className="one-product__title">
            Name Parfume and mini description lorem input lorem input lorem
            input
          </h3>
          <div className="one-product__instock">
            <p className="one-product__available">Availability</p>
            <p className="one-product__stock">In stock</p>
          </div>
          <p className="one-product__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            mollis nibh. Fusce sit amet sem venenatis, pellentesque magna a,
            dapibus sapien. Curabitur bibendum elementum mollis. Nunc non
            blandit justo. Aenean accumsan vitae magna sed pulvinar. Aenean et
            metus ante. Aliquam accumsan hendrerit tincidunt.
          </p>
          <div className="one-product__buy">
            <p className="one-product__price">
              <span>249.99</span>$
            </p>
            <button className="one-product__btn">
              <span>Add to Card</span>
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
