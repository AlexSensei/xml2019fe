import React, { useState, useEffect } from 'react';

import Layout from '../components/layout';
import ArticleService from '../services/ArticleService';
import ArticleList from '../components/article/ArticleList';
import { useDispatch, useSelector } from 'react-redux';
import { articlesGet, articlesMyGet } from '../store/actions/ArticleActions';
import {
  makeSelectArticles,
  makeSelectMyArticles
} from '../store/selectors/ArticleSelectors';

const MyArticles = () => {
  const [filter, setFilter] = useState('pending');
  const dispatch = useDispatch();

  const handleArticlesMyGet = data => dispatch(articlesMyGet(data));

  const articles = useSelector(makeSelectMyArticles());

  useEffect(() => {
    handleArticlesMyGet();
  }, []);

  const filterArticles = () =>
    articles.filter(article => article.status === filter);

  return (
    <Layout>
      <div>
        <button
          style={{ color: filter === 'pending' ? 'red' : 'blue' }}
          onClick={() => setFilter('pending')}
        >
          Pending
        </button>
        <button
          style={{ color: filter === 'approved' ? 'red' : 'blue' }}
          onClick={() => setFilter('approved')}
        >
          Approved
        </button>
        <button
          style={{ color: filter === 'declined' ? 'red' : 'blue' }}
          onClick={() => setFilter('declined')}
        >
          Declined
        </button>
        <h2
          style={{ textDecoration: 'capitalize' }}
        >{`${filter}  Articles`}</h2>
        <ArticleList list={filterArticles()} myArticle></ArticleList>
      </div>
    </Layout>
  );
};

export default MyArticles;
