import React from "react";
import Cookies from "js-cookie";
const withIsAuth = (Component) => {
  const Wrapper = (props) =>
    !Cookies.get("access_token") ? (
      <Component {...props} />
    ) : (
      (window.location.href = "/")
    );

  return Wrapper;
};

export default withIsAuth;
