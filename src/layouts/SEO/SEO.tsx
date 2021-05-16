import React from "react";
import {Helmet} from "react-helmet";

type SEOPropsType = {
  children?: React.ReactNode
}

export const SEO: React.VFC<SEOPropsType> = (
  {
    children
  }) => {
  return (
    <Helmet>
      <html lang="ja"/>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="format-detection" content="telephone=no"/>
      <title>タイトル</title>
      <meta name="description" content="説明文"/>
      <meta property="og:type" content="website"/>
      <meta property="og:locale" content="ja"/>
      <meta property="og:url" content="{{ SEO::url().Page::path() }}"/>
      <meta property="og:site_name" content="{{ SEO::name() }}"/>
      <meta property="og:title" content="{{ SEO::title() }}"/>
      <meta property="og:description" content="{{ SEO::description() }}"/>
      <meta property="og:image" content="{{ SEO::image() }}"/>
      <script src="/assets/script/main.js" async={true}/>
      <link rel="stylesheet" href="/assets/styles/style.css"/>
      {children}
    </Helmet>
  )
}