import instagram from "../../../../public/images/instagram.svg";
import github from "../../../../public/images/github.svg";
import twitter from "../../../../public/images/twitter.svg";
import linkedin from "../../../../public/images/linkedin.svg";
import discover from "../../../../public/images/discover.png";

export const Discover = () => {
  return (
    <div className="discover section">
      <div className="discover__info">
        <h3 className="special-title">Discover Your Favorite</h3>
        <h2 className="special-subtitle">Fragrance</h2>
        <p className="discover__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
          mollis nibh. Fusce sit amet sem venenatis, pellentesque magna a,
          dapibus sapien. Curabitur bibendum elementum mollis. Nunc non blandit
          justo. Aenean accumsan vitae magna sed pulvinar. Aenean et metus ante.
          Aliquam accumsan hendrerit tincidunt.
        </p>
        <nav className="discover__menu">
          <ul className="discover__list">
            <li className="discover__item">
              <a className="discover__link" href="#">
                <img src={instagram} alt="instagram" />
              </a>
            </li>
            <li className="discover__item">
              <a className="discover__link" href="#">
                <img src={github} alt="github" />
              </a>
            </li>
            <li className="discover__item">
              <a className="discover__link" href="#">
                <img src={twitter} alt="twitter" />
              </a>
            </li>
            <li className="discover__item">
              <a className="discover__link" href="#">
                <img src={linkedin} alt="linkedin" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <img className="discover__img" src={discover} alt="discover image" />
    </div>
  );
};
