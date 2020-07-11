import withReduxSaga from "next-redux-saga";
import createWrapper from "next-redux-wrapper";
import App from "next/app";
import React from "react";
import { Provider } from "react-redux";

import { wrapper } from "../store";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return {
      pageProps,
      hideHeader: Component.hideHeader,
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(MyApp);
