import React from "react";
import Cookies from "js-cookie";

const withIsPrivate = (Component) => {
  const Wrapper = (props) =>
    Cookies.get("access_token") ? (
      <Component {...props} />
    ) : (
      (window.location.href = "/sign-in")
    );

  return Wrapper;
};

export default withIsPrivate;
