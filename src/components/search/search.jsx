import search from "../../../public/images/search.svg";
import close from "../../../public/images/close.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { searchProducts } from "../../reducer/parfumeryListSlice.jsx";
export const Search = ({ isHide, toggleSearch }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    dispatch(searchProducts(searchText));
  };

  const onSubmit = (e) => {
    e.preventDefault;
    navigate("/search");
  };
  return (
    <form
      onSubmit={onSubmit}
      className={isHide ? "search__form" : "search__form hide"}
    >
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="search__form-input"
        type="text"
        placeholder="Search"
      />
      <button className="search__btn">
        <img
          onClick={handleSearch()}
          className="search__form-search"
          src={search}
          alt="search"
        />
      </button>
      <a className="search__btn">
        <img
          onClick={toggleSearch}
          className="search__form-close"
          src={close}
          alt="close"
        />
      </a>
    </form>
  );
};
