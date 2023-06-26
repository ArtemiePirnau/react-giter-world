import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import prevArrow from "../../../../public/images/prev.svg";
import nextArrow from "../../../../public/images/next.svg";

const SliderPrev = ({ currentSlide, slideCount, ...props }) => {
  return (
    <button
      {...props}
      className={
        "slick-arrow slick-prev" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <img src={prevArrow} alt="prev arrow" />
    </button>
  );
};

const SliderNext = ({ currentSlide, slideCount, ...props }) => {
  return (
    <button
      {...props}
      className={
        "slick-arrow slick-next" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <img src={nextArrow} alt="next arrow" />
    </button>
  );
};
export const Recommended = () => {
  let settings = {
    prevArrow: <SliderPrev />,
    nextArrow: <SliderNext />,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const productsList = useSelector((state) => state.parfumeryList.productsList);
  const { t } = useTranslation();
  return (
    <div className="products section">
      <h3 className="special-title">{t("recommendedtitle")}</h3>
      <h2 className="special-subtitle product__subtitle">
        {t("recommendedsubtitle")}
      </h2>
      <Slider className="recommended__slider" {...settings}>
        {productsList.map(({ id, name, img, price }) => {
          return (
            <Link
              className="product__item"
              key={id}
              to={`/one-product/${name}`}
            >
              <img className="product__item-img" src={img} alt="slider image" />
              <div className="product__item-info">
                <p className="product__item-name">{name}</p>
                <p className="product__item-price">{price} $</p>
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};
