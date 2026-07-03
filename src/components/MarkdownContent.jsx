import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Typography } from "antd";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import { visit } from "unist-util-visit";
import { h } from "hastscript";
import ImageCarousel from "./ImageCarousel";

const { Text } = Typography;

const onDirective = (node) => {
  let data = node.data || (node.data = {});
  let hast = h(node.name, node.attributes);
  node.data = {
    ...data,
    hName: hast.tagName,
    hProperties: hast.properties
  };

  console.log(node);
};

const transform = (tree) => {
  visit(tree, ["textDirective", "leafDirective", "containerDirective"], onDirective);
};

const htmlDirective = () => {
  return transform;
};

// Prerender markdown cache: scripts/prerender.js snapshots this map (fetched
// markdown text keyed by the same URL used to fetch it) into each captured
// page's <head>. On hydration the first render can then produce the markdown
// synchronously, matching the snapshot's already-rendered content instead of
// racing an empty first render against it (which aborts hydration). The map
// is intentionally never deleted after mount: client-side navigation simply
// reuses entries (harmless; saves a refetch), and unknown keys fall through
// to the normal fetch path.
const readPrerenderMdCache = (src) => {
  if (typeof window === "undefined" || !window.__PRERENDER_MD__) {
    return undefined;
  }
  return window.__PRERENDER_MD__[src];
};

const recordPrerenderMdCache = (src, text) => {
  if (typeof window === "undefined") {
    return;
  }
  window.__PRERENDER_MD__ = window.__PRERENDER_MD__ || {};
  window.__PRERENDER_MD__[src] = text;
};

const MarkdownContent = (props) => {
  const { markdownPath, images } = props;

  const cached = readPrerenderMdCache(markdownPath);
  const [markdown, setMarkdown] = useState(cached !== undefined ? cached : "");
  const [error, setError] = useState(false);

  useEffect(() => {
    const cachedText = readPrerenderMdCache(markdownPath);
    if (cachedText !== undefined) {
      // Covers markdownPath changing after mount to an already-cached key;
      // on first mount this is a same-value set (React bails out).
      setMarkdown(cachedText);
      setError(false);
      return undefined;
    }

    const abortController = new AbortController();

    fetch(markdownPath, { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load content (${res.status})`);
        }
        return res.text();
      })
      .then((text) => {
        recordPrerenderMdCache(markdownPath, text);
        setMarkdown(text);
        setError(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setMarkdown("");
          setError(true);
        }
      });

    return () => {
      abortController.abort();
    };
  }, [markdownPath]);

  if (error) {
    return <Text type="danger">Well, this is awkward. The content wandered off and we can&apos;t find it.</Text>;
  }

  const components = {
    image: (props) => {

      const img = images.filter((obj) => (obj.id === props.id));
      if (img.length < 1) {
        return (<></>);
      }

      return (
        <ImageCarousel
          options={img}
        />
      );
    },
    a: (props) => {
      // Update target / metadata path info
      return (
        <a href={props.href} target="_blank" rel="noopener noreferrer">
          {props.children}
        </a>
      );
    },
    p: (props) => {
      // No <p> allowed since we are nesting inner divs / html
      return (
        <div style={{paddingBottom: "1em"}}>
          {props.children}
        </div>
      );
    }
  };

  return (
    <ReactMarkdown components={components} remarkPlugins={[remarkGfm, remarkDirective, htmlDirective]}>
      {markdown}
    </ReactMarkdown>
  );
};

export default MarkdownContent;
