import search from "../../../public/images/search.svg";
export const Search = () => {
  return (
    <div className="search">
      <input className="search__input" type="text" placeholder="Search" />
      <button className="search__btn">
        <img className="search__img" src={search} alt="search" />
      </button>
    </div>
  );
};
