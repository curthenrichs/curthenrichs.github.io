import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Typography } from "antd";

const { Text } = Typography;

const MarkdownContent = (props) => {
  const { markdownPath } = props;

  const renderers = {
    link: (props) => (
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    )
  };

  const [markdown, setMarkdown] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(markdownPath, { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load content (${res.status})`);
        }
        return res.text();
      })
      .then((text) => {
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
    return <Text type="danger">Failed to load content.</Text>;
  }

  return <ReactMarkdown source={markdown} renderers={renderers} />;
};

export default MarkdownContent;
