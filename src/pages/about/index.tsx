import React from 'react';
import {myRenderToStaticMarkup} from "../../hooks";
import {Layout} from "../../layouts";
import {CurrentPage} from "../../config";

export default () => {
  return myRenderToStaticMarkup(
    <CurrentPage.Provider value={{path: '../'} as const}>
      <Layout>
        about
      </Layout>
    </CurrentPage.Provider>
  )
};