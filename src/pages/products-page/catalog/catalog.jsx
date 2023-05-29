export const Catalog = () => {
  return (
    <aside className="catalog">
      <h3 className="special-title">Navigation</h3>
      <h2 className="special-subtitle services__subtitle">Catalog</h2>
      <ul className="catalog__list">
        <li className="catalog__item">
          <a className="catalog__link" href="#">
            Parfumery
          </a>
        </li>
        <li className="catalog__item">
          <a className="catalog__link" href="#">
            Cosmetics
          </a>
        </li>
      </ul>
    </aside>
  );
};
