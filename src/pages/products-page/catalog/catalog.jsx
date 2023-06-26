import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Catalog = () => {
  const { t } = useTranslation();
  return (
    <aside className="catalog">
      <h3 className="special-title">{t("catalogtitle")}</h3>
      <h2 className="special-subtitle services__subtitle">
        {t("catalogsubtitle")}
      </h2>
      <h6 className="services__label">{t("cataloglabel")}</h6>
      <ul className="catalog__list">
        <li className="catalog__item">
          <Link className="catalog__link" to="/products-page/parfumery">
            {t("cataloglink1")}
          </Link>
        </li>
        <li className="catalog__item">
          <Link className="catalog__link" to="/products-page/cosmetics">
            {t("cataloglink2")}
          </Link>
        </li>
      </ul>
    </aside>
  );
};
