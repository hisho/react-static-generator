import React from "react";

export type pathType = '/' | './' | '../' | '../../';

type initialPageValueType = {
  path: pathType,
}

const initialPageValue: initialPageValueType = {
  path: '/',
}

export const CurrentPage = React.createContext(initialPageValue);