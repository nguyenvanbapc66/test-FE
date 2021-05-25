import React, { useEffect, useState } from "react";
import Button from "../components/Button";

function Articles({ articles, sortDate }) {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB");
  };

  return (
    <>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th
              scope="col"
              className="text-center"
              style={{ width: 100 + "px" }}
            >
              Image
            </th>
            <th scope="col" className="text-center">
              Source
            </th>
            <th scope="col" className="text-center">
              Author
            </th>
            <th scope="col" className="text-center">
              Title
            </th>
            <th
              scope="col"
              className="text-center"
              onClick={sortDate}
            >
              Date
              <i className="fas fa-sort-down" style={{ paddingLeft: 5 + "px"}}></i>
            </th>
            <th scope="col" className="text-center">
              URL
            </th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr key={index}>
              <td className="col-2">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <img
                    src={
                      article.urlToImage === null
                        ? "/images/empty-300x240.jpg"
                        : article.urlToImage
                    }
                  />
                </div>
              </td>
              <td className="col-1" style={{ maxWidth: 114 + "px" }}>
                {article.source.name}
              </td>
              <td className="col-1" style={{ maxWidth: 118 + "px" }}>
                {article.author}
              </td>
              <td className="col-4">{article.title}</td>
              <td className="col-2 text-center">
                {formatDate(article.publishedAt)}
              </td>
              <td className="col-2 text-center">
                <Button
                  href={article.url}
                  className="btn btn-primary text-center pr-2"
                  nameButton="Detail"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Articles;
