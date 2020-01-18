import React from 'react';
import { Link } from 'gatsby';

const ArticleItem = ({ item }) => (
  <Link to={`/article/${item.id}`}>
    <div style={wrapperStyle}>
      <p>{item.id}</p>
      <p>{item.article}</p>
    </div>
  </Link>
);

const wrapperStyle = {
  display: 'flex',
  displayDirection: 'row',
  justifyContent: 'space-between',
  color: 'black'
};

export default ArticleItem;
