import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const CosmeticsCategories = () => {
  const cosmetics = useSelector((state) => state.cosmetics.cosmetics);
  return (
    <div className="cosmetics-categories">
      <h3 className="special-title">Select Category</h3>
      <h2 className="special-subtitle">Cosmetics Categories</h2>
      <div className="cosmetics-categories__inner">
        {cosmetics.map(({ id, label, img, to }) => {
          return (
            <Link
              className="cosmetics__item"
              key={id}
              to={to}
              style={{
                backgroundImage: `url(${img})`,
              }}
            >
              <span className="cosmetics__item-label">{label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
