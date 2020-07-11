import React from "react";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ list, myArticle, review }) => (
  <table>
    {list.map((item) => (
      <ArticleItem
        item={item}
        myArticle={myArticle}
        review={review}
      ></ArticleItem>
    ))}
  </table>
);

export default ArticleList;
