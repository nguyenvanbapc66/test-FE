import React from "react";
import SearchBarContext from "../contexts/SearchBarContext";

function SearchBar({ type, placeholder, className }) {
  return (
    <div className="d-flex justify-content-center">
      <SearchBarContext.Consumer>
        {(searchItem) => (
          <input
            type={type}
            placeholder={placeholder}
            className={className}
            onChange={(e) => {
              searchItem(e.target.value);
            }}
          />
        )}
      </SearchBarContext.Consumer>
    </div>
  );
}

export default SearchBar;
