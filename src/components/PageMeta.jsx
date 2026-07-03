import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_ORIGIN = "https://curthenrichs.github.io";
const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/static/img/bio-main.jpg`;

const PageMeta = ({ title, description, path, ogType, robots, ogImage }) => {
  const canonical = `${SITE_ORIGIN}${path}`;
  const image = ogImage || DEFAULT_OG_IMAGE;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {robots ? <meta name="robots" content={robots} /> : null}
      <meta property="og:type" content={ogType || "website"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Portrait of Curt Henrichs" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@curt_henrichs" />
    </Helmet>
  );
};

export default PageMeta;
