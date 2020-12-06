import React from 'react';
import {myRenderToStaticMarkup} from "../hooks";
import {Layout} from "../layouts";

export default () => {
  return myRenderToStaticMarkup(
    <Layout>
      テスト
    </Layout>
  )
};