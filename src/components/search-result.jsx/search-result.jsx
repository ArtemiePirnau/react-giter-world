import { useSelector } from "react-redux";
export const SearchResult = () => {
  const searchResults = useSelector(
    (state) => state.parfumeryList.searchResults
  );
  return (
    <ul className="products__list search__list">
      {searchResults.map(({ id, price, name, img }) => (
        <li className="products__item" key={id}>
          <img className="products__item-img" src={img} alt="product" />
          <div className="products__item-info">
            <p className="products__item-name">{name}</p>
            <span>{price}$</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
