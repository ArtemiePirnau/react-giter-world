import { Link } from "react-router-dom";
export const Catalog = () => {
  return (
    <aside className="catalog">
      <h3 className="special-title">Navigation</h3>
      <h2 className="special-subtitle services__subtitle">Catalog</h2>
      <ul className="catalog__list">
        <li className="catalog__item">
          <Link className="catalog__link" to="/products-page/parfumery">
            Parfumery
          </Link>
        </li>
        <li className="catalog__item">
          <Link className="catalog__link" to="/products-page/cosmetics">
            Cosmetics
          </Link>
        </li>
      </ul>
    </aside>
  );
};
