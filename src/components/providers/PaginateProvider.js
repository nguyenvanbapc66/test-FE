import React from "react";
import PaginateContext from "../../contexts/PaginateContext";

export default function ({ children, value }) {
  return (
    <PaginateContext.Provider value={value}>
      {children}
    </PaginateContext.Provider>
  );
}
