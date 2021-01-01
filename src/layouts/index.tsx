import React, {FC, ReactNode} from 'react'
import {Helmet} from "react-helmet";

type LayoutType = {
  children: ReactNode
}

export const Layout: FC<LayoutType> = ({children}) => {
  return (
    <>
      <Helmet>
        <html lang="ja" />
        <meta charSet="UTF-8"/>
        <title>タイトル</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="説明文"/>
      </Helmet>
      <body>
      {children}
      </body>
    </>
  )
}