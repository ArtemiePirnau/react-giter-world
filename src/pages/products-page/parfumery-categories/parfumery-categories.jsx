import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import img from "../../../../public/images/one-product.jpg";

export const ParfumeryCategories = () => {
  const { t } = useTranslation();

  const parfumery = [
    {
      id: 0,
      label: t("man"),
      img: img,
      to: "/products-page/parfumery/man",
    },
    {
      id: 1,
      label: t("woman"),
      img: img,
      to: "/products-page/parfumery/woman",
    },
    {
      id: 2,
      label: t("unisex"),
      img: img,
      to: "/products-page/parfumery/unisex",
    },
  ];
  return (
    <div className="parfumery-categories">
      <h3 className="special-title">{t("parfumerycategoriestitle")}</h3>
      <h2 className="special-subtitle services__subtitle">
        {t("parfumerycategoriessubtitle")}
      </h2>
      <div className="parfumery-categories__inner">
        {parfumery.map(({ id, label, img, to }) => {
          return (
            <Link
              className="parfumery__item"
              key={id}
              to={to}
              style={{
                backgroundImage: `url(${img})`,
              }}
            >
              <span className="parfumery__item-label">{label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
