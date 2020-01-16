import React from 'react';
import { USER_TYPES } from '../constants/userTypes';
import { Link } from 'gatsby';

const HeaderOptions = ({ type }) => {
  const renderAnonymouseOptions = () => (
    <>
      <Link>Works</Link>
    </>
  );

  const renderWriterOptions = () => (
    <>
      <Link>Works</Link>
      <Link>Add Work</Link>
    </>
  );

  const renderUserOptions = () => {
    switch (type) {
      case USER_TYPES.ANNONYMOUSE:
        return renderAnonymouseOptions();
      case USER_TYPES.WRITER:
        return renderWriterOptions();
    }
  };

  return <div>{renderUserOptions()}</div>;
};

export default HeaderOptions;
