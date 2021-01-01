import React from 'react';
import {ProcessedOptions} from 'html-webpack-plugin';
import {newRenderToStaticMarkup} from "src/hooks";
import {Layout} from "src/layouts";
import {App} from "src/components";

export default ({htmlWebpackPlugin}: ProcessedOptions) => {
  return newRenderToStaticMarkup(
    <Layout>
      about
      <App/>
    </Layout>
  )(htmlWebpackPlugin);
};