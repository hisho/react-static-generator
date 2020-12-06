import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {Layout} from "../layouts";

export default () => {
  return '<!DOCTYPE html>' + renderToStaticMarkup(
    <Layout>
      テスト
    </Layout>
  )
};