import React from "react";
import Head from "next/head";

interface SEOMetaTagProps {
  mainTitle?: string;
  type?: string;
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEOMetaTag = ({
  mainTitle,
  type,
  title,
  description,
  image,
  url
}: SEOMetaTagProps) => (
  <Head>
    <title>{mainTitle}</title>
    {description && <meta name="description" content={description} />}
    {type && <meta name="og:type" content={type} />}
    {title && <meta name="og:title" content={title} />}
    {description && <meta name="og:description" content={description} />}
    {image && <meta name="og:image" content={image} />}
    {url && <meta name="og:url" content={url} />}
    {url && <link rel="canonical" href={url} />}
    <link rel="shortcut icon" href="/facebook-logo.png" />
  </Head>
);

export default SEOMetaTag;
