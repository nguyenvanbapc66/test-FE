import React from "react";
import ArticlesContext from "../../contexts/ArticlesContext";

export default function ({ children, value }) {
  return (
    <ArticlesContext.Provider value={value}>
      {children}
    </ArticlesContext.Provider>
  );
}
