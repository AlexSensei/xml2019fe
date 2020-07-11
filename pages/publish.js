import React, { useState } from "react";

import Layout from "../components/layout";
import DropZone from "../components/shared/DropZone";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectArticleLoader } from "../store/selectors/ArticleSelectors";
import { articlePublish } from "../store/actions/ArticleActions";
import LoaderWrapper from "../components/shared/LoaderWrapper";

const Publish = () => {
  const dispatch = useDispatch();

  const loader = useSelector(makeSelectArticleLoader());

  const handlePublish = (data) => dispatch(articlePublish(data));

  const [article, setArticle] = useState([]);
  const [coverLetter, setCoverLetter] = useState([]);

  const isDisabled = () => !article.length || !coverLetter.length;

  const handleSubmit = () => {
    handlePublish({
      article,
      coverLetter,
    });
  };
  return (
    <Layout>
      <h2>Submit your article that you want to publish</h2>
      <LoaderWrapper isLoading={loader} loadingText="Submiting article ...">
        <div style={uploadFieldsWrapper}>
          <DropZone
            title="Article"
            onSubmit={setArticle}
            item={article}
          ></DropZone>
          <DropZone
            title="Cover Letter"
            onSubmit={setCoverLetter}
            item={coverLetter}
          ></DropZone>
          <button onClick={handleSubmit} disabled={isDisabled()}>
            Submit
          </button>
        </div>
      </LoaderWrapper>
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
