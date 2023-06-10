import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const ParfumeryCategories = () => {
  const parfumery = useSelector((state) => state.parfumery.parfumery);
  return (
    <div className="parfumery-categories">
      <h3 className="special-title">Select Category</h3>
      <h2 className="special-subtitle services__subtitle">
        Cosmetics Categories
      </h2>
      <div className="parfumery-categories__inner">
        {parfumery.map(({ id, label, img, to }) => {
          return (
            <Link
              className="parfumery__item"
              key={id}
              to={to}
              style={{
                backgroundImage: `url(${img})`,
              }}
            >
              <span className="parfumery__item-label">{label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
