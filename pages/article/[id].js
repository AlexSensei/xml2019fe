import React, { useEffect } from "react";
import Layout from "../../components/layout";
import { useDispatch, useSelector } from "react-redux";
import { articleGet } from "../../store/actions/ArticleActions";
import { makeSelectArticleItem } from "../../store/selectors/ArticleSelectors";
import { useRouter } from "next/dist/client/router";
import XMLViewer from "react-xml-viewer";
import testXmlString from "../../mockData.js/xmlschema";

const ArticleSinglePage = () => {
  const router = useRouter();
  const { id, pending, status, review, myArticle } = router.query;

  const dispatch = useDispatch();

  const handleGetArticle = () => dispatch(articleGet(id));

  const article = useSelector(makeSelectArticleItem());

  useEffect(() => {
    handleGetArticle();
  }, []);

  const reviewers = [
    {
      reviewer: "Pera Peric",
    },
    {
      reviewer: "Mika Mikic",
    },
    {
      reviewer: "John John",
    },
    {
      reviewer: "Patrick Peric",
    },
  ];
  console.log(router.query);
  console.log(pending);

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
            {/*TODO  Add to saga to decline review article */}
            <button onClick={() => router.push("/review-articles")}>
              Decline review
            </button>
          </div>
        )}
        {pending && (
          <div>
            <button>Approve article</button>
            <button>Decline article</button>
            <h3>Assign reviewer to article</h3>
            {reviewers.map(({ reviewer }) => (
              <button
                // TODO Remove reviewer
                onClick={() => {}}
              >{`${reviewer} assign to review`}</button>
            ))}
          </div>
        )}

        <XMLViewer xml={testXmlString} />
        <br />
        <button>Download XML</button>
        <button>Download PDF</button>
      </div>
    </Layout>
  );
};

export default ArticleSinglePage;
