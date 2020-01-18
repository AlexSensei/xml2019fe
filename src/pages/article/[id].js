import React from 'react';
import Layout from '../../components/layout';

const ArticleSinglePage = props => {
  const id = props['*'];
  return <Layout>{id}</Layout>;
};

export default ArticleSinglePage;
