import $ from "jquery";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import sliderImg from "../../../../public/images/slider.jpg";
import prevArrow from "../../../../public/images/prev.svg";
import nextArrow from "../../../../public/images/next.svg";
import { useSelector } from "react-redux";

// import "../../../node_modules/slick-slider/slick/slick.min.js";
// import "../../../node_modules/slick-slider/slick/slick.css";

//TODO: De facut sageti custom
let settings = {
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 3,
  initialSlide: 0,
};

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
export const Cosmetics = () => {
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

  const { t } = useTranslation();
  const cosmeticsList = useSelector(
    (state) => state.cosmeticsList.productsList
  );

  return (
    <div className="products section">
      <h3 className="special-title">{t("cosmeticstitle")}</h3>
      <h2 className="special-subtitle product__subtitle">
        {t("cosmeticssubtitle")}
      </h2>
      <Slider className="products__slider" {...settings}>
        {cosmeticsList.map(({ id, img, name, price }) => {
          return (
            <div className="product__item" key={id}>
              <img className="product__item-img" src={img} alt="slider image" />
              <div className="product__item-info">
                <p className="product__item-name">{name}</p>
                <p className="product__item-price">{price} $</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
