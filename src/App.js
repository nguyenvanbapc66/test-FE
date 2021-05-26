import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import "./sass/app.scss";
import SearchBar from "./components/SearchBar";
import Articles from "./Pages/Articles";
import Paginate from "./components/Paginate";
import _ from "lodash";

import SearchBarProvider from "./components/providers/SearchBarProvider";
import ArticlesProvider from "./components/providers/ArticlesProvider";
import PaginateProvider from "./components/providers/PaginateProvider";

function App() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(10);
  const [isDecrease, setIsDecrease] = useState(false);

  const url =
    "https://newsapi.org/v2/everything?q=tesla&apiKey=5da0353ef23e4e779f2bba0c3114ae87";
  useEffect(() => {
    const fetchApi = async () => {
      await Axios.get(url).then((res) => {
        setArticles(res.data.articles);
      });
    };

    fetchApi();
  }, []);

  // Get current page
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Change page
  const changePage = (indexOfPage) => setCurrentPage(indexOfPage);

  // Sort date
  const sortDate = () => {
    let newArticles = articles;

    if (isDecrease) {
      setArticles(_.orderBy(newArticles, ["publishedAt"], ["asc"]));
    } else {
      setArticles(_.orderBy(newArticles, ["publishedAt"], ["desc"]));
    }

    setIsDecrease(!isDecrease);
  };

  // Search
  const searchItem = (item) => {
    const url = `https://newsapi.org/v2/everything?q=${item}&apiKey=5da0353ef23e4e779f2bba0c3114ae87`;
    const fetchApi = async () => {
      await Axios.get(url).then((res) => {
        setArticles(res.data.articles);
      });
    };

    fetchApi();
  };

  return (
    <div className="container col-lg-12 mt-5 app">
      <SearchBarProvider value={searchItem}>
        <SearchBar
          className="mb-3 w-50 form-control"
          type="text"
          placeholder="Search..."
        />
      </SearchBarProvider>
      {!articles.length ? (
        ""
      ) : (
        <>
          <ArticlesProvider
            value={{
              articles: currentArticles,
              sortDate,
            }}
          >
            <Articles />
          </ArticlesProvider>
          <PaginateProvider
            value={{
              currentPage,
              articlesPerPage,
              totalPage: articles.length,
              changePage,
            }}
          >
            <Paginate
              articlesPerPage={articlesPerPage}
              totalPage={articles.length}
            />
          </PaginateProvider>
        </>
      )}
    </div>
  );
}

export default App;
