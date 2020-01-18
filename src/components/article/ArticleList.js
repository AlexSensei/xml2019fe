import React from 'react';
import ArticleItem from './ArticleItem';

const ArticleList = ({ list }) => (
  <div>
    {list.map(item => (
      <ArticleItem item={item}></ArticleItem>
    ))}
  </div>
);

export default ArticleList;
