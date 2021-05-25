import React from "react";

function SearchBar({ type, placeholder, className, searchItem }) {
  return (
    <div className="d-flex justify-content-center">
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={(e) => searchItem(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
