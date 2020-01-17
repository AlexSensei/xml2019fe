import React from 'react';
import { USER_TYPES } from '../constants/userTypes';
import { Link } from 'gatsby';

const HeaderOptions = ({ type }) => {
  const renderAnonymouseOptions = () => (
    <>
      <Link to="/">Works</Link>
    </>
  );

  const renderWriterOptions = () => (
    <>
      <Link to="/">Works</Link>
      <Link to="/publish">Publish article</Link>
    </>
  );

  const renderUserOptions = () => {
    switch (type) {
      case USER_TYPES.ANNONYMOUSE:
        return renderAnonymouseOptions();
      case USER_TYPES.AUTHOR:
        return renderWriterOptions();
      default:
        return <div></div>;
    }
  };

  return renderUserOptions();
};

export default HeaderOptions;
