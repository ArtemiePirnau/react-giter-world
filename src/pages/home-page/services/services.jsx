import cream from "../../../../public/images/cream.svg";
import crown from "../../../../public/images/crown.svg";
import mascara from "../../../../public/images/mascara.svg";
export const Services = () => {
  return (
    <div className="services section">
      <h3 className="special-title">Services</h3>
      <h2 className="special-subtitle services__subtitle">Specialized in</h2>
      <ul className="services__list">
        <li className="services__item">
          <img className="services__img" src={crown} alt="parfum" />
          <h5 className="services__title">Parfum</h5>
          <p className="services__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            mollis nibh. Fusce sit amet sem venenatis,
          </p>
        </li>
        <li className="services__item">
          <img className="services__img" src={mascara} alt="mascara" />
          <h5 className="services__title">Mascara for eyelashes</h5>
          <p className="services__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            mollis nibh. Fusce sit amet sem venenatis,
          </p>
        </li>
        <li className="services__item">
          <img className="services__img" src={cream} alt="tonal cream" />
          <h5 className="services__title">Tonal cream.</h5>
          <p className="services__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            mollis nibh. Fusce sit amet sem venenatis,
          </p>
        </li>
      </ul>
    </div>
  );
};
