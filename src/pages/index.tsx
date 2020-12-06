import React, {FC} from "react";
import {renderToStaticMarkup} from "react-dom/server";
import htmlWebpackPlugin from 'html-webpack-plugin';

const App: FC = () => <div>Use React !!</div>;

export default ({htmlWebpackPlugin}: { htmlWebpackPlugin: htmlWebpackPlugin.ProcessedOptions }) => `
  <!DOCTYPE html>
  <html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${htmlWebpackPlugin.options.title}</title>
  </head>
  <body>
    ${renderToStaticMarkup(<App/>)}
  </body>
  </html>
`;