import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NoMatching } from "../no-matching/no-matching.jsx";

export const SearchResult = () => {
  const searchResults = useSelector(
    (state) => state.parfumeryList.searchResults
  );
  return (
    <div className="search-results">
      {searchResults.length > 0 ? (
        <ul className="products__list search__list">
          {searchResults.map(({ id, price, img, name }) => {
            return (
              <li className="products__item" key={id}>
                <Link to={`/one-product/${name}`}>
                  <img className="products__item-img" src={img} alt="product" />
                  <div className="products__item-info">
                    <p className="products__item-name">{name}</p>
                    <span>{price}$</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <NoMatching />
      )}
    </div>
  );
};
