import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { useDispatch, useSelector } from "react-redux";
import { articleGet } from "../../store/actions/ArticleActions";
import { makeSelectArticleItem } from "../../store/selectors/ArticleSelectors";
import { useRouter } from "next/dist/client/router";

const ArticleSinglePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const searchProps = router.query;
  const params = new URLSearchParams(searchProps);
  const status = params.get("status"); // bar
  const review = params.get("review");

  const myArticle = params.get("myArticle"); // bar

  const dispatch = useDispatch();

  const handleGetArticle = () => dispatch(articleGet(id));

  const article = useSelector(makeSelectArticleItem());

  useEffect(() => {
    handleGetArticle();
  }, []);

  return (
    <Layout>
      <div>
        <h1>{article.article}</h1>
        {myArticle && <p>{status}</p>}
        {myArticle && status === "pending" && (
          // TODO Add saga to cancel publishing && redirect to my-articles
          <button onClick={() => (window.location.href = "/my-articles")}>
            Cancel publishing
          </button>
        )}
        {review && (
          <div>
            <button
              onClick={() => router.push(`/review-write?articleId=${id}`)}
            >
              Accept review
            </button>
            {/* Add to saga to decline review article */}
            <button onClick={() => router.push("/review-articles")}>
              Decline review
            </button>
          </div>
        )}

        <div id="test"></div>
        <br />
        <button>Download XML</button>
        <button>Download PDF</button>
      </div>
    </Layout>
  );
};

export default ArticleSinglePage;
