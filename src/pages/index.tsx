import React from 'react';
import htmlWebpackPlugin from 'html-webpack-plugin';
import {pathType} from "../config";
import {myRenderToStaticMarkup} from "../hooks";
import {Layout} from "../layouts";
import {CurrentPage} from "../config";
import {App} from "../components";

export default ({htmlWebpackPlugin}: { htmlWebpackPlugin: htmlWebpackPlugin.ProcessedOptions }) => {
  const relativePath: pathType = htmlWebpackPlugin.options.relativePath;
  return myRenderToStaticMarkup(
    <CurrentPage.Provider value={{path: relativePath}}>
      <Layout>
        テスト
        <App/>
      </Layout>
    </CurrentPage.Provider>
  )
};