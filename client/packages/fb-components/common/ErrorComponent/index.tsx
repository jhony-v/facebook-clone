import React, { Component } from 'react';

type ErrorComponentState = {
  error : boolean
};
type ErrorComponentProps = {
  children ?: React.ReactNode
};

export default class ErrorComponent extends Component<ErrorComponentProps, ErrorComponentState> {
  state = {
    error: false,
  };

  componentDidCatch() {
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
