import search from "../../../public/images/search.svg";
import close from "../../../public/images/close.svg";

export const Search = ({ isHide, toggleSearch }) => {
  return (
    <div className={isHide ? "search__form" : "search__form hide"}>
      <input className="search__form-input" type="text" placeholder="Search" />
      <button className="search__btn">
        <img className="search__form-search" src={search} alt="search" />
      </button>
      <button className="search__btn" onClick={toggleSearch}>
        <img className="search__form-close" src={close} alt="close" />
      </button>
    </div>
  );
};
