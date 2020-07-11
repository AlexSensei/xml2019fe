import React from "react";
import Link from "next/link";

const ArticleItem = ({ item, myArticle, review }) => (
  <tr style={wrapperStyle}>
    <p>{item.id}</p>
    <Link
      href={`/article/${item.id}${
        myArticle ? `?myArticle=true&status=${item.status}` : ""
      }${review ? "?review=true" : ""}`}
    >
      <p>{item.article}</p>
    </Link>
    {myArticle && <p>{item.status}</p>}
  </tr>
);

const wrapperStyle = {
  paddingLeft: "150px",
  paddingRight: "150px",
  display: "flex",
  displayDirection: "row",
  justifyContent: "space-between",
  color: "black",
};

export default ArticleItem;
