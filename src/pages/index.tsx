import React from 'react';
import {renderToStaticMarkup} from "@src/hooks";
import {Layout,SEO} from "@src/layouts";

export default () => {
  return renderToStaticMarkup(
    <Layout>
      <SEO />
      テスト
    </Layout>
  );
};