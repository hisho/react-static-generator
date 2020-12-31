import {renderToStaticMarkup} from 'react-dom/server';
import React, {ReactElement} from "react";
import {ProcessedOptions} from 'html-webpack-plugin';
import {pathType} from "../config";
import {CurrentPage} from "../config";

function myRenderToStaticMarkup(element: ReactElement): string {
  return '<!DOCTYPE html>' + renderToStaticMarkup(element);
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