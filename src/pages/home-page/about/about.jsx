import { useSelector } from "react-redux";
// import { AboutItem } from "../about-item/about-item.jsx";
import { useTranslation } from "react-i18next";
export const About = () => {
  const { t } = useTranslation();
  const aboutItems = useSelector((state) => state.aboutItems.aboutItems);
  return (
    <div className="about section">
      <h3 className="special-title">{t("abouttitle")}</h3>
      <h2 className="special-subtitle about__subtitle">{t("aboutsubtitle")}</h2>
      <p className="about__text">{t("abouttext")}</p>
      <ul className="about__list">
        {/* {aboutItems.map(({ id, title, width }) => {
          return <AboutItem key={id} title={title} width={width} />;
        })} */}
        <li className="about__item">
          <div className="about__item-content">
            <p className="about__item-title">{t("aboutitem1")}</p>
          </div>
          <div className="about__item-line" style={{ width: `480px` }}></div>
        </li>
        <li className="about__item">
          <div className="about__item-content">
            <p className="about__item-title">{t("aboutitem2")}</p>
          </div>
          <div className="about__item-line" style={{ width: `480px` }}></div>
        </li>
        <li className="about__item">
          <div className="about__item-content">
            <p className="about__item-title">{t("aboutitem3")}</p>
          </div>
          <div className="about__item-line" style={{ width: `256px` }}></div>
        </li>
      </ul>
    </div>
  );
};
