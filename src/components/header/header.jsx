import logo from "../../../public/images/logo.svg";
import cart from "../../../public/images/cart.svg";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <img className="header__logo-img" src={logo} alt="logo" />
          <span className="header__logo-text">Giter World</span>
        </div>
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a className="menu__link" href="/">
                Home
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">
                Products
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">
                About us
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">
                Contacts
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">
                Categories
              </a>
            </li>
          </ul>
        </nav>
        <button className="cart">
          <span className="cart__text">Cart</span>
          <img className="cart__img" src={cart} alt="cart icon" />
        </button>
      </div>
    </header>
  );
};
