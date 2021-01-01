import {renderToStaticMarkup} from 'react-dom/server';
import React, {ReactElement} from "react";
import {Helmet} from "react-helmet";
import {ProcessedOptions} from 'html-webpack-plugin';
import {CurrentPage, pathType} from "src/config";

function myRenderToStaticMarkup(element: ReactElement): string {
  const staticMarkup = renderToStaticMarkup(element);
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
       ${replaceDataHelmet(helmet.link.toString())}
      </head>
      ${staticMarkup}
    </html>
  `;
}

export function newRenderToStaticMarkup(element: ReactElement) {
  return (htmlWebpackPlugin: ProcessedOptions) => {
    const relativePath: pathType = htmlWebpackPlugin.options.relativePath;
    return myRenderToStaticMarkup(
      <CurrentPage.Provider value={{path: relativePath}}>
        {element}
      </CurrentPage.Provider>
    )
  }
}