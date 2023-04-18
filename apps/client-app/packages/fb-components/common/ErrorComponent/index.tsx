import React, { Component } from "react";

type ErrorComponentState = {
  error: boolean;
};
type ErrorComponentProps = {
  children?: React.ReactNode;
};

export default class ErrorComponent extends Component<
  ErrorComponentProps,
  ErrorComponentState
> {
  state = {
    error: false
  };

  componentDidCatch() {
    this.setState({
      error: true
    });
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    if (error) return <p>Error</p>;
    return children;
  }
}
