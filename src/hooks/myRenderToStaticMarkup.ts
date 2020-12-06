import {renderToStaticMarkup} from 'react-dom/server';
import {ReactElement} from "react";

export function myRenderToStaticMarkup(element: ReactElement): string {
  return '<!DOCTYPE html>' + renderToStaticMarkup(element);
}