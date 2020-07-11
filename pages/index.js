import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

import Layout from "../components/layout";
import ArticleService from "../services/ArticleService";
import ArticleList from "../components/article/ArticleList";
import { useDispatch, useSelector } from "react-redux";
import { articlesGet } from "../store/actions/ArticleActions";
import { makeSelectArticles } from "../store/selectors/ArticleSelectors";

const IndexPage = () => {
  const dispatch = useDispatch();

  const handleGetArticles = (data) => dispatch(articlesGet(data));

  const articles = useSelector(makeSelectArticles());

  useEffect(() => {
    handleGetArticles(Cookies.get("access_token"));
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
