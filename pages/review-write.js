import React, { useState, useEffect } from "react";

import Layout from "../components/layout";
import DropZone from "../components/shared/DropZone";
import { useSelector, useDispatch } from "react-redux";
import {
  makeSelectArticleItem,
  makeSelectArticleLoader,
} from "../store/selectors/ArticleSelectors";

import LoaderWrapper from "../components/shared/LoaderWrapper";
import { articleGet } from "../store/actions/ArticleActions";
import { useRouter } from "next/dist/client/router";

const grades = [1, 2, 3, 4, 5];

const Publish = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const searchProps = router.query;
  const params = new URLSearchParams(searchProps);
  const id = params.get("articleId");

  const loader = useSelector(makeSelectArticleLoader());
  const article = useSelector(makeSelectArticleItem());

  const handleGetArticle = () => dispatch(articleGet(id));

  const handleSubmit = () => {
    // Handle publish reviw
  };

  const [review, setReview] = useState([]);
  const [grade, setGrade] = useState(null);

  useEffect(() => {
    handleGetArticle();
  }, [id]);

  const isDisabled = () => !DropZone.length;

  return (
    <Layout>
      {article.id ? (
        <>
          <h2>Submit your review to article {article.article}</h2>
          <LoaderWrapper isLoading={loader} loadingText="Submiting review ...">
            <div style={uploadFieldsWrapper}>
              <DropZone
                title="Review"
                onSubmit={setReview}
                item={review}
              ></DropZone>

              <button onClick={handleSubmit} disabled={isDisabled()}>
                Submit
              </button>
            </div>
            <h3>Add your grade to the article</h3>
            <form>
              {grades.map((gradeValue) => (
                <div>
                  <input
                    type="radio"
                    value={gradeValue}
                    onChange={() => setGrade(gradeValue)}
                    checked={gradeValue === grade}
                  ></input>
                  {gradeValue}
                </div>
              ))}
            </form>
          </LoaderWrapper>
        </>
      ) : (
        <div></div>
      )}
    </Layout>
  );
};

const uploadFieldsWrapper = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};

export default Publish;
