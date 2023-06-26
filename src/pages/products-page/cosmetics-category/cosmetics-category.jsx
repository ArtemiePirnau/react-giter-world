import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import cosmetics from "../../../../public/images/cosmetics.jpg";

export const CosmeticsCategories = () => {
  const { t } = useTranslation();
  const cosmeticsItems = [
    {
      id: 0,
      label: t("makeup"),
      img: cosmetics,
      to: "/products-page/cosmetics/makeup",
    },
    {
      id: 1,
      label: t("bodycare"),
      img: cosmetics,
      to: "/products-page/cosmetics/body-care",
    },
    {
      id: 2,
      label: t("facecare"),
      img: cosmetics,
      to: "/products-page/cosmetics/face-care",
    },
  ];
  return (
    <div className="cosmetics-categories">
      <h3 className="special-title">{t("cosmeticscategoriestitle")}</h3>
      <h2 className="special-subtitle">{t("cosmeticscategoriessubtitle")}</h2>
      <div className="cosmetics-categories__inner">
        {cosmeticsItems.map(({ id, label, img, to }) => {
          return (
            <Link
              className="cosmetics__item"
              key={id}
              to={to}
              style={{
                backgroundImage: `url(${img})`,
              }}
            >
              <span className="cosmetics__item-label">{label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
