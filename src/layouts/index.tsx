import React, {FC, ReactNode} from 'react'

type LayoutType = {
  children: ReactNode
}

export const Layout: FC<LayoutType> = ({children}) => {
  return (
    <>
      <html lang="ja">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>タイトル</title>
      </head>
      <body>
      {children}
      </body>
      </html>
    </>
  )
}