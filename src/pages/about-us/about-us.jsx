import { useTranslation } from "react-i18next";
import { Footer } from "../../components/footer/footer.jsx";

import logo from "../../../public/images/about-logo.png";
import building from "../../../public/images/building.svg";
import square from "../../../public/images/square.svg";
import cosmetic from "../../../public/images/cosmetic.svg";

export const AboutUs = () => {
  const { t } = useTranslation();
  const servicesItems = [
    {
      id: 0,
      icon: logo,
      title: t("servicesitemtitle1"),
      subtitle: t("servicesitemsubtitle1"),
      text: t("servicesitemtext1"),
    },
    {
      id: 1,
      icon: building,
      title: t("servicesitemtitle2"),
      subtitle: t("servicesitemsubtitle2"),
      text: t("servicesitemtext2"),
    },
    {
      id: 2,
      icon: square,
      title: t("servicesitemtitle3"),
      subtitle: t("servicesitemsubtitle3"),
      text: t("servicesitemtext3"),
    },
    {
      id: 3,
      icon: cosmetic,
      title: t("servicesitemtitle4"),
      subtitle: t("servicesitemsubtitle4"),
      text: t("servicesitemtext4"),
    },
  ];
  return (
    <>
      <div className="about-us">
        <div className="about-us__list">
          {servicesItems.map(({ id, icon, title, subtitle, text }) => {
            return (
              <>
                <div className="about-us__services" key={id}>
                  <div className="about-us__titles">
                    <h3 className="special-title">{title}</h3>
                    <h2 className="special-subtitle about-us__subtitle">
                      {subtitle}
                    </h2>
                  </div>
                  <img className="about-us__logo" src={icon} alt={title} />
                </div>
                <p className="about-us__text">{text}</p>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
