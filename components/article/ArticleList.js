import React from "react";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ list, myArticle, review, pending, publish }) => (
  <table>
    {list.map((item) => (
      <ArticleItem
        item={item}
        myArticle={myArticle}
        review={review}
        pending={pending}
        publish={publish}
      ></ArticleItem>
    ))}
  </table>
);

export default ArticleList;
