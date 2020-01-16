import React from 'react';

const withIsPrivate = Component => {
  const Wrapper = props =>
    localStorage.getItem('access_token') ? (
      <Component {...props} />
    ) : (
      (window.location.href = '/sign-in')
    );

  return Wrapper;
};

export default withIsPrivate;
