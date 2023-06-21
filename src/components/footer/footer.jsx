import instagram from "../../../public/images/instagram.svg";
import github from "../../../public/images/github.svg";
import linkedin from "../../../public/images/linkedin.svg";
import twitter from "../../../public/images/twitter.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__menu">
        <ul className="footer__list">
          <li className="footer__item">
            <a href="#" className="footer__link">
              <img className="footer__img" src={instagram} alt="instagram" />
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              <img className="footer__img" src={github} alt="github" />
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              <img className="footer__img" src={twitter} alt="twitter" />
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              <img className="footer__img" src={linkedin} alt="linkedin" />
            </a>
          </li>
        </ul>
      </nav>
      <p className="footer__copyright">© 2022 - Giter World</p>
    </footer>
  );
};
