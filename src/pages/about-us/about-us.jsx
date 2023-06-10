import { Footer } from "../../components/footer/footer.jsx";

export const AboutUs = ({ servicesItems }) => {
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
