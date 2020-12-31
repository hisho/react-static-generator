import React from "react";

type currentPageValueType = {
  path: '/' | './' | '../' | '../../',
}

const currentPageValue: currentPageValueType = {
  path: '/',
}

export const CurrentPage = React.createContext(currentPageValue);