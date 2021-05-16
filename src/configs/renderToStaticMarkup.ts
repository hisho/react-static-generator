import {renderToStaticMarkup as reactRenderToStaticMarkup} from 'react-dom/server';
import React from "react";
import {Helmet} from "react-helmet";

function myRenderToStaticMarkup(element: React.ReactElement): string {
  const staticMarkup = reactRenderToStaticMarkup(element);
  const helmet = Helmet.renderStatic();

  function replaceDataHelmet(helmet: string) {
    return helmet.replace(/data-react-helmet="true"/g, '')
  }

  return `
    <!doctype html>
     <html ${helmet.htmlAttributes.toString()}>
      <head>
       ${replaceDataHelmet(helmet.title.toString())}
       ${replaceDataHelmet(helmet.meta.toString())}
       ${replaceDataHelmet(helmet.script.toString())}
       ${replaceDataHelmet(helmet.link.toString())}
      </head>
      <body>
       ${staticMarkup}
      </body>
    </html>
  `;
}

export const renderToStaticMarkup = (element: React.ReactElement) => {
  return myRenderToStaticMarkup(element)
}