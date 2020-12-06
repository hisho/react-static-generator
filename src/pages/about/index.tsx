import React from 'react';
import {myRenderToStaticMarkup} from "../../hooks";
import {Layout} from "../../layouts";

export default () => {
  return myRenderToStaticMarkup(
    <Layout>
      About
    </Layout>
  )
};