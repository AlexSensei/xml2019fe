import React, { useState, useEffect } from 'react';

import Layout from '../components/layout';
import ArticleService from '../services/ArticleService';
import ArticleList from '../components/article/ArticleList';

const IndexPage = () => {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    const { data } = await ArticleService.getMyArticles();
    setArticles(data);
  };
  useEffect(() => {
    getArticles();
  }, []);
  return (
    <Layout>
      <div>
        <h2>Here are all the articles</h2>
        <ArticleList list={articles}></ArticleList>
      </div>
    </Layout>
  );
};

export default IndexPage;
