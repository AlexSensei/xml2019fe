import React, { useEffect } from "react";

import Layout from "../components/layout";
import ArticleList from "../components/article/ArticleList";
import { useDispatch, useSelector } from "react-redux";
import { articlesReviewGet } from "../store/actions/ArticleActions";
import { makeSelectArticlesReview } from "../store/selectors/ArticleSelectors";

const ReviewArticles = () => {
  const dispatch = useDispatch();

  const getReviewArticles = (data) => dispatch(articlesReviewGet(data));

  const articles = useSelector(makeSelectArticlesReview());

  useEffect(() => {
    getReviewArticles();
  }, []);

  return (
    <Layout>
      <div>
        <h2>Articles to review</h2>
        <ArticleList list={articles} review></ArticleList>
      </div>
    </Layout>
  );
};

export default ReviewArticles;
