import React, { useEffect } from "react";

import Layout from "../components/layout";
import ArticleList from "../components/article/ArticleList";
import { useDispatch, useSelector } from "react-redux";
import { articlesPendingGet } from "../store/actions/ArticleActions";
import { makeSelectPendingArticles } from "../store/selectors/ArticleSelectors";

const PendingArticles = () => {
  const dispatch = useDispatch();

  const getArticles = (data) => dispatch(articlesPendingGet(data));

  const articles = useSelector(makeSelectPendingArticles());

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <Layout>
      <div>
        <h2>Pending review</h2>
        <ArticleList list={articles} pending></ArticleList>
      </div>
    </Layout>
  );
};

export default PendingArticles;
