import React from 'react';

const withIsAuth = Component => {
  const Wrapper = props =>
    !localStorage.getItem('access_token') ? (
      <Component {...props} />
    ) : (
      (window.location.href = '/')
    );

  return Wrapper;
};

export default withIsAuth;
