import React from 'react';
import {myRenderToStaticMarkup} from "../hooks";
import {Layout} from "../layouts";
import {CurrentPage} from "../config";
import {App} from "../components";

export default () => {
  return myRenderToStaticMarkup(
    <CurrentPage.Provider value={{path: './'}}>
      <Layout>
        テスト
        <App/>
      </Layout>
    </CurrentPage.Provider>
  )
};