import React, { Component } from "react";
import { Typography } from "antd";

const { Text } = Typography;

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return <Text type="danger">Oops, something broke. Probably not your fault... probably.</Text>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
