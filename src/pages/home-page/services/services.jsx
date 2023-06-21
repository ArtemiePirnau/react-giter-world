import { useTranslation } from "react-i18next";

import parfume from "../../../../public/images/parfume.svg";
import mascara from "../../../../public/images/mascara.svg";
import cream from "../../../../public/images/cream.svg";
export const Services = () => {
  const { t } = useTranslation();
  return (
    <div className="services section">
      <h3 className="special-title">{t("servicestitle")}</h3>
      <h2 className="special-subtitle services__subtitle">
        {t("servicessubtitle")}
      </h2>
      <ul className="services__list">
        <li className="services__item">
          <img className="services__img" src={parfume} alt="parfume" />
          <h5 className="services__title">{t("servicesparfumetitle")}</h5>
          <p className="services__text">{t("servicesparfumetext")}</p>
        </li>
        <li className="services__item">
          <img className="services__img" src={mascara} alt="mascara" />
          <h5 className="services__title">{t("servicesmascaratitle")}</h5>
          <p className="services__text">{t("servicesmascaratext")}</p>
        </li>
        <li className="services__item">
          <img className="services__img" src={cream} alt="tonal cream" />
          <h5 className="services__title">{t("servicescreamtitle")}</h5>
          <p className="services__text">{t("servicescreamtext")}</p>
        </li>
      </ul>
    </div>
  );
};
