import React from 'react';
import Head from "next/head";

export default function HeadInfo({ title, keyword, contents }) {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword}/>
      <meta content={contents}/>
    </Head>
  );
}

HeadInfo.defaultProps = {
  title: "Kingsubin's Blog",
  keyword: "Kingsubin's Blog",
  contents: "Kingsubin's Blog contents",
}