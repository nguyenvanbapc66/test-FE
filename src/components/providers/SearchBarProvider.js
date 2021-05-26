import React from "react";
import SearchBarContext from "../../contexts/SearchBarContext";

export default function ({ children, value }) {
  return (
    <SearchBarContext.Provider value={value}>
      {children}
    </SearchBarContext.Provider>
  );
}
