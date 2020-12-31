import React from 'react';
import {ProcessedOptions} from 'html-webpack-plugin';
import {newRenderToStaticMarkup} from "../../hooks";
import {Layout} from "../../layouts";
import {App} from "../../components";

export default ({htmlWebpackPlugin}: ProcessedOptions) => {
  return newRenderToStaticMarkup(
    <Layout>
      about
      <App/>
    </Layout>
  )(htmlWebpackPlugin);
};