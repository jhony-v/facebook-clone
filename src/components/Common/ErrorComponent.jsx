import React, { Component } from "react";

export default class ErrorComponent extends Component {
  state = {
    error: false,
  };

  static getDeriveStateFromError() {
    this.setState({
      error : true
    })
  }

  componentDidCatch(error,errorInfo) {
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <p>Error</p>;
    }
    return this.props.children;
  }
}
