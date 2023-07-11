import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import { visit } from "unist-util-visit";
import { h } from "hastscript";
import ImageCarousel from "./ImageCarousel";

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

const MarkdownContent = (props) => {
  const { markdownPath, images } = props;

  const [markdown, setMarkdown] = useState("");
  useEffect(() => {
    const abortController = new AbortController();

    fetch(markdownPath, { signal: abortController.signal })
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
      .catch(() => {
        setMarkdown("");
      });

    return () => {
      abortController.abort();
    };
  });

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
