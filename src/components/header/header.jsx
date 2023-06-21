import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../../../public/images/logo.svg";
import cart from "../../../public/images/cart.svg";
import search from "../../../public/images/search.svg";
import { Search } from "../search/search.jsx";
import { useState } from "react";

export const Header = () => {
  const { t, i18n } = useTranslation();

  const [isHide, setHide] = useState(false);
  const [isHiddenMenu, setMenu] = useState(false);

  const toggleSearch = () => {
    setHide(!isHide);
  };

  const toggleMenu = () => {
    setMenu(!isHiddenMenu);
  };

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <Link className="header__logo-link" to="/">
            <img className="header__logo-img" src={logo} alt="logo" />
            <span className="header__logo-text">Giter World</span>
          </Link>
        </div>
        <div
          className={isHiddenMenu ? "menu-toggle active" : "menu-toggle"}
          onClick={toggleMenu}
        >
          <span></span>
        </div>
        <nav className={isHiddenMenu ? "menu active" : "menu"}>
          <ul className="menu__list">
            <li className="menu__item">
              <Link className="menu__link" to="/">
                {t("mainpagelink")}
              </Link>
            </li>

            <li className="menu__item">
              <Link className="menu__link" to="/products-page">
                {t("productspagelink")}
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to="/about-us">
                {t("aboutpagelink")}
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to="/contacts">
                {t("contactspagelink")}
              </Link>
            </li>
          </ul>
        </nav>
        <Search isHide={isHide} toggleSearch={toggleSearch} />
        <button className="search__btn" onClick={toggleSearch}>
          <img className="search__img" src={search} alt="search" />
        </button>
        <button className="cart">
          <Link to="/cart">
            <span className="cart__text"> {t("cart")}</span>
            <img className="cart__img" src={cart} alt="cart icon" />
          </Link>
        </button>
        <select
          className="header__choose"
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          <option className="header__ru" value="ru">
            RU
          </option>
          <option className="header__ro" value="ro">
            RO
          </option>
        </select>
      </div>
    </header>
  );
};
